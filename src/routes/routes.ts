/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { Controller, ValidationService, FieldErrors, ValidateError, TsoaRoute } from 'tsoa';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SampleCheckController } from './../controllers/sampleCheckController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UsersController } from './../controllers/usersController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { VehicleRegistrationController } from './../controllers/vehicleRegistrationController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AgentRegistrationController } from './../controllers/agentRegistrationController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { MasterOrderController } from './../controllers/masterOrderController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { OrderController } from './../controllers/orderController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { DashboardController } from './../controllers/dashboardController';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "UserRole": {
        "dataType": "refEnum",
        "enums": ["employee", "admin", "manager"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserModel": {
        "dataType": "refObject",
        "properties": {
            "userId": { "dataType": "string" },
            "firstName": { "dataType": "string", "required": true },
            "lastName": { "dataType": "string" },
            "dob": { "dataType": "string" },
            "email": { "dataType": "string", "required": true },
            "mobile": { "dataType": "double", "required": true },
            "address": { "dataType": "string" },
            "city": { "dataType": "string", "required": true },
            "state": { "dataType": "string", "required": true },
            "pincode": { "dataType": "double", "required": true },
            "landmark": { "dataType": "string" },
            "username": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
            "description": { "dataType": "string" },
            "role": { "ref": "UserRole", "required": true },
            "active": { "dataType": "boolean" },
            "tempCode": { "dataType": "string" },
            "createdOn": { "dataType": "datetime" },
            "updatedOn": { "dataType": "datetime" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserAuthModel": {
        "dataType": "refObject",
        "properties": {
            "username": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateUserModel": {
        "dataType": "refObject",
        "properties": {
            "firstName": { "dataType": "string" },
            "lastName": { "dataType": "string" },
            "dob": { "dataType": "string" },
            "email": { "dataType": "string" },
            "mobile": { "dataType": "double" },
            "address": { "dataType": "string" },
            "city": { "dataType": "string" },
            "state": { "dataType": "string" },
            "pincode": { "dataType": "double" },
            "landmark": { "dataType": "string" },
            "description": { "dataType": "string" },
            "role": { "ref": "UserRole" },
            "updatedOn": { "dataType": "datetime" },
            "active": { "dataType": "boolean" },
            "tempCode": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserActivateModel": {
        "dataType": "refObject",
        "properties": {
            "username": { "dataType": "string", "required": true },
            "tempCode": { "dataType": "string", "required": true },
            "updatedOn": { "dataType": "datetime" },
            "active": { "dataType": "boolean" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "VehicleRegistrationModel": {
        "dataType": "refObject",
        "properties": {
            "vehicleId": { "dataType": "string" },
            "vehicleDisplayId": { "dataType": "string" },
            "vehicleNo": { "dataType": "string", "required": true },
            "model": { "dataType": "string", "required": true },
            "type": { "dataType": "string", "required": true },
            "currentDriver": { "dataType": "string", "required": true },
            "agentId": { "dataType": "string" },
            "owenerName": { "dataType": "string" },
            "ownerContact": { "dataType": "string" },
            "fuelType": { "dataType": "string", "required": true },
            "insuranceDetails": { "dataType": "nestedObjectLiteral", "nestedProperties": { "engineNo": { "dataType": "string" }, "chassisNo": { "dataType": "string" }, "policyNo": { "dataType": "string" }, "expiryDate": { "dataType": "string" }, "startDate": { "dataType": "string" }, "name": { "dataType": "string" } }, "required": true },
            "registrationDetails": { "dataType": "array", "array": { "dataType": "string" } },
            "incrementNo": { "dataType": "double" },
            "createdOn": { "dataType": "datetime" },
            "updatedOn": { "dataType": "datetime" },
            "active": { "dataType": "boolean" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateVehicleRegistrationModel": {
        "dataType": "refObject",
        "properties": {
            "vehicleNo": { "dataType": "string" },
            "model": { "dataType": "string" },
            "type": { "dataType": "string" },
            "currentDriver": { "dataType": "string" },
            "agentName": { "dataType": "string" },
            "agentId": { "dataType": "string" },
            "owenerName": { "dataType": "string" },
            "ownerContact": { "dataType": "string" },
            "fuelType": { "dataType": "string" },
            "insuranceDetails": { "dataType": "nestedObjectLiteral", "nestedProperties": { "engineNo": { "dataType": "string" }, "chassisNo": { "dataType": "string" }, "policyNo": { "dataType": "string" }, "expiryDate": { "dataType": "string" }, "startDate": { "dataType": "string" }, "name": { "dataType": "string" } } },
            "registrationDetails": { "dataType": "array", "array": { "dataType": "string" } },
            "active": { "dataType": "boolean" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AgentRegistrationModel": {
        "dataType": "refObject",
        "properties": {
            "agentId": { "dataType": "string" },
            "agentName": { "dataType": "string", "required": true },
            "registrationDate": { "dataType": "string", "required": true },
            "vehicleRegId": { "dataType": "array", "array": { "dataType": "string" } },
            "contact": { "dataType": "nestedObjectLiteral", "nestedProperties": { "homeAddress": { "dataType": "string" }, "branchAddress": { "dataType": "string" }, "email": { "dataType": "string" }, "phoneNo": { "dataType": "string" }, "fax": { "dataType": "string" }, "mobile2": { "dataType": "string" }, "mobile1": { "dataType": "string", "required": true } } },
            "bank": { "dataType": "nestedObjectLiteral", "nestedProperties": { "branch": { "dataType": "string" }, "bankName": { "dataType": "string" }, "ifscCode": { "dataType": "string" }, "accountNo": { "dataType": "string" } } },
            "createdOn": { "dataType": "datetime" },
            "updatedOn": { "dataType": "datetime" },
            "active": { "dataType": "boolean" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateAgentRegistrationModel": {
        "dataType": "refObject",
        "properties": {
            "agentName": { "dataType": "string" },
            "registrationDate": { "dataType": "string" },
            "vehicleRegId": { "dataType": "array", "array": { "dataType": "string" } },
            "active": { "dataType": "boolean" },
            "contact": { "dataType": "nestedObjectLiteral", "nestedProperties": { "homeAddress": { "dataType": "string" }, "branchAddress": { "dataType": "string" }, "email": { "dataType": "string" }, "phoneNo": { "dataType": "string" }, "fax": { "dataType": "string" }, "mobile2": { "dataType": "string" }, "mobile1": { "dataType": "string" } } },
            "bank": { "dataType": "nestedObjectLiteral", "nestedProperties": { "branch": { "dataType": "string" }, "bankName": { "dataType": "string" }, "ifscCode": { "dataType": "string" }, "accountNo": { "dataType": "string" } } },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MasterOrderModel": {
        "dataType": "refObject",
        "properties": {
            "masterOrderId": { "dataType": "string" },
            "displayMasterId": { "dataType": "string" },
            "customerName": { "dataType": "string" },
            "incrementNo": { "dataType": "double" },
            "userId": { "dataType": "string" },
            "quantity": { "dataType": "double" },
            "rate": { "dataType": "string" },
            "location": { "dataType": "string" },
            "contact": { "dataType": "string" },
            "remark": { "dataType": "string" },
            "createdOn": { "dataType": "datetime" },
            "updatedOn": { "dataType": "datetime" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateMasterOrderModel": {
        "dataType": "refObject",
        "properties": {
            "masterOrderId": { "dataType": "string" },
            "displayMasterId": { "dataType": "string" },
            "customerName": { "dataType": "string" },
            "incrementNo": { "dataType": "double" },
            "userId": { "dataType": "string" },
            "quantity": { "dataType": "double" },
            "rate": { "dataType": "string" },
            "location": { "dataType": "string" },
            "contact": { "dataType": "string" },
            "remark": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OrderModel": {
        "dataType": "refObject",
        "properties": {
            "orderId": { "dataType": "string" },
            "displayOrderId": { "dataType": "string" },
            "date": { "dataType": "string" },
            "masterOrderId": { "dataType": "string" },
            "incrementNo": { "dataType": "double" },
            "fromLocation": { "dataType": "string" },
            "toLocation": { "dataType": "string" },
            "vehicleId": { "dataType": "string" },
            "agentPartyName": { "dataType": "string" },
            "vehicleType": { "dataType": "string" },
            "actualWeight": { "dataType": "double" },
            "totalChargableWeight": { "dataType": "double" },
            "rate": { "dataType": "double" },
            "freightAmount": { "dataType": "double" },
            "deductions": { "dataType": "nestedObjectLiteral", "nestedProperties": { "totalDeductions": { "dataType": "double" }, "shortage": { "dataType": "double" }, "tdsDeduction": { "dataType": "double" }, "dieselFuel": { "dataType": "double" }, "pumpCash": { "dataType": "double" }, "challan": { "dataType": "double" }, "advanceTobank": { "dataType": "double" } }, "required": true },
            "balanceToAgent": { "dataType": "double" },
            "paymentStatus": { "dataType": "string" },
            "rateBA": { "dataType": "nestedObjectLiteral", "nestedProperties": { "billNo": { "dataType": "string" }, "ratebalance": { "dataType": "double" } }, "required": true },
            "podReceivedDate": { "dataType": "string" },
            "podStatus": { "dataType": "boolean" },
            "podRemark": { "dataType": "string" },
            "createdOn": { "dataType": "datetime" },
            "updatedOn": { "dataType": "datetime" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateOrderModel": {
        "dataType": "refObject",
        "properties": {
            "displayOrderId": { "dataType": "string" },
            "date": { "dataType": "string" },
            "masterOrderId": { "dataType": "string" },
            "incrementNo": { "dataType": "double" },
            "fromLocation": { "dataType": "string" },
            "toLocation": { "dataType": "string" },
            "vehicleId": { "dataType": "string" },
            "agentPartyName": { "dataType": "string" },
            "vehicleType": { "dataType": "string" },
            "actualWeight": { "dataType": "double" },
            "totalChargableWeight": { "dataType": "double" },
            "rate": { "dataType": "double" },
            "freightAmount": { "dataType": "double" },
            "deductions": { "dataType": "nestedObjectLiteral", "nestedProperties": { "totalDeductions": { "dataType": "double" }, "shortage": { "dataType": "double" }, "tdsDeduction": { "dataType": "double" }, "dieselFuel": { "dataType": "double" }, "pumpCash": { "dataType": "double" }, "challan": { "dataType": "double" }, "advanceTobank": { "dataType": "double" } }, "required": true },
            "balanceToAgent": { "dataType": "double" },
            "paymentStatus": { "dataType": "string" },
            "rateBA": { "dataType": "nestedObjectLiteral", "nestedProperties": { "billNo": { "dataType": "string" }, "ratebalance": { "dataType": "double" } }, "required": true },
            "podReceivedDate": { "dataType": "string" },
            "podStatus": { "dataType": "boolean" },
            "podRemark": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(server: any) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    server.route({
        method: 'get',
        path: '/api/ping',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new SampleCheckController();

                const promise = controller.ping.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'post',
        path: '/api/user',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    userPayload: { "in": "body", "name": "userPayload", "required": true, "ref": "UserModel" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new UsersController();

                const promise = controller.createUser.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'post',
        path: '/api/user/login',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    userPaylod: { "in": "body", "name": "userPaylod", "required": true, "ref": "UserAuthModel" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new UsersController();

                const promise = controller.authenticateUser.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/user',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "string" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new UsersController();

                const promise = controller.getUserInfo.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/user/{id}',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "string" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new UsersController();

                const promise = controller.getUserById.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'delete',
        path: '/api/user/{id}',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "string" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new UsersController();

                const promise = controller.deleteUserById.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'put',
        path: '/api/user/{id}',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "string" },
                    userPayloadModel: { "in": "body", "name": "userPayloadModel", "required": true, "ref": "UpdateUserModel" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new UsersController();

                const promise = controller.updateUserById.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'post',
        path: '/api/user/account/activate',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    userActivatePayload: { "in": "body", "name": "userActivatePayload", "required": true, "ref": "UserActivateModel" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new UsersController();

                const promise = controller.activateUser.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'post',
        path: '/api/vehicle',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    createVehiclePayload: { "in": "body", "name": "createVehiclePayload", "required": true, "ref": "VehicleRegistrationModel" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new VehicleRegistrationController();

                const promise = controller.createVehicleRegistation.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/vehicle',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new VehicleRegistrationController();

                const promise = controller.getVehicleRegistations.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/vehicle/autoIncrement',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new VehicleRegistrationController();

                const promise = controller.getVehicleRegAutoIncrementNo.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/vehicle/{id}',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new VehicleRegistrationController();

                const promise = controller.getVehicleRegistrationById.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'put',
        path: '/api/vehicle/{id}',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    updateVehicleRegPayload: { "in": "body", "name": "updateVehicleRegPayload", "required": true, "ref": "UpdateVehicleRegistrationModel" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new VehicleRegistrationController();

                const promise = controller.updateVehicleRegistration.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'delete',
        path: '/api/vehicle/{id}',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new VehicleRegistrationController();

                const promise = controller.deleteVehicleRegistration.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'post',
        path: '/api/agent',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    createAgentPayload: { "in": "body", "name": "createAgentPayload", "required": true, "ref": "AgentRegistrationModel" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new AgentRegistrationController();

                const promise = controller.createAgentRegistation.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/agent',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new AgentRegistrationController();

                const promise = controller.getAgentRegistations.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/agent/{id}',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new AgentRegistrationController();

                const promise = controller.getAgentRegistrationById.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'put',
        path: '/api/agent/{id}',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    updateAgentRegPayload: { "in": "body", "name": "updateAgentRegPayload", "required": true, "ref": "UpdateAgentRegistrationModel" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new AgentRegistrationController();

                const promise = controller.updateAgentRegistration.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'delete',
        path: '/api/agent/{id}',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new AgentRegistrationController();

                const promise = controller.deleteAgentRegistration.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'post',
        path: '/api/masterorder',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    createMasterOrderPayload: { "in": "body", "name": "createMasterOrderPayload", "required": true, "ref": "MasterOrderModel" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new MasterOrderController();

                const promise = controller.createMasterOrder.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/masterorder',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new MasterOrderController();

                const promise = controller.getMasterOrderDetails.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/masterorder/autoIncrement',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new MasterOrderController();

                const promise = controller.getMasterOrderAutoIncrementNo.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/masterorder/{id}',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new MasterOrderController();

                const promise = controller.getMasterOrderById.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'put',
        path: '/api/masterorder/{id}',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    updateMasterOrderPayload: { "in": "body", "name": "updateMasterOrderPayload", "required": true, "ref": "UpdateMasterOrderModel" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new MasterOrderController();

                const promise = controller.updateMasterOrderDetails.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'delete',
        path: '/api/masterorder/{id}',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new MasterOrderController();

                const promise = controller.deleteMasterOrderDetails.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'post',
        path: '/api/order',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    createOrderPayload: { "in": "body", "name": "createOrderPayload", "required": true, "ref": "OrderModel" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new OrderController();

                const promise = controller.createOrder.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/order',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new OrderController();

                const promise = controller.getOrderDetails.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/order/autoIncrement',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new OrderController();

                const promise = controller.getOrderAutoIncrementNo.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/order/{id}',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new OrderController();

                const promise = controller.getOrderById.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'put',
        path: '/api/order/{id}',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    updateOrderPayload: { "in": "body", "name": "updateOrderPayload", "required": true, "ref": "UpdateOrderModel" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new OrderController();

                const promise = controller.updateOrderDetails.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'delete',
        path: '/api/order/{id}',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new OrderController();

                const promise = controller.deleteorderDetails.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/dashboard',
        options: {
            handler: (request: any, h: any) => {
                const args = {
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };

                let validatedArgs: any[] = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                } catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }

                const controller = new DashboardController();

                const promise = controller.getDashboardCountInfo.apply(controller, validatedArgs as any);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function isController(object: any): object is Controller {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }

    function promiseHandler(controllerObj: any, promise: any, request: any, h: any) {
        return Promise.resolve(promise)
            .then((data: any) => {
                const response = (data || data === false)
                    ? h.response(data).code(200)
                    : h.response("").code(204);

                // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                if (isController(controllerObj)) {
                    const headers = controllerObj.getHeaders();
                    Object.keys(headers).forEach((name: string) => {
                        response.header(name, headers[name]);
                    });

                    const statusCode = controllerObj.getStatus();
                    if (statusCode) {
                        response.code(statusCode);
                    }
                }
                return response;
            })
            .catch((error: any) => h.response(error).code(error.status || 500));
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function getValidatedArgs(args: any, request: any): any[] {
        const errorFields: FieldErrors = {};
        const values = Object.keys(args).map(key => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, errorFields, undefined, { "noImplicitAdditionalProperties": "throw-on-extras", "specVersion": 3 })
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, errorFields, undefined, { "noImplicitAdditionalProperties": "throw-on-extras", "specVersion": 3 })
                case 'header':
                    return validationService.ValidateParam(args[key], request.headers[name], name, errorFields, undefined, { "noImplicitAdditionalProperties": "throw-on-extras", "specVersion": 3 });
                case 'body':
                    return validationService.ValidateParam(args[key], request.payload, name, errorFields, name + '.', { "noImplicitAdditionalProperties": "throw-on-extras", "specVersion": 3 });
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.payload[name], name, errorFields, 'body.', { "noImplicitAdditionalProperties": "throw-on-extras", "specVersion": 3 });
            }
        });
        if (Object.keys(errorFields).length > 0) {
            throw new ValidateError(errorFields, '');
        }
        return values;
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
