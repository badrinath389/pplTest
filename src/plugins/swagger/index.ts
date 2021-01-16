import {IPlugin, IPluginInfo} from "../interfaces";
import * as Hapi from "@hapi/hapi";

export default (): IPlugin => {
    return {
        register: async (server: Hapi.Server, basePath, title) => {
            await server.register([
                require('inert'),
                require('vision'),
                {
                    plugin: require('hapi-swaggered-ui'),
                    options: {
                        title: title,
                        path: `${basePath}/docs`,
                        swaggerEndpoint: `${basePath}/swagger.json`,
                        swaggerOptions: {
                            docExpansion: 'list'
                        }
                    }
                }
            ]);
        },
        info: () => {
            return {
                name: "Open Api documentation endpoint",
                version: "1.0"
            };
        }
    };
};

