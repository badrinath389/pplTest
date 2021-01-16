import { Singleton, Inject } from "typescript-ioc";
import { DatabaseHandler } from "../../mongo/mongoConnection";
import { MasterOrderModel } from "../../models";
import { TokenService } from "./index";
import { v4 as uuidv4 } from 'uuid';
import { Controller } from "tsoa";
import { PinError } from "../../config/ErrorHandler";

@Singleton
export class MasterOrderService extends Controller {
    @Inject tokenService: TokenService;
    public dbHandler = new DatabaseHandler('masterOrder');

    public async createMasterOrder(masterOrderPayload: MasterOrderModel) {

        // auto generate Master Order Id
        masterOrderPayload.masterOrderId = `masterorder-${uuidv4()}`;

        // Master Order Id will be generated from UI like auto increate for the value
        masterOrderPayload.createdOn = masterOrderPayload.updatedOn = new Date();

        let MasterOrderAutoIncrement = await this.getMasterOrderIncrementNo();
        masterOrderPayload.incrementNo = Number(MasterOrderAutoIncrement.autoIncrement) + 1;

        // check Master Order displayId already exits or not
        if (masterOrderPayload.displayMasterId) {
            await this.checkMasterOrderIdExists(masterOrderPayload.displayMasterId);
        }

        const masterOrderResults = await this.dbHandler.insertOne(masterOrderPayload);

        if (masterOrderResults) {
            return {
                message: 'Inserted Successfully.'
            };
        } else {
            throw new PinError('Creation Failed', 400);
        }
    }

    public async checkMasterOrderIdExists(displayMasterId: string) {
        const masterOrderDetails: any = await this.dbHandler.find({displayMasterId: displayMasterId}, {createdOn: -1}, {_id: 0});

        if (masterOrderDetails && masterOrderDetails.length) {
            throw new PinError('Master order displayId details already exists', 400);
        }
    }

    public async getMasterOrderIncrementNo() {
        const masterOrderDetails: any = await this.dbHandler.find({}, {createdOn: -1}, {_id: 0});

        if (masterOrderDetails && masterOrderDetails.length) {
            let currentmasterOrderDetails = masterOrderDetails[0];

            if (currentmasterOrderDetails && currentmasterOrderDetails.incrementNo) {
                return {
                    autoIncrement: Number(currentmasterOrderDetails.incrementNo)
                };
            } else {
                return {
                    autoIncrement: 1
                };
            }
        } else {
            return {
                autoIncrement: 1
            };
        }
    }

    public async getMasterOrderDetails(id: string) {
        if (id) {
            // get respective Master Order details
            const masterOrderDetails: any = await this.dbHandler.find({masterOrderId: id}, null, {_id: 0});

            if (masterOrderDetails && masterOrderDetails.length) {
                return masterOrderDetails;
            } else {
                throw new PinError('Master Order details not found', 404);
            }
        } else {
            //  get all Master Order
            const masterOrderDetails: any = await this.dbHandler.find({}, null, {_id: 0});

            if (masterOrderDetails && masterOrderDetails.length) {
                return masterOrderDetails;
            } else {
                throw new PinError('Master Order details not found', 404);
            }
        }
    }

    public async updateMasterOrderDetails(id, updateMasterOrderPayload) {
        if (id) {
            // fetch respective Master Order details
            const masterOrderDetails: any = await this.dbHandler.find({masterOrderId: id}, null, {_id: 0});

            if (masterOrderDetails && masterOrderDetails.length) {
                updateMasterOrderPayload.updatedOn = new Date();
                const updatedMasterOrderDetails =  await this.dbHandler.updateOne({masterOrderId: id}, updateMasterOrderPayload, null, null);
                if (updatedMasterOrderDetails) {
                    return {
                        message: "Updated successfully."                       
                    };
                } else {
                    throw new PinError('Updation Failed', 404);   
                }
            } else {
                throw new PinError('Master Order details not found', 404);
            }
        } else {
            throw new PinError('Provide Master Order Id', 400);
        }
    }

    public async deleteMasterOrderDetails(id: string) {
        if (id) {
            // fetch respective master order details from DB
            const masterOrderDetails: any = await this.dbHandler.find({masterOrderId: id}, null, {_id: 0});

            if (masterOrderDetails.length) {
                const deleteResult: any = await this.dbHandler.remove({masterOrderId: id});

                if (deleteResult) {
                    return {
                        message: "Deleted successfully."                       
                    };
                } else {
                    throw new PinError('Deletion Failed', 404);
                }
            } else {
                throw new PinError('Master Order details not found', 404);
            }
        } else {
            throw new PinError('Provide Master Order Id', 400);
        }
    }

    public async masterOrderCount() {
        return await this.dbHandler.count({});
    }
}