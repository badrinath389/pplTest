"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
exports.SampleCheckController = void 0;
const tsoa_1 = require("tsoa");
/***
 * Test sample service after deployment
 */
let SampleCheckController = class SampleCheckController extends tsoa_1.Controller {
    ping() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                message: 'sample pinpoint services ping...'
            };
        });
    }
};
__decorate([
    tsoa_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SampleCheckController.prototype, "ping", null);
SampleCheckController = __decorate([
    tsoa_1.Route('ping'),
    tsoa_1.Tags("ping")
], SampleCheckController);
exports.SampleCheckController = SampleCheckController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVycy9zYW1wbGVDaGVja0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQWlHO0FBRWpHOztHQUVHO0FBR0gsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBc0IsU0FBUSxpQkFBVTtJQUdwQyxJQUFJOztZQUNiLE9BQU87Z0JBQ0gsT0FBTyxFQUFFLGtDQUFrQzthQUM5QyxDQUFDO1FBQ04sQ0FBQztLQUFBO0NBQ0osQ0FBQTtBQUxHO0lBREMsVUFBRyxFQUFFOzs7O2lEQUtMO0FBUFEscUJBQXFCO0lBRmpDLFlBQUssQ0FBQyxNQUFNLENBQUM7SUFDYixXQUFJLENBQUMsTUFBTSxDQUFDO0dBQ0EscUJBQXFCLENBUWpDO0FBUlksc0RBQXFCIiwiZmlsZSI6ImNvbnRyb2xsZXJzL3NhbXBsZUNoZWNrQ29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2V0LCBSb3V0ZSwgVGFncywgUmVxdWVzdCwgU2VjdXJpdHksIFN1Y2Nlc3NSZXNwb25zZSwgUmVzcG9uc2UsIENvbnRyb2xsZXIgfSBmcm9tIFwidHNvYVwiO1xyXG4gIFxyXG4vKioqXHJcbiAqIFRlc3Qgc2FtcGxlIHNlcnZpY2UgYWZ0ZXIgZGVwbG95bWVudFxyXG4gKi9cclxuQFJvdXRlKCdwaW5nJylcclxuQFRhZ3MoXCJwaW5nXCIpXHJcbmV4cG9ydCBjbGFzcyBTYW1wbGVDaGVja0NvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuXHJcbiAgICBAR2V0KClcclxuICAgIHB1YmxpYyBhc3luYyBwaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdzYW1wbGUgcGlucG9pbnQgc2VydmljZXMgcGluZy4uLidcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59Il19
