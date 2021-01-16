import * as Hapi from "@hapi/hapi";
import { plugin, swagger} from "../plugins";
import Chalk from 'chalk';
import {RegisterControllerRoutes, RegisterSwaggerRoutes} from "../routes";
import { TokenService } from '../services/internal';
import constants from "../config/configuration";
import { DatabaseHandler } from "../mongo/mongoConnection";

class Server {

    private _server: Hapi.Server;
    private tokenService: TokenService;

    public get server(): Hapi.Server {
        if (this._server === undefined) {
            throw 'Service not initialized';
        }
        return this._server;
    }

    async initialize() {
        const port = constants.port;

        this._server = new Hapi.Server({
            port: port,
            routes: {
                cors: {
                    origin: ['*'], // TODO - allow obly known origins - pick from ENV variable
                    additionalHeaders: []
                }
            }
        });

        const plugin: plugin.IPlugin = swagger.default();
        await plugin.register(this.server, '/api', 'Sample Service API');

        //Register Routes
        RegisterControllerRoutes(this.server);
        RegisterSwaggerRoutes(this.server);

        this.server.ext('onRequest', (request, reply) => {
            return reply.continue;
        });
        this.server.ext('onPreResponse', (request, reply) => {
            const response: any = request.response;
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
    }

    async start() {
        console.log('starting server...');
        await DatabaseHandler.initialize();
        await DatabaseHandler.openConnection();
        await this.server.start();
        console.log('Server running on %s', this.server.info.uri);
    }
}
const server = new Server();

export default server;