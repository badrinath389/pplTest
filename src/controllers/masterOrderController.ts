import {Get, Route, Tags, Post, Body, Request, Delete, Head, Header, Put } from "tsoa";
import { Inject } from "typescript-ioc";
import { BaseController } from "./BaseController";
import { TokenService, MasterOrderService } from "../services";
import { MasterOrderModel, UpdateMasterOrderModel } from '../models';

@Route('masterorder')
@Tags("Master Order")
export class MasterOrderController extends BaseController {
    @Inject masterOrderService: MasterOrderService;
    @Inject tokenService: TokenService;

    /**
     * 
     * @param createMasterOrderPayload 
     * MasterOrder create data body request
     * 
     * @param request 
     * request to validate the token
     */
    @Post()
    public async createMasterOrder(@Body() createMasterOrderPayload: MasterOrderModel,
        @Request() request: any, @Header() authorization: any) {
            try {
                // validate token
                await this.tokenService.validateToken(request);

                return await this.masterOrderService.createMasterOrder(createMasterOrderPayload);
            } catch (error) {
                this.handleError(error);
            }
    }

    /**
     * 
     * @param request 
     * request to validate the token
     * 
     * @param authorization 
     * check authorization sending from Header
     */
    @Get()
    public async getMasterOrderDetails(@Request() request: any, @Header() authorization: any) {
        try {
            // validate token
            await this.tokenService.validateToken(request);

            return await this.masterOrderService.getMasterOrderDetails(null);
        } catch (error) {
            this.handleError(error);
        }
    }

    /**
     * 
     * @param request 
     * request to validate the token
     * 
     * @param authorization 
     * check authorization sending from Header
     */
    @Get('autoIncrement')
    public async getMasterOrderAutoIncrementNo(@Request() request: any, @Header() authorization: any) {
        try {
            // validate token
            await this.tokenService.validateToken(request);

            return await this.masterOrderService.getMasterOrderIncrementNo();
        } catch (error) {
            this.handleError(error);
        }
    }

    /**
     * 
     * @param id 
     * MasterOrder Id
     * 
     * @param request 
     * request to validate the token
     * 
     * @param authorization 
     * check authorization sending from Header
     * 
     */
    @Get('{id}')
    public async getMasterOrderById(id: string, @Request() request: any, @Header() authorization: any) {
        try {
            // validate token
            await this.tokenService.validateToken(request);

            return await this.masterOrderService.getMasterOrderDetails(id);
        } catch (error) {
            this.handleError(error);
        }
    }

    /**
     * 
     * @param id 
     * master order Id
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
    @Put('{id}')
    public async updateMasterOrderDetails(id: string, @Body() updateMasterOrderPayload: UpdateMasterOrderModel,
        @Request() request: any, @Header() authorization: any) {
        try {
            // validate token
            await this.tokenService.validateToken(request);
            
            return await this.masterOrderService.updateMasterOrderDetails(id, updateMasterOrderPayload);
        } catch (error) {
            this.handleError(error);
        }
    }

    /**
     * 
     * @param id 
     * master order Id
     * 
     * @param request 
     * request to validate the token
     * 
     * @param authorization 
     * check authorization sending from Header
     * 
     */
    @Delete('{id}')
    public async deleteMasterOrderDetails(id: string, @Request() request: any, @Header() authorization: any) {
        try {
            // validate token
            await this.tokenService.validateToken(request);
            
            return await this.masterOrderService.deleteMasterOrderDetails(id);
        } catch (error) {
            this.handleError(error);
        }
    }
}