import { Singleton, Inject } from "typescript-ioc";
import { DatabaseHandler } from "../../mongo/mongoConnection";
import { AgentRegistrationModel } from "../../models";
import { TokenService } from "./index";
import { v4 as uuidv4 } from 'uuid';
import { Controller } from "tsoa";
import { PinError } from "../../config/ErrorHandler";

@Singleton
export class AgentRegistrationService extends Controller {
    @Inject tokenService: TokenService;
    public dbHandler = new DatabaseHandler('agentReg');

    public async createAgentRegistration(agentRegPayload: AgentRegistrationModel) {
        // unique agentId
        agentRegPayload.agentId = `agent-${uuidv4()}`;
        agentRegPayload.active = true;

        agentRegPayload.createdOn = agentRegPayload.updatedOn = new Date();

        const agentResults = await this.dbHandler.insertOne(agentRegPayload);

        if (agentResults) {
            return {
                message: 'Inserted Successfully.'
            };
        } else {
            throw new PinError('Creation Failed', 400);
        }
    }

    public async getAgentRegistration(id: string) {
        if (id) {
            // get respective Agent registration details
            const agentDetails: any = await this.dbHandler.find({agentId: id}, null, {_id: 0});

            if (agentDetails && agentDetails.length) {
                return agentDetails;
            } else {
                throw new PinError('Agent details not found', 404);
            }
        } else {
            //  get all Agent registration
            const agentDetails: any = await this.dbHandler.find({}, null, {_id: 0});

            if (agentDetails && agentDetails.length) {
                return agentDetails;
            } else {
                throw new PinError('Agent details not found', 404);
            }
        }
    }

    public async updateAgentRegistration(id, agentRegPayload) {
        if (id) {
            // fetch respective Agent details
            const agentDetails: any = await this.dbHandler.find({agentId: id}, null, {_id: 0});

            if (agentDetails && agentDetails.length) {
                agentRegPayload.updatedOn = new Date();
                const updatedAgentDetails =  await this.dbHandler.updateOne({agentId: id}, agentRegPayload, null, null);
                if (updatedAgentDetails) {
                    return {
                        message: "Updated successfully."                       
                    };
                } else {
                    throw new PinError('Updation Failed', 404);   
                }
            } else {
                throw new PinError('Agent details not found', 404);
            }
        } else {
            throw new PinError('Provide Agent Id', 400);
        }
    }

    public async deleteAgentRegistration(id: string) {
        if (id) {
            // fetch respective agent details from DB
            const agentDetails: any = await this.dbHandler.find({agentId: id}, null, {_id: 0});

            if (agentDetails.length) {
                const deleteResult: any = await this.dbHandler.remove({agentId: id});

                if (deleteResult) {
                    return {
                        message: "Deleted successfully."                       
                    };
                } else {
                    throw new PinError('Deletion Failed', 404);
                }
            } else {
                throw new PinError('Agent details not found', 404);
            }
        } else {
            throw new PinError('Provide Agent Id', 400);
        }
    }

    public async agentCount() {
        return await this.dbHandler.count({});
    }
}