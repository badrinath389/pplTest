import {Get, Route, Tags, Post, Body, Request, Delete, Header, Put } from "tsoa";
import { Inject } from "typescript-ioc";
import { BaseController } from "./BaseController";
import { TokenService, AgentRegistrationService } from "../services";
import { AgentRegistrationModel, UpdateAgentRegistrationModel } from '../models';

@Route('agent')
@Tags("Agent Registration")
export class AgentRegistrationController extends BaseController {
    @Inject agentRegistrationService: AgentRegistrationService;
    @Inject tokenService: TokenService;

    /**
     * 
     * @param createAgentModel 
     * Agent create data body request
     * 
     * @param request 
     * request to validate the token
     */
    @Post()
    public async createAgentRegistation(@Body() createAgentPayload: AgentRegistrationModel,
        @Request() request: any) {
            try {
                // validate token
                await this.tokenService.validateToken(request);

                return await this.agentRegistrationService.createAgentRegistration(createAgentPayload);
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
    public async getAgentRegistations(@Request() request: any, @Header() authorization: any) {
        try {
            // validate token
            await this.tokenService.validateToken(request);

            return await this.agentRegistrationService.getAgentRegistration(null);
        } catch (error) {
            this.handleError(error);
        }
    }

    /**
     * 
     * @param id 
     * agent registration Id
     * 
     * @param request 
     * request to validate the token
     * 
     * @param authorization 
     * check authorization sending from Header
     * 
     */
    @Get('{id}')
    public async getAgentRegistrationById(id: string, @Request() request: any, @Header() authorization: any) {
        try {
            // validate token
            await this.tokenService.validateToken(request);

            return await this.agentRegistrationService.getAgentRegistration(id);
        } catch (error) {
            this.handleError(error);
        }
    }

    /**
     * 
     * @param id 
     * Agent registration Id
     * 
     * @param updateAgentRegPayload 
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
    public async updateAgentRegistration(id: string, @Body() updateAgentRegPayload: UpdateAgentRegistrationModel,
        @Request() request: any, @Header() authorization: any) {
        try {
            // validate token
            await this.tokenService.validateToken(request);
            
            return await this.agentRegistrationService.updateAgentRegistration(id, updateAgentRegPayload);
        } catch (error) {
            this.handleError(error);
        }
    }

    /**
     * 
     * @param id 
     * agent registration id
     * 
     * @param request 
     * request to validate the token
     * 
     * @param authorization 
     * check authorization sending from Header
     */
    @Delete('{id}')
    public async deleteAgentRegistration(id: string, @Request() request: any, @Header() authorization: any) {
        try {
            // validate token
            await this.tokenService.validateToken(request);
            
            return await this.agentRegistrationService.deleteAgentRegistration(id);
        } catch (error) {
            this.handleError(error);
        }
    }
}