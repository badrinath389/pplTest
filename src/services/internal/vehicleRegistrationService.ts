import { Singleton, Inject } from "typescript-ioc";
import { DatabaseHandler } from "../../mongo/mongoConnection";
import { VehicleRegistrationModel } from "../../models";
import { TokenService } from "./index";
import { v4 as uuidv4 } from 'uuid';
import { Controller } from "tsoa";
import { PinError } from "../../config/ErrorHandler";

@Singleton
export class VehicleRegistrationService extends Controller {
    @Inject tokenService: TokenService;
    public dbHandler = new DatabaseHandler('vehicleReg');

    public async createVehicleRegistation(vehiclePayload: VehicleRegistrationModel) {

        // auto generate vehicle Id
        vehiclePayload.vehicleId = `vehicle-${uuidv4()}`;
        vehiclePayload.active = true;

        // vehicle Id will be generated from UI like auto increate for the value
        vehiclePayload.createdOn = vehiclePayload.updatedOn = new Date();

        let VehicleAutoIncrement = await this.getVehicleIncrementNo();
        vehiclePayload.incrementNo = Number(VehicleAutoIncrement.autoIncrement) + 1;

        // check vehicle displayId already exits or not
        if (vehiclePayload.vehicleDisplayId) {
            await this.checkVehicleDisplayIdExists(vehiclePayload.vehicleDisplayId);
        }

        const vehicleResults = await this.dbHandler.insertOne(vehiclePayload);

        if (vehicleResults) {
            return {
                message: 'Inserted Successfully.'
            };
        } else {
            throw new PinError('Creation Failed', 400);
        }
    }

    public async checkVehicleDisplayIdExists(vehicleDisplayId: string) {
        const vehicleDetails: any = await this.dbHandler.find({vehicleDisplayId: vehicleDisplayId}, {createdOn: -1}, {_id: 0});

        if (vehicleDetails && vehicleDetails.length) {
            throw new PinError('Vehicle displayId details already exists', 400);
        }
    }

    public async getVehicleIncrementNo() {
        const vehicleDetails: any = await this.dbHandler.find({}, {createdOn: -1}, {_id: 0});

        if (vehicleDetails && vehicleDetails.length) {
            let currentVehicleDetails = vehicleDetails[0];

            if (currentVehicleDetails && currentVehicleDetails.incrementNo) {
                return {
                    autoIncrement: Number(currentVehicleDetails.incrementNo)
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

    public async getVehicleRegistration(id: string) {
        if (id) {
            // get respective vehicle registration details
            const vehicleDetails: any = await this.dbHandler.find({vehicleId: id}, null, {_id: 0});

            if (vehicleDetails && vehicleDetails.length) {
                return vehicleDetails;
            } else {
                throw new PinError('Vehicle details not found', 404);
            }
        } else {
            //  get all vehicle registration
            const vehicleDetails: any = await this.dbHandler.find({}, null, {_id: 0});

            if (vehicleDetails && vehicleDetails.length) {
                return vehicleDetails;
            } else {
                throw new PinError('Vehicle details not found', 404);
            }
        }
    }

    public async updateVehicleRegistration(id, vehicleRegPayload) {
        if (id) {
            // fetch respective vehicle details
            const vehicleDetails: any = await this.dbHandler.find({vehicleId: id}, null, {_id: 0});

            if (vehicleDetails && vehicleDetails.length) {
                vehicleRegPayload.updatedOn = new Date();
                const updatedVehicleDetails =  await this.dbHandler.updateOne({vehicleId: id}, vehicleRegPayload, null, null);
                if (updatedVehicleDetails) {
                    return {
                        message: "Updated successfully."                       
                    };
                } else {
                    throw new PinError('Updation Failed', 404);   
                }
            } else {
                throw new PinError('Vehicle details not found', 404);
            }
        } else {
            throw new PinError('Provide vehicle Id', 400);
        }
    }

    public async deleteVehicleRegistration(id: string) {
        if (id) {
            // fetch respective vehicle details from DB
            const vehicleDetails: any = await this.dbHandler.find({vehicleId: id}, null, {_id: 0});

            if (vehicleDetails.length) {
                const deleteResult: any = await this.dbHandler.remove({vehicleId: id});

                if (deleteResult) {
                    return {
                        message: "Deleted successfully."                       
                    };
                } else {
                    throw new PinError('Deletion Failed', 404);
                }
            } else {
                throw new PinError('Vehicle details not found', 404);
            }
        } else {
            throw new PinError('Provide Vehicle Id', 400);
        }
    }

    public async vehicleCount() {
        return await this.dbHandler.count({});
    }
}