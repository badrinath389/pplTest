const { env } = process;

export default {
  environment: env.NODE_ENV,
  port: 9400,
  mongo: {
    dburl: 'mongodb://pinpoint:ppl_2020@techmindtree-shard-00-01.4h1c4.mongodb.net:27017,techmindtree-shard-00-00.4h1c4.mongodb.net:27017,techmindtree-shard-00-02.4h1c4.mongodb.net:27017/ppl?authSource=admin&ssl=true',
    // dburl: 'mongodb://localhost:27017',
    dbName: 'ppl',
    poolSize: "5"
  },
  secretKey: 'B2F1E29F5C11591C4596C546BE410EF6'
};
