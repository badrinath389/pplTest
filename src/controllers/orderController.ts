import {Get, Route, Tags, Post, Body, Request, Delete, Head, Header, Put } from "tsoa";
import { Inject } from "typescript-ioc";
import { BaseController } from "./BaseController";
import { TokenService, OrderService } from "../services";
import { OrderModel, UpdateOrderModel } from '../models';

@Route('order')
@Tags("Order")
export class OrderController extends BaseController {
    @Inject orderService: OrderService;
    @Inject tokenService: TokenService;

    /**
     * 
     * @param createOrderPayload 
     * order create data body request
     * 
     * @param request 
     * request to validate the token
     */
    @Post()
    public async createOrder(@Body() createOrderPayload: OrderModel,
        @Request() request: any, @Header() authorization: any) {
            try {
                // validate token
                await this.tokenService.validateToken(request);

                return await this.orderService.createOrder(createOrderPayload);
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
    public async getOrderDetails(@Request() request: any, @Header() authorization: any) {
        try {
            // validate token
            await this.tokenService.validateToken(request);

            return await this.orderService.getorderDetails(null);
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
    public async getOrderAutoIncrementNo(@Request() request: any, @Header() authorization: any) {
        try {
            // validate token
            await this.tokenService.validateToken(request);

            return await this.orderService.getOrderIncrementNo();
        } catch (error) {
            this.handleError(error);
        }
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
    @Get('{id}')
    public async getOrderById(id: string, @Request() request: any, @Header() authorization: any) {
        try {
            // validate token
            await this.tokenService.validateToken(request);

            return await this.orderService.getorderDetails(id);
        } catch (error) {
            this.handleError(error);
        }
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
    @Put('{id}')
    public async updateOrderDetails(id: string, @Body() updateOrderPayload: UpdateOrderModel,
        @Request() request: any, @Header() authorization: any) {
        try {
            // validate token
            await this.tokenService.validateToken(request);
            
            return await this.orderService.updateorderDetails(id, updateOrderPayload);
        } catch (error) {
            this.handleError(error);
        }
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
    @Delete('{id}')
    public async deleteorderDetails(id: string, @Request() request: any, @Header() authorization: any) {
        try {
            // validate token
            await this.tokenService.validateToken(request);
            
            return await this.orderService.deleteorderDetails(id);
        } catch (error) {
            this.handleError(error);
        }
    }
}