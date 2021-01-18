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
exports.UserService = void 0;
const typescript_ioc_1 = require("typescript-ioc");
const mongoConnection_1 = require("../../mongo/mongoConnection");
const index_1 = require("./index");
const uuid_1 = require("uuid");
const tsoa_1 = require("tsoa");
const bcrypt = require("bcrypt");
const ErrorHandler_1 = require("../../config/ErrorHandler");
let UserService = class UserService extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.dbHandler = new mongoConnection_1.DatabaseHandler('users');
    }
    createUser(userPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            userPayload.userId = `user-${uuid_1.v4()}`;
            userPayload.createdOn = userPayload.updatedOn = new Date();
            userPayload.active = false;
            userPayload.tempCode = this.generatePasswordService.generateRandomString(24, true, false, true, true);
            let saltRounds = 10;
            userPayload.password = yield bcrypt.hashSync(userPayload.password, saltRounds);
            // check username and email should be unique
            const matchedUserInfo = yield this.dbHandler.find({ email: userPayload.email }, null, null);
            // check user details already exists
            if (matchedUserInfo.length) {
                throw new ErrorHandler_1.PinError('Email already exists.', 400);
            }
            const matchedUsernameInfo = yield this.dbHandler.find({ username: userPayload.username }, null, null);
            // check user details already exists
            if (matchedUsernameInfo.length) {
                throw new ErrorHandler_1.PinError('Username already exists.', 400);
            }
            // send email to user and add temporary code in the db
            // await this.emailService.sendUserActivateEmail(userPayload);
            const userResults = yield this.dbHandler.insertOne(userPayload);
            if (userResults) {
                return {
                    message: 'Inserted Successfully.'
                };
            }
            else {
                throw new ErrorHandler_1.PinError('Creation Failed', 400);
            }
        });
    }
    verifyUserCreds(userPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            // fetch user details from DB
            const userDetails = yield this.dbHandler.find({ $or: [
                    {
                        email: userPayload.username.toLowerCase()
                    },
                    {
                        username: userPayload.username.toLowerCase()
                    }
                ] }, null, null);
            if (userDetails.length) {
                let userDetail = userDetails[0];
                if (!userDetail.active) {
                    throw new ErrorHandler_1.PinError('User is disabled.', 400);
                }
                if (userDetail.password) {
                    if (yield bcrypt.compareSync(userPayload.password, userDetail.password)) {
                        // user is valid return token
                        const token = yield this.tokenService.createToken({
                            email: userDetail.email,
                            firstName: userDetail.firstName,
                            lastName: userDetail.lastName,
                            username: userDetail.username,
                            role: userDetail.role,
                            userId: userDetail.userId
                        });
                        return {
                            token: token
                        };
                    }
                    else {
                        throw new ErrorHandler_1.PinError('Password is incorrect.', 400);
                    }
                }
            }
            else {
                throw new ErrorHandler_1.PinError('user details not found.', 400);
            }
        });
    }
    getAllUsersInfo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                // fetch respective user details from DB
                const userDetails = yield this.dbHandler.find({ userId: id }, null, { _id: 0 });
                if (userDetails && userDetails.length) {
                    return userDetails;
                }
                else {
                    throw new ErrorHandler_1.PinError('Details not found', 404);
                }
            }
            else {
                // fetch all user details from DB
                const userDetails = yield this.dbHandler.find({}, null, { _id: 0 });
                if (userDetails && userDetails.length) {
                    return userDetails;
                }
                else {
                    throw new ErrorHandler_1.PinError('Details not found', 404);
                }
            }
        });
    }
    deleteUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                // fetch respective user details from DB
                const userDetails = yield this.dbHandler.find({ userId: id }, null, { _id: 0 });
                if (userDetails.length) {
                    const deleteResult = yield this.dbHandler.remove({ userId: id });
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
                    throw new ErrorHandler_1.PinError('User details not found', 404);
                }
            }
            else {
                throw new ErrorHandler_1.PinError('Provide user Id', 400);
            }
        });
    }
    updateUserById(id, userUpdatedModel) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                // fetch respective user details from DB
                const userDetails = yield this.dbHandler.find({ userId: id }, null, { _id: 0 });
                if (userDetails.length) {
                    userUpdatedModel.updatedOn = new Date();
                    const updatedUserDetails = yield this.dbHandler.updateOne({ userId: id }, userUpdatedModel, null, null);
                    if (updatedUserDetails) {
                        return {
                            message: "Updated successfully."
                        };
                    }
                    else {
                        throw new ErrorHandler_1.PinError('Updation Failed', 404);
                    }
                }
                else {
                    throw new ErrorHandler_1.PinError('User details not found', 404);
                }
            }
            else {
                throw new ErrorHandler_1.PinError('Provide user Id', 400);
            }
        });
    }
    usersCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.dbHandler.count({});
        });
    }
    activateAccount(userActivatePayload) {
        return __awaiter(this, void 0, void 0, function* () {
            // fetch respective user details from DB
            const userDetails = yield this.dbHandler.find({ username: userActivatePayload.username, tempCode: userActivatePayload.tempCode }, null, { _id: 0 });
            let userDetail = userDetails[0];
            if (userDetails && userDetails.length) {
                userActivatePayload.updatedOn = new Date();
                userActivatePayload.active = true;
                userActivatePayload.tempCode = '';
                const updatedUserDetails = yield this.dbHandler.updateOne({ userId: userDetail.userId }, userActivatePayload, null, null);
                if (updatedUserDetails) {
                    return {
                        message: "User Account Activated Successfully."
                    };
                }
                else {
                    throw new ErrorHandler_1.PinError('Updation Failed', 404);
                }
            }
            else if (userDetail && (userDetail.tempCode === '' || userDetail.active)) {
                throw new ErrorHandler_1.PinError('User account has been activated.', 400);
            }
            else if (!userDetail) {
                const userDetails = yield this.dbHandler.find({ username: userActivatePayload.username }, null, { _id: 0 });
                if (userDetails && userDetails.length) {
                    let userData = userDetails[0];
                    if (userData.tempCode === '') {
                        throw new ErrorHandler_1.PinError('User account has been activated.', 400);
                    }
                    else if (!userData.active) {
                        throw new ErrorHandler_1.PinError('User account in disabled state.', 400);
                    }
                }
            }
            else {
                throw new ErrorHandler_1.PinError('Temporary Code is not valid.', 404);
            }
        });
    }
};
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", index_1.TokenService)
], UserService.prototype, "tokenService", void 0);
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", index_1.EmailService)
], UserService.prototype, "emailService", void 0);
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", index_1.GeneratePasswordService)
], UserService.prototype, "generatePasswordService", void 0);
UserService = __decorate([
    typescript_ioc_1.Singleton
], UserService);
exports.UserService = UserService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2aWNlcy9pbnRlcm5hbC91c2VyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBbUQ7QUFDbkQsaUVBQThEO0FBRTlELG1DQUE4RTtBQUM5RSwrQkFBb0M7QUFDcEMsK0JBQWtDO0FBQ2xDLGlDQUFrQztBQUNsQyw0REFBcUQ7QUFHckQsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBWSxTQUFRLGlCQUFVO0lBQTNDOztRQUlXLGNBQVMsR0FBRyxJQUFJLGlDQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7SUFxTXBELENBQUM7SUFuTWdCLFVBQVUsQ0FBQyxXQUFzQjs7WUFFMUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxRQUFRLFNBQU0sRUFBRSxFQUFFLENBQUM7WUFDeEMsV0FBVyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFFM0QsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFFM0IsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsb0JBQW9CLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRXRHLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUNwQixXQUFXLENBQUMsUUFBUSxHQUFHLE1BQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBRS9FLDRDQUE0QztZQUM1QyxNQUFNLGVBQWUsR0FBUSxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxLQUFLLEVBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFL0Ysb0NBQW9DO1lBQ3BDLElBQUksZUFBZSxDQUFDLE1BQU0sRUFBRTtnQkFD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LEdBQVEsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUMsRUFBRSxJQUFJLEVBQUUsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztnQkFFN0csSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRTtvQkFDbkMsSUFBSSxRQUFRLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUU5QixJQUFJLFFBQVEsQ0FBQyxRQUFRLEtBQUssRUFBRSxFQUFFO3dCQUMxQixNQUFNLElBQUksdUJBQVEsQ0FBQyxrQ0FBa0MsRUFBRSxHQUFHLENBQUMsQ0FBQztxQkFDL0Q7eUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7d0JBQ3pCLE1BQU0sSUFBSSx1QkFBUSxDQUFDLGlDQUFpQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3FCQUM5RDtpQkFDSjthQUNKO2lCQUFNO2dCQUNILE1BQU0sSUFBSSx1QkFBUSxDQUFDLDhCQUE4QixFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQzNEO1FBQ0wsQ0FBQztLQUFBO0NBQ0osQ0FBQTtBQXhNVztJQUFQLHVCQUFNOzhCQUFlLG9CQUFZO2lEQUFDO0FBQzNCO0lBQVAsdUJBQU07OEJBQWUsb0JBQVk7aURBQUM7QUFDM0I7SUFBUCx1QkFBTTs4QkFBMEIsK0JBQXVCOzREQUFDO0FBSGhELFdBQVc7SUFEdkIsMEJBQVM7R0FDRyxXQUFXLENBeU12QjtBQXpNWSxrQ0FBVyIsImZpbGUiOiJzZXJ2aWNlcy9pbnRlcm5hbC91c2VyU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpbmdsZXRvbiwgSW5qZWN0IH0gZnJvbSBcInR5cGVzY3JpcHQtaW9jXCI7XHJcbmltcG9ydCB7IERhdGFiYXNlSGFuZGxlciB9IGZyb20gXCIuLi8uLi9tb25nby9tb25nb0Nvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsLCBVc2VyQXV0aE1vZGVsLCBVcGRhdGVVc2VyTW9kZWwsIFVzZXJBY3RpdmF0ZU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBUb2tlblNlcnZpY2UsIEVtYWlsU2VydmljZSwgR2VuZXJhdGVQYXNzd29yZFNlcnZpY2UgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJ0c29hXCI7XHJcbmltcG9ydCAqIGFzIGJjcnlwdCAgZnJvbSBcImJjcnlwdFwiO1xyXG5pbXBvcnQgeyBQaW5FcnJvciB9IGZyb20gXCIuLi8uLi9jb25maWcvRXJyb3JIYW5kbGVyXCI7XHJcblxyXG5AU2luZ2xldG9uXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgQEluamVjdCB0b2tlblNlcnZpY2U6IFRva2VuU2VydmljZTtcclxuICAgIEBJbmplY3QgZW1haWxTZXJ2aWNlOiBFbWFpbFNlcnZpY2U7XHJcbiAgICBASW5qZWN0IGdlbmVyYXRlUGFzc3dvcmRTZXJ2aWNlOiBHZW5lcmF0ZVBhc3N3b3JkU2VydmljZTtcclxuICAgIHB1YmxpYyBkYkhhbmRsZXIgPSBuZXcgRGF0YWJhc2VIYW5kbGVyKCd1c2VycycpO1xyXG5cclxuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVVc2VyKHVzZXJQYXlsb2FkOiBVc2VyTW9kZWwpIHtcclxuXHJcbiAgICAgICAgdXNlclBheWxvYWQudXNlcklkID0gYHVzZXItJHt1dWlkdjQoKX1gO1xyXG4gICAgICAgIHVzZXJQYXlsb2FkLmNyZWF0ZWRPbiA9IHVzZXJQYXlsb2FkLnVwZGF0ZWRPbiA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgIHVzZXJQYXlsb2FkLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB1c2VyUGF5bG9hZC50ZW1wQ29kZSA9IHRoaXMuZ2VuZXJhdGVQYXNzd29yZFNlcnZpY2UuZ2VuZXJhdGVSYW5kb21TdHJpbmcoMjQsIHRydWUsIGZhbHNlLCB0cnVlLCB0cnVlKTtcclxuXHJcbiAgICAgICAgbGV0IHNhbHRSb3VuZHMgPSAxMDtcclxuICAgICAgICB1c2VyUGF5bG9hZC5wYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoU3luYyh1c2VyUGF5bG9hZC5wYXNzd29yZCwgc2FsdFJvdW5kcyk7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIHVzZXJuYW1lIGFuZCBlbWFpbCBzaG91bGQgYmUgdW5pcXVlXHJcbiAgICAgICAgY29uc3QgbWF0Y2hlZFVzZXJJbmZvOiBhbnkgPSBhd2FpdCB0aGlzLmRiSGFuZGxlci5maW5kKHtlbWFpbDogdXNlclBheWxvYWQuZW1haWx9LCBudWxsLCBudWxsKTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgdXNlciBkZXRhaWxzIGFscmVhZHkgZXhpc3RzXHJcbiAgICAgICAgaWYgKG1hdGNoZWRVc2VySW5mby5sZW5ndGgpIHtcclxuICAgICAgICAgICB0aHJvdyBuZXcgUGluRXJyb3IoJ0VtYWlsIGFscmVhZHkgZXhpc3RzLicsIDQwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXRjaGVkVXNlcm5hbWVJbmZvOiBhbnkgPSBhd2FpdCB0aGlzLmRiSGFuZGxlci5maW5kKHt1c2VybmFtZTogdXNlclBheWxvYWQudXNlcm5hbWV9LCBudWxsLCBudWxsKTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgdXNlciBkZXRhaWxzIGFscmVhZHkgZXhpc3RzXHJcbiAgICAgICAgaWYgKG1hdGNoZWRVc2VybmFtZUluZm8ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCdVc2VybmFtZSBhbHJlYWR5IGV4aXN0cy4nLCA0MDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2VuZCBlbWFpbCB0byB1c2VyIGFuZCBhZGQgdGVtcG9yYXJ5IGNvZGUgaW4gdGhlIGRiXHJcbiAgICAgICAgLy8gYXdhaXQgdGhpcy5lbWFpbFNlcnZpY2Uuc2VuZFVzZXJBY3RpdmF0ZUVtYWlsKHVzZXJQYXlsb2FkKTtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlclJlc3VsdHMgPSBhd2FpdCB0aGlzLmRiSGFuZGxlci5pbnNlcnRPbmUodXNlclBheWxvYWQpO1xyXG5cclxuICAgICAgICBpZiAodXNlclJlc3VsdHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdJbnNlcnRlZCBTdWNjZXNzZnVsbHkuJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBQaW5FcnJvcignQ3JlYXRpb24gRmFpbGVkJywgNDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBhc3luYyB2ZXJpZnlVc2VyQ3JlZHModXNlclBheWxvYWQ6IFVzZXJBdXRoTW9kZWwpIHtcclxuXHJcbiAgICAgICAgLy8gZmV0Y2ggdXNlciBkZXRhaWxzIGZyb20gREJcclxuICAgICAgICBjb25zdCB1c2VyRGV0YWlsczogYW55ID0gYXdhaXQgdGhpcy5kYkhhbmRsZXIuZmluZCh7JG9yIDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogdXNlclBheWxvYWQudXNlcm5hbWUudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlclBheWxvYWQudXNlcm5hbWUudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXX0sIG51bGwsIG51bGwpO1xyXG5cclxuICAgICAgICBpZiAodXNlckRldGFpbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxldCB1c2VyRGV0YWlsID0gdXNlckRldGFpbHNbMF07XHJcblxyXG4gICAgICAgICAgICBpZiAoIXVzZXJEZXRhaWwuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUGluRXJyb3IoJ1VzZXIgaXMgZGlzYWJsZWQuJywgNDAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHVzZXJEZXRhaWwucGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhd2FpdCBiY3J5cHQuY29tcGFyZVN5bmModXNlclBheWxvYWQucGFzc3dvcmQsIHVzZXJEZXRhaWwucGFzc3dvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdXNlciBpcyB2YWxpZCByZXR1cm4gdG9rZW5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLnRva2VuU2VydmljZS5jcmVhdGVUb2tlbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyRGV0YWlsLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IHVzZXJEZXRhaWwuZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZTogdXNlckRldGFpbC5sYXN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJEZXRhaWwudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU6IHVzZXJEZXRhaWwucm9sZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiB1c2VyRGV0YWlsLnVzZXJJZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogdG9rZW5cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUGluRXJyb3IoJ1Bhc3N3b3JkIGlzIGluY29ycmVjdC4nLCA0MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCd1c2VyIGRldGFpbHMgbm90IGZvdW5kLicsIDQwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRBbGxVc2Vyc0luZm8oaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICAvLyBmZXRjaCByZXNwZWN0aXZlIHVzZXIgZGV0YWlscyBmcm9tIERCXHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEZXRhaWxzOiBhbnkgPSBhd2FpdCB0aGlzLmRiSGFuZGxlci5maW5kKHt1c2VySWQ6IGlkfSwgbnVsbCwge19pZDogMH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVzZXJEZXRhaWxzICYmIHVzZXJEZXRhaWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJEZXRhaWxzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCdEZXRhaWxzIG5vdCBmb3VuZCcsIDQwNCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBmZXRjaCBhbGwgdXNlciBkZXRhaWxzIGZyb20gREJcclxuICAgICAgICAgICAgY29uc3QgdXNlckRldGFpbHM6IGFueSA9IGF3YWl0IHRoaXMuZGJIYW5kbGVyLmZpbmQoe30sIG51bGwsIHtfaWQ6IDB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh1c2VyRGV0YWlscyAmJiB1c2VyRGV0YWlscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyRGV0YWlscztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQaW5FcnJvcignRGV0YWlscyBub3QgZm91bmQnLCA0MDQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZGVsZXRlVXNlckJ5SWQoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICAvLyBmZXRjaCByZXNwZWN0aXZlIHVzZXIgZGV0YWlscyBmcm9tIERCXHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEZXRhaWxzOiBhbnkgPSBhd2FpdCB0aGlzLmRiSGFuZGxlci5maW5kKHt1c2VySWQ6IGlkfSwgbnVsbCwge19pZDogMH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVzZXJEZXRhaWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlUmVzdWx0OiBhbnkgPSBhd2FpdCB0aGlzLmRiSGFuZGxlci5yZW1vdmUoe3VzZXJJZDogaWR9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGVsZXRlUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJEZWxldGVkIHN1Y2Nlc3NmdWxseS5cIiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCdEZWxldGlvbiBGYWlsZWQnLCA0MDQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCdVc2VyIGRldGFpbHMgbm90IGZvdW5kJywgNDA0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBQaW5FcnJvcignUHJvdmlkZSB1c2VyIElkJywgNDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHVwZGF0ZVVzZXJCeUlkKGlkOiBzdHJpbmcsIHVzZXJVcGRhdGVkTW9kZWw6IFVwZGF0ZVVzZXJNb2RlbCkge1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICAvLyBmZXRjaCByZXNwZWN0aXZlIHVzZXIgZGV0YWlscyBmcm9tIERCXHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEZXRhaWxzOiBhbnkgPSBhd2FpdCB0aGlzLmRiSGFuZGxlci5maW5kKHt1c2VySWQ6IGlkfSwgbnVsbCwge19pZDogMH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVzZXJEZXRhaWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdXNlclVwZGF0ZWRNb2RlbC51cGRhdGVkT24gPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZFVzZXJEZXRhaWxzID0gIGF3YWl0IHRoaXMuZGJIYW5kbGVyLnVwZGF0ZU9uZSh7dXNlcklkOiBpZH0sIHVzZXJVcGRhdGVkTW9kZWwsIG51bGwsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVwZGF0ZWRVc2VyRGV0YWlscykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVXBkYXRlZCBzdWNjZXNzZnVsbHkuXCIgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBQaW5FcnJvcignVXBkYXRpb24gRmFpbGVkJywgNDA0KTsgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQaW5FcnJvcignVXNlciBkZXRhaWxzIG5vdCBmb3VuZCcsIDQwNCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUGluRXJyb3IoJ1Byb3ZpZGUgdXNlciBJZCcsIDQwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyB1c2Vyc0NvdW50KCkge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmRiSGFuZGxlci5jb3VudCh7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFjdGl2YXRlQWNjb3VudCh1c2VyQWN0aXZhdGVQYXlsb2FkOiBVc2VyQWN0aXZhdGVNb2RlbCkge1xyXG4gICAgICAgIC8vIGZldGNoIHJlc3BlY3RpdmUgdXNlciBkZXRhaWxzIGZyb20gREJcclxuICAgICAgICBjb25zdCB1c2VyRGV0YWlsczogYW55ID0gYXdhaXQgdGhpcy5kYkhhbmRsZXIuZmluZCh7dXNlcm5hbWU6IHVzZXJBY3RpdmF0ZVBheWxvYWQudXNlcm5hbWUsIHRlbXBDb2RlOiB1c2VyQWN0aXZhdGVQYXlsb2FkLnRlbXBDb2RlfSwgbnVsbCwge19pZDogMH0pO1xyXG5cclxuICAgICAgICBsZXQgdXNlckRldGFpbDogVXNlck1vZGVsID0gdXNlckRldGFpbHNbMF07XHJcblxyXG4gICAgICAgIGlmICh1c2VyRGV0YWlscyAmJiB1c2VyRGV0YWlscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdXNlckFjdGl2YXRlUGF5bG9hZC51cGRhdGVkT24gPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICB1c2VyQWN0aXZhdGVQYXlsb2FkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHVzZXJBY3RpdmF0ZVBheWxvYWQudGVtcENvZGUgPSAnJzsgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRVc2VyRGV0YWlscyA9ICBhd2FpdCB0aGlzLmRiSGFuZGxlci51cGRhdGVPbmUoe3VzZXJJZDogdXNlckRldGFpbC51c2VySWR9LCB1c2VyQWN0aXZhdGVQYXlsb2FkLCBudWxsLCBudWxsKTtcclxuICAgICAgICAgICAgaWYgKHVwZGF0ZWRVc2VyRGV0YWlscykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlVzZXIgQWNjb3VudCBBY3RpdmF0ZWQgU3VjY2Vzc2Z1bGx5LlwiICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUGluRXJyb3IoJ1VwZGF0aW9uIEZhaWxlZCcsIDQwNCk7ICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHVzZXJEZXRhaWwgJiYgKHVzZXJEZXRhaWwudGVtcENvZGUgPT09ICcnIHx8IHVzZXJEZXRhaWwuYWN0aXZlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUGluRXJyb3IoJ1VzZXIgYWNjb3VudCBoYXMgYmVlbiBhY3RpdmF0ZWQuJywgNDAwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCF1c2VyRGV0YWlsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEZXRhaWxzOiBhbnkgPSBhd2FpdCB0aGlzLmRiSGFuZGxlci5maW5kKHt1c2VybmFtZTogdXNlckFjdGl2YXRlUGF5bG9hZC51c2VybmFtZX0sIG51bGwsIHtfaWQ6IDB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh1c2VyRGV0YWlscyAmJiB1c2VyRGV0YWlscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGxldCB1c2VyRGF0YSA9IHVzZXJEZXRhaWxzWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh1c2VyRGF0YS50ZW1wQ29kZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUGluRXJyb3IoJ1VzZXIgYWNjb3VudCBoYXMgYmVlbiBhY3RpdmF0ZWQuJywgNDAwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXVzZXJEYXRhLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBQaW5FcnJvcignVXNlciBhY2NvdW50IGluIGRpc2FibGVkIHN0YXRlLicsIDQwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUGluRXJyb3IoJ1RlbXBvcmFyeSBDb2RlIGlzIG5vdCB2YWxpZC4nLCA0MDQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==
