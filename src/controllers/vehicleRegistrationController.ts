import {Get, Route, Tags, Post, Body, Request, Delete, Head, Header, Put } from "tsoa";
import { Inject } from "typescript-ioc";
import { BaseController } from "./BaseController";
import { TokenService, VehicleRegistrationService } from "../services";
import { VehicleRegistrationModel, UpdateVehicleRegistrationModel } from '../models';

@Route('vehicle')
@Tags("Vehicle Registration")
export class VehicleRegistrationController extends BaseController {
    @Inject vehicleRegistrationService: VehicleRegistrationService;
    @Inject tokenService: TokenService;

    /**
     * 
     * @param createVehicleModel 
     * vehicle create data body request
     * 
     * @param request 
     * request to validate the token
     */
    @Post()
    public async createVehicleRegistation(@Body() createVehiclePayload: VehicleRegistrationModel,
        @Request() request: any, @Header() authorization: any) {
            try {
                // validate token
                await this.tokenService.validateToken(request);

                return await this.vehicleRegistrationService.createVehicleRegistation(createVehiclePayload);
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
    public async getVehicleRegistations(@Request() request: any, @Header() authorization: any) {
        try {
            // validate token
            await this.tokenService.validateToken(request);

            return await this.vehicleRegistrationService.getVehicleRegistration(null);
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
    public async getVehicleRegAutoIncrementNo(@Request() request: any, @Header() authorization: any) {
        try {
            // validate token
            await this.tokenService.validateToken(request);

            return await this.vehicleRegistrationService.getVehicleIncrementNo();
        } catch (error) {
            this.handleError(error);
        }
    }

    /**
     * 
     * @param id 
     * vehicle registration Id
     * 
     * @param request 
     * request to validate the token
     * 
     * @param authorization 
     * check authorization sending from Header
     * 
     */
    @Get('{id}')
    public async getVehicleRegistrationById(id: string, @Request() request: any, @Header() authorization: any) {
        try {
            // validate token
            await this.tokenService.validateToken(request);

            return await this.vehicleRegistrationService.getVehicleRegistration(id);
        } catch (error) {
            this.handleError(error);
        }
    }

    /**
     * 
     * @param id 
     * vehicle registration Id
     * 
     * @param updateVehicleRegPayload 
     * update details for the vehicle registration
     * 
     * @param request 
     * request to validate the token
     * 
     * @param authorization 
     * check authorization sending from Header
     * 
     */
    @Put('{id}')
    public async updateVehicleRegistration(id: string, @Body() updateVehicleRegPayload: UpdateVehicleRegistrationModel,
        @Request() request: any, @Header() authorization: any) {
        try {
            // validate token
            await this.tokenService.validateToken(request);
            
            return await this.vehicleRegistrationService.updateVehicleRegistration(id, updateVehicleRegPayload);
        } catch (error) {
            this.handleError(error);
        }
    }

    @Delete('{id}')
    public async deleteVehicleRegistration(id: string, @Request() request: any, @Header() authorization: any) {
        try {
            // validate token
            await this.tokenService.validateToken(request);
            
            return await this.vehicleRegistrationService.deleteVehicleRegistration(id);
        } catch (error) {
            this.handleError(error);
        }
    }
}