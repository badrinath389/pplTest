import { Singleton, Inject } from "typescript-ioc";
import { DatabaseHandler } from "../../mongo/mongoConnection";
import { UserModel, UserAuthModel, UpdateUserModel, UserActivateModel } from "../../models";
import { TokenService, EmailService, GeneratePasswordService } from "./index";
import { v4 as uuidv4 } from 'uuid';
import { Controller } from "tsoa";
import * as bcrypt  from "bcrypt";
import { PinError } from "../../config/ErrorHandler";

@Singleton
export class UserService extends Controller {
    @Inject tokenService: TokenService;
    @Inject emailService: EmailService;
    @Inject generatePasswordService: GeneratePasswordService;
    public dbHandler = new DatabaseHandler('users');

    public async createUser(userPayload: UserModel) {

        userPayload.userId = `user-${uuidv4()}`;
        userPayload.createdOn = userPayload.updatedOn = new Date();

        userPayload.active = false;

        userPayload.tempCode = this.generatePasswordService.generateRandomString(24, true, false, true, true);

        let saltRounds = 10;
        userPayload.password = await bcrypt.hashSync(userPayload.password, saltRounds);

        // check username and email should be unique
        const matchedUserInfo: any = await this.dbHandler.find({email: userPayload.email}, null, null);

        // check user details already exists
        if (matchedUserInfo.length) {
           throw new PinError('Email already exists.', 400);
        }

        const matchedUsernameInfo: any = await this.dbHandler.find({username: userPayload.username}, null, null);

        // check user details already exists
        if (matchedUsernameInfo.length) {
           throw new PinError('Username already exists.', 400);
        }

        // send email to user and add temporary code in the db
        // await this.emailService.sendUserActivateEmail(userPayload);

        const userResults = await this.dbHandler.insertOne(userPayload);

        if (userResults) {
            return {
                message: 'Inserted Successfully.'
            };
        } else {
            throw new PinError('Creation Failed', 400);
        }
    }


    public async verifyUserCreds(userPayload: UserAuthModel) {

        // fetch user details from DB
        const userDetails: any = await this.dbHandler.find({$or : [
            {
                email: userPayload.username.toLowerCase()
            },
            {
                username: userPayload.username.toLowerCase()
            }
        ]}, null, null);

        if (userDetails.length) {
            let userDetail = userDetails[0];

            if (!userDetail.active) {
                throw new PinError('User is disabled.', 400);
            }

            if (userDetail.password) {
                if (await bcrypt.compareSync(userPayload.password, userDetail.password)) {
                    // user is valid return token

                    const token = await this.tokenService.createToken({
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
                } else {
                    throw new PinError('Password is incorrect.', 400);
                }
            }
        } else {
            throw new PinError('user details not found.', 400);
        }
    }

    public async getAllUsersInfo(id: string) {
        if (id) {
            // fetch respective user details from DB
            const userDetails: any = await this.dbHandler.find({userId: id}, null, {_id: 0});

            if (userDetails && userDetails.length) {
                return userDetails;
            } else {
                throw new PinError('Details not found', 404);
            }
        } else {
            // fetch all user details from DB
            const userDetails: any = await this.dbHandler.find({}, null, {_id: 0});

            if (userDetails && userDetails.length) {
                return userDetails;
            } else {
                throw new PinError('Details not found', 404);
            }
         }
    }

    public async deleteUserById(id: string) {
        if (id) {
            // fetch respective user details from DB
            const userDetails: any = await this.dbHandler.find({userId: id}, null, {_id: 0});

            if (userDetails.length) {
                const deleteResult: any = await this.dbHandler.remove({userId: id});

                if (deleteResult) {
                    return {
                        message: "Deleted successfully."                       
                    };
                } else {
                    throw new PinError('Deletion Failed', 404);
                }
            } else {
                throw new PinError('User details not found', 404);
            }
        } else {
            throw new PinError('Provide user Id', 400);
        }
    }

    public async updateUserById(id: string, userUpdatedModel: UpdateUserModel) {
        if (id) {
            // fetch respective user details from DB
            const userDetails: any = await this.dbHandler.find({userId: id}, null, {_id: 0});

            if (userDetails.length) {
                userUpdatedModel.updatedOn = new Date();
                const updatedUserDetails =  await this.dbHandler.updateOne({userId: id}, userUpdatedModel, null, null);
                if (updatedUserDetails) {
                    return {
                        message: "Updated successfully."                       
                    };
                } else {
                    throw new PinError('Updation Failed', 404);   
                }
            } else {
                throw new PinError('User details not found', 404);
            }
        } else {
            throw new PinError('Provide user Id', 400);
        }
    }

    public async usersCount() {
        return await this.dbHandler.count({});
    }

    public async activateAccount(userActivatePayload: UserActivateModel) {
        // fetch respective user details from DB
        const userDetails: any = await this.dbHandler.find({username: userActivatePayload.username, tempCode: userActivatePayload.tempCode}, null, {_id: 0});

        let userDetail: UserModel = userDetails[0];

        if (userDetails && userDetails.length) {
            userActivatePayload.updatedOn = new Date();
            userActivatePayload.active = true;
            userActivatePayload.tempCode = '';            

            const updatedUserDetails =  await this.dbHandler.updateOne({userId: userDetail.userId}, userActivatePayload, null, null);
            if (updatedUserDetails) {
                return {
                    message: "User Account Activated Successfully."                       
                };
            } else {
                throw new PinError('Updation Failed', 404);   
            }
        } else if (userDetail && (userDetail.tempCode === '' || userDetail.active)) {
            throw new PinError('User account has been activated.', 400);
        } else if (!userDetail) {
            const userDetails: any = await this.dbHandler.find({username: userActivatePayload.username}, null, {_id: 0});

            if (userDetails && userDetails.length) {
                let userData = userDetails[0];

                if (userData.tempCode === '') {
                    throw new PinError('User account has been activated.', 400);
                } else if (!userData.active) {
                    throw new PinError('User account in disabled state.', 400);
                }
            }
        } else {
            throw new PinError('Temporary Code is not valid.', 404);
        }
    }
}