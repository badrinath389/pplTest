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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.DashboardController = void 0;
const tsoa_1 = require("tsoa");
const typescript_ioc_1 = require("typescript-ioc");
const BaseController_1 = require("./BaseController");
const services_1 = require("../services");
let DashboardController = class DashboardController extends BaseController_1.BaseController {
    /**
     *
     * @param request
     * request to validate the token
     *
     * @param authorization
     * check authorization sending from Header
     */
    getDashboardCountInfo(request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                const dashboardCount = yield this.dashboardService.getDashboardCountInfo();
                dashboardCount.usersCount = yield this.userService.usersCount();
                return dashboardCount;
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
};
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", services_1.TokenService)
], DashboardController.prototype, "tokenService", void 0);
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", services_1.DashboardService)
], DashboardController.prototype, "dashboardService", void 0);
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", services_1.UserService)
], DashboardController.prototype, "userService", void 0);
__decorate([
    tsoa_1.Get(),
    __param(0, tsoa_1.Request()), __param(1, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getDashboardCountInfo", null);
DashboardController = __decorate([
    tsoa_1.Route('dashboard'),
    tsoa_1.Tags("Dashboard")
], DashboardController);
exports.DashboardController = DashboardController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVycy9kYXNoYm9hcmRDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUF1RjtBQUN2RixtREFBd0M7QUFDeEMscURBQWtEO0FBQ2xELDBDQUEwRTtBQUkxRSxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFvQixTQUFRLCtCQUFjO0lBS25EOzs7Ozs7O09BT0c7SUFFVSxxQkFBcUIsQ0FBWSxPQUFZLEVBQVksYUFBa0I7O1lBQ3BGLElBQUk7Z0JBQ0EsaUJBQWlCO2dCQUNqQixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUUvQyxNQUFNLGNBQWMsR0FBUSxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2dCQUNoRixjQUFjLENBQUMsVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDaEUsT0FBTyxjQUFjLENBQUM7YUFDekI7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNCO1FBQ0wsQ0FBQztLQUFBO0NBQ0osQ0FBQTtBQXpCVztJQUFQLHVCQUFNOzhCQUFlLHVCQUFZO3lEQUFDO0FBQzNCO0lBQVAsdUJBQU07OEJBQW1CLDJCQUFnQjs2REFBQztBQUNuQztJQUFQLHVCQUFNOzhCQUFjLHNCQUFXO3dEQUFDO0FBV2pDO0lBREMsVUFBRyxFQUFFO0lBQzhCLFdBQUEsY0FBTyxFQUFFLENBQUEsRUFBZ0IsV0FBQSxhQUFNLEVBQUUsQ0FBQTs7OztnRUFXcEU7QUF6QlEsbUJBQW1CO0lBRi9CLFlBQUssQ0FBQyxXQUFXLENBQUM7SUFDbEIsV0FBSSxDQUFDLFdBQVcsQ0FBQztHQUNMLG1CQUFtQixDQTBCL0I7QUExQlksa0RBQW1CIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2Rhc2hib2FyZENvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dldCwgUm91dGUsIFRhZ3MsIFBvc3QsIEJvZHksIFJlcXVlc3QsIERlbGV0ZSwgSGVhZCwgSGVhZGVyLCBQdXQgfSBmcm9tIFwidHNvYVwiO1xyXG5pbXBvcnQgeyBJbmplY3QgfSBmcm9tIFwidHlwZXNjcmlwdC1pb2NcIjtcclxuaW1wb3J0IHsgQmFzZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9CYXNlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBUb2tlblNlcnZpY2UsIERhc2hib2FyZFNlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcblxyXG5AUm91dGUoJ2Rhc2hib2FyZCcpXHJcbkBUYWdzKFwiRGFzaGJvYXJkXCIpXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb250cm9sbGVyIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXIge1xyXG4gICAgQEluamVjdCB0b2tlblNlcnZpY2U6IFRva2VuU2VydmljZTtcclxuICAgIEBJbmplY3QgZGFzaGJvYXJkU2VydmljZTogRGFzaGJvYXJkU2VydmljZTtcclxuICAgIEBJbmplY3QgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdCBcclxuICAgICAqIHJlcXVlc3QgdG8gdmFsaWRhdGUgdGhlIHRva2VuXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBhdXRob3JpemF0aW9uIFxyXG4gICAgICogY2hlY2sgYXV0aG9yaXphdGlvbiBzZW5kaW5nIGZyb20gSGVhZGVyXHJcbiAgICAgKi9cclxuICAgIEBHZXQoKVxyXG4gICAgcHVibGljIGFzeW5jIGdldERhc2hib2FyZENvdW50SW5mbyhAUmVxdWVzdCgpIHJlcXVlc3Q6IGFueSwgQEhlYWRlcigpIGF1dGhvcml6YXRpb246IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIHRva2VuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudG9rZW5TZXJ2aWNlLnZhbGlkYXRlVG9rZW4ocmVxdWVzdCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXNoYm9hcmRDb3VudDogYW55ID0gYXdhaXQgdGhpcy5kYXNoYm9hcmRTZXJ2aWNlLmdldERhc2hib2FyZENvdW50SW5mbygpO1xyXG4gICAgICAgICAgICBkYXNoYm9hcmRDb3VudC51c2Vyc0NvdW50ID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS51c2Vyc0NvdW50KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXNoYm9hcmRDb3VudDtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
