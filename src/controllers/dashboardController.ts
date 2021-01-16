import {Get, Route, Tags, Post, Body, Request, Delete, Head, Header, Put } from "tsoa";
import { Inject } from "typescript-ioc";
import { BaseController } from "./BaseController";
import { TokenService, DashboardService, UserService } from "../services";

@Route('dashboard')
@Tags("Dashboard")
export class DashboardController extends BaseController {
    @Inject tokenService: TokenService;
    @Inject dashboardService: DashboardService;
    @Inject userService: UserService;

    /**
     * 
     * @param request 
     * request to validate the token
     * 
     * @param authorization 
     * check authorization sending from Header
     */
    @Get()
    public async getDashboardCountInfo(@Request() request: any, @Header() authorization: any) {
        try {
            // validate token
            await this.tokenService.validateToken(request);

            const dashboardCount: any = await this.dashboardService.getDashboardCountInfo();
            dashboardCount.usersCount = await this.userService.usersCount();
            return dashboardCount;
        } catch (error) {
            this.handleError(error);
        }
    }
}