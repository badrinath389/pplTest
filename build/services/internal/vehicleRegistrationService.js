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
exports.VehicleRegistrationService = void 0;
const typescript_ioc_1 = require("typescript-ioc");
const mongoConnection_1 = require("../../mongo/mongoConnection");
const index_1 = require("./index");
const uuid_1 = require("uuid");
const tsoa_1 = require("tsoa");
const ErrorHandler_1 = require("../../config/ErrorHandler");
let VehicleRegistrationService = class VehicleRegistrationService extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.dbHandler = new mongoConnection_1.DatabaseHandler('vehicleReg');
    }
    createVehicleRegistation(vehiclePayload) {
        return __awaiter(this, void 0, void 0, function* () {
            // auto generate vehicle Id
            vehiclePayload.vehicleId = `vehicle-${uuid_1.v4()}`;
            vehiclePayload.active = true;
            // vehicle Id will be generated from UI like auto increate for the value
            vehiclePayload.createdOn = vehiclePayload.updatedOn = new Date();
            let VehicleAutoIncrement = yield this.getVehicleIncrementNo();
            vehiclePayload.incrementNo = Number(VehicleAutoIncrement.autoIncrement) + 1;
            // check vehicle displayId already exits or not
            if (vehiclePayload.vehicleDisplayId) {
                yield this.checkVehicleDisplayIdExists(vehiclePayload.vehicleDisplayId);
            }
            const vehicleResults = yield this.dbHandler.insertOne(vehiclePayload);
            if (vehicleResults) {
                return {
                    message: 'Inserted Successfully.'
                };
            }
            else {
                throw new ErrorHandler_1.PinError('Creation Failed', 400);
            }
        });
    }
    checkVehicleDisplayIdExists(vehicleDisplayId) {
        return __awaiter(this, void 0, void 0, function* () {
            const vehicleDetails = yield this.dbHandler.find({ vehicleDisplayId: vehicleDisplayId }, { createdOn: -1 }, { _id: 0 });
            if (vehicleDetails && vehicleDetails.length) {
                throw new ErrorHandler_1.PinError('Vehicle displayId details already exists', 400);
            }
        });
    }
    getVehicleIncrementNo() {
        return __awaiter(this, void 0, void 0, function* () {
            const vehicleDetails = yield this.dbHandler.find({}, { createdOn: -1 }, { _id: 0 });
            if (vehicleDetails && vehicleDetails.length) {
                let currentVehicleDetails = vehicleDetails[0];
                if (currentVehicleDetails && currentVehicleDetails.incrementNo) {
                    return {
                        autoIncrement: Number(currentVehicleDetails.incrementNo)
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
    getVehicleRegistration(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                // get respective vehicle registration details
                const vehicleDetails = yield this.dbHandler.find({ vehicleId: id }, null, { _id: 0 });
                if (vehicleDetails && vehicleDetails.length) {
                    return vehicleDetails;
                }
                else {
                    throw new ErrorHandler_1.PinError('Vehicle details not found', 404);
                }
            }
            else {
                //  get all vehicle registration
                const vehicleDetails = yield this.dbHandler.find({}, null, { _id: 0 });
                if (vehicleDetails && vehicleDetails.length) {
                    return vehicleDetails;
                }
                else {
                    throw new ErrorHandler_1.PinError('Vehicle details not found', 404);
                }
            }
        });
    }
    updateVehicleRegistration(id, vehicleRegPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                // fetch respective vehicle details
                const vehicleDetails = yield this.dbHandler.find({ vehicleId: id }, null, { _id: 0 });
                if (vehicleDetails && vehicleDetails.length) {
                    vehicleRegPayload.updatedOn = new Date();
                    const updatedVehicleDetails = yield this.dbHandler.updateOne({ vehicleId: id }, vehicleRegPayload, null, null);
                    if (updatedVehicleDetails) {
                        return {
                            message: "Updated successfully."
                        };
                    }
                    else {
                        throw new ErrorHandler_1.PinError('Updation Failed', 404);
                    }
                }
                else {
                    throw new ErrorHandler_1.PinError('Vehicle details not found', 404);
                }
            }
            else {
                throw new ErrorHandler_1.PinError('Provide vehicle Id', 400);
            }
        });
    }
    deleteVehicleRegistration(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                // fetch respective vehicle details from DB
                const vehicleDetails = yield this.dbHandler.find({ vehicleId: id }, null, { _id: 0 });
                if (vehicleDetails.length) {
                    const deleteResult = yield this.dbHandler.remove({ vehicleId: id });
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
                    throw new ErrorHandler_1.PinError('Vehicle details not found', 404);
                }
            }
            else {
                throw new ErrorHandler_1.PinError('Provide Vehicle Id', 400);
            }
        });
    }
    vehicleCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.dbHandler.count({});
        });
    }
};
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", index_1.TokenService)
], VehicleRegistrationService.prototype, "tokenService", void 0);
VehicleRegistrationService = __decorate([
    typescript_ioc_1.Singleton
], VehicleRegistrationService);
exports.VehicleRegistrationService = VehicleRegistrationService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2aWNlcy9pbnRlcm5hbC92ZWhpY2xlUmVnaXN0cmF0aW9uU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBbUQ7QUFDbkQsaUVBQThEO0FBRTlELG1DQUF1QztBQUN2QywrQkFBb0M7QUFDcEMsK0JBQWtDO0FBQ2xDLDREQUFxRDtBQUdyRCxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEyQixTQUFRLGlCQUFVO0lBQTFEOztRQUVXLGNBQVMsR0FBRyxJQUFJLGlDQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7SUFtSXpELENBQUM7SUFqSWdCLHdCQUF3QixDQUFDLGNBQXdDOztZQUUxRSwyQkFBMkI7WUFDM0IsY0FBYyxDQUFDLFNBQVMsR0FBRyxXQUFXLFNBQU0sRUFBRSxFQUFFLENBQUM7WUFDakQsY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFN0Isd0VBQXdFO1lBQ3hFLGNBQWMsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1lBRWpFLElBQUksb0JBQW9CLEdBQUcsTUFBTSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUM5RCxjQUFjLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFNUUsK0NBQStDO1lBQy9DLElBQUksY0FBYyxDQUFDLGdCQUFnQixFQUFFO2dCQUNqQyxNQUFNLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUMzRTtZQUVELE1BQU0sY0FBYyxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFdEUsSUFBSSxjQUFjLEVBQUU7Z0JBQ2hCLE9BQU87b0JBQ0gsT0FBTyxFQUFFLHdCQUF3QjtpQkFDcEMsQ0FBQzth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SUFBSSx1QkFBUSxDQUFDLDJCQUEyQixFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUN4RDthQUNKO2lCQUFNO2dCQUNILE1BQU0sSUFBSSx1QkFBUSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ2pEO1FBQ0wsQ0FBQztLQUFBO0lBRVksWUFBWTs7WUFDckIsT0FBTyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLENBQUM7S0FBQTtDQUNKLENBQUE7QUFwSVc7SUFBUCx1QkFBTTs4QkFBZSxvQkFBWTtnRUFBQztBQUQxQiwwQkFBMEI7SUFEdEMsMEJBQVM7R0FDRywwQkFBMEIsQ0FxSXRDO0FBcklZLGdFQUEwQiIsImZpbGUiOiJzZXJ2aWNlcy9pbnRlcm5hbC92ZWhpY2xlUmVnaXN0cmF0aW9uU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpbmdsZXRvbiwgSW5qZWN0IH0gZnJvbSBcInR5cGVzY3JpcHQtaW9jXCI7XHJcbmltcG9ydCB7IERhdGFiYXNlSGFuZGxlciB9IGZyb20gXCIuLi8uLi9tb25nby9tb25nb0Nvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgVmVoaWNsZVJlZ2lzdHJhdGlvbk1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBUb2tlblNlcnZpY2UgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJ0c29hXCI7XHJcbmltcG9ydCB7IFBpbkVycm9yIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy9FcnJvckhhbmRsZXJcIjtcclxuXHJcbkBTaW5nbGV0b25cclxuZXhwb3J0IGNsYXNzIFZlaGljbGVSZWdpc3RyYXRpb25TZXJ2aWNlIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBASW5qZWN0IHRva2VuU2VydmljZTogVG9rZW5TZXJ2aWNlO1xyXG4gICAgcHVibGljIGRiSGFuZGxlciA9IG5ldyBEYXRhYmFzZUhhbmRsZXIoJ3ZlaGljbGVSZWcnKTtcclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlVmVoaWNsZVJlZ2lzdGF0aW9uKHZlaGljbGVQYXlsb2FkOiBWZWhpY2xlUmVnaXN0cmF0aW9uTW9kZWwpIHtcclxuXHJcbiAgICAgICAgLy8gYXV0byBnZW5lcmF0ZSB2ZWhpY2xlIElkXHJcbiAgICAgICAgdmVoaWNsZVBheWxvYWQudmVoaWNsZUlkID0gYHZlaGljbGUtJHt1dWlkdjQoKX1gO1xyXG4gICAgICAgIHZlaGljbGVQYXlsb2FkLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIHZlaGljbGUgSWQgd2lsbCBiZSBnZW5lcmF0ZWQgZnJvbSBVSSBsaWtlIGF1dG8gaW5jcmVhdGUgZm9yIHRoZSB2YWx1ZVxyXG4gICAgICAgIHZlaGljbGVQYXlsb2FkLmNyZWF0ZWRPbiA9IHZlaGljbGVQYXlsb2FkLnVwZGF0ZWRPbiA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgIGxldCBWZWhpY2xlQXV0b0luY3JlbWVudCA9IGF3YWl0IHRoaXMuZ2V0VmVoaWNsZUluY3JlbWVudE5vKCk7XHJcbiAgICAgICAgdmVoaWNsZVBheWxvYWQuaW5jcmVtZW50Tm8gPSBOdW1iZXIoVmVoaWNsZUF1dG9JbmNyZW1lbnQuYXV0b0luY3JlbWVudCkgKyAxO1xyXG5cclxuICAgICAgICAvLyBjaGVjayB2ZWhpY2xlIGRpc3BsYXlJZCBhbHJlYWR5IGV4aXRzIG9yIG5vdFxyXG4gICAgICAgIGlmICh2ZWhpY2xlUGF5bG9hZC52ZWhpY2xlRGlzcGxheUlkKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY2hlY2tWZWhpY2xlRGlzcGxheUlkRXhpc3RzKHZlaGljbGVQYXlsb2FkLnZlaGljbGVEaXNwbGF5SWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmVoaWNsZVJlc3VsdHMgPSBhd2FpdCB0aGlzLmRiSGFuZGxlci5pbnNlcnRPbmUodmVoaWNsZVBheWxvYWQpO1xyXG5cclxuICAgICAgICBpZiAodmVoaWNsZVJlc3VsdHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdJbnNlcnRlZCBTdWNjZXNzZnVsbHkuJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBQaW5FcnJvcignQ3JlYXRpb24gRmFpbGVkJywgNDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGNoZWNrVmVoaWNsZURpc3BsYXlJZEV4aXN0cyh2ZWhpY2xlRGlzcGxheUlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCB2ZWhpY2xlRGV0YWlsczogYW55ID0gYXdhaXQgdGhpcy5kYkhhbmRsZXIuZmluZCh7dmVoaWNsZURpc3BsYXlJZDogdmVoaWNsZURpc3BsYXlJZH0sIHtjcmVhdGVkT246IC0xfSwge19pZDogMH0pO1xyXG5cclxuICAgICAgICBpZiAodmVoaWNsZURldGFpbHMgJiYgdmVoaWNsZURldGFpbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBQaW5FcnJvcignVmVoaWNsZSBkaXNwbGF5SWQgZGV0YWlscyBhbHJlYWR5IGV4aXN0cycsIDQwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRWZWhpY2xlSW5jcmVtZW50Tm8oKSB7XHJcbiAgICAgICAgY29uc3QgdmVoaWNsZURldGFpbHM6IGFueSA9IGF3YWl0IHRoaXMuZGJIYW5kbGVyLmZpbmQoe30sIHtjcmVhdGVkT246IC0xfSwge19pZDogMH0pO1xyXG5cclxuICAgICAgICBpZiAodmVoaWNsZURldGFpbHMgJiYgdmVoaWNsZURldGFpbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50VmVoaWNsZURldGFpbHMgPSB2ZWhpY2xlRGV0YWlsc1swXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50VmVoaWNsZURldGFpbHMgJiYgY3VycmVudFZlaGljbGVEZXRhaWxzLmluY3JlbWVudE5vKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9JbmNyZW1lbnQ6IE51bWJlcihjdXJyZW50VmVoaWNsZURldGFpbHMuaW5jcmVtZW50Tm8pXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRvSW5jcmVtZW50OiAxXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGF1dG9JbmNyZW1lbnQ6IDFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldFZlaGljbGVSZWdpc3RyYXRpb24oaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICAvLyBnZXQgcmVzcGVjdGl2ZSB2ZWhpY2xlIHJlZ2lzdHJhdGlvbiBkZXRhaWxzXHJcbiAgICAgICAgICAgIGNvbnN0IHZlaGljbGVEZXRhaWxzOiBhbnkgPSBhd2FpdCB0aGlzLmRiSGFuZGxlci5maW5kKHt2ZWhpY2xlSWQ6IGlkfSwgbnVsbCwge19pZDogMH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZlaGljbGVEZXRhaWxzICYmIHZlaGljbGVEZXRhaWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlaGljbGVEZXRhaWxzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCdWZWhpY2xlIGRldGFpbHMgbm90IGZvdW5kJywgNDA0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICBnZXQgYWxsIHZlaGljbGUgcmVnaXN0cmF0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IHZlaGljbGVEZXRhaWxzOiBhbnkgPSBhd2FpdCB0aGlzLmRiSGFuZGxlci5maW5kKHt9LCBudWxsLCB7X2lkOiAwfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmVoaWNsZURldGFpbHMgJiYgdmVoaWNsZURldGFpbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmVoaWNsZURldGFpbHM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUGluRXJyb3IoJ1ZlaGljbGUgZGV0YWlscyBub3QgZm91bmQnLCA0MDQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyB1cGRhdGVWZWhpY2xlUmVnaXN0cmF0aW9uKGlkLCB2ZWhpY2xlUmVnUGF5bG9hZCkge1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICAvLyBmZXRjaCByZXNwZWN0aXZlIHZlaGljbGUgZGV0YWlsc1xyXG4gICAgICAgICAgICBjb25zdCB2ZWhpY2xlRGV0YWlsczogYW55ID0gYXdhaXQgdGhpcy5kYkhhbmRsZXIuZmluZCh7dmVoaWNsZUlkOiBpZH0sIG51bGwsIHtfaWQ6IDB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2ZWhpY2xlRGV0YWlscyAmJiB2ZWhpY2xlRGV0YWlscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZlaGljbGVSZWdQYXlsb2FkLnVwZGF0ZWRPbiA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkVmVoaWNsZURldGFpbHMgPSAgYXdhaXQgdGhpcy5kYkhhbmRsZXIudXBkYXRlT25lKHt2ZWhpY2xlSWQ6IGlkfSwgdmVoaWNsZVJlZ1BheWxvYWQsIG51bGwsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVwZGF0ZWRWZWhpY2xlRGV0YWlscykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVXBkYXRlZCBzdWNjZXNzZnVsbHkuXCIgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBQaW5FcnJvcignVXBkYXRpb24gRmFpbGVkJywgNDA0KTsgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQaW5FcnJvcignVmVoaWNsZSBkZXRhaWxzIG5vdCBmb3VuZCcsIDQwNCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUGluRXJyb3IoJ1Byb3ZpZGUgdmVoaWNsZSBJZCcsIDQwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBkZWxldGVWZWhpY2xlUmVnaXN0cmF0aW9uKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgLy8gZmV0Y2ggcmVzcGVjdGl2ZSB2ZWhpY2xlIGRldGFpbHMgZnJvbSBEQlxyXG4gICAgICAgICAgICBjb25zdCB2ZWhpY2xlRGV0YWlsczogYW55ID0gYXdhaXQgdGhpcy5kYkhhbmRsZXIuZmluZCh7dmVoaWNsZUlkOiBpZH0sIG51bGwsIHtfaWQ6IDB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2ZWhpY2xlRGV0YWlscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVJlc3VsdDogYW55ID0gYXdhaXQgdGhpcy5kYkhhbmRsZXIucmVtb3ZlKHt2ZWhpY2xlSWQ6IGlkfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRlbGV0ZVJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRGVsZXRlZCBzdWNjZXNzZnVsbHkuXCIgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBQaW5FcnJvcignRGVsZXRpb24gRmFpbGVkJywgNDA0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQaW5FcnJvcignVmVoaWNsZSBkZXRhaWxzIG5vdCBmb3VuZCcsIDQwNCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUGluRXJyb3IoJ1Byb3ZpZGUgVmVoaWNsZSBJZCcsIDQwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyB2ZWhpY2xlQ291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZGJIYW5kbGVyLmNvdW50KHt9KTtcclxuICAgIH1cclxufSJdfQ==
