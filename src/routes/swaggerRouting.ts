import * as Hapi from "@hapi/hapi";

export function RegisterSwaggerRoutes(server: Hapi.Server) {
    server.route({
        method: 'get',
        path: '/api/swagger.json',
        handler: {
            file: {
                path: __dirname + "/../swagger/swagger.json",
                confine: false
            },
        }
    });

}