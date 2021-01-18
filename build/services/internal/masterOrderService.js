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
exports.MasterOrderService = void 0;
const typescript_ioc_1 = require("typescript-ioc");
const mongoConnection_1 = require("../../mongo/mongoConnection");
const index_1 = require("./index");
const uuid_1 = require("uuid");
const tsoa_1 = require("tsoa");
const ErrorHandler_1 = require("../../config/ErrorHandler");
let MasterOrderService = class MasterOrderService extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.dbHandler = new mongoConnection_1.DatabaseHandler('masterOrder');
    }
    createMasterOrder(masterOrderPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            // auto generate Master Order Id
            masterOrderPayload.masterOrderId = `masterorder-${uuid_1.v4()}`;
            // Master Order Id will be generated from UI like auto increate for the value
            masterOrderPayload.createdOn = masterOrderPayload.updatedOn = new Date();
            let MasterOrderAutoIncrement = yield this.getMasterOrderIncrementNo();
            masterOrderPayload.incrementNo = Number(MasterOrderAutoIncrement.autoIncrement) + 1;
            // check Master Order displayId already exits or not
            if (masterOrderPayload.displayMasterId) {
                yield this.checkMasterOrderIdExists(masterOrderPayload.displayMasterId);
            }
            const masterOrderResults = yield this.dbHandler.insertOne(masterOrderPayload);
            if (masterOrderResults) {
                return {
                    message: 'Inserted Successfully.'
                };
            }
            else {
                throw new ErrorHandler_1.PinError('Creation Failed', 400);
            }
        });
    }
    checkMasterOrderIdExists(displayMasterId) {
        return __awaiter(this, void 0, void 0, function* () {
            const masterOrderDetails = yield this.dbHandler.find({ displayMasterId: displayMasterId }, { createdOn: -1 }, { _id: 0 });
            if (masterOrderDetails && masterOrderDetails.length) {
                throw new ErrorHandler_1.PinError('Master order displayId details already exists', 400);
            }
        });
    }
    getMasterOrderIncrementNo() {
        return __awaiter(this, void 0, void 0, function* () {
            const masterOrderDetails = yield this.dbHandler.find({}, { createdOn: -1 }, { _id: 0 });
            if (masterOrderDetails && masterOrderDetails.length) {
                let currentmasterOrderDetails = masterOrderDetails[0];
                if (currentmasterOrderDetails && currentmasterOrderDetails.incrementNo) {
                    return {
                        autoIncrement: Number(currentmasterOrderDetails.incrementNo)
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
    getMasterOrderDetails(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                // get respective Master Order details
                const masterOrderDetails = yield this.dbHandler.find({ masterOrderId: id }, null, { _id: 0 });
                if (masterOrderDetails && masterOrderDetails.length) {
                    return masterOrderDetails;
                }
                else {
                    throw new ErrorHandler_1.PinError('Master Order details not found', 404);
                }
            }
            else {
                //  get all Master Order
                const masterOrderDetails = yield this.dbHandler.find({}, null, { _id: 0 });
                if (masterOrderDetails && masterOrderDetails.length) {
                    return masterOrderDetails;
                }
                else {
                    throw new ErrorHandler_1.PinError('Master Order details not found', 404);
                }
            }
        });
    }
    updateMasterOrderDetails(id, updateMasterOrderPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                // fetch respective Master Order details
                const masterOrderDetails = yield this.dbHandler.find({ masterOrderId: id }, null, { _id: 0 });
                if (masterOrderDetails && masterOrderDetails.length) {
                    updateMasterOrderPayload.updatedOn = new Date();
                    const updatedMasterOrderDetails = yield this.dbHandler.updateOne({ masterOrderId: id }, updateMasterOrderPayload, null, null);
                    if (updatedMasterOrderDetails) {
                        return {
                            message: "Updated successfully."
                        };
                    }
                    else {
                        throw new ErrorHandler_1.PinError('Updation Failed', 404);
                    }
                }
                else {
                    throw new ErrorHandler_1.PinError('Master Order details not found', 404);
                }
            }
            else {
                throw new ErrorHandler_1.PinError('Provide Master Order Id', 400);
            }
        });
    }
    deleteMasterOrderDetails(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                // fetch respective master order details from DB
                const masterOrderDetails = yield this.dbHandler.find({ masterOrderId: id }, null, { _id: 0 });
                if (masterOrderDetails.length) {
                    const deleteResult = yield this.dbHandler.remove({ masterOrderId: id });
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
                    throw new ErrorHandler_1.PinError('Master Order details not found', 404);
                }
            }
            else {
                throw new ErrorHandler_1.PinError('Provide Master Order Id', 400);
            }
        });
    }
    masterOrderCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.dbHandler.count({});
        });
    }
};
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", index_1.TokenService)
], MasterOrderService.prototype, "tokenService", void 0);
MasterOrderService = __decorate([
    typescript_ioc_1.Singleton
], MasterOrderService);
exports.MasterOrderService = MasterOrderService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2aWNlcy9pbnRlcm5hbC9tYXN0ZXJPcmRlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQW1EO0FBQ25ELGlFQUE4RDtBQUU5RCxtQ0FBdUM7QUFDdkMsK0JBQW9DO0FBQ3BDLCtCQUFrQztBQUNsQyw0REFBcUQ7QUFHckQsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBbUIsU0FBUSxpQkFBVTtJQUFsRDs7UUFFVyxjQUFTLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBa0kxRCxDQUFDO0lBaElnQixpQkFBaUIsQ0FBQyxrQkFBb0M7O1lBRS9ELGdDQUFnQztZQUNoQyxrQkFBa0IsQ0FBQyxhQUFhLEdBQUcsZUFBZSxTQUFNLEVBQUUsRUFBRSxDQUFDO1lBRTdELDZFQUE2RTtZQUM3RSxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFFekUsSUFBSSx3QkFBd0IsR0FBRyxNQUFNLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1lBQ3RFLGtCQUFrQixDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXBGLG9EQUFvRDtZQUNwRCxJQUFJLGtCQUFrQixDQUFDLGVBQWUsRUFBRTtnQkFDcEMsTUFBTSxJQUFJLENBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDM0U7WUFFRCxNQUFNLGtCQUFrQixHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUU5RSxJQUFJLGtCQUFrQixFQUFFO2dCQUNwQixPQUFPO29CQUNILE9BQU8sRUFBRSx3QkFBd0I7aUJBQ3BDLENBQUM7YUFDTDtpQkFBTTtnQkFDSCxNQUFNLElBQUksdUJBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUM5QztRQUNMLENBQUM7S0FBQTtJQUVZLHdCQUF3QixDQUFDLGVBQXVCOztZQUN6RCxNQUFNLGtCQUFrQixHQUFRLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQyxlQUFlLEVBQUUsZUFBZSxFQUFDLEVBQUUsRUFBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBRXpILElBQUksa0JBQWtCLElBQUksa0JBQWtCLENBQUMsTUFBTSxFQUFFO2dCQUNqRCxNQUFNLElBQUksdUJBQVEsQ0FBQywrQ0FBK0MsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUM1RTtRQUNMLENBQUM7S0FBQTtJQUVZLHlCQUF5Qjs7WUFDbEMsTUFBTSxrQkFBa0IsR0FBUSxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7WUFFekYsSUFBSSxrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pELElBQUkseUJBQXlCLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXRELElBQUkseUJBQXlCLElBQUkseUJBQXlCLENBQUMsV0FBVyxFQUFFO29CQUNwRSxPQUFPO3dCQUNILGFBQWEsRUFBRSxNQUFNLENBQUMseUJBQXlCLENBQUMsV0FBVyxDQUFDO3FCQUMvRCxDQUFDO2lCQUNMO3FCQUFNO29CQUNILE9BQU87d0JBQ0gsYUFBYSxFQUFFLENBQUM7cUJBQ25CLENBQUM7aUJBQ0w7YUFDSjtpQkFBTTtnQkFDSCxPQUFPO29CQUNILGFBQWEsRUFBRSxDQUFDO2lCQUNuQixDQUFDO2FBQ0w7UUFDTCxDQUFDO0tBQUE7SUFFWSxxQkFBcUIsQ0FBQyxFQUFVOztZQUN6QyxJQUFJLEVBQUUsRUFBRTtnQkFDSixzQ0FBc0M7Z0JBQ3RDLE1BQU0sa0JBQWtCLEdBQVEsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLGFBQWEsRUFBRSxFQUFFLEVBQUMsRUFBRSxJQUFJLEVBQUUsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztnQkFFL0YsSUFBSSxrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLEVBQUU7b0JBQ2pELE9BQU8sa0JBQWtCLENBQUM7aUJBQzdCO3FCQUFNO29CQUNILE1BQU0sSUFBSSx1QkFBUSxDQUFDLGdDQUFnQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUM3RDthQUNKO2lCQUFNO2dCQUNILHdCQUF3QjtnQkFDeEIsTUFBTSxrQkFBa0IsR0FBUSxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztnQkFFOUUsSUFBSSxrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLEVBQUU7b0JBQ2pELE9BQU8sa0JBQWtCLENBQUM7aUJBQzdCO3FCQUFNO29CQUNILE1BQU0sSUFBSSx1QkFBUSxDQUFDLGdDQUFnQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUM3RDthQUNKO1FBQ0wsQ0FBQztLQUFBO0lBRVksd0JBQXdCLENBQUMsRUFBRSxFQUFFLHdCQUF3Qjs7WUFDOUQsSUFBSSxFQUFFLEVBQUU7Z0JBQ0osd0NBQXdDO2dCQUN4QyxNQUFNLGtCQUFrQixHQUFRLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQyxhQUFhLEVBQUUsRUFBRSxFQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7Z0JBRS9GLElBQUksa0JBQWtCLElBQUksa0JBQWtCLENBQUMsTUFBTSxFQUFFO29CQUNqRCx3QkFBd0IsQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDaEQsTUFBTSx5QkFBeUIsR0FBSSxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUMsYUFBYSxFQUFFLEVBQUUsRUFBQyxFQUFFLHdCQUF3QixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDN0gsSUFBSSx5QkFBeUIsRUFBRTt3QkFDM0IsT0FBTzs0QkFDSCxPQUFPLEVBQUUsdUJBQXVCO3lCQUNuQyxDQUFDO3FCQUNMO3lCQUFNO3dCQUNILE1BQU0sSUFBSSx1QkFBUSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDO3FCQUM5QztpQkFDSjtxQkFBTTtvQkFDSCxNQUFNLElBQUksdUJBQVEsQ0FBQyxnQ0FBZ0MsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDN0Q7YUFDSjtpQkFBTTtnQkFDSCxNQUFNLElBQUksdUJBQVEsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUN0RDtRQUNMLENBQUM7S0FBQTtJQUVZLHdCQUF3QixDQUFDLEVBQVU7O1lBQzVDLElBQUksRUFBRSxFQUFFO2dCQUNKLGdEQUFnRDtnQkFDaEQsTUFBTSxrQkFBa0IsR0FBUSxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUMsYUFBYSxFQUFFLEVBQUUsRUFBQyxFQUFFLElBQUksRUFBRSxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO2dCQUUvRixJQUFJLGtCQUFrQixDQUFDLE1BQU0sRUFBRTtvQkFDM0IsTUFBTSxZQUFZLEdBQVEsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFDLGFBQWEsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO29CQUUzRSxJQUFJLFlBQVksRUFBRTt3QkFDZCxPQUFPOzRCQUNILE9BQU8sRUFBRSx1QkFBdUI7eUJBQ25DLENBQUM7cUJBQ0w7eUJBQU07d0JBQ0gsTUFBTSxJQUFJLHVCQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUM7cUJBQzlDO2lCQUNKO3FCQUFNO29CQUNILE1BQU0sSUFBSSx1QkFBUSxDQUFDLGdDQUFnQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUM3RDthQUNKO2lCQUFNO2dCQUNILE1BQU0sSUFBSSx1QkFBUSxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3REO1FBQ0wsQ0FBQztLQUFBO0lBRVksZ0JBQWdCOztZQUN6QixPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUMsQ0FBQztLQUFBO0NBQ0osQ0FBQTtBQW5JVztJQUFQLHVCQUFNOzhCQUFlLG9CQUFZO3dEQUFDO0FBRDFCLGtCQUFrQjtJQUQ5QiwwQkFBUztHQUNHLGtCQUFrQixDQW9JOUI7QUFwSVksZ0RBQWtCIiwiZmlsZSI6InNlcnZpY2VzL2ludGVybmFsL21hc3Rlck9yZGVyU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpbmdsZXRvbiwgSW5qZWN0IH0gZnJvbSBcInR5cGVzY3JpcHQtaW9jXCI7XHJcbmltcG9ydCB7IERhdGFiYXNlSGFuZGxlciB9IGZyb20gXCIuLi8uLi9tb25nby9tb25nb0Nvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgTWFzdGVyT3JkZXJNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgVG9rZW5TZXJ2aWNlIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwidHNvYVwiO1xyXG5pbXBvcnQgeyBQaW5FcnJvciB9IGZyb20gXCIuLi8uLi9jb25maWcvRXJyb3JIYW5kbGVyXCI7XHJcblxyXG5AU2luZ2xldG9uXHJcbmV4cG9ydCBjbGFzcyBNYXN0ZXJPcmRlclNlcnZpY2UgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIEBJbmplY3QgdG9rZW5TZXJ2aWNlOiBUb2tlblNlcnZpY2U7XHJcbiAgICBwdWJsaWMgZGJIYW5kbGVyID0gbmV3IERhdGFiYXNlSGFuZGxlcignbWFzdGVyT3JkZXInKTtcclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlTWFzdGVyT3JkZXIobWFzdGVyT3JkZXJQYXlsb2FkOiBNYXN0ZXJPcmRlck1vZGVsKSB7XHJcblxyXG4gICAgICAgIC8vIGF1dG8gZ2VuZXJhdGUgTWFzdGVyIE9yZGVyIElkXHJcbiAgICAgICAgbWFzdGVyT3JkZXJQYXlsb2FkLm1hc3Rlck9yZGVySWQgPSBgbWFzdGVyb3JkZXItJHt1dWlkdjQoKX1gO1xyXG5cclxuICAgICAgICAvLyBNYXN0ZXIgT3JkZXIgSWQgd2lsbCBiZSBnZW5lcmF0ZWQgZnJvbSBVSSBsaWtlIGF1dG8gaW5jcmVhdGUgZm9yIHRoZSB2YWx1ZVxyXG4gICAgICAgIG1hc3Rlck9yZGVyUGF5bG9hZC5jcmVhdGVkT24gPSBtYXN0ZXJPcmRlclBheWxvYWQudXBkYXRlZE9uID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgbGV0IE1hc3Rlck9yZGVyQXV0b0luY3JlbWVudCA9IGF3YWl0IHRoaXMuZ2V0TWFzdGVyT3JkZXJJbmNyZW1lbnRObygpO1xyXG4gICAgICAgIG1hc3Rlck9yZGVyUGF5bG9hZC5pbmNyZW1lbnRObyA9IE51bWJlcihNYXN0ZXJPcmRlckF1dG9JbmNyZW1lbnQuYXV0b0luY3JlbWVudCkgKyAxO1xyXG5cclxuICAgICAgICAvLyBjaGVjayBNYXN0ZXIgT3JkZXIgZGlzcGxheUlkIGFscmVhZHkgZXhpdHMgb3Igbm90XHJcbiAgICAgICAgaWYgKG1hc3Rlck9yZGVyUGF5bG9hZC5kaXNwbGF5TWFzdGVySWQpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jaGVja01hc3Rlck9yZGVySWRFeGlzdHMobWFzdGVyT3JkZXJQYXlsb2FkLmRpc3BsYXlNYXN0ZXJJZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXN0ZXJPcmRlclJlc3VsdHMgPSBhd2FpdCB0aGlzLmRiSGFuZGxlci5pbnNlcnRPbmUobWFzdGVyT3JkZXJQYXlsb2FkKTtcclxuXHJcbiAgICAgICAgaWYgKG1hc3Rlck9yZGVyUmVzdWx0cykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0luc2VydGVkIFN1Y2Nlc3NmdWxseS4nXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCdDcmVhdGlvbiBGYWlsZWQnLCA0MDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgY2hlY2tNYXN0ZXJPcmRlcklkRXhpc3RzKGRpc3BsYXlNYXN0ZXJJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgbWFzdGVyT3JkZXJEZXRhaWxzOiBhbnkgPSBhd2FpdCB0aGlzLmRiSGFuZGxlci5maW5kKHtkaXNwbGF5TWFzdGVySWQ6IGRpc3BsYXlNYXN0ZXJJZH0sIHtjcmVhdGVkT246IC0xfSwge19pZDogMH0pO1xyXG5cclxuICAgICAgICBpZiAobWFzdGVyT3JkZXJEZXRhaWxzICYmIG1hc3Rlck9yZGVyRGV0YWlscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCdNYXN0ZXIgb3JkZXIgZGlzcGxheUlkIGRldGFpbHMgYWxyZWFkeSBleGlzdHMnLCA0MDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0TWFzdGVyT3JkZXJJbmNyZW1lbnRObygpIHtcclxuICAgICAgICBjb25zdCBtYXN0ZXJPcmRlckRldGFpbHM6IGFueSA9IGF3YWl0IHRoaXMuZGJIYW5kbGVyLmZpbmQoe30sIHtjcmVhdGVkT246IC0xfSwge19pZDogMH0pO1xyXG5cclxuICAgICAgICBpZiAobWFzdGVyT3JkZXJEZXRhaWxzICYmIG1hc3Rlck9yZGVyRGV0YWlscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRtYXN0ZXJPcmRlckRldGFpbHMgPSBtYXN0ZXJPcmRlckRldGFpbHNbMF07XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VycmVudG1hc3Rlck9yZGVyRGV0YWlscyAmJiBjdXJyZW50bWFzdGVyT3JkZXJEZXRhaWxzLmluY3JlbWVudE5vKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9JbmNyZW1lbnQ6IE51bWJlcihjdXJyZW50bWFzdGVyT3JkZXJEZXRhaWxzLmluY3JlbWVudE5vKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0luY3JlbWVudDogMVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhdXRvSW5jcmVtZW50OiAxXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRNYXN0ZXJPcmRlckRldGFpbHMoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICAvLyBnZXQgcmVzcGVjdGl2ZSBNYXN0ZXIgT3JkZXIgZGV0YWlsc1xyXG4gICAgICAgICAgICBjb25zdCBtYXN0ZXJPcmRlckRldGFpbHM6IGFueSA9IGF3YWl0IHRoaXMuZGJIYW5kbGVyLmZpbmQoe21hc3Rlck9yZGVySWQ6IGlkfSwgbnVsbCwge19pZDogMH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1hc3Rlck9yZGVyRGV0YWlscyAmJiBtYXN0ZXJPcmRlckRldGFpbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFzdGVyT3JkZXJEZXRhaWxzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCdNYXN0ZXIgT3JkZXIgZGV0YWlscyBub3QgZm91bmQnLCA0MDQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gIGdldCBhbGwgTWFzdGVyIE9yZGVyXHJcbiAgICAgICAgICAgIGNvbnN0IG1hc3Rlck9yZGVyRGV0YWlsczogYW55ID0gYXdhaXQgdGhpcy5kYkhhbmRsZXIuZmluZCh7fSwgbnVsbCwge19pZDogMH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1hc3Rlck9yZGVyRGV0YWlscyAmJiBtYXN0ZXJPcmRlckRldGFpbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFzdGVyT3JkZXJEZXRhaWxzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCdNYXN0ZXIgT3JkZXIgZGV0YWlscyBub3QgZm91bmQnLCA0MDQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyB1cGRhdGVNYXN0ZXJPcmRlckRldGFpbHMoaWQsIHVwZGF0ZU1hc3Rlck9yZGVyUGF5bG9hZCkge1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICAvLyBmZXRjaCByZXNwZWN0aXZlIE1hc3RlciBPcmRlciBkZXRhaWxzXHJcbiAgICAgICAgICAgIGNvbnN0IG1hc3Rlck9yZGVyRGV0YWlsczogYW55ID0gYXdhaXQgdGhpcy5kYkhhbmRsZXIuZmluZCh7bWFzdGVyT3JkZXJJZDogaWR9LCBudWxsLCB7X2lkOiAwfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobWFzdGVyT3JkZXJEZXRhaWxzICYmIG1hc3Rlck9yZGVyRGV0YWlscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZU1hc3Rlck9yZGVyUGF5bG9hZC51cGRhdGVkT24gPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZE1hc3Rlck9yZGVyRGV0YWlscyA9ICBhd2FpdCB0aGlzLmRiSGFuZGxlci51cGRhdGVPbmUoe21hc3Rlck9yZGVySWQ6IGlkfSwgdXBkYXRlTWFzdGVyT3JkZXJQYXlsb2FkLCBudWxsLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVkTWFzdGVyT3JkZXJEZXRhaWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVcGRhdGVkIHN1Y2Nlc3NmdWxseS5cIiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCdVcGRhdGlvbiBGYWlsZWQnLCA0MDQpOyAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCdNYXN0ZXIgT3JkZXIgZGV0YWlscyBub3QgZm91bmQnLCA0MDQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCdQcm92aWRlIE1hc3RlciBPcmRlciBJZCcsIDQwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBkZWxldGVNYXN0ZXJPcmRlckRldGFpbHMoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICAvLyBmZXRjaCByZXNwZWN0aXZlIG1hc3RlciBvcmRlciBkZXRhaWxzIGZyb20gREJcclxuICAgICAgICAgICAgY29uc3QgbWFzdGVyT3JkZXJEZXRhaWxzOiBhbnkgPSBhd2FpdCB0aGlzLmRiSGFuZGxlci5maW5kKHttYXN0ZXJPcmRlcklkOiBpZH0sIG51bGwsIHtfaWQ6IDB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtYXN0ZXJPcmRlckRldGFpbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVSZXN1bHQ6IGFueSA9IGF3YWl0IHRoaXMuZGJIYW5kbGVyLnJlbW92ZSh7bWFzdGVyT3JkZXJJZDogaWR9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGVsZXRlUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJEZWxldGVkIHN1Y2Nlc3NmdWxseS5cIiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCdEZWxldGlvbiBGYWlsZWQnLCA0MDQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCdNYXN0ZXIgT3JkZXIgZGV0YWlscyBub3QgZm91bmQnLCA0MDQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCdQcm92aWRlIE1hc3RlciBPcmRlciBJZCcsIDQwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBtYXN0ZXJPcmRlckNvdW50KCkge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmRiSGFuZGxlci5jb3VudCh7fSk7XHJcbiAgICB9XHJcbn0iXX0=
