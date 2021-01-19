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
exports.OrderService = void 0;
const typescript_ioc_1 = require("typescript-ioc");
const mongoConnection_1 = require("../../mongo/mongoConnection");
const index_1 = require("./index");
const uuid_1 = require("uuid");
const tsoa_1 = require("tsoa");
const ErrorHandler_1 = require("../../config/ErrorHandler");
let OrderService = class OrderService extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.dbHandler = new mongoConnection_1.DatabaseHandler('order');
    }
    createOrder(createOrderPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            // auto generate Master Order Id
            createOrderPayload.orderId = `order-${uuid_1.v4()}`;
            // Order Id will be generated from UI like auto increate for the value
            createOrderPayload.createdOn = createOrderPayload.updatedOn = new Date();
            let OrderAutoIncrement = yield this.getOrderIncrementNo();
            createOrderPayload.incrementNo = Number(OrderAutoIncrement.autoIncrement) + 1;
            // check Master Order displayId already exits or not
            if (createOrderPayload.displayOrderId) {
                yield this.checkorderIdExists(createOrderPayload.displayOrderId);
            }
            const orderResults = yield this.dbHandler.insertOne(createOrderPayload);
            if (orderResults) {
                return {
                    message: 'Inserted Successfully.'
                };
            }
            else {
                throw new ErrorHandler_1.PinError('Creation Failed', 400);
            }
        });
    }
    checkorderIdExists(displayOrderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const orderDetails = yield this.dbHandler.find({ displayOrderId: displayOrderId }, { createdOn: -1 }, { _id: 0 });
            if (orderDetails && orderDetails.length) {
                throw new ErrorHandler_1.PinError('Order displayId details already exists', 400);
            }
        });
    }
    getOrderIncrementNo() {
        return __awaiter(this, void 0, void 0, function* () {
            const orderDetails = yield this.dbHandler.find({}, { createdOn: -1 }, { _id: 0 });
            if (orderDetails && orderDetails.length) {
                let currentOrderDetails = orderDetails[0];
                if (currentOrderDetails && currentOrderDetails.incrementNo) {
                    return {
                        autoIncrement: Number(currentOrderDetails.incrementNo)
                    };
                }
                else {
                    return {
                        autoIncrement: 1
                    };
                }
            }
            else {
                return {
                    autoIncrement: 1
                };
            }
        });
    }
    getorderDetails(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                // get respective Master Order details
                const orderDetails = yield this.dbHandler.find({ orderId: id }, null, { _id: 0 });
                if (orderDetails && orderDetails.length) {
                    return orderDetails;
                }
                else {
                    throw new ErrorHandler_1.PinError('Order details not found', 404);
                }
            }
            else {
                //  get all Master Order
                const orderDetails = yield this.dbHandler.find({}, null, { _id: 0 });
                if (orderDetails && orderDetails.length) {
                    return orderDetails;
                }
                else {
                    throw new ErrorHandler_1.PinError('Order details not found', 404);
                }
            }
        });
    }
    updateorderDetails(id, updateorderPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                // fetch respective Master Order details
                const orderDetails = yield this.dbHandler.find({ orderId: id }, null, { _id: 0 });
                if (orderDetails && orderDetails.length) {
                    updateorderPayload.updatedOn = new Date();
                    const updatedorderDetails = yield this.dbHandler.updateOne({ orderId: id }, updateorderPayload, null, null);
                    if (updatedorderDetails) {
                        return {
                            message: "Updated successfully."
                        };
                    }
                    else {
                        throw new ErrorHandler_1.PinError('Updation Failed', 404);
                    }
                }
                else {
                    throw new ErrorHandler_1.PinError('Order details not found', 404);
                }
            }
            else {
                throw new ErrorHandler_1.PinError('Provide Order Id', 400);
            }
        });
    }
    deleteorderDetails(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                // fetch respective master order details from DB
                const orderDetails = yield this.dbHandler.find({ orderId: id }, null, { _id: 0 });
                if (orderDetails.length) {
                    const deleteResult = yield this.dbHandler.remove({ orderId: id });
                    if (deleteResult) {
                        return {
                            message: "Deleted successfully."
                        };
                    }
                    else {
                        throw new ErrorHandler_1.PinError('Deletion Failed', 404);
                    }
                }
                else {
                    throw new ErrorHandler_1.PinError('Order details not found', 404);
                }
            }
            else {
                throw new ErrorHandler_1.PinError('Provide Order Id', 400);
            }
        });
    }
    orderCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.dbHandler.count({});
        });
    }
};
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", index_1.TokenService)
], OrderService.prototype, "tokenService", void 0);
OrderService = __decorate([
    typescript_ioc_1.Singleton
], OrderService);
exports.OrderService = OrderService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2aWNlcy9pbnRlcm5hbC9vcmRlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQW1EO0FBQ25ELGlFQUE4RDtBQUU5RCxtQ0FBdUM7QUFDdkMsK0JBQW9DO0FBQ3BDLCtCQUFrQztBQUNsQyw0REFBcUQ7QUFHckQsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBYSxTQUFRLGlCQUFVO0lBQTVDOztRQUVXLGNBQVMsR0FBRyxJQUFJLGlDQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7SUFrSXBELENBQUM7SUFoSWdCLFdBQVcsQ0FBQyxrQkFBOEI7O1lBRW5ELGdDQUFnQztZQUNoQyxrQkFBa0IsQ0FBQyxPQUFPLEdBQUcsU0FBUyxTQUFNLEVBQUUsRUFBRSxDQUFDO1lBRWpELHNFQUFzRTtZQUN0RSxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFFekUsSUFBSSxrQkFBa0IsR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzFELGtCQUFrQixDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTlFLG9EQUFvRDtZQUNwRCxJQUFJLGtCQUFrQixDQUFDLGNBQWMsRUFBRTtnQkFDbkMsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDcEU7WUFFRCxNQUFNLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFFeEUsSUFBSSxZQUFZLEVBQUU7Z0JBQ2QsT0FBTztvQkFDSCxPQUFPLEVBQUUsd0JBQXdCO2lCQUNwQyxDQUFDO2FBQ0w7aUJBQU07Z0JBQ0gsTUFBTSxJQUFJLHVCQUFRLENBQUMsaUJBQWlCLEVB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SjtpQkFBTTtnQkFDSCxNQUFNLElBQUksdUJBQVEsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUMvQztRQUNMLENBQUM7S0FBQTtJQUVZLFVBQVU7O1lBQ25CLE9BQU8sTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQyxDQUFDO0tBQUE7Q0FDSixDQUFBO0FBbklXO0lBQVAsdUJBQU07OEJBQWUsb0JBQVk7a0RBQUM7QUFEMUIsWUFBWTtJQUR4QiwwQkFBUztHQUNHLFlBQVksQ0FvSXhCO0FBcElZLG9DQUFZIiwiZmlsZSI6InNlcnZpY2VzL2ludGVybmFsL29yZGVyU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpbmdsZXRvbiwgSW5qZWN0IH0gZnJvbSBcInR5cGVzY3JpcHQtaW9jXCI7XHJcbmltcG9ydCB7IERhdGFiYXNlSGFuZGxlciB9IGZyb20gXCIuLi8uLi9tb25nby9tb25nb0Nvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgT3JkZXJNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgVG9rZW5TZXJ2aWNlIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwidHNvYVwiO1xyXG5pbXBvcnQgeyBQaW5FcnJvciB9IGZyb20gXCIuLi8uLi9jb25maWcvRXJyb3JIYW5kbGVyXCI7XHJcblxyXG5AU2luZ2xldG9uXHJcbmV4cG9ydCBjbGFzcyBPcmRlclNlcnZpY2UgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIEBJbmplY3QgdG9rZW5TZXJ2aWNlOiBUb2tlblNlcnZpY2U7XHJcbiAgICBwdWJsaWMgZGJIYW5kbGVyID0gbmV3IERhdGFiYXNlSGFuZGxlcignb3JkZXInKTtcclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlT3JkZXIoY3JlYXRlT3JkZXJQYXlsb2FkOiBPcmRlck1vZGVsKSB7XHJcblxyXG4gICAgICAgIC8vIGF1dG8gZ2VuZXJhdGUgTWFzdGVyIE9yZGVyIElkXHJcbiAgICAgICAgY3JlYXRlT3JkZXJQYXlsb2FkLm9yZGVySWQgPSBgb3JkZXItJHt1dWlkdjQoKX1gO1xyXG5cclxuICAgICAgICAvLyBPcmRlciBJZCB3aWxsIGJlIGdlbmVyYXRlZCBmcm9tIFVJIGxpa2UgYXV0byBpbmNyZWF0ZSBmb3IgdGhlIHZhbHVlXHJcbiAgICAgICAgY3JlYXRlT3JkZXJQYXlsb2FkLmNyZWF0ZWRPbiA9IGNyZWF0ZU9yZGVyUGF5bG9hZC51cGRhdGVkT24gPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICBsZXQgT3JkZXJBdXRvSW5jcmVtZW50ID0gYXdhaXQgdGhpcy5nZXRPcmRlckluY3JlbWVudE5vKCk7XHJcbiAgICAgICAgY3JlYXRlT3JkZXJQYXlsb2FkLmluY3JlbWVudE5vID0gTnVtYmVyKE9yZGVyQXV0b0luY3JlbWVudC5hdXRvSW5jcmVtZW50KSArIDE7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIE1hc3RlciBPcmRlciBkaXNwbGF5SWQgYWxyZWFkeSBleGl0cyBvciBub3RcclxuICAgICAgICBpZiAoY3JlYXRlT3JkZXJQYXlsb2FkLmRpc3BsYXlPcmRlcklkKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY2hlY2tvcmRlcklkRXhpc3RzKGNyZWF0ZU9yZGVyUGF5bG9hZC5kaXNwbGF5T3JkZXJJZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvcmRlclJlc3VsdHMgPSBhd2FpdCB0aGlzLmRiSGFuZGxlci5pbnNlcnRPbmUoY3JlYXRlT3JkZXJQYXlsb2FkKTtcclxuXHJcbiAgICAgICAgaWYgKG9yZGVyUmVzdWx0cykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0luc2VydGVkIFN1Y2Nlc3NmdWxseS4nXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCdDcmVhdGlvbiBGYWlsZWQnLCA0MDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgY2hlY2tvcmRlcklkRXhpc3RzKGRpc3BsYXlPcmRlcklkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBvcmRlckRldGFpbHM6IGFueSA9IGF3YWl0IHRoaXMuZGJIYW5kbGVyLmZpbmQoe2Rpc3BsYXlPcmRlcklkOiBkaXNwbGF5T3JkZXJJZH0sIHtjcmVhdGVkT246IC0xfSwge19pZDogMH0pO1xyXG5cclxuICAgICAgICBpZiAob3JkZXJEZXRhaWxzICYmIG9yZGVyRGV0YWlscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCdPcmRlciBkaXNwbGF5SWQgZGV0YWlscyBhbHJlYWR5IGV4aXN0cycsIDQwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRPcmRlckluY3JlbWVudE5vKCkge1xyXG4gICAgICAgIGNvbnN0IG9yZGVyRGV0YWlsczogYW55ID0gYXdhaXQgdGhpcy5kYkhhbmRsZXIuZmluZCh7fSwge2NyZWF0ZWRPbjogLTF9LCB7X2lkOiAwfSk7XHJcblxyXG4gICAgICAgIGlmIChvcmRlckRldGFpbHMgJiYgb3JkZXJEZXRhaWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudE9yZGVyRGV0YWlscyA9IG9yZGVyRGV0YWlsc1swXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50T3JkZXJEZXRhaWxzICYmIGN1cnJlbnRPcmRlckRldGFpbHMuaW5jcmVtZW50Tm8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0luY3JlbWVudDogTnVtYmVyKGN1cnJlbnRPcmRlckRldGFpbHMuaW5jcmVtZW50Tm8pXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRvSW5jcmVtZW50OiAxXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGF1dG9JbmNyZW1lbnQ6IDFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldG9yZGVyRGV0YWlscyhpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgIC8vIGdldCByZXNwZWN0aXZlIE1hc3RlciBPcmRlciBkZXRhaWxzXHJcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyRGV0YWlsczogYW55ID0gYXdhaXQgdGhpcy5kYkhhbmRsZXIuZmluZCh7b3JkZXJJZDogaWR9LCBudWxsLCB7X2lkOiAwfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAob3JkZXJEZXRhaWxzICYmIG9yZGVyRGV0YWlscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcmRlckRldGFpbHM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUGluRXJyb3IoJ09yZGVyIGRldGFpbHMgbm90IGZvdW5kJywgNDA0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICBnZXQgYWxsIE1hc3RlciBPcmRlclxyXG4gICAgICAgICAgICBjb25zdCBvcmRlckRldGFpbHM6IGFueSA9IGF3YWl0IHRoaXMuZGJIYW5kbGVyLmZpbmQoe30sIG51bGwsIHtfaWQ6IDB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvcmRlckRldGFpbHMgJiYgb3JkZXJEZXRhaWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yZGVyRGV0YWlscztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQaW5FcnJvcignT3JkZXIgZGV0YWlscyBub3QgZm91bmQnLCA0MDQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyB1cGRhdGVvcmRlckRldGFpbHMoaWQsIHVwZGF0ZW9yZGVyUGF5bG9hZCkge1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICAvLyBmZXRjaCByZXNwZWN0aXZlIE1hc3RlciBPcmRlciBkZXRhaWxzXHJcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyRGV0YWlsczogYW55ID0gYXdhaXQgdGhpcy5kYkhhbmRsZXIuZmluZCh7b3JkZXJJZDogaWR9LCBudWxsLCB7X2lkOiAwfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAob3JkZXJEZXRhaWxzICYmIG9yZGVyRGV0YWlscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZW9yZGVyUGF5bG9hZC51cGRhdGVkT24gPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZG9yZGVyRGV0YWlscyA9ICBhd2FpdCB0aGlzLmRiSGFuZGxlci51cGRhdGVPbmUoe29yZGVySWQ6IGlkfSwgdXBkYXRlb3JkZXJQYXlsb2FkLCBudWxsLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVkb3JkZXJEZXRhaWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVcGRhdGVkIHN1Y2Nlc3NmdWxseS5cIiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCdVcGRhdGlvbiBGYWlsZWQnLCA0MDQpOyAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCdPcmRlciBkZXRhaWxzIG5vdCBmb3VuZCcsIDQwNCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUGluRXJyb3IoJ1Byb3ZpZGUgT3JkZXIgSWQnLCA0MDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZGVsZXRlb3JkZXJEZXRhaWxzKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgLy8gZmV0Y2ggcmVzcGVjdGl2ZSBtYXN0ZXIgb3JkZXIgZGV0YWlscyBmcm9tIERCXHJcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyRGV0YWlsczogYW55ID0gYXdhaXQgdGhpcy5kYkhhbmRsZXIuZmluZCh7b3JkZXJJZDogaWR9LCBudWxsLCB7X2lkOiAwfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAob3JkZXJEZXRhaWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlUmVzdWx0OiBhbnkgPSBhd2FpdCB0aGlzLmRiSGFuZGxlci5yZW1vdmUoe29yZGVySWQ6IGlkfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRlbGV0ZVJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRGVsZXRlZCBzdWNjZXNzZnVsbHkuXCIgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBQaW5FcnJvcignRGVsZXRpb24gRmFpbGVkJywgNDA0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQaW5FcnJvcignT3JkZXIgZGV0YWlscyBub3QgZm91bmQnLCA0MDQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCdQcm92aWRlIE9yZGVyIElkJywgNDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIG9yZGVyQ291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZGJIYW5kbGVyLmNvdW50KHt9KTtcclxuICAgIH1cclxufSJdfQ==
