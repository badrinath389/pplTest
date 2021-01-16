import {Get, Route, Tags, Post, Body, Request, Delete, Put, Header } from "tsoa";
import { UserModel, UserAuthModel, UpdateUserModel, UserActivateModel } from "../models/usersModel";
import { UserService } from "../services/internal/userService";
import { Inject } from "typescript-ioc";
import { BaseController } from "./BaseController";
import { TokenService } from "../services";

@Route('user')
@Tags("User")
export class UsersController extends BaseController {
    @Inject userService: UserService;
    @Inject tokenService: TokenService;

    /**
     * 
     * @param userPayload 
     * User payload to store user information
     */
    @Post()
    public async createUser(
        @Body() userPayload: UserModel
    ) {
        try {
            return await this.userService.createUser(userPayload);
        } catch (error) {
            this.handleError(error);
        }
    }

    /**
     * 
     * @param userPaylod 
     * User payload to check user auth information
     */
    @Post('login')
    public async authenticateUser(
        @Body() userPaylod: UserAuthModel
    ) {
        try {
            return await this.userService.verifyUserCreds(userPaylod);
        } catch (error) {
            this.handleError(error);
        }
    }

    /**
     * Get all users information
     */
    @Get()
    public async getUserInfo(@Request() request: any, @Header() authorization: string) {
        try {

            // validate token
            await this.tokenService.validateToken(request);

            return await this.userService.getAllUsersInfo(null);
        } catch (error) {
            this.handleError(error);
        }
    }

    /**
     * 
     * @param id 
     * Get user details by userId
     */
    @Get('{id}')
    public async getUserById(id: string, @Request() request: any, @Header() authorization: string) {
        try {
            // validate token
            await this.tokenService.validateToken(request);

            return await this.userService.getAllUsersInfo(id);
        } catch (error) {
            this.handleError(error);
        }
    }

    /**
     * 
     * @param id 
     * UserId for the user to be deleted
     * 
     * @param request 
     * request to check the token validations
     */
    @Delete('{id}')
    public async deleteUserById(id: string, @Request() request: any, @Header() authorization: string) {
        try {
            //  validate token
            await this.tokenService.validateToken(request);

            return await this.userService.deleteUserById(id);
        } catch (error) {
            this.handleError(error);
        }
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
    @Put('{id}')
    public async updateUserById(id: string, @Request() request: any, @Header() authorization: string,
        @Body() userPayloadModel: UpdateUserModel) {
        try {
            // validate token
            await this.tokenService.validateToken(request);
            
            return await this.userService.updateUserById(id, userPayloadModel);
        } catch (error) {
            this.handleError(error);
        }
    }


    /**
     * 
     * @param userActivatePayload 
     * User payload to store user information
     */
    @Post('account/activate')
    public async activateUser(
        @Body() userActivatePayload: UserActivateModel
    ) {
        try {
            return await this.userService.activateAccount(userActivatePayload);
        } catch (error) {
            this.handleError(error);
        }
    }
}