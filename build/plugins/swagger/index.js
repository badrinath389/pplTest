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
exports.default = () => {
    return {
        register: (server, basePath, title) => __awaiter(void 0, void 0, void 0, function* () {
            yield server.register([
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
        }),
        info: () => {
            return {
                name: "Open Api documentation endpoint",
                version: "1.0"
            };
        }
    };
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbHVnaW5zL3N3YWdnZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQSxrQkFBZSxHQUFZLEVBQUU7SUFDekIsT0FBTztRQUNILFFBQVEsRUFBRSxDQUFPLE1BQW1CLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3JELE1BQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDbEIsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDaEIsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQkFDakI7b0JBQ0ksTUFBTSxFQUFFLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztvQkFDcEMsT0FBTyxFQUFFO3dCQUNMLEtBQUssRUFBRSxLQUFLO3dCQUNaLElBQUksRUFBRSxHQUFHLFFBQVEsT0FBTzt3QkFDeEIsZUFBZSxFQUFFLEdBQUcsUUFBUSxlQUFlO3dCQUMzQyxjQUFjLEVBQUU7NEJBQ1osWUFBWSxFQUFFLE1BQU07eUJBQ3ZCO3FCQUNKO2lCQUNKO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFBO1FBQ0QsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUNQLE9BQU87Z0JBQ0gsSUFBSSxFQUFFLGlDQUFpQztnQkFDdkMsT0FBTyxFQUFFLEtBQUs7YUFDakIsQ0FBQztRQUNOLENBQUM7S0FDSixDQUFDO0FBQ04sQ0FBQyxDQUFDIiwiZmlsZSI6InBsdWdpbnMvc3dhZ2dlci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVBsdWdpbiwgSVBsdWdpbkluZm99IGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCAqIGFzIEhhcGkgZnJvbSBcIkBoYXBpL2hhcGlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpOiBJUGx1Z2luID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVnaXN0ZXI6IGFzeW5jIChzZXJ2ZXI6IEhhcGkuU2VydmVyLCBiYXNlUGF0aCwgdGl0bGUpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgc2VydmVyLnJlZ2lzdGVyKFtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmUoJ2luZXJ0JyksXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlKCd2aXNpb24nKSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwbHVnaW46IHJlcXVpcmUoJ2hhcGktc3dhZ2dlcmVkLXVpJyksXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGAke2Jhc2VQYXRofS9kb2NzYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dhZ2dlckVuZHBvaW50OiBgJHtiYXNlUGF0aH0vc3dhZ2dlci5qc29uYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dhZ2dlck9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY0V4cGFuc2lvbjogJ2xpc3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5mbzogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJPcGVuIEFwaSBkb2N1bWVudGF0aW9uIGVuZHBvaW50XCIsXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBcIjEuMFwiXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbiJdfQ==
