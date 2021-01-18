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
const Hapi = require("@hapi/hapi");
const plugins_1 = require("../plugins");
const routes_1 = require("../routes");
const configuration_1 = require("../config/configuration");
const mongoConnection_1 = require("../mongo/mongoConnection");
class Server {
    get server() {
        if (this._server === undefined) {
            throw 'Service not initialized';
        }
        return this._server;
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            const port = configuration_1.default.port;
            this._server = new Hapi.Server({
                port: port,
                routes: {
                    cors: {
                        origin: ['*'],
                        additionalHeaders: []
                    }
                }
            });
            const plugin = plugins_1.swagger.default();
            yield plugin.register(this.server, '/api', 'Sample Service API');
            //Register Routes
            routes_1.RegisterControllerRoutes(this.server);
            routes_1.RegisterSwaggerRoutes(this.server);
            this.server.ext('onRequest', (request, reply) => {
                return reply.continue;
            });
            this.server.ext('onPreResponse', (request, reply) => {
                const response = request.response;
                if (response.headers['ppl-error']) {
                    response.source = {
                        message: response.headers['ppl-error'],
                        statusCode: response.statusCode
                    };
                }
                response.headers = {
                    'Feature-Policy': 'none',
                    'Pragma': 'no-cache',
                    'Content-Security-Policy': `*`,
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, DELETE, HEAD, OPTIONS, POST, PUT, PATCH',
                    'Access-Control-Allow-Headers': '*'
                };
                return reply.continue;
            });
            this.server.events.on('response', function (response) {
            });
            this.server.events.on('log', event => {
                // if (event.tags.includes('error')) {
                //     console.log(`[${event.tags}], ${Chalk.red(event.data.toString())}`);
                // } else {
                //     console.log(`[${event.tags}], ${Chalk.green(event.data.toString())}`);
                // }
            });
            return this.server;
        });
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('starting server...');
            yield mongoConnection_1.DatabaseHandler.initialize();
            yield mongoConnection_1.DatabaseHandler.openConnection();
            yield this.server.start();
            console.log('Server running on %s', this.server.info.uri);
        });
    }
}
const server = new Server();
exports.default = server;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIvc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsbUNBQW1DO0FBQ25DLHdDQUE0QztBQUU1QyxzQ0FBMEU7QUFFMUUsMkRBQWdEO0FBQ2hELDhEQUEyRDtBQUUzRCxNQUFNLE1BQU07SUFLUixJQUFXLE1BQU07UUFDYixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQzVCLE1BQU0seUJBQXlCLENBQUM7U0FDbkM7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVLLFVBQVU7O1lBQ1osTUFBTSxJQUFJLEdBQUcsdUJBQVMsQ0FBQyxJQUFJLENBQUM7WUFFNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzNCLElBQUksRUFBRSxJQUFJO2dCQUNWLE1BQU0sRUFBRTtvQkFDSixJQUFJLEVBQUU7d0JBQ0YsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO3dCQUNiLGlCQUFpQixFQUFFLEVBQUU7cUJBQ3hCO2lCQUNKO2FBQ0osQ0FBQyxDQUFDO1lBRUgsTUFBTSxNQUFNLEdBQW1CLGlCQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakQsTUFBTSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLG9CQUFvQixDQUFDLENBQUM7WUFFakUsaUJBQWlCO1lBQ2pCLGlDQUF3QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0Qyw4QkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUM1QyxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ2hELE1BQU0sUUFBUSxHQUFRLE9BQU8sQ0FBQyxRQUFRLENBQUM7Z0JBQ3ZDLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDL0IsUUFBUSxDQUFDLE1BQU0sR0FBRzt3QkFDZCxPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7d0JBQ3RDLFVBQVUsRUFBRSxRQUFRLENBQUMsVUFBVTtxQkFDbEMsQ0FBQztpQkFDTDtnQkFFRCxRQUFRLENBQUMsT0FBTyxHQUFHO29CQUNmLGdCQUFnQixFQUFFLE1BQU07b0JBQ3hCLFFBQVEsRUFBRSxVQUFVO29CQUNwQix5QkFBeUIsRUFBRSxHQUFHO29CQUM5Qiw2QkFBNkIsRUFBRSxHQUFHO29CQUNsQyw4QkFBOEIsRUFBRSw4Q0FBOEM7b0JBQzlFLDhCQUE4QixFQUFFLEdBQUc7aUJBQ3JDLENBQUM7Z0JBRUgsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLFFBQVE7WUFDcEQsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUNqQyxzQ0FBc0M7Z0JBQ3RDLDJFQUEyRTtnQkFDM0UsV0FBVztnQkFDWCw2RUFBNkU7Z0JBQzdFLElBQUk7WUFDUixDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO0tBQUE7SUFFSyxLQUFLOztZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNsQyxNQUFNLGlDQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbkMsTUFBTSxpQ0FBZSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlELENBQUM7S0FBQTtDQUNKO0FBQ0QsTUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUU1QixrQkFBZSxNQUFNLENBQUMiLCJmaWxlIjoic2VydmVyL3NlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEhhcGkgZnJvbSBcIkBoYXBpL2hhcGlcIjtcclxuaW1wb3J0IHsgcGx1Z2luLCBzd2FnZ2VyfSBmcm9tIFwiLi4vcGx1Z2luc1wiO1xyXG5pbXBvcnQgQ2hhbGsgZnJvbSAnY2hhbGsnO1xyXG5pbXBvcnQge1JlZ2lzdGVyQ29udHJvbGxlclJvdXRlcywgUmVnaXN0ZXJTd2FnZ2VyUm91dGVzfSBmcm9tIFwiLi4vcm91dGVzXCI7XHJcbmltcG9ydCB7IFRva2VuU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ludGVybmFsJztcclxuaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgRGF0YWJhc2VIYW5kbGVyIH0gZnJvbSBcIi4uL21vbmdvL21vbmdvQ29ubmVjdGlvblwiO1xyXG5cclxuY2xhc3MgU2VydmVyIHtcclxuXHJcbiAgICBwcml2YXRlIF9zZXJ2ZXI6IEhhcGkuU2VydmVyO1xyXG4gICAgcHJpdmF0ZSB0b2tlblNlcnZpY2U6IFRva2VuU2VydmljZTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHNlcnZlcigpOiBIYXBpLlNlcnZlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NlcnZlciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdTZXJ2aWNlIG5vdCBpbml0aWFsaXplZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICBjb25zdCBwb3J0ID0gY29uc3RhbnRzLnBvcnQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3NlcnZlciA9IG5ldyBIYXBpLlNlcnZlcih7XHJcbiAgICAgICAgICAgIHBvcnQ6IHBvcnQsXHJcbiAgICAgICAgICAgIHJvdXRlczoge1xyXG4gICAgICAgICAgICAgICAgY29yczoge1xyXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbjogWycqJ10sIC8vIFRPRE8gLSBhbGxvdyBvYmx5IGtub3duIG9yaWdpbnMgLSBwaWNrIGZyb20gRU5WIHZhcmlhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbEhlYWRlcnM6IFtdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcGx1Z2luOiBwbHVnaW4uSVBsdWdpbiA9IHN3YWdnZXIuZGVmYXVsdCgpO1xyXG4gICAgICAgIGF3YWl0IHBsdWdpbi5yZWdpc3Rlcih0aGlzLnNlcnZlciwgJy9hcGknLCAnU2FtcGxlIFNlcnZpY2UgQVBJJyk7XHJcblxyXG4gICAgICAgIC8vUmVnaXN0ZXIgUm91dGVzXHJcbiAgICAgICAgUmVnaXN0ZXJDb250cm9sbGVyUm91dGVzKHRoaXMuc2VydmVyKTtcclxuICAgICAgICBSZWdpc3RlclN3YWdnZXJSb3V0ZXModGhpcy5zZXJ2ZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnNlcnZlci5leHQoJ29uUmVxdWVzdCcsIChyZXF1ZXN0LCByZXBseSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVwbHkuY29udGludWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXIuZXh0KCdvblByZVJlc3BvbnNlJywgKHJlcXVlc3QsIHJlcGx5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlOiBhbnkgPSByZXF1ZXN0LnJlc3BvbnNlO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuaGVhZGVyc1sncHBsLWVycm9yJ10pIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLnNvdXJjZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5oZWFkZXJzWydwcGwtZXJyb3InXSxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiByZXNwb25zZS5zdGF0dXNDb2RlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXNwb25zZS5oZWFkZXJzID0ge1xyXG4gICAgICAgICAgICAgICAgJ0ZlYXR1cmUtUG9saWN5JzogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgJ1ByYWdtYSc6ICduby1jYWNoZScsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1TZWN1cml0eS1Qb2xpY3knOiBgKmAsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnOiAnR0VULCBERUxFVEUsIEhFQUQsIE9QVElPTlMsIFBPU1QsIFBVVCwgUEFUQ0gnLFxyXG4gICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnOiAnKidcclxuICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHJlcGx5LmNvbnRpbnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2VydmVyLmV2ZW50cy5vbigncmVzcG9uc2UnLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXJ2ZXIuZXZlbnRzLm9uKCdsb2cnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIC8vIGlmIChldmVudC50YWdzLmluY2x1ZGVzKCdlcnJvcicpKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhgWyR7ZXZlbnQudGFnc31dLCAke0NoYWxrLnJlZChldmVudC5kYXRhLnRvU3RyaW5nKCkpfWApO1xyXG4gICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coYFske2V2ZW50LnRhZ3N9XSwgJHtDaGFsay5ncmVlbihldmVudC5kYXRhLnRvU3RyaW5nKCkpfWApO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGFydGluZyBzZXJ2ZXIuLi4nKTtcclxuICAgICAgICBhd2FpdCBEYXRhYmFzZUhhbmRsZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIGF3YWl0IERhdGFiYXNlSGFuZGxlci5vcGVuQ29ubmVjdGlvbigpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc2VydmVyLnN0YXJ0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlcnZlciBydW5uaW5nIG9uICVzJywgdGhpcy5zZXJ2ZXIuaW5mby51cmkpO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IHNlcnZlciA9IG5ldyBTZXJ2ZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlcnZlcjsiXX0=
