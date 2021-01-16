import constants from "../config/configuration";
const mongoClient = require('mongodb').MongoClient;
let mongoConnection = null;

class MongoConnection {

    public _connection = null;
    public _activeClients = null;

    constructor() {
        this._connection = null;
        this._activeClients = 0;
    }

    static async initialize() {
     return new Promise((resolve, reject) => {
          if (!mongoConnection) {
                mongoConnection = new MongoConnection();
                //keep one pool open
                return mongoConnection.open().then(() => {
                    resolve();
                }).catch(error => {
                    console.log(error);
                    reject(error);
                });
            } else {
                resolve();
            }
        });
    }

    static async shutdown() {
        if (mongoConnection) {
          mongoConnection.close();
          mongoConnection = null;
        }
    }

    async open() {
        if (this._connection) {
          this._activeClients++;
          return Promise.resolve(this._connection.db(constants.mongo.dbName));
        }
    
        return new Promise((resolve, reject) => {
    
          this._tryConnect().then((connection: any) => {
    
            // just in case of a race condition when a previous request successfully connected while this request was waiting
            if (this._connection) {
              connection.close(); //just close the new connection and return the previous one itself
    
            } else {
              this._connection = connection;
            }
            this._activeClients++;
            console.log(`New connection request - ${this._activeClients} active clients`);
            resolve(this._connection.db(constants.mongo.dbName));
          }).catch(error => {
            console.log(error);
            reject(error);
          });
        });
    }

    async _tryConnect() {

        return new Promise((resolve, reject) => {
          let count = 0;
    
          function connect() {
            let poolSize = Number(constants.mongo.poolSize);
    
            if (!poolSize || isNaN(poolSize)) {
              poolSize = 5;
            }
    
            mongoClient.connect(constants.mongo.dburl, { poolSize: poolSize, useUnifiedTopology: true }).then(connection => {
              resolve(connection);
    
            }).catch(error => {
    
              if (count++ < 5) { // retry 5 times
                console.warn(`Connection to MongoDB failed. Retry attempt`, count);
                connect();
              } else {
                console.log(error);
                reject(error);
              }
            });
          }
    
          connect();
        });
      }

      async close() {
        this._activeClients--;
        console.log(`Connection close request - ${this._activeClients} active clients`);
        if (this._activeClients <= 0) { // close the connection of all clients have closed
          if (this._connection) {
            this._connection.close();
            this._connection = null;
          } else {
            console.log(`Connection was already closed`);
          }
        }
      }
    
      async shutdown() {
        if (this._connection) {
          this._connection.close();
          this._connection = null;
          console.log(`closing active connection`);
        }
        this._activeClients = 0;
        console.log(`${this._activeClients} active clients`);
      }
    
      reset() {
        // close and reopen the connection
        console.log(`reset connection request`);
        this.shutdown();
        this.open();
      }

}

export class DatabaseHandler {
    public collection: any = null;

    constructor(collectionName) {
      this.collection = collectionName;
    }
  
    static async initialize() {
        return MongoConnection.initialize();
    }
  
    static async shutdown() {
      if (mongoConnection) {
        mongoConnection.shutdown();
        mongoConnection = null;
      }
    }
  
    static async openConnection() {
      return mongoConnection.open();
    }
  
    static async closeConnection() {
      mongoConnection.close();
    }
  
    async query(query, sort, fields) {
  
      return this.find(query, sort, fields);
  
    }
  
    async queryOne(query, sort, fields) {
  
      return new Promise((resolve, reject) => {
  
        mongoConnection.open().then((db) => {
  
          console.log(this.collection);
  
          let queryStr;
          if (fields) {
            queryStr = db.collection(this.collection).find(query).project(fields);
          } else {
            queryStr = db.collection(this.collection).find(query);
          }
          if (sort) {
            queryStr = queryStr.sort(sort);
          }
  
          queryStr.limit(1).toArray((err, result) => {
            if (err) {
              console.log(err);
              reject(err);
  
            } else {
              resolve(result);
            }
            mongoConnection.close();
          });
        }).catch((err) => {
          console.log(err, `Database connection error `);
          reject(err);
        });
      });
    }
  
