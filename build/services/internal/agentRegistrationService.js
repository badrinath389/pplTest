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
exports.AgentRegistrationService = void 0;
const typescript_ioc_1 = require("typescript-ioc");
const mongoConnection_1 = require("../../mongo/mongoConnection");
const index_1 = require("./index");
const uuid_1 = require("uuid");
const tsoa_1 = require("tsoa");
const ErrorHandler_1 = require("../../config/ErrorHandler");
let AgentRegistrationService = class AgentRegistrationService extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.dbHandler = new mongoConnection_1.DatabaseHandler('agentReg');
    }
    createAgentRegistration(agentRegPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            // unique agentId
            agentRegPayload.agentId = `agent-${uuid_1.v4()}`;
            agentRegPayload.active = true;
            agentRegPayload.createdOn = agentRegPayload.updatedOn = new Date();
            const agentResults = yield this.dbHandler.insertOne(agentRegPayload);
            if (agentResults) {
                return {
                    message: 'Inserted Successfully.'
                };
            }
            else {
                throw new ErrorHandler_1.PinError('Creation Failed', 400);
            }
        });
    }
    getAgentRegistration(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                // get respective Agent registration details
                const agentDetails = yield this.dbHandler.find({ agentId: id }, null, { _id: 0 });
                if (agentDetails && agentDetails.length) {
                    return agentDetails;
                }
                else {
                    throw new ErrorHandler_1.PinError('Agent details not found', 404);
                }
            }
            else {
                //  get all Agent registration
                const agentDetails = yield this.dbHandler.find({}, null, { _id: 0 });
                if (agentDetails && agentDetails.length) {
                    return agentDetails;
                }
                else {
                    throw new ErrorHandler_1.PinError('Agent details not found', 404);
                }
            }
        });
    }
    updateAgentRegistration(id, agentRegPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                // fetch respective Agent details
                const agentDetails = yield this.dbHandler.find({ agentId: id }, null, { _id: 0 });
                if (agentDetails && agentDetails.length) {
                    agentRegPayload.updatedOn = new Date();
                    const updatedAgentDetails = yield this.dbHandler.updateOne({ agentId: id }, agentRegPayload, null, null);
                    if (updatedAgentDetails) {
                        return {
                            message: "Updated successfully."
                        };
                    }
                    else {
                        throw new ErrorHandler_1.PinError('Updation Failed', 404);
                    }
                }
                else {
                    throw new ErrorHandler_1.PinError('Agent details not found', 404);
                }
            }
            else {
                throw new ErrorHandler_1.PinError('Provide Agent Id', 400);
            }
        });
    }
    deleteAgentRegistration(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                // fetch respective agent details from DB
                const agentDetails = yield this.dbHandler.find({ agentId: id }, null, { _id: 0 });
                if (agentDetails.length) {
                    const deleteResult = yield this.dbHandler.remove({ agentId: id });
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
                    throw new ErrorHandler_1.PinError('Agent details not found', 404);
                }
            }
            else {
                throw new ErrorHandler_1.PinError('Provide Agent Id', 400);
            }
        });
    }
    agentCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.dbHandler.count({});
        });
    }
};
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", index_1.TokenService)
], AgentRegistrationService.prototype, "tokenService", void 0);
AgentRegistrationService = __decorate([
    typescript_ioc_1.Singleton
], AgentRegistrationService);
exports.AgentRegistrationService = AgentRegistrationService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2aWNlcy9pbnRlcm5hbC9hZ2VudFJlZ2lzdHJhdGlvblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQW1EO0FBQ25ELGlFQUE4RDtBQUU5RCxtQ0FBdUM7QUFDdkMsK0JBQW9DO0FBQ3BDLCtCQUFrQztBQUNsQyw0REFBcUQ7QUFHckQsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBeUIsU0FBUSxpQkFBVTtJQUF4RDs7UUFFVyxjQUFTLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBMkZ2RCxDQUFDO0lBekZnQix1QkFBdUIsQ0FBQyxlQUF1Qzs7WUFDeEUsaUJBQWlCO1lBQ2pCLGVBQWUsQ0FBQyxPQUFPLEdBQUcsU0FBUyxTQUFNLEVBQUUsRUFBRSxDQUFDO1lBQzlDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBRTlCLGVBQWUsQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1lBRW5FLE1BQU0sWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFckUsSUFBSSxZQUFZLEVBQUU7Z0JBQ2QsT0FBTztvQkFDSCxPQUFPLEVBQUUsd0JBQXdCO2lCQUNwQyxDQUFDO2FBQ0w7aUJBQU07Z0JBQ0gsTUFBTSxJQUFJLHVCQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDOUM7UUFDTCxDQUFDO0tBQUE7SUFFWSxvQkFBb0IsQ0FBQyxFQUFVOztZQUN4QyxJQUFJLEVBQUUsRUFBRTtnQkFDSiw0Q0FBNEM7Z0JBQzVDLE1BQU0sWUFBWSxHQUFRLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsRUFBRSxFQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUMsR0FBRyxFQUFFLENB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TUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQyxDQUFDO0tBQUE7Q0FDSixDQUFBO0FBNUZXO0lBQVAsdUJBQU07OEJBQWUsb0JBQVk7OERBQUM7QUFEMUIsd0JBQXdCO0lBRHBDLDBCQUFTO0dBQ0csd0JBQXdCLENBNkZwQztBQTdGWSw0REFBd0IiLCJmaWxlIjoic2VydmljZXMvaW50ZXJuYWwvYWdlbnRSZWdpc3RyYXRpb25TZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2luZ2xldG9uLCBJbmplY3QgfSBmcm9tIFwidHlwZXNjcmlwdC1pb2NcIjtcclxuaW1wb3J0IHsgRGF0YWJhc2VIYW5kbGVyIH0gZnJvbSBcIi4uLy4uL21vbmdvL21vbmdvQ29ubmVjdGlvblwiO1xyXG5pbXBvcnQgeyBBZ2VudFJlZ2lzdHJhdGlvbk1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBUb2tlblNlcnZpY2UgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJ0c29hXCI7XHJcbmltcG9ydCB7IFBpbkVycm9yIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy9FcnJvckhhbmRsZXJcIjtcclxuXHJcbkBTaW5nbGV0b25cclxuZXhwb3J0IGNsYXNzIEFnZW50UmVnaXN0cmF0aW9uU2VydmljZSBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgQEluamVjdCB0b2tlblNlcnZpY2U6IFRva2VuU2VydmljZTtcclxuICAgIHB1YmxpYyBkYkhhbmRsZXIgPSBuZXcgRGF0YWJhc2VIYW5kbGVyKCdhZ2VudFJlZycpO1xyXG5cclxuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVBZ2VudFJlZ2lzdHJhdGlvbihhZ2VudFJlZ1BheWxvYWQ6IEFnZW50UmVnaXN0cmF0aW9uTW9kZWwpIHtcclxuICAgICAgICAvLyB1bmlxdWUgYWdlbnRJZFxyXG4gICAgICAgIGFnZW50UmVnUGF5bG9hZC5hZ2VudElkID0gYGFnZW50LSR7dXVpZHY0KCl9YDtcclxuICAgICAgICBhZ2VudFJlZ1BheWxvYWQuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgYWdlbnRSZWdQYXlsb2FkLmNyZWF0ZWRPbiA9IGFnZW50UmVnUGF5bG9hZC51cGRhdGVkT24gPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICBjb25zdCBhZ2VudFJlc3VsdHMgPSBhd2FpdCB0aGlzLmRiSGFuZGxlci5pbnNlcnRPbmUoYWdlbnRSZWdQYXlsb2FkKTtcclxuXHJcbiAgICAgICAgaWYgKGFnZW50UmVzdWx0cykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0luc2VydGVkIFN1Y2Nlc3NmdWxseS4nXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCdDcmVhdGlvbiBGYWlsZWQnLCA0MDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0QWdlbnRSZWdpc3RyYXRpb24oaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICAvLyBnZXQgcmVzcGVjdGl2ZSBBZ2VudCByZWdpc3RyYXRpb24gZGV0YWlsc1xyXG4gICAgICAgICAgICBjb25zdCBhZ2VudERldGFpbHM6IGFueSA9IGF3YWl0IHRoaXMuZGJIYW5kbGVyLmZpbmQoe2FnZW50SWQ6IGlkfSwgbnVsbCwge19pZDogMH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFnZW50RGV0YWlscyAmJiBhZ2VudERldGFpbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWdlbnREZXRhaWxzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCdBZ2VudCBkZXRhaWxzIG5vdCBmb3VuZCcsIDQwNCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyAgZ2V0IGFsbCBBZ2VudCByZWdpc3RyYXRpb25cclxuICAgICAgICAgICAgY29uc3QgYWdlbnREZXRhaWxzOiBhbnkgPSBhd2FpdCB0aGlzLmRiSGFuZGxlci5maW5kKHt9LCBudWxsLCB7X2lkOiAwfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYWdlbnREZXRhaWxzICYmIGFnZW50RGV0YWlscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhZ2VudERldGFpbHM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUGluRXJyb3IoJ0FnZW50IGRldGFpbHMgbm90IGZvdW5kJywgNDA0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgdXBkYXRlQWdlbnRSZWdpc3RyYXRpb24oaWQsIGFnZW50UmVnUGF5bG9hZCkge1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICAvLyBmZXRjaCByZXNwZWN0aXZlIEFnZW50IGRldGFpbHNcclxuICAgICAgICAgICAgY29uc3QgYWdlbnREZXRhaWxzOiBhbnkgPSBhd2FpdCB0aGlzLmRiSGFuZGxlci5maW5kKHthZ2VudElkOiBpZH0sIG51bGwsIHtfaWQ6IDB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhZ2VudERldGFpbHMgJiYgYWdlbnREZXRhaWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgYWdlbnRSZWdQYXlsb2FkLnVwZGF0ZWRPbiA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkQWdlbnREZXRhaWxzID0gIGF3YWl0IHRoaXMuZGJIYW5kbGVyLnVwZGF0ZU9uZSh7YWdlbnRJZDogaWR9LCBhZ2VudFJlZ1BheWxvYWQsIG51bGwsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVwZGF0ZWRBZ2VudERldGFpbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlVwZGF0ZWQgc3VjY2Vzc2Z1bGx5LlwiICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUGluRXJyb3IoJ1VwZGF0aW9uIEZhaWxlZCcsIDQwNCk7ICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUGluRXJyb3IoJ0FnZW50IGRldGFpbHMgbm90IGZvdW5kJywgNDA0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBQaW5FcnJvcignUHJvdmlkZSBBZ2VudCBJZCcsIDQwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBkZWxldGVBZ2VudFJlZ2lzdHJhdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgIC8vIGZldGNoIHJlc3BlY3RpdmUgYWdlbnQgZGV0YWlscyBmcm9tIERCXHJcbiAgICAgICAgICAgIGNvbnN0IGFnZW50RGV0YWlsczogYW55ID0gYXdhaXQgdGhpcy5kYkhhbmRsZXIuZmluZCh7YWdlbnRJZDogaWR9LCBudWxsLCB7X2lkOiAwfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYWdlbnREZXRhaWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlUmVzdWx0OiBhbnkgPSBhd2FpdCB0aGlzLmRiSGFuZGxlci5yZW1vdmUoe2FnZW50SWQ6IGlkfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRlbGV0ZVJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRGVsZXRlZCBzdWNjZXNzZnVsbHkuXCIgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBQaW5FcnJvcignRGVsZXRpb24gRmFpbGVkJywgNDA0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQaW5FcnJvcignQWdlbnQgZGV0YWlscyBub3QgZm91bmQnLCA0MDQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCdQcm92aWRlIEFnZW50IElkJywgNDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFnZW50Q291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZGJIYW5kbGVyLmNvdW50KHt9KTtcclxuICAgIH1cclxufSJdfQ==
