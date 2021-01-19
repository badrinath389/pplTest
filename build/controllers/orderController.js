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
exports.OrderController = void 0;
const tsoa_1 = require("tsoa");
const typescript_ioc_1 = require("typescript-ioc");
const BaseController_1 = require("./BaseController");
const services_1 = require("../services");
let OrderController = class OrderController extends BaseController_1.BaseController {
    /**
     *
     * @param createOrderPayload
     * order create data body request
     *
     * @param request
     * request to validate the token
     */
    createOrder(createOrderPayload, request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.orderService.createOrder(createOrderPayload);
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
    getOrderDetails(request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.orderService.getorderDetails(null);
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
    getOrderAutoIncrementNo(request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.orderService.getOrderIncrementNo();
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    /**
     *
     * @param id
     * Order Id
     *
     * @param request
     * request to validate the token
     *
     * @param authorization
     * check authorization sending from Header
     *
     */
    getOrderById(id, request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.orderService.getorderDetails(id);
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    /**
     *
     * @param id
     * order Id
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
    updateOrderDetails(id, updateOrderPayload, request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.orderService.updateorderDetails(id, updateOrderPayload);
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    /**
     *
     * @param id
     * order Id
     *
     * @param request
     * request to validate the token
     *
     * @param authorization
     * check authorization sending from Header
     *
     */
    deleteorderDetails(id, request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.orderService.deleteorderDetails(id);
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
};
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", services_1.OrderService)
], OrderController.prototype, "orderService", void 0);
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", services_1.TokenService)
], OrderController.prototype, "tokenService", void 0);
__decorate([
    tsoa_1.Post(),
    __param(0, tsoa_1.Body()),
    __param(1, tsoa_1.Request()), __param(2, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "createOrder", null);
__decorate([
    tsoa_1.Get(),
    __param(0, tsoa_1.Request()), __param(1, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrderDetails", null);
__decorate([
    tsoa_1.Get('autoIncrement'),
    __param(0, tsoa_1.Request()), __param(1, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrderAutoIncrementNo", null);
__decorate([
    tsoa_1.Get('{id}'),
    __param(1, tsoa_1.Request()), __param(2, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrderById", null);
__decorate([
    tsoa_1.Put('{id}'),
    __param(1, tsoa_1.Body()),
    __param(2, tsoa_1.Request()), __param(3, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "updateOrderDetails", null);
__decorate([
    tsoa_1.Delete('{id}'),
    __param(1, tsoa_1.Request()), __param(2, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "deleteorderDetails", null);
OrderController = __decorate([
    tsoa_1.Route('order'),
    tsoa_1.Tags("Order")
], OrderController);
exports.OrderController = OrderController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVycy9vcmRlckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQXVGO0FBQ3ZGLG1EQUF3QztBQUN4QyxxREFBa0Q7QUFDbEQsMENBQXlEO0FBS3pELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWdCLFNBQVEsK0JBQWM7SUFJL0M7Ozs7Ozs7T0FPRztJQUVVLFdBQVcsQ0FBUyxrQkFBOEIsRUFDaEQsT0FBWSxFQUFZLGFBQWtCOztZQUNqRCxJQUFJO2dCQUNBLGlCQUFpQjtnQkFDakIsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFL0MsT0FBTyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDbEU7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNCO1FBQ1QsQ0FBQztLQUFBO0lBRUQ7Ozs7Ozs7T0FPRztJQUVVLGVBQWUsQ0FBWSxPQUFZLEVBQVksYUFBa0I7O1lBQzlFLElBQUk7Z0JBQ0EsaUJBQWlCO2dCQUNqQixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUUvQyxPQUFPLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDeEQ7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNCO1FBQ0wsQ0FBQztLQUFBO0lBRUQ7Ozs7Ozs7T0FPRztJQUVVLHVCQUF1QixDQUFZLE9BQVksRUFBWSxhQUFrQjs7WUFDdEYsSUFBSTtnQkFDQSxpQkFBaUI7Z0JBQ2pCLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRS9DLE9BQU8sTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDeEQ7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNCO1FBQ0wsQ0FBQztLQUFBO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7SUFFVSxZQUFZLENBQUMsRUFBVSxFQUFhLE9BQVksRUFBWSxhQUFrQjs7WUFDdkYsSUFBSTtnQkFDQSxpQkFBaUI7Z0JBQ2pCLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRS9DLE9BQU8sTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN0RDtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0I7UUFDTCxDQUFDO0tBQUE7SUFFRDs7Ozs7Ozs7Ozs7Ozs7T0FjRztJQUVVLGtCQUFrQixDQUFDLEVBQVUsRUFBVSxrQkFBb0MsRUFDekUsT0FBWSxFQUFZLGFBQWtCOztZQUNyRCxJQUFJO2dCQUNBLGlCQUFpQjtnQkFDakIsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFL0MsT0FBTyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsRUFBRSxFQUFFLGtCQUFrQixDQUFDLENBQUM7YUFDN0U7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNCO1FBQ0wsQ0FBQztLQUFBO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7SUFFVSxrQkFBa0IsQ0FBQyxFQUFVLEVBQWEsT0FBWSxFQUFZLGFBQWtCOztZQUM3RixJQUFJO2dCQUNBLGlCQUFpQjtnQkFDakIsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFL0MsT0FBTyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDekQ7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNCO1FBQ0wsQ0FBQztLQUFBO0NBQ0osQ0FBQTtBQTNJVztJQUFQLHVCQUFNOzhCQUFlLHVCQUFZO3FEQUFDO0FBQzNCO0lBQVAsdUJBQU07OEJBQWUsdUJBQVk7cURBQUM7QUFXbkM7SUFEQyxXQUFJLEVBQUU7SUFDbUIsV0FBQSxXQUFJLEVBQUUsQ0FBQTtJQUMzQixXQUFBLGNBQU8sRUFBRSxDQUFBLEVBQWdCLFdBQUEsYUFBTSxFQUFFLENBQUE7Ozs7a0RBU3JDO0FBV0Q7SUFEQyxVQUFHLEVBQUU7SUFDd0IsV0FBQSxjQUFPLEVBQUUsQ0FBQSxFQUFnQixXQUFBLGFBQU0sRUFBRSxDQUFBOzs7O3NEQVM5RDtBQVdEO0lBREMsVUFBRyxDQUFDLGVBQWUsQ0FBQztJQUNpQixXQUFBLGNBQU8sRUFBRSxDQUFBLEVBQWdCLFdBQUEsYUFBTSxFQUFFLENBQUE7Ozs7OERBU3RFO0FBZUQ7SUFEQyxVQUFHLENBQUMsTUFBTSxDQUFDO0lBQzJCLFdBQUEsY0FBTyxFQUFFLENBQUEsRUFBZ0IsV0FBQSxhQUFNLEVBQUUsQ0FBQTs7OzttREFTdkU7QUFrQkQ7SUFEQyxVQUFHLENBQUMsTUFBTSxDQUFDO0lBQ2lDLFdBQUEsV0FBSSxFQUFFLENBQUE7SUFDOUMsV0FBQSxjQUFPLEVBQUUsQ0FBQSxFQUFnQixXQUFBLGFBQU0sRUFBRSxDQUFBOzs7O3lEQVNyQztBQWVEO0lBREMsYUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM4QixXQUFBLGNBQU8sRUFBRSxDQUFBLEVBQWdCLFdBQUEsYUFBTSxFQUFFLENBQUE7Ozs7eURBUzdFO0FBM0lRLGVBQWU7SUFGM0IsWUFBSyxDQUFDLE9BQU8sQ0FBQztJQUNkLFdBQUksQ0FBQyxPQUFPLENBQUM7R0FDRCxlQUFlLENBNEkzQjtBQTVJWSwwQ0FBZSIsImZpbGUiOiJjb250cm9sbGVycy9vcmRlckNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dldCwgUm91dGUsIFRhZ3MsIFBvc3QsIEJvZHksIFJlcXVlc3QsIERlbGV0ZSwgSGVhZCwgSGVhZGVyLCBQdXQgfSBmcm9tIFwidHNvYVwiO1xyXG5pbXBvcnQgeyBJbmplY3QgfSBmcm9tIFwidHlwZXNjcmlwdC1pb2NcIjtcclxuaW1wb3J0IHsgQmFzZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9CYXNlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBUb2tlblNlcnZpY2UsIE9yZGVyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBPcmRlck1vZGVsLCBVcGRhdGVPcmRlck1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbkBSb3V0ZSgnb3JkZXInKVxyXG5AVGFncyhcIk9yZGVyXCIpXHJcbmV4cG9ydCBjbGFzcyBPcmRlckNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XHJcbiAgICBASW5qZWN0IG9yZGVyU2VydmljZTogT3JkZXJTZXJ2aWNlO1xyXG4gICAgQEluamVjdCB0b2tlblNlcnZpY2U6IFRva2VuU2VydmljZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGNyZWF0ZU9yZGVyUGF5bG9hZCBcclxuICAgICAqIG9yZGVyIGNyZWF0ZSBkYXRhIGJvZHkgcmVxdWVzdFxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdCBcclxuICAgICAqIHJlcXVlc3QgdG8gdmFsaWRhdGUgdGhlIHRva2VuXHJcbiAgICAgKi9cclxuICAgIEBQb3N0KClcclxuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVPcmRlcihAQm9keSgpIGNyZWF0ZU9yZGVyUGF5bG9hZDogT3JkZXJNb2RlbCxcclxuICAgICAgICBAUmVxdWVzdCgpIHJlcXVlc3Q6IGFueSwgQEhlYWRlcigpIGF1dGhvcml6YXRpb246IGFueSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gdmFsaWRhdGUgdG9rZW5cclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudG9rZW5TZXJ2aWNlLnZhbGlkYXRlVG9rZW4ocmVxdWVzdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMub3JkZXJTZXJ2aWNlLmNyZWF0ZU9yZGVyKGNyZWF0ZU9yZGVyUGF5bG9hZCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdCBcclxuICAgICAqIHJlcXVlc3QgdG8gdmFsaWRhdGUgdGhlIHRva2VuXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBhdXRob3JpemF0aW9uIFxyXG4gICAgICogY2hlY2sgYXV0aG9yaXphdGlvbiBzZW5kaW5nIGZyb20gSGVhZGVyXHJcbiAgICAgKi9cclxuICAgIEBHZXQoKVxyXG4gICAgcHVibGljIGFzeW5jIGdldE9yZGVyRGV0YWlscyhAUmVxdWVzdCgpIHJlcXVlc3Q6IGFueSwgQEhlYWRlcigpIGF1dGhvcml6YXRpb246IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIHRva2VuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudG9rZW5TZXJ2aWNlLnZhbGlkYXRlVG9rZW4ocmVxdWVzdCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5vcmRlclNlcnZpY2UuZ2V0b3JkZXJEZXRhaWxzKG51bGwpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHJlcXVlc3QgXHJcbiAgICAgKiByZXF1ZXN0IHRvIHZhbGlkYXRlIHRoZSB0b2tlblxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXphdGlvbiBcclxuICAgICAqIGNoZWNrIGF1dGhvcml6YXRpb24gc2VuZGluZyBmcm9tIEhlYWRlclxyXG4gICAgICovXHJcbiAgICBAR2V0KCdhdXRvSW5jcmVtZW50JylcclxuICAgIHB1YmxpYyBhc3luYyBnZXRPcmRlckF1dG9JbmNyZW1lbnRObyhAUmVxdWVzdCgpIHJlcXVlc3Q6IGFueSwgQEhlYWRlcigpIGF1dGhvcml6YXRpb246IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIHRva2VuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudG9rZW5TZXJ2aWNlLnZhbGlkYXRlVG9rZW4ocmVxdWVzdCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5vcmRlclNlcnZpY2UuZ2V0T3JkZXJJbmNyZW1lbnRObygpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGlkIFxyXG4gICAgICogT3JkZXIgSWRcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHJlcXVlc3QgXHJcbiAgICAgKiByZXF1ZXN0IHRvIHZhbGlkYXRlIHRoZSB0b2tlblxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXphdGlvbiBcclxuICAgICAqIGNoZWNrIGF1dGhvcml6YXRpb24gc2VuZGluZyBmcm9tIEhlYWRlclxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIEBHZXQoJ3tpZH0nKVxyXG4gICAgcHVibGljIGFzeW5jIGdldE9yZGVyQnlJZChpZDogc3RyaW5nLCBAUmVxdWVzdCgpIHJlcXVlc3Q6IGFueSwgQEhlYWRlcigpIGF1dGhvcml6YXRpb246IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIHRva2VuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudG9rZW5TZXJ2aWNlLnZhbGlkYXRlVG9rZW4ocmVxdWVzdCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5vcmRlclNlcnZpY2UuZ2V0b3JkZXJEZXRhaWxzKGlkKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBpZCBcclxuICAgICAqIG9yZGVyIElkXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB1cGRhdGVNYXN0ZXJPcmRlclBheWxvYWQgXHJcbiAgICAgKiB1cGRhdGUgZGV0YWlscyBmb3IgdGhlICBtYXN0ZXIgb3JkZXIgcmVnaXN0cmF0aW9uXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0IFxyXG4gICAgICogcmVxdWVzdCB0byB2YWxpZGF0ZSB0aGUgdG9rZW5cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGF1dGhvcml6YXRpb24gXHJcbiAgICAgKiBjaGVjayBhdXRob3JpemF0aW9uIHNlbmRpbmcgZnJvbSBIZWFkZXJcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBAUHV0KCd7aWR9JylcclxuICAgIHB1YmxpYyBhc3luYyB1cGRhdGVPcmRlckRldGFpbHMoaWQ6IHN0cmluZywgQEJvZHkoKSB1cGRhdGVPcmRlclBheWxvYWQ6IFVwZGF0ZU9yZGVyTW9kZWwsXHJcbiAgICAgICAgQFJlcXVlc3QoKSByZXF1ZXN0OiBhbnksIEBIZWFkZXIoKSBhdXRob3JpemF0aW9uOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyB2YWxpZGF0ZSB0b2tlblxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnRva2VuU2VydmljZS52YWxpZGF0ZVRva2VuKHJlcXVlc3QpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMub3JkZXJTZXJ2aWNlLnVwZGF0ZW9yZGVyRGV0YWlscyhpZCwgdXBkYXRlT3JkZXJQYXlsb2FkKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBpZCBcclxuICAgICAqIG9yZGVyIElkXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0IFxyXG4gICAgICogcmVxdWVzdCB0byB2YWxpZGF0ZSB0aGUgdG9rZW5cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGF1dGhvcml6YXRpb24gXHJcbiAgICAgKiBjaGVjayBhdXRob3JpemF0aW9uIHNlbmRpbmcgZnJvbSBIZWFkZXJcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBARGVsZXRlKCd7aWR9JylcclxuICAgIHB1YmxpYyBhc3luYyBkZWxldGVvcmRlckRldGFpbHMoaWQ6IHN0cmluZywgQFJlcXVlc3QoKSByZXF1ZXN0OiBhbnksIEBIZWFkZXIoKSBhdXRob3JpemF0aW9uOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyB2YWxpZGF0ZSB0b2tlblxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnRva2VuU2VydmljZS52YWxpZGF0ZVRva2VuKHJlcXVlc3QpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMub3JkZXJTZXJ2aWNlLmRlbGV0ZW9yZGVyRGV0YWlscyhpZCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
