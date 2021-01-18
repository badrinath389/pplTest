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
exports.UsersController = void 0;
const tsoa_1 = require("tsoa");
const userService_1 = require("../services/internal/userService");
const typescript_ioc_1 = require("typescript-ioc");
const BaseController_1 = require("./BaseController");
const services_1 = require("../services");
let UsersController = class UsersController extends BaseController_1.BaseController {
    /**
     *
     * @param userPayload
     * User payload to store user information
     */
    createUser(userPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.userService.createUser(userPayload);
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    /**
     *
     * @param userPaylod
     * User payload to check user auth information
     */
    authenticateUser(userPaylod) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.userService.verifyUserCreds(userPaylod);
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    /**
     * Get all users information
     */
    getUserInfo(request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.userService.getAllUsersInfo(null);
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    /**
     *
     * @param id
     * Get user details by userId
     */
    getUserById(id, request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.userService.getAllUsersInfo(id);
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    /**
     *
     * @param id
     * UserId for the user to be deleted
     *
     * @param request
     * request to check the token validations
     */
    deleteUserById(id, request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //  validate token
                yield this.tokenService.validateToken(request);
                return yield this.userService.deleteUserById(id);
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    /**
     *
     * @param id
     * userId to update
     *
     * @param request
     * request to check the token validation
     *
     * @param authorization
     * check authorization sending from Header
     *
     * @param userModel
     * Updated userPayload
     */
    updateUserById(id, request, authorization, userPayloadModel) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.userService.updateUserById(id, userPayloadModel);
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    /**
     *
     * @param userActivatePayload
     * User payload to store user information
     */
    activateUser(userActivatePayload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.userService.activateAccount(userActivatePayload);
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
};
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", userService_1.UserService)
], UsersController.prototype, "userService", void 0);
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", services_1.TokenService)
], UsersController.prototype, "tokenService", void 0);
__decorate([
    tsoa_1.Post(),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    tsoa_1.Post('login'),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "authenticateUser", null);
__decorate([
    tsoa_1.Get(),
    __param(0, tsoa_1.Request()), __param(1, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserInfo", null);
__decorate([
    tsoa_1.Get('{id}'),
    __param(1, tsoa_1.Request()), __param(2, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserById", null);
__decorate([
    tsoa_1.Delete('{id}'),
    __param(1, tsoa_1.Request()), __param(2, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUserById", null);
__decorate([
    tsoa_1.Put('{id}'),
    __param(1, tsoa_1.Request()), __param(2, tsoa_1.Header()),
    __param(3, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUserById", null);
__decorate([
    tsoa_1.Post('account/activate'),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "activateUser", null);
UsersController = __decorate([
    tsoa_1.Route('user'),
    tsoa_1.Tags("User")
], UsersController);
exports.UsersController = UsersController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVycy91c2Vyc0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQWlGO0FBRWpGLGtFQUErRDtBQUMvRCxtREFBd0M7QUFDeEMscURBQWtEO0FBQ2xELDBDQUEyQztBQUkzQyxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFnQixTQUFRLCtCQUFjO0lBSS9DOzs7O09BSUc7SUFFVSxVQUFVLENBQ1gsV0FBc0I7O1lBRTlCLElBQUk7Z0JBQ0EsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3pEO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzQjtRQUNMLENBQUM7S0FBQTtJQUVEOzs7O09BSUc7SUFFVSxnQkFBZ0IsQ0FDakIsVUFBeUI7O1lBRWpDLElBQUk7Z0JBQ0EsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzdEO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzQjtRQUNMLENBQUM7S0FBQTtJQUVEOztPQUVHO0lBRVUsV0FBVyxDQUFZLE9BQVksRUFBWSxhQUFxQjs7WUFDN0UsSUFBSTtnQkFFQSxpQkFBaUI7Z0JBQ2pCLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRS9DLE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2RDtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0I7UUFDTCxDQUFDO0tBQUE7SUFFRDs7OztPQUlH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QWUsQ0FvSTNCO0FBcElZLDBDQUFlIiwiZmlsZSI6ImNvbnRyb2xsZXJzL3VzZXJzQ29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2V0LCBSb3V0ZSwgVGFncywgUG9zdCwgQm9keSwgUmVxdWVzdCwgRGVsZXRlLCBQdXQsIEhlYWRlciB9IGZyb20gXCJ0c29hXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCwgVXNlckF1dGhNb2RlbCwgVXBkYXRlVXNlck1vZGVsLCBVc2VyQWN0aXZhdGVNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlcnNNb2RlbFwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9pbnRlcm5hbC91c2VyU2VydmljZVwiO1xyXG5pbXBvcnQgeyBJbmplY3QgfSBmcm9tIFwidHlwZXNjcmlwdC1pb2NcIjtcclxuaW1wb3J0IHsgQmFzZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9CYXNlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBUb2tlblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuXHJcbkBSb3V0ZSgndXNlcicpXHJcbkBUYWdzKFwiVXNlclwiKVxyXG5leHBvcnQgY2xhc3MgVXNlcnNDb250cm9sbGVyIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXIge1xyXG4gICAgQEluamVjdCB1c2VyU2VydmljZTogVXNlclNlcnZpY2U7XHJcbiAgICBASW5qZWN0IHRva2VuU2VydmljZTogVG9rZW5TZXJ2aWNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gdXNlclBheWxvYWQgXHJcbiAgICAgKiBVc2VyIHBheWxvYWQgdG8gc3RvcmUgdXNlciBpbmZvcm1hdGlvblxyXG4gICAgICovXHJcbiAgICBAUG9zdCgpXHJcbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlVXNlcihcclxuICAgICAgICBAQm9keSgpIHVzZXJQYXlsb2FkOiBVc2VyTW9kZWxcclxuICAgICkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmNyZWF0ZVVzZXIodXNlclBheWxvYWQpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHVzZXJQYXlsb2QgXHJcbiAgICAgKiBVc2VyIHBheWxvYWQgdG8gY2hlY2sgdXNlciBhdXRoIGluZm9ybWF0aW9uXHJcbiAgICAgKi9cclxuICAgIEBQb3N0KCdsb2dpbicpXHJcbiAgICBwdWJsaWMgYXN5bmMgYXV0aGVudGljYXRlVXNlcihcclxuICAgICAgICBAQm9keSgpIHVzZXJQYXlsb2Q6IFVzZXJBdXRoTW9kZWxcclxuICAgICkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLnZlcmlmeVVzZXJDcmVkcyh1c2VyUGF5bG9kKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYWxsIHVzZXJzIGluZm9ybWF0aW9uXHJcbiAgICAgKi9cclxuICAgIEBHZXQoKVxyXG4gICAgcHVibGljIGFzeW5jIGdldFVzZXJJbmZvKEBSZXF1ZXN0KCkgcmVxdWVzdDogYW55LCBASGVhZGVyKCkgYXV0aG9yaXphdGlvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIHRva2VuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudG9rZW5TZXJ2aWNlLnZhbGlkYXRlVG9rZW4ocmVxdWVzdCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy51c2VyU2VydmljZS5nZXRBbGxVc2Vyc0luZm8obnVsbCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gaWQgXHJcbiAgICAgKiBHZXQgdXNlciBkZXRhaWxzIGJ5IHVzZXJJZFxyXG4gICAgICovXHJcbiAgICBAR2V0KCd7aWR9JylcclxuICAgIHB1YmxpYyBhc3luYyBnZXRVc2VyQnlJZChpZDogc3RyaW5nLCBAUmVxdWVzdCgpIHJlcXVlc3Q6IGFueSwgQEhlYWRlcigpIGF1dGhvcml6YXRpb246IHN0cmluZykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIHRva2VuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudG9rZW5TZXJ2aWNlLnZhbGlkYXRlVG9rZW4ocmVxdWVzdCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy51c2VyU2VydmljZS5nZXRBbGxVc2Vyc0luZm8oaWQpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGlkIFxyXG4gICAgICogVXNlcklkIGZvciB0aGUgdXNlciB0byBiZSBkZWxldGVkXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0IFxyXG4gICAgICogcmVxdWVzdCB0byBjaGVjayB0aGUgdG9rZW4gdmFsaWRhdGlvbnNcclxuICAgICAqL1xyXG4gICAgQERlbGV0ZSgne2lkfScpXHJcbiAgICBwdWJsaWMgYXN5bmMgZGVsZXRlVXNlckJ5SWQoaWQ6IHN0cmluZywgQFJlcXVlc3QoKSByZXF1ZXN0OiBhbnksIEBIZWFkZXIoKSBhdXRob3JpemF0aW9uOiBzdHJpbmcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyAgdmFsaWRhdGUgdG9rZW5cclxuICAgICAgICAgICAgYXdhaXQgdGhpcy50b2tlblNlcnZpY2UudmFsaWRhdGVUb2tlbihyZXF1ZXN0KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmRlbGV0ZVVzZXJCeUlkKGlkKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBpZCBcclxuICAgICAqIHVzZXJJZCB0byB1cGRhdGVcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHJlcXVlc3QgXHJcbiAgICAgKiByZXF1ZXN0IHRvIGNoZWNrIHRoZSB0b2tlbiB2YWxpZGF0aW9uXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBhdXRob3JpemF0aW9uIFxyXG4gICAgICogY2hlY2sgYXV0aG9yaXphdGlvbiBzZW5kaW5nIGZyb20gSGVhZGVyXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB1c2VyTW9kZWwgXHJcbiAgICAgKiBVcGRhdGVkIHVzZXJQYXlsb2FkXHJcbiAgICAgKi9cclxuICAgIEBQdXQoJ3tpZH0nKVxyXG4gICAgcHVibGljIGFzeW5jIHVwZGF0ZVVzZXJCeUlkKGlkOiBzdHJpbmcsIEBSZXF1ZXN0KCkgcmVxdWVzdDogYW55LCBASGVhZGVyKCkgYXV0aG9yaXphdGlvbjogc3RyaW5nLFxyXG4gICAgICAgIEBCb2R5KCkgdXNlclBheWxvYWRNb2RlbDogVXBkYXRlVXNlck1vZGVsKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gdmFsaWRhdGUgdG9rZW5cclxuICAgICAgICAgICAgYXdhaXQgdGhpcy50b2tlblNlcnZpY2UudmFsaWRhdGVUb2tlbihyZXF1ZXN0KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZVVzZXJCeUlkKGlkLCB1c2VyUGF5bG9hZE1vZGVsKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gdXNlckFjdGl2YXRlUGF5bG9hZCBcclxuICAgICAqIFVzZXIgcGF5bG9hZCB0byBzdG9yZSB1c2VyIGluZm9ybWF0aW9uXHJcbiAgICAgKi9cclxuICAgIEBQb3N0KCdhY2NvdW50L2FjdGl2YXRlJylcclxuICAgIHB1YmxpYyBhc3luYyBhY3RpdmF0ZVVzZXIoXHJcbiAgICAgICAgQEJvZHkoKSB1c2VyQWN0aXZhdGVQYXlsb2FkOiBVc2VyQWN0aXZhdGVNb2RlbFxyXG4gICAgKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMudXNlclNlcnZpY2UuYWN0aXZhdGVBY2NvdW50KHVzZXJBY3RpdmF0ZVBheWxvYWQpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==
