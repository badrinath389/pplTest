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
exports.MasterOrderController = void 0;
const tsoa_1 = require("tsoa");
const typescript_ioc_1 = require("typescript-ioc");
const BaseController_1 = require("./BaseController");
const services_1 = require("../services");
let MasterOrderController = class MasterOrderController extends BaseController_1.BaseController {
    /**
     *
     * @param createMasterOrderPayload
     * MasterOrder create data body request
     *
     * @param request
     * request to validate the token
     */
    createMasterOrder(createMasterOrderPayload, request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.masterOrderService.createMasterOrder(createMasterOrderPayload);
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    /**
     *
     * @param request
     * request to validate the token
     *
     * @param authorization
     * check authorization sending from Header
     */
    getMasterOrderDetails(request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.masterOrderService.getMasterOrderDetails(null);
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    /**
     *
     * @param request
     * request to validate the token
     *
     * @param authorization
     * check authorization sending from Header
     */
    getMasterOrderAutoIncrementNo(request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.masterOrderService.getMasterOrderIncrementNo();
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    /**
     *
     * @param id
     * MasterOrder Id
     *
     * @param request
     * request to validate the token
     *
     * @param authorization
     * check authorization sending from Header
     *
     */
    getMasterOrderById(id, request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.masterOrderService.getMasterOrderDetails(id);
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    /**
     *
     * @param id
     * master order Id
     *
     * @param updateMasterOrderPayload
     * update details for the  master order registration
     *
     * @param request
     * request to validate the token
     *
     * @param authorization
     * check authorization sending from Header
     *
     */
    updateMasterOrderDetails(id, updateMasterOrderPayload, request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.masterOrderService.updateMasterOrderDetails(id, updateMasterOrderPayload);
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    /**
     *
     * @param id
     * master order Id
     *
     * @param request
     * request to validate the token
     *
     * @param authorization
     * check authorization sending from Header
     *
     */
    deleteMasterOrderDetails(id, request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.masterOrderService.deleteMasterOrderDetails(id);
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
};
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", services_1.MasterOrderService)
], MasterOrderController.prototype, "masterOrderService", void 0);
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", services_1.TokenService)
], MasterOrderController.prototype, "tokenService", void 0);
__decorate([
    tsoa_1.Post(),
    __param(0, tsoa_1.Body()),
    __param(1, tsoa_1.Request()), __param(2, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], MasterOrderController.prototype, "createMasterOrder", null);
__decorate([
    tsoa_1.Get(),
    __param(0, tsoa_1.Request()), __param(1, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MasterOrderController.prototype, "getMasterOrderDetails", null);
__decorate([
    tsoa_1.Get('autoIncrement'),
    __param(0, tsoa_1.Request()), __param(1, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MasterOrderController.prototype, "getMasterOrderAutoIncrementNo", null);
__decorate([
    tsoa_1.Get('{id}'),
    __param(1, tsoa_1.Request()), __param(2, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], MasterOrderController.prototype, "getMasterOrderById", null);
__decorate([
    tsoa_1.Put('{id}'),
    __param(1, tsoa_1.Body()),
    __param(2, tsoa_1.Request()), __param(3, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], MasterOrderController.prototype, "updateMasterOrderDetails", null);
__decorate([
    tsoa_1.Delete('{id}'),
    __param(1, tsoa_1.Request()), __param(2, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], MasterOrderController.prototype, "deleteMasterOrderDetails", null);
MasterOrderController = __decorate([
    tsoa_1.Route('masterorder'),
    tsoa_1.Tags("Master Order")
], MasterOrderController);
exports.MasterOrderController = MasterOrderController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVycy9tYXN0ZXJPcmRlckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQXVGO0FBQ3ZGLG1EQUF3QztBQUN4QyxxREFBa0Q7QUFDbEQsMENBQStEO0FBSy9ELElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXNCLFNBQVEsK0JBQWM7SUFJckQ7Ozs7Ozs7T0FPRztJQUVVLGlCQUFpQixDQUFTLHdCQUEwQyxFQUNsRSxPQUFZLEVBQVksYUFBa0I7O1lBQ2pELElBQUk7Z0JBQ0EsaUJBQWlCO2dCQUNqQixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUUvQyxPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLENBQUM7YUFDcEY7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNCO1FBQ1QsQ0FBQztLQUFBO0lBRUQ7Ozs7Ozs7T0FPRztJQUVVLHFCQUFxQixDQUFZLE9BQVksRUFBWSxhQUFrQjs7WUFDcEYsSUFBSTtnQkFDQSxpQkFBaUI7Z0JBQ2pCLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRS9DLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDcEU7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNCO1FBQ0wsQ0FBQztLQUFBO0lBRUQ7Ozs7Ozs7T0FPRztJQUVVLDZCQUE2QixDQUFZLE9BQVksRUFBWSxhQUFrQjs7WUFDNUYsSUFBSTtnQkFDQSxpQkFBaUI7Z0JBQ2pCLE1BQU0sSUFBSSxDQUFDLFlB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QUFhLENBQUM7SUFDcEIsV0FBSSxDQUFDLGNBQWMsQ0FBQztHQUNSLHFCQUFxQixDQTRJakM7QUE1SVksc0RBQXFCIiwiZmlsZSI6ImNvbnRyb2xsZXJzL21hc3Rlck9yZGVyQ29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2V0LCBSb3V0ZSwgVGFncywgUG9zdCwgQm9keSwgUmVxdWVzdCwgRGVsZXRlLCBIZWFkLCBIZWFkZXIsIFB1dCB9IGZyb20gXCJ0c29hXCI7XHJcbmltcG9ydCB7IEluamVjdCB9IGZyb20gXCJ0eXBlc2NyaXB0LWlvY1wiO1xyXG5pbXBvcnQgeyBCYXNlQ29udHJvbGxlciB9IGZyb20gXCIuL0Jhc2VDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFRva2VuU2VydmljZSwgTWFzdGVyT3JkZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IE1hc3Rlck9yZGVyTW9kZWwsIFVwZGF0ZU1hc3Rlck9yZGVyTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuQFJvdXRlKCdtYXN0ZXJvcmRlcicpXHJcbkBUYWdzKFwiTWFzdGVyIE9yZGVyXCIpXHJcbmV4cG9ydCBjbGFzcyBNYXN0ZXJPcmRlckNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XHJcbiAgICBASW5qZWN0IG1hc3Rlck9yZGVyU2VydmljZTogTWFzdGVyT3JkZXJTZXJ2aWNlO1xyXG4gICAgQEluamVjdCB0b2tlblNlcnZpY2U6IFRva2VuU2VydmljZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGNyZWF0ZU1hc3Rlck9yZGVyUGF5bG9hZCBcclxuICAgICAqIE1hc3Rlck9yZGVyIGNyZWF0ZSBkYXRhIGJvZHkgcmVxdWVzdFxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdCBcclxuICAgICAqIHJlcXVlc3QgdG8gdmFsaWRhdGUgdGhlIHRva2VuXHJcbiAgICAgKi9cclxuICAgIEBQb3N0KClcclxuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVNYXN0ZXJPcmRlcihAQm9keSgpIGNyZWF0ZU1hc3Rlck9yZGVyUGF5bG9hZDogTWFzdGVyT3JkZXJNb2RlbCxcclxuICAgICAgICBAUmVxdWVzdCgpIHJlcXVlc3Q6IGFueSwgQEhlYWRlcigpIGF1dGhvcml6YXRpb246IGFueSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gdmFsaWRhdGUgdG9rZW5cclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudG9rZW5TZXJ2aWNlLnZhbGlkYXRlVG9rZW4ocmVxdWVzdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMubWFzdGVyT3JkZXJTZXJ2aWNlLmNyZWF0ZU1hc3Rlck9yZGVyKGNyZWF0ZU1hc3Rlck9yZGVyUGF5bG9hZCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdCBcclxuICAgICAqIHJlcXVlc3QgdG8gdmFsaWRhdGUgdGhlIHRva2VuXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBhdXRob3JpemF0aW9uIFxyXG4gICAgICogY2hlY2sgYXV0aG9yaXphdGlvbiBzZW5kaW5nIGZyb20gSGVhZGVyXHJcbiAgICAgKi9cclxuICAgIEBHZXQoKVxyXG4gICAgcHVibGljIGFzeW5jIGdldE1hc3Rlck9yZGVyRGV0YWlscyhAUmVxdWVzdCgpIHJlcXVlc3Q6IGFueSwgQEhlYWRlcigpIGF1dGhvcml6YXRpb246IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIHRva2VuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudG9rZW5TZXJ2aWNlLnZhbGlkYXRlVG9rZW4ocmVxdWVzdCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5tYXN0ZXJPcmRlclNlcnZpY2UuZ2V0TWFzdGVyT3JkZXJEZXRhaWxzKG51bGwpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHJlcXVlc3QgXHJcbiAgICAgKiByZXF1ZXN0IHRvIHZhbGlkYXRlIHRoZSB0b2tlblxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXphdGlvbiBcclxuICAgICAqIGNoZWNrIGF1dGhvcml6YXRpb24gc2VuZGluZyBmcm9tIEhlYWRlclxyXG4gICAgICovXHJcbiAgICBAR2V0KCdhdXRvSW5jcmVtZW50JylcclxuICAgIHB1YmxpYyBhc3luYyBnZXRNYXN0ZXJPcmRlckF1dG9JbmNyZW1lbnRObyhAUmVxdWVzdCgpIHJlcXVlc3Q6IGFueSwgQEhlYWRlcigpIGF1dGhvcml6YXRpb246IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIHRva2VuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudG9rZW5TZXJ2aWNlLnZhbGlkYXRlVG9rZW4ocmVxdWVzdCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5tYXN0ZXJPcmRlclNlcnZpY2UuZ2V0TWFzdGVyT3JkZXJJbmNyZW1lbnRObygpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGlkIFxyXG4gICAgICogTWFzdGVyT3JkZXIgSWRcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHJlcXVlc3QgXHJcbiAgICAgKiByZXF1ZXN0IHRvIHZhbGlkYXRlIHRoZSB0b2tlblxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXphdGlvbiBcclxuICAgICAqIGNoZWNrIGF1dGhvcml6YXRpb24gc2VuZGluZyBmcm9tIEhlYWRlclxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIEBHZXQoJ3tpZH0nKVxyXG4gICAgcHVibGljIGFzeW5jIGdldE1hc3Rlck9yZGVyQnlJZChpZDogc3RyaW5nLCBAUmVxdWVzdCgpIHJlcXVlc3Q6IGFueSwgQEhlYWRlcigpIGF1dGhvcml6YXRpb246IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIHRva2VuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudG9rZW5TZXJ2aWNlLnZhbGlkYXRlVG9rZW4ocmVxdWVzdCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5tYXN0ZXJPcmRlclNlcnZpY2UuZ2V0TWFzdGVyT3JkZXJEZXRhaWxzKGlkKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBpZCBcclxuICAgICAqIG1hc3RlciBvcmRlciBJZFxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gdXBkYXRlTWFzdGVyT3JkZXJQYXlsb2FkIFxyXG4gICAgICogdXBkYXRlIGRldGFpbHMgZm9yIHRoZSAgbWFzdGVyIG9yZGVyIHJlZ2lzdHJhdGlvblxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdCBcclxuICAgICAqIHJlcXVlc3QgdG8gdmFsaWRhdGUgdGhlIHRva2VuXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBhdXRob3JpemF0aW9uIFxyXG4gICAgICogY2hlY2sgYXV0aG9yaXphdGlvbiBzZW5kaW5nIGZyb20gSGVhZGVyXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgQFB1dCgne2lkfScpXHJcbiAgICBwdWJsaWMgYXN5bmMgdXBkYXRlTWFzdGVyT3JkZXJEZXRhaWxzKGlkOiBzdHJpbmcsIEBCb2R5KCkgdXBkYXRlTWFzdGVyT3JkZXJQYXlsb2FkOiBVcGRhdGVNYXN0ZXJPcmRlck1vZGVsLFxyXG4gICAgICAgIEBSZXF1ZXN0KCkgcmVxdWVzdDogYW55LCBASGVhZGVyKCkgYXV0aG9yaXphdGlvbjogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gdmFsaWRhdGUgdG9rZW5cclxuICAgICAgICAgICAgYXdhaXQgdGhpcy50b2tlblNlcnZpY2UudmFsaWRhdGVUb2tlbihyZXF1ZXN0KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLm1hc3Rlck9yZGVyU2VydmljZS51cGRhdGVNYXN0ZXJPcmRlckRldGFpbHMoaWQsIHVwZGF0ZU1hc3Rlck9yZGVyUGF5bG9hZCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gaWQgXHJcbiAgICAgKiBtYXN0ZXIgb3JkZXIgSWRcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHJlcXVlc3QgXHJcbiAgICAgKiByZXF1ZXN0IHRvIHZhbGlkYXRlIHRoZSB0b2tlblxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXphdGlvbiBcclxuICAgICAqIGNoZWNrIGF1dGhvcml6YXRpb24gc2VuZGluZyBmcm9tIEhlYWRlclxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIEBEZWxldGUoJ3tpZH0nKVxyXG4gICAgcHVibGljIGFzeW5jIGRlbGV0ZU1hc3Rlck9yZGVyRGV0YWlscyhpZDogc3RyaW5nLCBAUmVxdWVzdCgpIHJlcXVlc3Q6IGFueSwgQEhlYWRlcigpIGF1dGhvcml6YXRpb246IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIHRva2VuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudG9rZW5TZXJ2aWNlLnZhbGlkYXRlVG9rZW4ocmVxdWVzdCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5tYXN0ZXJPcmRlclNlcnZpY2UuZGVsZXRlTWFzdGVyT3JkZXJEZXRhaWxzKGlkKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