    async remove(query) {
  
      return new Promise((resolve, reject) => {
  
        mongoConnection.open().then((dbConn) => {
  
          console.log(this.collection, query);
          
  
          dbConn.collection(this.collection).deleteMany(query).then(count => {
  
            mongoConnection.close();
            resolve(count);
  
          }).catch(err => {
            mongoConnection.close();
            console.log(err);
            reject(err);
  
          });
  
        }).catch((err) => {
          console.log(err, 'Database connection error');
          reject(err);
        });
      });
    }
  
    async deleteOne (query) {
      return  new Promise ((resolve, reject) => {
  
        mongoConnection.open().then ((db) => {
  
          console.log(this.collection, query);
  
          db.collection(this.collection).deleteOne(query, function(err, result) {
            if (err) {
              console.log(err);
              reject(err);
            } else {
              resolve(result);
            }
            mongoConnection.close();
          });
  
        }).catch ((err) => {
          console.log(err, 'Databse connection error');
          reject(err);
        });
      });
    }
  
    async findOne(query, sort, fields) {
      return this.queryOne(query, sort, fields).then((result: any) => {
        if (result && result.length) {
            return result[0];
        }
        return;
      });
    }
  
    async find(filter, sort, fields) {
      return new Promise((resolve, reject) => {
        mongoConnection.open().then((db) => {
          let query;
          if (fields) {
            query = db.collection(this.collection).find(filter).project(fields);
          } else {
            query = db.collection(this.collection).find(filter);
          }
          if (sort) {
            query = query.sort(sort);
          }
          query.toArray((err, result) => {
            if (err) {
              console.log(err, 'Failed to find/equery documents');
              reject(err);
            } else {
              resolve(result);
            }
            mongoConnection.close();
          });
        }).catch((err) => {
          console.log(err, 'Database connection error');
          reject(err);
        });
      });
    }
  
    async findPage(filter, sort, fields, skip, limit) {
      return new Promise((resolve, reject) => {
        mongoConnection.open().then((db) => {
          let totalCount = 0, cursor;
  
          if (fields) {
            cursor = db.collection(this.collection).find(filter).project(fields);
          } else {
            cursor = db.collection(this.collection).find(filter);
          }
  
          if (skip) {
              cursor = cursor.skip(skip);
          }
  
          if (limit) {
              cursor = cursor.limit(limit);
          }
  
          if (sort) {
              cursor = cursor.sort(sort);
          }
  
          cursor.count().then(count => {
            totalCount = count;
            return cursor.toArray();
          }).then(result => {
            resolve({ documents: result, totalCount: totalCount });
            mongoConnection.close();
          }).catch(err => {
            console.log(err, 'Failed to find/equery documents');
            reject(err);
            mongoConnection.close();
          });
        }).catch((err) => {
          console.log(err, 'Failed to find/equery documents');
          reject(err);
        });
      });
    }
  
    async updateOne(filter, document, initialData, options) {
      return new Promise((resolve, reject) => {
        mongoConnection.open().then((db) => {
  
          const data: any = {
            $set: document
          };
  
          if (initialData && Object.keys(initialData).length ) {
            data.$setOnInsert = initialData;
          }
  
          db.collection(this.collection).findOneAndUpdate(filter, data, options).then(data => {
  
            resolve(data.value);
            mongoConnection.close();
          }).catch(err => {
            mongoConnection.close();
            console.log(err);
            reject(err);
          });
  
        }).catch((err) => {
          console.log(err, 'Database connection error');
          reject(err);
        });
      });
    }
  
    async replaceOne(filter, document, options) {
      return new Promise((resolve, reject) => {
        mongoConnection.open().then((db) => {
  
          db.collection(this.collection).findOneAndUpdate(filter, document, options).then(data => {
  
            resolve(data.value);
            mongoConnection.close();
          }).catch(err => {
            mongoConnection.close();
            console.log(err);
            reject(err);
          });
  
        }).catch((err) => {
          console.log(err, 'Database connection error');
          reject(err);
        });
      });
    }
  
