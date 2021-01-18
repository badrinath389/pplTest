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
exports.VehicleRegistrationController = void 0;
const tsoa_1 = require("tsoa");
const typescript_ioc_1 = require("typescript-ioc");
const BaseController_1 = require("./BaseController");
const services_1 = require("../services");
let VehicleRegistrationController = class VehicleRegistrationController extends BaseController_1.BaseController {
    /**
     *
     * @param createVehicleModel
     * vehicle create data body request
     *
     * @param request
     * request to validate the token
     */
    createVehicleRegistation(createVehiclePayload, request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.vehicleRegistrationService.createVehicleRegistation(createVehiclePayload);
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
    getVehicleRegistations(request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.vehicleRegistrationService.getVehicleRegistration(null);
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
    getVehicleRegAutoIncrementNo(request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.vehicleRegistrationService.getVehicleIncrementNo();
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    /**
     *
     * @param id
     * vehicle registration Id
     *
     * @param request
     * request to validate the token
     *
     * @param authorization
     * check authorization sending from Header
     *
     */
    getVehicleRegistrationById(id, request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.vehicleRegistrationService.getVehicleRegistration(id);
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    /**
     *
     * @param id
     * vehicle registration Id
     *
     * @param updateVehicleRegPayload
     * update details for the vehicle registration
     *
     * @param request
     * request to validate the token
     *
     * @param authorization
     * check authorization sending from Header
     *
     */
    updateVehicleRegistration(id, updateVehicleRegPayload, request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.vehicleRegistrationService.updateVehicleRegistration(id, updateVehicleRegPayload);
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    deleteVehicleRegistration(id, request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.vehicleRegistrationService.deleteVehicleRegistration(id);
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
};
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", services_1.VehicleRegistrationService)
], VehicleRegistrationController.prototype, "vehicleRegistrationService", void 0);
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", services_1.TokenService)
], VehicleRegistrationController.prototype, "tokenService", void 0);
__decorate([
    tsoa_1.Post(),
    __param(0, tsoa_1.Body()),
    __param(1, tsoa_1.Request()), __param(2, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], VehicleRegistrationController.prototype, "createVehicleRegistation", null);
__decorate([
    tsoa_1.Get(),
    __param(0, tsoa_1.Request()), __param(1, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VehicleRegistrationController.prototype, "getVehicleRegistations", null);
__decorate([
    tsoa_1.Get('autoIncrement'),
    __param(0, tsoa_1.Request()), __param(1, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VehicleRegistrationController.prototype, "getVehicleRegAutoIncrementNo", null);
__decorate([
    tsoa_1.Get('{id}'),
    __param(1, tsoa_1.Request()), __param(2, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], VehicleRegistrationController.prototype, "getVehicleRegistrationById", null);
__decorate([
    tsoa_1.Put('{id}'),
    __param(1, tsoa_1.Body()),
    __param(2, tsoa_1.Request()), __param(3, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], VehicleRegistrationController.prototype, "updateVehicleRegistration", null);
__decorate([
    tsoa_1.Delete('{id}'),
    __param(1, tsoa_1.Request()), __param(2, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], VehicleRegistrationController.prototype, "deleteVehicleRegistration", null);
VehicleRegistrationController = __decorate([
    tsoa_1.Route('vehicle'),
    tsoa_1.Tags("Vehicle Registration")
], VehicleRegistrationController);
exports.VehicleRegistrationController = VehicleRegistrationController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVycy92ZWhpY2xlUmVnaXN0cmF0aW9uQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBdUY7QUFDdkYsbURBQXdDO0FBQ3hDLHFEQUFrRDtBQUNsRCwwQ0FBdUU7QUFLdkUsSUFBYSw2QkFBNkIsR0FBMUMsTUFBYSw2QkFBOEIsU0FBUSwrQkFBYztJQUk3RDs7Ozs7OztPQU9HO0lBRVUsd0JBQXdCLENBQVMsb0JBQThDLEVBQzdFLE9BQVksRUFBWSxhQUFrQjs7WUFDakQsSUFBSTtnQkFDQSxpQkFBaUI7Z0JBQ2pCLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRS9DLE9BQU8sTUFBTSxJQUFJLENBQUMsMEJBQTBCLENBQUMsd0JBQXdCLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUMvRjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0I7UUFDVCxDQUFDO0tBQUE7SUFFRDs7Ozs7OztPQU9HO0lBRVUsc0JBQXNCLENBQVksT0FBWSxFQUFZLGFBQWtCOztZQUNyRixJQUFJO2dCQUNBLGlCQUFpQjtnQkFDakIsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFL0MsT0FBTyxNQUFNLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3RTtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0I7UUFDTCxDQUFDO0tBQUE7SUFFRDs7Ozs7OztPQU9HO0lBRVUsNEJBQTRCLENBQVksT0FBWSxFQUFZLGFBQWtCOztZQUMzRixJQUFJO2dCQUNBLGlCQUFpQjtnQkFDakIsTUFBTSxJQUFJ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aEIsV0FBSSxDQUFDLHNCQUFzQixDQUFDO0dBQ2hCLDZCQUE2QixDQWdJekM7QUFoSVksc0VBQTZCIiwiZmlsZSI6ImNvbnRyb2xsZXJzL3ZlaGljbGVSZWdpc3RyYXRpb25Db250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHZXQsIFJvdXRlLCBUYWdzLCBQb3N0LCBCb2R5LCBSZXF1ZXN0LCBEZWxldGUsIEhlYWQsIEhlYWRlciwgUHV0IH0gZnJvbSBcInRzb2FcIjtcclxuaW1wb3J0IHsgSW5qZWN0IH0gZnJvbSBcInR5cGVzY3JpcHQtaW9jXCI7XHJcbmltcG9ydCB7IEJhc2VDb250cm9sbGVyIH0gZnJvbSBcIi4vQmFzZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgVG9rZW5TZXJ2aWNlLCBWZWhpY2xlUmVnaXN0cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBWZWhpY2xlUmVnaXN0cmF0aW9uTW9kZWwsIFVwZGF0ZVZlaGljbGVSZWdpc3RyYXRpb25Nb2RlbCB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5AUm91dGUoJ3ZlaGljbGUnKVxyXG5AVGFncyhcIlZlaGljbGUgUmVnaXN0cmF0aW9uXCIpXHJcbmV4cG9ydCBjbGFzcyBWZWhpY2xlUmVnaXN0cmF0aW9uQ29udHJvbGxlciBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcclxuICAgIEBJbmplY3QgdmVoaWNsZVJlZ2lzdHJhdGlvblNlcnZpY2U6IFZlaGljbGVSZWdpc3RyYXRpb25TZXJ2aWNlO1xyXG4gICAgQEluamVjdCB0b2tlblNlcnZpY2U6IFRva2VuU2VydmljZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGNyZWF0ZVZlaGljbGVNb2RlbCBcclxuICAgICAqIHZlaGljbGUgY3JlYXRlIGRhdGEgYm9keSByZXF1ZXN0XHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0IFxyXG4gICAgICogcmVxdWVzdCB0byB2YWxpZGF0ZSB0aGUgdG9rZW5cclxuICAgICAqL1xyXG4gICAgQFBvc3QoKVxyXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZVZlaGljbGVSZWdpc3RhdGlvbihAQm9keSgpIGNyZWF0ZVZlaGljbGVQYXlsb2FkOiBWZWhpY2xlUmVnaXN0cmF0aW9uTW9kZWwsXHJcbiAgICAgICAgQFJlcXVlc3QoKSByZXF1ZXN0OiBhbnksIEBIZWFkZXIoKSBhdXRob3JpemF0aW9uOiBhbnkpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIHZhbGlkYXRlIHRva2VuXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnRva2VuU2VydmljZS52YWxpZGF0ZVRva2VuKHJlcXVlc3QpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnZlaGljbGVSZWdpc3RyYXRpb25TZXJ2aWNlLmNyZWF0ZVZlaGljbGVSZWdpc3RhdGlvbihjcmVhdGVWZWhpY2xlUGF5bG9hZCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdCBcclxuICAgICAqIHJlcXVlc3QgdG8gdmFsaWRhdGUgdGhlIHRva2VuXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBhdXRob3JpemF0aW9uIFxyXG4gICAgICogY2hlY2sgYXV0aG9yaXphdGlvbiBzZW5kaW5nIGZyb20gSGVhZGVyXHJcbiAgICAgKi9cclxuICAgIEBHZXQoKVxyXG4gICAgcHVibGljIGFzeW5jIGdldFZlaGljbGVSZWdpc3RhdGlvbnMoQFJlcXVlc3QoKSByZXF1ZXN0OiBhbnksIEBIZWFkZXIoKSBhdXRob3JpemF0aW9uOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyB2YWxpZGF0ZSB0b2tlblxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnRva2VuU2VydmljZS52YWxpZGF0ZVRva2VuKHJlcXVlc3QpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMudmVoaWNsZVJlZ2lzdHJhdGlvblNlcnZpY2UuZ2V0VmVoaWNsZVJlZ2lzdHJhdGlvbihudWxsKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0IFxyXG4gICAgICogcmVxdWVzdCB0byB2YWxpZGF0ZSB0aGUgdG9rZW5cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGF1dGhvcml6YXRpb24gXHJcbiAgICAgKiBjaGVjayBhdXRob3JpemF0aW9uIHNlbmRpbmcgZnJvbSBIZWFkZXJcclxuICAgICAqL1xyXG4gICAgQEdldCgnYXV0b0luY3JlbWVudCcpXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0VmVoaWNsZVJlZ0F1dG9JbmNyZW1lbnRObyhAUmVxdWVzdCgpIHJlcXVlc3Q6IGFueSwgQEhlYWRlcigpIGF1dGhvcml6YXRpb246IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIHRva2VuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudG9rZW5TZXJ2aWNlLnZhbGlkYXRlVG9rZW4ocmVxdWVzdCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy52ZWhpY2xlUmVnaXN0cmF0aW9uU2VydmljZS5nZXRWZWhpY2xlSW5jcmVtZW50Tm8oKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBpZCBcclxuICAgICAqIHZlaGljbGUgcmVnaXN0cmF0aW9uIElkXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0IFxyXG4gICAgICogcmVxdWVzdCB0byB2YWxpZGF0ZSB0aGUgdG9rZW5cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGF1dGhvcml6YXRpb24gXHJcbiAgICAgKiBjaGVjayBhdXRob3JpemF0aW9uIHNlbmRpbmcgZnJvbSBIZWFkZXJcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBAR2V0KCd7aWR9JylcclxuICAgIHB1YmxpYyBhc3luYyBnZXRWZWhpY2xlUmVnaXN0cmF0aW9uQnlJZChpZDogc3RyaW5nLCBAUmVxdWVzdCgpIHJlcXVlc3Q6IGFueSwgQEhlYWRlcigpIGF1dGhvcml6YXRpb246IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIHRva2VuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudG9rZW5TZXJ2aWNlLnZhbGlkYXRlVG9rZW4ocmVxdWVzdCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy52ZWhpY2xlUmVnaXN0cmF0aW9uU2VydmljZS5nZXRWZWhpY2xlUmVnaXN0cmF0aW9uKGlkKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBpZCBcclxuICAgICAqIHZlaGljbGUgcmVnaXN0cmF0aW9uIElkXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB1cGRhdGVWZWhpY2xlUmVnUGF5bG9hZCBcclxuICAgICAqIHVwZGF0ZSBkZXRhaWxzIGZvciB0aGUgdmVoaWNsZSByZWdpc3RyYXRpb25cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHJlcXVlc3QgXHJcbiAgICAgKiByZXF1ZXN0IHRvIHZhbGlkYXRlIHRoZSB0b2tlblxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXphdGlvbiBcclxuICAgICAqIGNoZWNrIGF1dGhvcml6YXRpb24gc2VuZGluZyBmcm9tIEhlYWRlclxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIEBQdXQoJ3tpZH0nKVxyXG4gICAgcHVibGljIGFzeW5jIHVwZGF0ZVZlaGljbGVSZWdpc3RyYXRpb24oaWQ6IHN0cmluZywgQEJvZHkoKSB1cGRhdGVWZWhpY2xlUmVnUGF5bG9hZDogVXBkYXRlVmVoaWNsZVJlZ2lzdHJhdGlvbk1vZGVsLFxyXG4gICAgICAgIEBSZXF1ZXN0KCkgcmVxdWVzdDogYW55LCBASGVhZGVyKCkgYXV0aG9yaXphdGlvbjogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gdmFsaWRhdGUgdG9rZW5cclxuICAgICAgICAgICAgYXdhaXQgdGhpcy50b2tlblNlcnZpY2UudmFsaWRhdGVUb2tlbihyZXF1ZXN0KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnZlaGljbGVSZWdpc3RyYXRpb25TZXJ2aWNlLnVwZGF0ZVZlaGljbGVSZWdpc3RyYXRpb24oaWQsIHVwZGF0ZVZlaGljbGVSZWdQYXlsb2FkKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQERlbGV0ZSgne2lkfScpXHJcbiAgICBwdWJsaWMgYXN5bmMgZGVsZXRlVmVoaWNsZVJlZ2lzdHJhdGlvbihpZDogc3RyaW5nLCBAUmVxdWVzdCgpIHJlcXVlc3Q6IGFueSwgQEhlYWRlcigpIGF1dGhvcml6YXRpb246IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIHRva2VuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudG9rZW5TZXJ2aWNlLnZhbGlkYXRlVG9rZW4ocmVxdWVzdCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy52ZWhpY2xlUmVnaXN0cmF0aW9uU2VydmljZS5kZWxldGVWZWhpY2xlUmVnaXN0cmF0aW9uKGlkKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
