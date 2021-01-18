"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { env } = process;
exports.default = {
    environment: env.NODE_ENV,
    port: process.env.port || 9400,
    mongo: {
        dburl: 'mongodb://pinpoint:ppl_2020@techmindtree-shard-00-01.4h1c4.mongodb.net:27017,techmindtree-shard-00-00.4h1c4.mongodb.net:27017,techmindtree-shard-00-02.4h1c4.mongodb.net:27017/ppl?authSource=admin&ssl=true',
        // dburl: 'mongodb://localhost:27017',
        dbName: 'ppl',
        poolSize: "5"
    },
    secretKey: 'B2F1E29F5C11591C4596C546BE410EF6'
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25maWcvY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUM7QUFFeEIsa0JBQWU7SUFDYixXQUFXLEVBQUUsR0FBRyxDQUFDLFFBQVE7SUFDekIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUk7SUFDOUIsS0FBSyxFQUFFO1FBQ0wsS0FBSyxFQUFFLDhNQUE4TTtRQUNyTixzQ0FBc0M7UUFDdEMsTUFBTSxFQUFFLEtBQUs7UUFDYixRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsU0FBUyxFQUFFLGtDQUFrQztDQUM5QyxDQUFDIiwiZmlsZSI6ImNvbmZpZy9jb25maWd1cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBlbnYgfSA9IHByb2Nlc3M7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZW52aXJvbm1lbnQ6IGVudi5OT0RFX0VOVixcclxuICBwb3J0OiBwcm9jZXNzLmVudi5wb3J0IHx8IDk0MDAsXHJcbiAgbW9uZ286IHtcclxuICAgIGRidXJsOiAnbW9uZ29kYjovL3BpbnBvaW50OnBwbF8yMDIwQHRlY2htaW5kdHJlZS1zaGFyZC0wMC0wMS40aDFjNC5tb25nb2RiLm5ldDoyNzAxNyx0ZWNobWluZHRyZWUtc2hhcmQtMDAtMDAuNGgxYzQubW9uZ29kYi5uZXQ6MjcwMTcsdGVjaG1pbmR0cmVlLXNoYXJkLTAwLTAyLjRoMWM0Lm1vbmdvZGIubmV0OjI3MDE3L3BwbD9hdXRoU291cmNlPWFkbWluJnNzbD10cnVlJyxcclxuICAgIC8vIGRidXJsOiAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNycsXHJcbiAgICBkYk5hbWU6ICdwcGwnLFxyXG4gICAgcG9vbFNpemU6IFwiNVwiXHJcbiAgfSxcclxuICBzZWNyZXRLZXk6ICdCMkYxRTI5RjVDMTE1OTFDNDU5NkM1NDZCRTQxMEVGNidcclxufTtcclxuIl19