    async updateMany(filter, update, options) {
      return new Promise((resolve, reject) => {
        mongoConnection.open().then((db) => {
  
          db.collection(this.collection).updateMany(filter, update, options).then(data => {
  
            resolve(data);
            mongoConnection.close();
          }).catch(err => {
            mongoConnection.close();
            console.log(err);
            reject(err);
          });
  
        }).catch((err) => {
          console.log(err, 'Database connection error');
          reject(err);
        });
      });
    }
  
    async insertOne(data) {
      return new Promise((resolve, reject) => {
        mongoConnection.open().then((db) => {
          db.collection(this.collection).insertOne(data, function (err, result) {
            if (err) {
              console.log(err, 'Failed to insert document.');
              reject(err);
            } else {
              resolve(result);
            }
            mongoConnection.close();
          });
        }).catch((err) => {
          console.log(err, 'Database connection error');
          reject(err);
        });
      });
    }
  
    async insert(items) {
  
      return new Promise((resolve, reject) => {
  
        mongoConnection.open().then(dbConn => {
            console.log(this.collection);
  
          dbConn.collection(this.collection).insert(items, (err, result) => {
            if (err) {
              console.log(err, 'Failed to insert documents');
              reject(err);
            } else {
              resolve(result);
            }
            mongoConnection.close();
          });
  
        }).catch(err => {
          console.log('Database connection error');
          reject(err);
        });
      });
    }
  
    async aggregate(pipeline) {
      return new Promise((resolve, reject) => {
        if (!pipeline || !pipeline.length) {
            return reject("pileline parameter must be an array with at least one field");
        }
        mongoConnection.open().then((db) => {
          let query = db.collection(this.collection).aggregate(pipeline);
          query.toArray((err, result) => {
            if (err) {
              console.log(err, `Failed to find/query documents`);
              reject(err);
            } else {
              resolve(result);
            }
            mongoConnection.close();
          });
        }).catch((err) => {
            console.log('Database connection error');
          reject(err);
        });
      });
    }
  
    async distinct(filter, fields) {
      return new Promise((resolve, reject) => {
        if (!fields || !fields.length) {
            return reject("filters parameter must be an array with at least one field");
        }
        mongoConnection.open().then((db) => {
  
          const pipeline = [];
          if (filter) {   
             pipeline.push({$match: filter });
          }
          const groupBy =  { };
          fields.forEach(field => {
            groupBy[field] = `$${field}`;
          });
          pipeline.push({$group: { _id: groupBy } });
          pipeline.push({$replaceRoot:{newRoot:"$_id"}});
  
          let query = db.collection(this.collection).aggregate(pipeline);
          query.toArray((err, result) => {
            if (err) {
              console.log(err, 'Failed to find/query documents');
              reject(err);
            } else {
              resolve(result);
            }
            mongoConnection.close();
          });
        }).catch((err) => {
          console.log('Database connection error');
          reject(err);
        });
      });
    }
  
    async bulkWrite(items) {
  
      return new Promise((resolve, reject) => {
  
        mongoConnection.open().then(dbConn => {
          console.log(this.collection);
  
          dbConn.collection(this.collection).bulkWrite(items, (err, result) => {
            if (err) {
              console.log('bulk Write operation Failed');
              reject(err);
            } else {
              resolve(result);
            }
            mongoConnection.close();
          });
  
        }).catch(err => {
          console.log('Database connection error');
          reject(err);
        });
      });
    }

    async count(filter) {
      return new Promise((resolve, reject) => {
        mongoConnection.open().then((db) => {
          let query = db.collection(this.collection).find(filter).count();
          db.collection(this.collection).countDocuments(filter, (err, result) => {
            if (err) {
              console.log(err, 'Failed to find/query documents');
              reject(err);
            } else {
              resolve(result);
            }
            mongoConnection.close();
          });
        }).catch((err) => {
          console.log(err, 'Database connection error');
          reject(err);
        });
      });
    }
  }