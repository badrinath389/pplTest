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
exports.DashboardService = void 0;
const typescript_ioc_1 = require("typescript-ioc");
const tsoa_1 = require("tsoa");
const index_1 = require("./index");
let DashboardService = class DashboardService extends tsoa_1.Controller {
    getDashboardCountInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                vehicleCount: yield this.vehicleRegistrationService.vehicleCount(),
                agentCount: yield this.agentRegistrationService.agentCount(),
                usersCount: 0,
                masterOrderCount: yield this.masterOrderService.masterOrderCount(),
                orderCount: yield this.orderService.orderCount()
            };
        });
    }
};
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", index_1.AgentRegistrationService)
], DashboardService.prototype, "agentRegistrationService", void 0);
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", index_1.MasterOrderService)
], DashboardService.prototype, "masterOrderService", void 0);
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", index_1.OrderService)
], DashboardService.prototype, "orderService", void 0);
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", index_1.UserService)
], DashboardService.prototype, "userService", void 0);
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", index_1.VehicleRegistrationService)
], DashboardService.prototype, "vehicleRegistrationService", void 0);
DashboardService = __decorate([
    typescript_ioc_1.Singleton
], DashboardService);
exports.DashboardService = DashboardService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2aWNlcy9pbnRlcm5hbC9kYXNoYm9hcmRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFtRDtBQUNuRCwrQkFBa0M7QUFFbEMsbUNBQzZEO0FBRzdELElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWlCLFNBQVEsaUJBQVU7SUFPL0IscUJBQXFCOztZQUM5QixPQUFPO2dCQUNILFlBQVksRUFBRSxNQUFNLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLEVBQUU7Z0JBQ2xFLFVBQVUsRUFBRSxNQUFNLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLEVBQUU7Z0JBQzVELFVBQVUsRUFBRSxDQUFDO2dCQUNiLGdCQUFnQixFQUFFLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixFQUFFO2dCQUNsRSxVQUFVLEVBQUUsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRTthQUNuRCxDQUFDO1FBQ04sQ0FBQztLQUFBO0NBQ0osQ0FBQTtBQWZXO0lBQVAsdUJBQU07OEJBQTJCLGdDQUF3QjtrRUFBQztBQUNuRDtJQUFQLHVCQUFNOzhCQUFxQiwwQkFBa0I7NERBQUM7QUFDdkM7SUFBUCx1QkFBTTs4QkFBZSxvQkFBWTtzREFBQztBQUMzQjtJQUFQLHVCQUFNOzhCQUFjLG1CQUFXO3FEQUFDO0FBQ3pCO0lBQVAsdUJBQU07OEJBQTZCLGtDQUEwQjtvRUFBQztBQUx0RCxnQkFBZ0I7SUFENUIsMEJBQVM7R0FDRyxnQkFBZ0IsQ0FnQjVCO0FBaEJZLDRDQUFnQiIsImZpbGUiOiJzZXJ2aWNlcy9pbnRlcm5hbC9kYXNoYm9hcmRTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2luZ2xldG9uLCBJbmplY3QgfSBmcm9tIFwidHlwZXNjcmlwdC1pb2NcIjtcclxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJ0c29hXCI7XHJcbmltcG9ydCB7IFBpbkVycm9yIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy9FcnJvckhhbmRsZXJcIjtcclxuaW1wb3J0IHsgQWdlbnRSZWdpc3RyYXRpb25TZXJ2aWNlLCBNYXN0ZXJPcmRlclNlcnZpY2UsIE9yZGVyU2VydmljZSxcclxuICAgIFVzZXJTZXJ2aWNlLCBWZWhpY2xlUmVnaXN0cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5AU2luZ2xldG9uXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRTZXJ2aWNlIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBASW5qZWN0IGFnZW50UmVnaXN0cmF0aW9uU2VydmljZTogQWdlbnRSZWdpc3RyYXRpb25TZXJ2aWNlO1xyXG4gICAgQEluamVjdCBtYXN0ZXJPcmRlclNlcnZpY2U6IE1hc3Rlck9yZGVyU2VydmljZTtcclxuICAgIEBJbmplY3Qgb3JkZXJTZXJ2aWNlOiBPcmRlclNlcnZpY2U7XHJcbiAgICBASW5qZWN0IHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZTtcclxuICAgIEBJbmplY3QgdmVoaWNsZVJlZ2lzdHJhdGlvblNlcnZpY2U6IFZlaGljbGVSZWdpc3RyYXRpb25TZXJ2aWNlO1xyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXREYXNoYm9hcmRDb3VudEluZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmVoaWNsZUNvdW50OiBhd2FpdCB0aGlzLnZlaGljbGVSZWdpc3RyYXRpb25TZXJ2aWNlLnZlaGljbGVDb3VudCgpLFxyXG4gICAgICAgICAgICBhZ2VudENvdW50OiBhd2FpdCB0aGlzLmFnZW50UmVnaXN0cmF0aW9uU2VydmljZS5hZ2VudENvdW50KCksXHJcbiAgICAgICAgICAgIHVzZXJzQ291bnQ6IDAsXHJcbiAgICAgICAgICAgIG1hc3Rlck9yZGVyQ291bnQ6IGF3YWl0IHRoaXMubWFzdGVyT3JkZXJTZXJ2aWNlLm1hc3Rlck9yZGVyQ291bnQoKSxcclxuICAgICAgICAgICAgb3JkZXJDb3VudDogYXdhaXQgdGhpcy5vcmRlclNlcnZpY2Uub3JkZXJDb3VudCgpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufSJdfQ==
