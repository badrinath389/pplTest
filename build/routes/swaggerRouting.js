"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterSwaggerRoutes = void 0;
function RegisterSwaggerRoutes(server) {
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
exports.RegisterSwaggerRoutes = RegisterSwaggerRoutes;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3V0ZXMvc3dhZ2dlclJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsU0FBZ0IscUJBQXFCLENBQUMsTUFBbUI7SUFDckQsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNULE1BQU0sRUFBRSxLQUFLO1FBQ2IsSUFBSSxFQUFFLG1CQUFtQjtRQUN6QixPQUFPLEVBQUU7WUFDTCxJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLFNBQVMsR0FBRywwQkFBMEI7Z0JBQzVDLE9BQU8sRUFBRSxLQUFLO2FBQ2pCO1NBQ0o7S0FDSixDQUFDLENBQUM7QUFFUCxDQUFDO0FBWkQsc0RBWUMiLCJmaWxlIjoicm91dGVzL3N3YWdnZXJSb3V0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgSGFwaSBmcm9tIFwiQGhhcGkvaGFwaVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZ2lzdGVyU3dhZ2dlclJvdXRlcyhzZXJ2ZXI6IEhhcGkuU2VydmVyKSB7XHJcbiAgICBzZXJ2ZXIucm91dGUoe1xyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGF0aDogJy9hcGkvc3dhZ2dlci5qc29uJyxcclxuICAgICAgICBoYW5kbGVyOiB7XHJcbiAgICAgICAgICAgIGZpbGU6IHtcclxuICAgICAgICAgICAgICAgIHBhdGg6IF9fZGlybmFtZSArIFwiLy4uL3N3YWdnZXIvc3dhZ2dlci5qc29uXCIsXHJcbiAgICAgICAgICAgICAgICBjb25maW5lOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSJdfQ==
