import { Singleton, Inject } from "typescript-ioc";
import { DatabaseHandler } from "../../mongo/mongoConnection";
import { OrderModel } from "../../models";
import { TokenService } from "./index";
import { v4 as uuidv4 } from 'uuid';
import { Controller } from "tsoa";
import { PinError } from "../../config/ErrorHandler";

@Singleton
export class OrderService extends Controller {
    @Inject tokenService: TokenService;
    public dbHandler = new DatabaseHandler('order');

    public async createOrder(createOrderPayload: OrderModel) {

        // auto generate Master Order Id
        createOrderPayload.orderId = `order-${uuidv4()}`;

        // Order Id will be generated from UI like auto increate for the value
        createOrderPayload.createdOn = createOrderPayload.updatedOn = new Date();

        let OrderAutoIncrement = await this.getOrderIncrementNo();
        createOrderPayload.incrementNo = Number(OrderAutoIncrement.autoIncrement) + 1;

        // check Master Order displayId already exits or not
        if (createOrderPayload.displayOrderId) {
            await this.checkorderIdExists(createOrderPayload.displayOrderId);
        }

        const orderResults = await this.dbHandler.insertOne(createOrderPayload);

        if (orderResults) {
            return {
                message: 'Inserted Successfully.'
            };
        } else {
            throw new PinError('Creation Failed', 400);
        }
    }

    public async checkorderIdExists(displayOrderId: string) {
        const orderDetails: any = await this.dbHandler.find({displayOrderId: displayOrderId}, {createdOn: -1}, {_id: 0});

        if (orderDetails && orderDetails.length) {
            throw new PinError('Order displayId details already exists', 400);
        }
    }

    public async getOrderIncrementNo() {
        const orderDetails: any = await this.dbHandler.find({}, {createdOn: -1}, {_id: 0});

        if (orderDetails && orderDetails.length) {
            let currentOrderDetails = orderDetails[0];

            if (currentOrderDetails && currentOrderDetails.incrementNo) {
                return {
                    autoIncrement: Number(currentOrderDetails.incrementNo)
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

    public async getorderDetails(id: string) {
        if (id) {
            // get respective Master Order details
            const orderDetails: any = await this.dbHandler.find({orderId: id}, null, {_id: 0});

            if (orderDetails && orderDetails.length) {
                return orderDetails;
            } else {
                throw new PinError('Order details not found', 404);
            }
        } else {
            //  get all Master Order
            const orderDetails: any = await this.dbHandler.find({}, null, {_id: 0});

            if (orderDetails && orderDetails.length) {
                return orderDetails;
            } else {
                throw new PinError('Order details not found', 404);
            }
        }
    }

    public async updateorderDetails(id, updateorderPayload) {
        if (id) {
            // fetch respective Master Order details
            const orderDetails: any = await this.dbHandler.find({orderId: id}, null, {_id: 0});

            if (orderDetails && orderDetails.length) {
                updateorderPayload.updatedOn = new Date();
                const updatedorderDetails =  await this.dbHandler.updateOne({orderId: id}, updateorderPayload, null, null);
                if (updatedorderDetails) {
                    return {
                        message: "Updated successfully."                       
                    };
                } else {
                    throw new PinError('Updation Failed', 404);   
                }
            } else {
                throw new PinError('Order details not found', 404);
            }
        } else {
            throw new PinError('Provide Order Id', 400);
        }
    }

    public async deleteorderDetails(id: string) {
        if (id) {
            // fetch respective master order details from DB
            const orderDetails: any = await this.dbHandler.find({orderId: id}, null, {_id: 0});

            if (orderDetails.length) {
                const deleteResult: any = await this.dbHandler.remove({orderId: id});

                if (deleteResult) {
                    return {
                        message: "Deleted successfully."                       
                    };
                } else {
                    throw new PinError('Deletion Failed', 404);
                }
            } else {
                throw new PinError('Order details not found', 404);
            }
        } else {
            throw new PinError('Provide Order Id', 400);
        }
    }

    public async orderCount() {
        return await this.dbHandler.count({});
    }
}