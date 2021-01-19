"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseHandler = void 0;
const configuration_1 = require("../config/configuration");
const mongoClient = require('mongodb').MongoClient;
let mongoConnection = null;
class MongoConnection {
    constructor() {
        this._connection = null;
        this._activeClients = null;
        this._connection = null;
        this._activeClients = 0;
    }
    static initialize() {
        return __awaiter(this, void 0, void 0, function* () {
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
                }
                else {
                    resolve();
                }
            });
        });
    }
    static shutdown() {
        return __awaiter(this, void 0, void 0, function* () {
            if (mongoConnection) {
                mongoConnection.close();
                mongoConnection = null;
            }
        });
    }
    open() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._connection) {
                this._activeClients++;
                return Promise.resolve(this._connection.db(configuration_1.default.mongo.dbName));
            }
            return new Promise((resolve, reject) => {
                this._tryConnect().then((connection) => {
                    // just in case of a race condition when a previous request successfully connected while this request was waiting
                    if (this._connection) {
                        connection.close(); //just close the new connection and return the previous one itself
                    }
                    else {
                        this._connection = connection;
                    }
                    this._activeClients++;
                    console.log(`New connection request - ${this._activeClients} active clients`);
                    resolve(this._connection.db(configuration_1.default.mongo.dbName));
                }).catch(error => {
                    console.log(error);
                    reject(error);
                });
            });
        });
    }
    _tryConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let count = 0;
                function connect() {
                    let poolSize = Number(configuration_1.default.mongo.poolSize);
                    if (!poolSize || isNaN(poolSize)) {
                        poolSize = 5;
                    }
                    mongoClient.connect(configuration_1.default.mongo.dburl, { poolSize: poolSize, useUnifiedTopology: true }).then(connection => {
                        resolve(connection);
                    }).catch(error => {
                        if (count++ < 5) { // retry 5 times
                            console.warn(`Connection to MongoDB failed. Retry attempt`, count);
                            connect();
                        }
                        else {
                            console.log(error);
                            reject(error);
                        }
                    });
                }
                connect();
            });
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            this._activeClients--;
            console.log(`Connection close request - ${this._activeClients} active clients`);
            if (this._activeClients <= 0) { // close the connection of all clients have closed
                if (this._connection) {
                    this._connection.close();
                    this._connection = null;
                }
                else {
                    console.log(`Connection was already closed`);
                }
            }
        });
    }
    shutdown() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._connection) {
                this._connection.close();
                this._connection = null;
                console.log(`closing active connection`);
            }
            this._activeClients = 0;
            console.log(`${this._activeClients} active clients`);
        });
    }
    reset() {
        // close and reopen the connection
        console.log(`reset connection request`);
        this.shutdown();
        this.open();
    }
}
class DatabaseHandler {
    constructor(collectionName) {
        this.collection = null;
        this.collection = collectionName;
    }
    static initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            return MongoConnection.initialize();
        });
    }
    static shutdown() {
        return __awaiter(this, void 0, void 0, function* () {
            if (mongoConnection) {
                mongoConnection.shutdown();
                mongoConnection = null;
            }
        });
    }
    static openConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            return mongoConnection.open();
        });
    }
    static closeConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            mongoConnection.close();
        });
    }
    query(query, sort, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.find(query, sort, fields);
        });
    }
    queryOne(query, sort, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                mongoConnection.open().then((db) => {
                    console.log(this.collection);
                    let queryStr;
                    if (fields) {
                        queryStr = db.collection(this.collection).find(query).project(fields);
                    }
                    else {
                        queryStr = db.collection(this.collection).find(query);
                    }
                    if (sort) {
                        queryStr = queryStr.sort(sort);
                    }
                    queryStr.limit(1).toArray((err, result) => {
                        if (err) {
                            console.log(err);
                            reject(err);
                        }
                        else {
                            resolve(result);
                        }
                        mongoConnection.close();
                    });
                }).catch((err) => {
                    console.log(err, `Database connection error `);
                    reject(err);
                });
            });
        });
    }
    remove(query) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    deleteOne(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                mongoConnection.open().then((db) => {
                    console.log(this.collection, query);
                    db.collection(this.collection).deleteOne(query, function (err, result) {
                        if (err) {
                            console.log(err);
                            reject(err);
                        }
                        else {
                            resolve(result);
                        }
                        mongoConnection.close();
                    });
                }).catch((err) => {
                    console.log(err, 'Databse connection error');
                    reject(err);
                });
            });
        });
    }
    findOne(query, sort, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.queryOne(query, sort, fields).then((result) => {
                if (result && result.length) {
                    return result[0];
                }
                return;
            });
        });
    }
    find(filter, sort, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                mongoConnection.open().then((db) => {
                    let query;
                    if (fields) {
                        query = db.collection(this.collection).find(filter).project(fields);
                    }
                    else {
                        query = db.collection(this.collection).find(filter);
                    }
                    if (sort) {
                        query = query.sort(sort);
                    }
                    query.toArray((err, result) => {
                        if (err) {
                            console.log(err, 'Failed to find/equery documents');
                            reject(err);
                        }
                        else {
                            resolve(result);
                        }
                        mongoConnection.close();
                    });
                }).catch((err) => {
                    console.log(err, 'Database connection error');
                    reject(err);
                });
            });
        });
    }
    findPage(filter, sort, fields, skip, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                mongoConnection.open().then((db) => {
                    let totalCount = 0, cursor;
                    if (fields) {
                        cursor = db.collection(this.collection).find(filter).project(fields);
                    }
                    else {
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
        });
    }
    updateOne(filter, document, initialData, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                mongoConnection.open().then((db) => {
                    const data = {
                        $set: document
                    };
                    if (initialData && Object.keys(initialData).length) {
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
        });
    }
    replaceOne(filter, document, options) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    updateMany(filter, update, options) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    insertOne(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                mongoConnection.open().then((db) => {
                    db.collection(this.collection).insertOne(data, function (err, result) {
                        if (err) {
                            console.log(err, 'Failed to insert document.');
                            reject(err);
                        }
                        else {
                            resolve(result);
                        }
                        mongoConnection.close();
                    });
                }).catch((err) => {
                    console.log(err, 'Database connection error');
                    reject(err);
                });
            });
        });
    }
    insert(items) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                mongoConnection.open().then(dbConn => {
                    console.log(this.collection);
                    dbConn.collection(this.collection).insert(items, (err, result) => {
                        if (err) {
                            console.log(err, 'Failed to insert documents');
                            reject(err);
                        }
                        else {
                            resolve(result);
                        }
                        mongoConnection.close();
                    });
                }).catch(err => {
                    console.log('Database connection error');
                    reject(err);
                });
            });
        });
    }
    aggregate(pipeline) {
        return __awaiter(this, void 0, void 0, function* () {
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
                        }
                        else {
                            resolve(result);
                        }
                        mongoConnection.close();
                    });
                }).catch((err) => {
                    console.log('Database connection error');
                    reject(err);
                });
            });
        });
    }
    distinct(filter, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (!fields || !fields.length) {
                    return reject("filters parameter must be an array with at least one field");
                }
                mongoConnection.open().then((db) => {
                    const pipeline = [];
                    if (filter) {
                        pipeline.push({ $match: filter });
                    }
                    const groupBy = {};
                    fields.forEach(field => {
                        groupBy[field] = `$${field}`;
                    });
                    pipeline.push({ $group: { _id: groupBy } });
                    pipeline.push({ $replaceRoot: { newRoot: "$_id" } });
                    let query = db.collection(this.collection).aggregate(pipeline);
                    query.toArray((err, result) => {
                        if (err) {
                            console.log(err, 'Failed to find/query documents');
                            reject(err);
                        }
                        else {
                            resolve(result);
                        }
                        mongoConnection.close();
                    });
                }).catch((err) => {
                    console.log('Database connection error');
                    reject(err);
                });
            });
        });
    }
    bulkWrite(items) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                mongoConnection.open().then(dbConn => {
                    console.log(this.collection);
                    dbConn.collection(this.collection).bulkWrite(items, (err, result) => {
                        if (err) {
                            console.log('bulk Write operation Failed');
                            reject(err);
                        }
                        else {
                            resolve(result);
                        }
                        mongoConnection.close();
                    });
                }).catch(err => {
                    console.log('Database connection error');
                    reject(err);
                });
            });
        });
    }
    count(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                mongoConnection.open().then((db) => {
                    let query = db.collection(this.collection).find(filter).count();
                    db.collection(this.collection).countDocuments(filter, (err, result) => {
                        if (err) {
                            console.log(err, 'Failed to find/query documents');
                            reject(err);
                        }
                        else {
                            resolve(result);
                        }
                        mongoConnection.close();
                    });
                }).catch((err) => {
                    console.log(err, 'Database connection error');
                    reject(err);
                });
            });
        });
    }
}
exports.DatabaseHandler = DatabaseHandler;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tb25nby9tb25nb0Nvbm5lY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQWdEO0FBQ2hELE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLENBQUM7QUFDbkQsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDO0FBRTNCLE1BQU0sZUFBZTtJQUtqQjtRQUhPLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBR3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxNQUFNLENBQU8sVUFBVTs7WUFDdEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLGVBQWUsRUFBRTtvQkFDaEIsZUFBZSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7b0JBQ3hDLG9CQUFvQjtvQkFDcEIsT0FBTyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTt3QkFDcEMsT0FBTyxFQUFFLENBQUM7b0JBQ2QsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbEIsQ0FBQyxDQUFDLENBQUM7aUJBQ047cUJBQU07b0JBQ0gsT0FBTyxFQUFFLENBQUM7aUJBQ2I7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7S0FBQTtJQUVELE1BQU0sQ0FBTyxRQUFROztZQUNqQixJQUFJLGVBQWUsRUFBRTtnQkFDbkIsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN4QixlQUFlLEdBQUcsSUFBSSxDQUFD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QkFDakMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNoRSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFO3dCQUNwRSxJQUFJLEdBQUcsRUFBRTs0QkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDOzRCQUNuRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ2I7NkJBQU07NEJBQ0wsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3lCQUNqQjt3QkFDRCxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzFCLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLDJCQUEyQixDQUFDLENBQUM7b0JBQzlDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0NBQ0Y7QUE1WkgsMENBNFpHIiwiZmlsZSI6Im1vbmdvL21vbmdvQ29ubmVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4uL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XHJcbmNvbnN0IG1vbmdvQ2xpZW50ID0gcmVxdWlyZSgnbW9uZ29kYicpLk1vbmdvQ2xpZW50O1xyXG5sZXQgbW9uZ29Db25uZWN0aW9uID0gbnVsbDtcclxuXHJcbmNsYXNzIE1vbmdvQ29ubmVjdGlvbiB7XHJcblxyXG4gICAgcHVibGljIF9jb25uZWN0aW9uID0gbnVsbDtcclxuICAgIHB1YmxpYyBfYWN0aXZlQ2xpZW50cyA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlQ2xpZW50cyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGluaXRpYWxpemUoKSB7XHJcbiAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIGlmICghbW9uZ29Db25uZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBtb25nb0Nvbm5lY3Rpb24gPSBuZXcgTW9uZ29Db25uZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAvL2tlZXAgb25lIHBvb2wgb3BlblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbmdvQ29ubmVjdGlvbi5vcGVuKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgc2h1dGRvd24oKSB7XHJcbiAgICAgICAgaWYgKG1vbmdvQ29ubmVjdGlvbikge1xyXG4gICAgICAgICAgbW9uZ29Db25uZWN0aW9uLmNsb3NlKCk7XHJcbiAgICAgICAgICBtb25nb0Nvbm5lY3Rpb24gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvcGVuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uKSB7XHJcbiAgICAgICAgICB0aGlzLl9hY3RpdmVDbGllbnRzKys7XHJcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2Nvbm5lY3Rpb24uZGIoY29uc3RhbnRzLm1vbmdvLmRiTmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBcclxuICAgICAgICAgIHRoaXMuX3RyeUNvbm5lY3QoKS50aGVuKChjb25uZWN0aW9uOiBhbnkpID0+IHtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBqdXN0IGluIGNhc2Ugb2YgYSByYWNlIGNvbmRpdGlvbiB3aGVuIGEgcHJldmlvdXMgcmVxdWVzdCBzdWNjZXNzZnVsbHkgY29ubmVjdGVkIHdoaWxlIHRoaXMgcmVxdWVzdCB3YXMgd2FpdGluZ1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvbikge1xyXG4gICAgICAgICAgICAgIGNvbm5lY3Rpb24uY2xvc2UoKTsgLy9qdXN0IGNsb3NlIHRoZSBuZXcgY29ubmVjdGlvbiBhbmQgcmV0dXJuIHRoZSBwcmV2aW91cyBvbmUgaXRzZWxmXHJcbiAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uID0gY29ubmVjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9hY3RpdmVDbGllbnRzKys7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBOZXcgY29ubmVjdGlvbiByZXF1ZXN0IC0gJHt0aGlzLl9hY3RpdmVDbGllbnRzfSBhY3RpdmUgY2xpZW50c2ApO1xyXG4gICAgICAgICAgICByZXNvbHZlKHRoaXMuX2Nvbm5lY3Rpb24uZGIoY29uc3RhbnRzLm1vbmdvLmRiTmFtZSkpO1xyXG4gICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBfdHJ5Q29ubmVjdCgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBcclxuICAgICAgICAgIGZ1bmN0aW9uIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgICAgIGxldCBwb29sU2l6ZSA9IE51bWJlcihjb25zdGFudHMubW9uZ28ucG9vbFNpemUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGlmICghcG9vbFNpemUgfHwgaXNOYU4ocG9vbFNpemUpKSB7XHJcbiAgICAgICAgICAgICAgcG9vbFNpemUgPSA1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgbW9uZ29DbGllbnQuY29ubmVjdChjb25zdGFudHMubW9uZ28uZGJ1cmwsIHsgcG9vbFNpemU6IHBvb2xTaXplLCB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUgfSkudGhlbihjb25uZWN0aW9uID0+IHtcclxuICAgICAgICAgICAgICByZXNvbHZlKGNvbm5lY3Rpb24pO1xyXG4gICAgXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgIFxyXG4gICAgICAgICAgICAgIGlmIChjb3VudCsrIDwgNSkgeyAvLyByZXRyeSA1IHRpbWVzXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYENvbm5lY3Rpb24gdG8gTW9uZ29EQiBmYWlsZWQuIFJldHJ5IGF0dGVtcHRgLCBjb3VudCk7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgY29ubmVjdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhc3luYyBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLl9hY3RpdmVDbGllbnRzLS07XHJcbiAgICAgICAgY29uc29sZS5sb2coYENvbm5lY3Rpb24gY2xvc2UgcmVxdWVzdCAtICR7dGhpcy5fYWN0aXZlQ2xpZW50c30gYWN0aXZlIGNsaWVudHNgKTtcclxuICAgICAgICBpZiAodGhpcy5fYWN0aXZlQ2xpZW50cyA8PSAwKSB7IC8vIGNsb3NlIHRoZSBjb25uZWN0aW9uIG9mIGFsbCBjbGllbnRzIGhhdmUgY2xvc2VkXHJcbiAgICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3Rpb24gPSBudWxsO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYENvbm5lY3Rpb24gd2FzIGFscmVhZHkgY2xvc2VkYCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgYXN5bmMgc2h1dGRvd24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb24pIHtcclxuICAgICAgICAgIHRoaXMuX2Nvbm5lY3Rpb24uY2xvc2UoKTtcclxuICAgICAgICAgIHRoaXMuX2Nvbm5lY3Rpb24gPSBudWxsO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYGNsb3NpbmcgYWN0aXZlIGNvbm5lY3Rpb25gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlQ2xpZW50cyA9IDA7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5fYWN0aXZlQ2xpZW50c30gYWN0aXZlIGNsaWVudHNgKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIHJlc2V0KCkge1xyXG4gICAgICAgIC8vIGNsb3NlIGFuZCByZW9wZW4gdGhlIGNvbm5lY3Rpb25cclxuICAgICAgICBjb25zb2xlLmxvZyhgcmVzZXQgY29ubmVjdGlvbiByZXF1ZXN0YCk7XHJcbiAgICAgICAgdGhpcy5zaHV0ZG93bigpO1xyXG4gICAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YWJhc2VIYW5kbGVyIHtcclxuICAgIHB1YmxpYyBjb2xsZWN0aW9uOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbGxlY3Rpb25OYW1lKSB7XHJcbiAgICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb25OYW1lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc3RhdGljIGFzeW5jIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1vbmdvQ29ubmVjdGlvbi5pbml0aWFsaXplKCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBzdGF0aWMgYXN5bmMgc2h1dGRvd24oKSB7XHJcbiAgICAgIGlmIChtb25nb0Nvbm5lY3Rpb24pIHtcclxuICAgICAgICBtb25nb0Nvbm5lY3Rpb24uc2h1dGRvd24oKTtcclxuICAgICAgICBtb25nb0Nvbm5lY3Rpb24gPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBzdGF0aWMgYXN5bmMgb3BlbkNvbm5lY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBtb25nb0Nvbm5lY3Rpb24ub3BlbigpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc3RhdGljIGFzeW5jIGNsb3NlQ29ubmVjdGlvbigpIHtcclxuICAgICAgbW9uZ29Db25uZWN0aW9uLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBhc3luYyBxdWVyeShxdWVyeSwgc29ydCwgZmllbGRzKSB7XHJcbiAgXHJcbiAgICAgIHJldHVybiB0aGlzLmZpbmQocXVlcnksIHNvcnQsIGZpZWxkcyk7XHJcbiAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICBhc3luYyBxdWVyeU9uZShxdWVyeSwgc29ydCwgZmllbGRzKSB7XHJcbiAgXHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgXHJcbiAgICAgICAgbW9uZ29Db25uZWN0aW9uLm9wZW4oKS50aGVuKChkYikgPT4ge1xyXG4gIFxyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5jb2xsZWN0aW9uKTtcclxuICBcclxuICAgICAgICAgIGxldCBxdWVyeVN0cjtcclxuICAgICAgICAgIGlmIChmaWVsZHMpIHtcclxuICAgICAgICAgICAgcXVlcnlTdHIgPSBkYi5jb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbikuZmluZChxdWVyeSkucHJvamVjdChmaWVsZHMpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcXVlcnlTdHIgPSBkYi5jb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbikuZmluZChxdWVyeSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc29ydCkge1xyXG4gICAgICAgICAgICBxdWVyeVN0ciA9IHF1ZXJ5U3RyLnNvcnQoc29ydCk7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICBxdWVyeVN0ci5saW1pdCgxKS50b0FycmF5KChlcnIsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbW9uZ29Db25uZWN0aW9uLmNsb3NlKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIsIGBEYXRhYmFzZSBjb25uZWN0aW9uIGVycm9yIGApO1xyXG4gICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYXN5bmMgcmVtb3ZlKHF1ZXJ5KSB7XHJcbiAgXHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgXHJcbiAgICAgICAgbW9uZ29Db25uZWN0aW9uLm9wZW4oKS50aGVuKChkYkNvbm4pID0+IHtcclxuICBcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29sbGVjdGlvbiwgcXVlcnkpO1xyXG4gICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgICBkYkNvbm4uY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24pLmRlbGV0ZU1hbnkocXVlcnkpLnRoZW4oY291bnQgPT4ge1xyXG4gIFxyXG4gICAgICAgICAgICBtb25nb0Nvbm5lY3Rpb24uY2xvc2UoKTtcclxuICAgICAgICAgICAgcmVzb2x2ZShjb3VudCk7XHJcbiAgXHJcbiAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBtb25nb0Nvbm5lY3Rpb24uY2xvc2UoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgXHJcbiAgICAgICAgICB9KTtcclxuICBcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIsICdEYXRhYmFzZSBjb25uZWN0aW9uIGVycm9yJyk7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBhc3luYyBkZWxldGVPbmUgKHF1ZXJ5KSB7XHJcbiAgICAgIHJldHVybiAgbmV3IFByb21pc2UgKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICBcclxuICAgICAgICBtb25nb0Nvbm5lY3Rpb24ub3BlbigpLnRoZW4gKChkYikgPT4ge1xyXG4gIFxyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5jb2xsZWN0aW9uLCBxdWVyeSk7XHJcbiAgXHJcbiAgICAgICAgICBkYi5jb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbikuZGVsZXRlT25lKHF1ZXJ5LCBmdW5jdGlvbihlcnIsIHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbW9uZ29Db25uZWN0aW9uLmNsb3NlKCk7XHJcbiAgICAgICAgICB9KTtcclxuICBcclxuICAgICAgICB9KS5jYXRjaCAoKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLCAnRGF0YWJzZSBjb25uZWN0aW9uIGVycm9yJyk7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBhc3luYyBmaW5kT25lKHF1ZXJ5LCBzb3J0LCBmaWVsZHMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucXVlcnlPbmUocXVlcnksIHNvcnQsIGZpZWxkcykudGhlbigocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICBcclxuICAgIGFzeW5jIGZpbmQoZmlsdGVyLCBzb3J0LCBmaWVsZHMpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBtb25nb0Nvbm5lY3Rpb24ub3BlbigpLnRoZW4oKGRiKSA9PiB7XHJcbiAgICAgICAgICBsZXQgcXVlcnk7XHJcbiAgICAgICAgICBpZiAoZmllbGRzKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5ID0gZGIuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24pLmZpbmQoZmlsdGVyKS5wcm9qZWN0KGZpZWxkcyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBxdWVyeSA9IGRiLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uKS5maW5kKGZpbHRlcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc29ydCkge1xyXG4gICAgICAgICAgICBxdWVyeSA9IHF1ZXJ5LnNvcnQoc29ydCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBxdWVyeS50b0FycmF5KChlcnIsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLCAnRmFpbGVkIHRvIGZpbmQvZXF1ZXJ5IGRvY3VtZW50cycpO1xyXG4gICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtb25nb0Nvbm5lY3Rpb24uY2xvc2UoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVyciwgJ0RhdGFiYXNlIGNvbm5lY3Rpb24gZXJyb3InKTtcclxuICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICBcclxuICAgIGFzeW5jIGZpbmRQYWdlKGZpbHRlciwgc29ydCwgZmllbGRzLCBza2lwLCBsaW1pdCkge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIG1vbmdvQ29ubmVjdGlvbi5vcGVuKCkudGhlbigoZGIpID0+IHtcclxuICAgICAgICAgIGxldCB0b3RhbENvdW50ID0gMCwgY3Vyc29yO1xyXG4gIFxyXG4gICAgICAgICAgaWYgKGZpZWxkcykge1xyXG4gICAgICAgICAgICBjdXJzb3IgPSBkYi5jb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbikuZmluZChmaWx0ZXIpLnByb2plY3QoZmllbGRzKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGN1cnNvciA9IGRiLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uKS5maW5kKGZpbHRlcik7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICBpZiAoc2tpcCkge1xyXG4gICAgICAgICAgICAgIGN1cnNvciA9IGN1cnNvci5za2lwKHNraXApO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgaWYgKGxpbWl0KSB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yID0gY3Vyc29yLmxpbWl0KGxpbWl0KTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIGlmIChzb3J0KSB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yID0gY3Vyc29yLnNvcnQoc29ydCk7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICBjdXJzb3IuY291bnQoKS50aGVuKGNvdW50ID0+IHtcclxuICAgICAgICAgICAgdG90YWxDb3VudCA9IGNvdW50O1xyXG4gICAgICAgICAgICByZXR1cm4gY3Vyc29yLnRvQXJyYXkoKTtcclxuICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7IGRvY3VtZW50czogcmVzdWx0LCB0b3RhbENvdW50OiB0b3RhbENvdW50IH0pO1xyXG4gICAgICAgICAgICBtb25nb0Nvbm5lY3Rpb24uY2xvc2UoKTtcclxuICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyciwgJ0ZhaWxlZCB0byBmaW5kL2VxdWVyeSBkb2N1bWVudHMnKTtcclxuICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIG1vbmdvQ29ubmVjdGlvbi5jbG9zZSgpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLCAnRmFpbGVkIHRvIGZpbmQvZXF1ZXJ5IGRvY3VtZW50cycpO1xyXG4gICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYXN5bmMgdXBkYXRlT25lKGZpbHRlciwgZG9jdW1lbnQsIGluaXRpYWxEYXRhLCBvcHRpb25zKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgbW9uZ29Db25uZWN0aW9uLm9wZW4oKS50aGVuKChkYikgPT4ge1xyXG4gIFxyXG4gICAgICAgICAgY29uc3QgZGF0YTogYW55ID0ge1xyXG4gICAgICAgICAgICAkc2V0OiBkb2N1bWVudFxyXG4gICAgICAgICAgfTtcclxuICBcclxuICAgICAgICAgIGlmIChpbml0aWFsRGF0YSAmJiBPYmplY3Qua2V5cyhpbml0aWFsRGF0YSkubGVuZ3RoICkge1xyXG4gICAgICAgICAgICBkYXRhLiRzZXRPbkluc2VydCA9IGluaXRpYWxEYXRhO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24pLmZpbmRPbmVBbmRVcGRhdGUoZmlsdGVyLCBkYXRhLCBvcHRpb25zKS50aGVuKGRhdGEgPT4ge1xyXG4gIFxyXG4gICAgICAgICAgICByZXNvbHZlKGRhdGEudmFsdWUpO1xyXG4gICAgICAgICAgICBtb25nb0Nvbm5lY3Rpb24uY2xvc2UoKTtcclxuICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIG1vbmdvQ29ubmVjdGlvbi5jbG9zZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVyciwgJ0RhdGFiYXNlIGNvbm5lY3Rpb24gZXJyb3InKTtcclxuICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICBcclxuICAgIGFzeW5jIHJlcGxhY2VPbmUoZmlsdGVyLCBkb2N1bWVudCwgb3B0aW9ucykge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIG1vbmdvQ29ubmVjdGlvbi5vcGVuKCkudGhlbigoZGIpID0+IHtcclxuICBcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uKS5maW5kT25lQW5kVXBkYXRlKGZpbHRlciwgZG9jdW1lbnQsIG9wdGlvbnMpLnRoZW4oZGF0YSA9PiB7XHJcbiAgXHJcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YS52YWx1ZSk7XHJcbiAgICAgICAgICAgIG1vbmdvQ29ubmVjdGlvbi5jbG9zZSgpO1xyXG4gICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgbW9uZ29Db25uZWN0aW9uLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLCAnRGF0YWJhc2UgY29ubmVjdGlvbiBlcnJvcicpO1xyXG4gICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYXN5bmMgdXBkYXRlTWFueShmaWx0ZXIsIHVwZGF0ZSwgb3B0aW9ucykge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIG1vbmdvQ29ubmVjdGlvbi5vcGVuKCkudGhlbigoZGIpID0+IHtcclxuICBcclxuICAgICAgICAgIGRiLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uKS51cGRhdGVNYW55KGZpbHRlciwgdXBkYXRlLCBvcHRpb25zKS50aGVuKGRhdGEgPT4ge1xyXG4gIFxyXG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICBtb25nb0Nvbm5lY3Rpb24uY2xvc2UoKTtcclxuICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIG1vbmdvQ29ubmVjdGlvbi5jbG9zZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVyciwgJ0RhdGFiYXNlIGNvbm5lY3Rpb24gZXJyb3InKTtcclxuICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICBcclxuICAgIGFzeW5jIGluc2VydE9uZShkYXRhKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgbW9uZ29Db25uZWN0aW9uLm9wZW4oKS50aGVuKChkYikgPT4ge1xyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24pLmluc2VydE9uZShkYXRhLCBmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyciwgJ0ZhaWxlZCB0byBpbnNlcnQgZG9jdW1lbnQuJyk7XHJcbiAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1vbmdvQ29ubmVjdGlvbi5jbG9zZSgpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLCAnRGF0YWJhc2UgY29ubmVjdGlvbiBlcnJvcicpO1xyXG4gICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYXN5bmMgaW5zZXJ0KGl0ZW1zKSB7XHJcbiAgXHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgXHJcbiAgICAgICAgbW9uZ29Db25uZWN0aW9uLm9wZW4oKS50aGVuKGRiQ29ubiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29sbGVjdGlvbik7XHJcbiAgXHJcbiAgICAgICAgICBkYkNvbm4uY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24pLmluc2VydChpdGVtcywgKGVyciwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIsICdGYWlsZWQgdG8gaW5zZXJ0IGRvY3VtZW50cycpO1xyXG4gICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtb25nb0Nvbm5lY3Rpb24uY2xvc2UoKTtcclxuICAgICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnRGF0YWJhc2UgY29ubmVjdGlvbiBlcnJvcicpO1xyXG4gICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYXN5bmMgYWdncmVnYXRlKHBpcGVsaW5lKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgaWYgKCFwaXBlbGluZSB8fCAhcGlwZWxpbmUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXCJwaWxlbGluZSBwYXJhbWV0ZXIgbXVzdCBiZSBhbiBhcnJheSB3aXRoIGF0IGxlYXN0IG9uZSBmaWVsZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbW9uZ29Db25uZWN0aW9uLm9wZW4oKS50aGVuKChkYikgPT4ge1xyXG4gICAgICAgICAgbGV0IHF1ZXJ5ID0gZGIuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24pLmFnZ3JlZ2F0ZShwaXBlbGluZSk7XHJcbiAgICAgICAgICBxdWVyeS50b0FycmF5KChlcnIsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLCBgRmFpbGVkIHRvIGZpbmQvcXVlcnkgZG9jdW1lbnRzYCk7XHJcbiAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1vbmdvQ29ubmVjdGlvbi5jbG9zZSgpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRGF0YWJhc2UgY29ubmVjdGlvbiBlcnJvcicpO1xyXG4gICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYXN5bmMgZGlzdGluY3QoZmlsdGVyLCBmaWVsZHMpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBpZiAoIWZpZWxkcyB8fCAhZmllbGRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KFwiZmlsdGVycyBwYXJhbWV0ZXIgbXVzdCBiZSBhbiBhcnJheSB3aXRoIGF0IGxlYXN0IG9uZSBmaWVsZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbW9uZ29Db25uZWN0aW9uLm9wZW4oKS50aGVuKChkYikgPT4ge1xyXG4gIFxyXG4gICAgICAgICAgY29uc3QgcGlwZWxpbmUgPSBbXTtcclxuICAgICAgICAgIGlmIChmaWx0ZXIpIHsgICBcclxuICAgICAgICAgICAgIHBpcGVsaW5lLnB1c2goeyRtYXRjaDogZmlsdGVyIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgZ3JvdXBCeSA9ICB7IH07XHJcbiAgICAgICAgICBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICAgIGdyb3VwQnlbZmllbGRdID0gYCQke2ZpZWxkfWA7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHBpcGVsaW5lLnB1c2goeyRncm91cDogeyBfaWQ6IGdyb3VwQnkgfSB9KTtcclxuICAgICAgICAgIHBpcGVsaW5lLnB1c2goeyRyZXBsYWNlUm9vdDp7bmV3Um9vdDpcIiRfaWRcIn19KTtcclxuICBcclxuICAgICAgICAgIGxldCBxdWVyeSA9IGRiLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uKS5hZ2dyZWdhdGUocGlwZWxpbmUpO1xyXG4gICAgICAgICAgcXVlcnkudG9BcnJheSgoZXJyLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyciwgJ0ZhaWxlZCB0byBmaW5kL3F1ZXJ5IGRvY3VtZW50cycpO1xyXG4gICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtb25nb0Nvbm5lY3Rpb24uY2xvc2UoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdEYXRhYmFzZSBjb25uZWN0aW9uIGVycm9yJyk7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBhc3luYyBidWxrV3JpdGUoaXRlbXMpIHtcclxuICBcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICBcclxuICAgICAgICBtb25nb0Nvbm5lY3Rpb24ub3BlbigpLnRoZW4oZGJDb25uID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29sbGVjdGlvbik7XHJcbiAgXHJcbiAgICAgICAgICBkYkNvbm4uY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24pLmJ1bGtXcml0ZShpdGVtcywgKGVyciwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYnVsayBXcml0ZSBvcGVyYXRpb24gRmFpbGVkJyk7XHJcbiAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1vbmdvQ29ubmVjdGlvbi5jbG9zZSgpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdEYXRhYmFzZSBjb25uZWN0aW9uIGVycm9yJyk7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY291bnQoZmlsdGVyKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgbW9uZ29Db25uZWN0aW9uLm9wZW4oKS50aGVuKChkYikgPT4ge1xyXG4gICAgICAgICAgbGV0IHF1ZXJ5ID0gZGIuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24pLmZpbmQoZmlsdGVyKS5jb3VudCgpO1xyXG4gICAgICAgICAgZGIuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24pLmNvdW50RG9jdW1lbnRzKGZpbHRlciwgKGVyciwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIsICdGYWlsZWQgdG8gZmluZC9xdWVyeSBkb2N1bWVudHMnKTtcclxuICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbW9uZ29Db25uZWN0aW9uLmNsb3NlKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIsICdEYXRhYmFzZSBjb25uZWN0aW9uIGVycm9yJyk7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSJdfQ==
