"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = void 0;
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const tsoa_1 = require("tsoa");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const sampleCheckController_1 = require("./../controllers/sampleCheckController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const usersController_1 = require("./../controllers/usersController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const vehicleRegistrationController_1 = require("./../controllers/vehicleRegistrationController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const agentRegistrationController_1 = require("./../controllers/agentRegistrationController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const masterOrderController_1 = require("./../controllers/masterOrderController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const orderController_1 = require("./../controllers/orderController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const dashboardController_1 = require("./../controllers/dashboardController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
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
};
const validationService = new tsoa_1.ValidationService(models);
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(server) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    server.route({
        method: 'get',
        path: '/api/ping',
        options: {
            handler: (request, h) => {
                const args = {};
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new sampleCheckController_1.SampleCheckController();
                const promise = controller.ping.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'post',
        path: '/api/user',
        options: {
            handler: (request, h) => {
                const args = {
                    userPayload: { "in": "body", "name": "userPayload", "required": true, "ref": "UserModel" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new usersController_1.UsersController();
                const promise = controller.createUser.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'post',
        path: '/api/user/login',
        options: {
            handler: (request, h) => {
                const args = {
                    userPaylod: { "in": "body", "name": "userPaylod", "required": true, "ref": "UserAuthModel" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new usersController_1.UsersController();
                const promise = controller.authenticateUser.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/user',
        options: {
            handler: (request, h) => {
                const args = {
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "string" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new usersController_1.UsersController();
                const promise = controller.getUserInfo.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/user/{id}',
        options: {
            handler: (request, h) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "string" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new usersController_1.UsersController();
                const promise = controller.getUserById.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'delete',
        path: '/api/user/{id}',
        options: {
            handler: (request, h) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "string" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new usersController_1.UsersController();
                const promise = controller.deleteUserById.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'put',
        path: '/api/user/{id}',
        options: {
            handler: (request, h) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "string" },
                    userPayloadModel: { "in": "body", "name": "userPayloadModel", "required": true, "ref": "UpdateUserModel" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new usersController_1.UsersController();
                const promise = controller.updateUserById.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'post',
        path: '/api/user/account/activate',
        options: {
            handler: (request, h) => {
                const args = {
                    userActivatePayload: { "in": "body", "name": "userActivatePayload", "required": true, "ref": "UserActivateModel" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new usersController_1.UsersController();
                const promise = controller.activateUser.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'post',
        path: '/api/vehicle',
        options: {
            handler: (request, h) => {
                const args = {
                    createVehiclePayload: { "in": "body", "name": "createVehiclePayload", "required": true, "ref": "VehicleRegistrationModel" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new vehicleRegistrationController_1.VehicleRegistrationController();
                const promise = controller.createVehicleRegistation.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/vehicle',
        options: {
            handler: (request, h) => {
                const args = {
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new vehicleRegistrationController_1.VehicleRegistrationController();
                const promise = controller.getVehicleRegistations.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/vehicle/autoIncrement',
        options: {
            handler: (request, h) => {
                const args = {
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new vehicleRegistrationController_1.VehicleRegistrationController();
                const promise = controller.getVehicleRegAutoIncrementNo.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/vehicle/{id}',
        options: {
            handler: (request, h) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new vehicleRegistrationController_1.VehicleRegistrationController();
                const promise = controller.getVehicleRegistrationById.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'put',
        path: '/api/vehicle/{id}',
        options: {
            handler: (request, h) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    updateVehicleRegPayload: { "in": "body", "name": "updateVehicleRegPayload", "required": true, "ref": "UpdateVehicleRegistrationModel" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new vehicleRegistrationController_1.VehicleRegistrationController();
                const promise = controller.updateVehicleRegistration.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'delete',
        path: '/api/vehicle/{id}',
        options: {
            handler: (request, h) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new vehicleRegistrationController_1.VehicleRegistrationController();
                const promise = controller.deleteVehicleRegistration.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'post',
        path: '/api/agent',
        options: {
            handler: (request, h) => {
                const args = {
                    createAgentPayload: { "in": "body", "name": "createAgentPayload", "required": true, "ref": "AgentRegistrationModel" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new agentRegistrationController_1.AgentRegistrationController();
                const promise = controller.createAgentRegistation.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/agent',
        options: {
            handler: (request, h) => {
                const args = {
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new agentRegistrationController_1.AgentRegistrationController();
                const promise = controller.getAgentRegistations.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/agent/{id}',
        options: {
            handler: (request, h) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new agentRegistrationController_1.AgentRegistrationController();
                const promise = controller.getAgentRegistrationById.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'put',
        path: '/api/agent/{id}',
        options: {
            handler: (request, h) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    updateAgentRegPayload: { "in": "body", "name": "updateAgentRegPayload", "required": true, "ref": "UpdateAgentRegistrationModel" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new agentRegistrationController_1.AgentRegistrationController();
                const promise = controller.updateAgentRegistration.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'delete',
        path: '/api/agent/{id}',
        options: {
            handler: (request, h) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new agentRegistrationController_1.AgentRegistrationController();
                const promise = controller.deleteAgentRegistration.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'post',
        path: '/api/masterorder',
        options: {
            handler: (request, h) => {
                const args = {
                    createMasterOrderPayload: { "in": "body", "name": "createMasterOrderPayload", "required": true, "ref": "MasterOrderModel" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new masterOrderController_1.MasterOrderController();
                const promise = controller.createMasterOrder.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/masterorder',
        options: {
            handler: (request, h) => {
                const args = {
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new masterOrderController_1.MasterOrderController();
                const promise = controller.getMasterOrderDetails.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/masterorder/autoIncrement',
        options: {
            handler: (request, h) => {
                const args = {
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new masterOrderController_1.MasterOrderController();
                const promise = controller.getMasterOrderAutoIncrementNo.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/masterorder/{id}',
        options: {
            handler: (request, h) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new masterOrderController_1.MasterOrderController();
                const promise = controller.getMasterOrderById.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'put',
        path: '/api/masterorder/{id}',
        options: {
            handler: (request, h) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    updateMasterOrderPayload: { "in": "body", "name": "updateMasterOrderPayload", "required": true, "ref": "UpdateMasterOrderModel" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new masterOrderController_1.MasterOrderController();
                const promise = controller.updateMasterOrderDetails.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'delete',
        path: '/api/masterorder/{id}',
        options: {
            handler: (request, h) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new masterOrderController_1.MasterOrderController();
                const promise = controller.deleteMasterOrderDetails.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'post',
        path: '/api/order',
        options: {
            handler: (request, h) => {
                const args = {
                    createOrderPayload: { "in": "body", "name": "createOrderPayload", "required": true, "ref": "OrderModel" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new orderController_1.OrderController();
                const promise = controller.createOrder.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/order',
        options: {
            handler: (request, h) => {
                const args = {
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new orderController_1.OrderController();
                const promise = controller.getOrderDetails.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/order/autoIncrement',
        options: {
            handler: (request, h) => {
                const args = {
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new orderController_1.OrderController();
                const promise = controller.getOrderAutoIncrementNo.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/order/{id}',
        options: {
            handler: (request, h) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new orderController_1.OrderController();
                const promise = controller.getOrderById.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'put',
        path: '/api/order/{id}',
        options: {
            handler: (request, h) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    updateOrderPayload: { "in": "body", "name": "updateOrderPayload", "required": true, "ref": "UpdateOrderModel" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new orderController_1.OrderController();
                const promise = controller.updateOrderDetails.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'delete',
        path: '/api/order/{id}',
        options: {
            handler: (request, h) => {
                const args = {
                    id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new orderController_1.OrderController();
                const promise = controller.deleteorderDetails.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    server.route({
        method: 'get',
        path: '/api/dashboard',
        options: {
            handler: (request, h) => {
                const args = {
                    request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                    authorization: { "in": "header", "name": "authorization", "required": true, "dataType": "any" },
                };
                let validatedArgs = [];
                try {
                    validatedArgs = getValidatedArgs(args, request);
                }
                catch (err) {
                    return h
                        .response(err)
                        .code(err.status || 500);
                }
                const controller = new dashboardController_1.DashboardController();
                const promise = controller.getDashboardCountInfo.apply(controller, validatedArgs);
                return promiseHandler(controller, promise, request, h);
            }
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function isController(object) {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }
    function promiseHandler(controllerObj, promise, request, h) {
        return Promise.resolve(promise)
            .then((data) => {
            const response = (data || data === false)
                ? h.response(data).code(200)
                : h.response("").code(204);
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            if (isController(controllerObj)) {
                const headers = controllerObj.getHeaders();
                Object.keys(headers).forEach((name) => {
                    response.header(name, headers[name]);
                });
                const statusCode = controllerObj.getStatus();
                if (statusCode) {
                    response.code(statusCode);
                }
            }
            return response;
        })
            .catch((error) => h.response(error).code(error.status || 500));
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function getValidatedArgs(args, request) {
        const errorFields = {};
        const values = Object.keys(args).map(key => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, errorFields, undefined, { "noImplicitAdditionalProperties": "throw-on-extras", "specVersion": 3 });
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, errorFields, undefined, { "noImplicitAdditionalProperties": "throw-on-extras", "specVersion": 3 });
                case 'header':
                    return validationService.ValidateParam(args[key], request.headers[name], name, errorFields, undefined, { "noImplicitAdditionalProperties": "throw-on-extras", "specVersion": 3 });
                case 'body':
                    return validationService.ValidateParam(args[key], request.payload, name, errorFields, name + '.', { "noImplicitAdditionalProperties": "throw-on-extras", "specVersion": 3 });
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.payload[name], name, errorFields, 'body.', { "noImplicitAdditionalProperties": "throw-on-extras", "specVersion": 3 });
            }
        });
        if (Object.keys(errorFields).length > 0) {
            throw new tsoa_1.ValidateError(errorFields, '');
        }
        return values;
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
exports.RegisterRoutes = RegisterRoutes;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q0FBQztRQUNILElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLE1BQU0sSUFBSSxvQkFBYSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUM1QztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxvSkFBb0o7QUFDeEosQ0FBQztBQXA3QkQsd0NBbzdCQztBQUVELG9KQUFvSiIsImZpbGUiOiJyb3V0ZXMvcm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgKi9cclxuLy8gV0FSTklORzogVGhpcyBmaWxlIHdhcyBhdXRvLWdlbmVyYXRlZCB3aXRoIHRzb2EuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiBSZS1ydW4gdHNvYSB0byByZS1nZW5lcmF0ZSB0aGlzIGZpbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYXV0cnkvdHNvYVxyXG5pbXBvcnQgeyBDb250cm9sbGVyLCBWYWxpZGF0aW9uU2VydmljZSwgRmllbGRFcnJvcnMsIFZhbGlkYXRlRXJyb3IsIFRzb2FSb3V0ZSB9IGZyb20gJ3Rzb2EnO1xyXG4vLyBXQVJOSU5HOiBUaGlzIGZpbGUgd2FzIGF1dG8tZ2VuZXJhdGVkIHdpdGggdHNvYS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuIFJlLXJ1biB0c29hIHRvIHJlLWdlbmVyYXRlIHRoaXMgZmlsZTogaHR0cHM6Ly9naXRodWIuY29tL2x1a2VhdXRyeS90c29hXHJcbmltcG9ydCB7IFNhbXBsZUNoZWNrQ29udHJvbGxlciB9IGZyb20gJy4vLi4vY29udHJvbGxlcnMvc2FtcGxlQ2hlY2tDb250cm9sbGVyJztcclxuLy8gV0FSTklORzogVGhpcyBmaWxlIHdhcyBhdXRvLWdlbmVyYXRlZCB3aXRoIHRzb2EuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiBSZS1ydW4gdHNvYSB0byByZS1nZW5lcmF0ZSB0aGlzIGZpbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYXV0cnkvdHNvYVxyXG5pbXBvcnQgeyBVc2Vyc0NvbnRyb2xsZXIgfSBmcm9tICcuLy4uL2NvbnRyb2xsZXJzL3VzZXJzQ29udHJvbGxlcic7XHJcbi8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuaW1wb3J0IHsgVmVoaWNsZVJlZ2lzdHJhdGlvbkNvbnRyb2xsZXIgfSBmcm9tICcuLy4uL2NvbnRyb2xsZXJzL3ZlaGljbGVSZWdpc3RyYXRpb25Db250cm9sbGVyJztcclxuLy8gV0FSTklORzogVGhpcyBmaWxlIHdhcyBhdXRvLWdlbmVyYXRlZCB3aXRoIHRzb2EuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiBSZS1ydW4gdHNvYSB0byByZS1nZW5lcmF0ZSB0aGlzIGZpbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYXV0cnkvdHNvYVxyXG5pbXBvcnQgeyBBZ2VudFJlZ2lzdHJhdGlvbkNvbnRyb2xsZXIgfSBmcm9tICcuLy4uL2NvbnRyb2xsZXJzL2FnZW50UmVnaXN0cmF0aW9uQ29udHJvbGxlcic7XHJcbi8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuaW1wb3J0IHsgTWFzdGVyT3JkZXJDb250cm9sbGVyIH0gZnJvbSAnLi8uLi9jb250cm9sbGVycy9tYXN0ZXJPcmRlckNvbnRyb2xsZXInO1xyXG4vLyBXQVJOSU5HOiBUaGlzIGZpbGUgd2FzIGF1dG8tZ2VuZXJhdGVkIHdpdGggdHNvYS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuIFJlLXJ1biB0c29hIHRvIHJlLWdlbmVyYXRlIHRoaXMgZmlsZTogaHR0cHM6Ly9naXRodWIuY29tL2x1a2VhdXRyeS90c29hXHJcbmltcG9ydCB7IE9yZGVyQ29udHJvbGxlciB9IGZyb20gJy4vLi4vY29udHJvbGxlcnMvb3JkZXJDb250cm9sbGVyJztcclxuLy8gV0FSTklORzogVGhpcyBmaWxlIHdhcyBhdXRvLWdlbmVyYXRlZCB3aXRoIHRzb2EuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiBSZS1ydW4gdHNvYSB0byByZS1nZW5lcmF0ZSB0aGlzIGZpbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYXV0cnkvdHNvYVxyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb250cm9sbGVyIH0gZnJvbSAnLi8uLi9jb250cm9sbGVycy9kYXNoYm9hcmRDb250cm9sbGVyJztcclxuXHJcbi8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuXHJcbmNvbnN0IG1vZGVsczogVHNvYVJvdXRlLk1vZGVscyA9IHtcclxuICAgIFwiVXNlclJvbGVcIjoge1xyXG4gICAgICAgIFwiZGF0YVR5cGVcIjogXCJyZWZFbnVtXCIsXHJcbiAgICAgICAgXCJlbnVtc1wiOiBbXCJlbXBsb3llZVwiLCBcImFkbWluXCIsIFwibWFuYWdlclwiXSxcclxuICAgIH0sXHJcbiAgICAvLyBXQVJOSU5HOiBUaGlzIGZpbGUgd2FzIGF1dG8tZ2VuZXJhdGVkIHdpdGggdHNvYS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuIFJlLXJ1biB0c29hIHRvIHJlLWdlbmVyYXRlIHRoaXMgZmlsZTogaHR0cHM6Ly9naXRodWIuY29tL2x1a2VhdXRyeS90c29hXHJcbiAgICBcIlVzZXJNb2RlbFwiOiB7XHJcbiAgICAgICAgXCJkYXRhVHlwZVwiOiBcInJlZk9iamVjdFwiLFxyXG4gICAgICAgIFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgIFwidXNlcklkXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIFwiZmlyc3ROYW1lXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiLCBcInJlcXVpcmVkXCI6IHRydWUgfSxcclxuICAgICAgICAgICAgXCJsYXN0TmFtZVwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICBcImRvYlwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiLCBcInJlcXVpcmVkXCI6IHRydWUgfSxcclxuICAgICAgICAgICAgXCJtb2JpbGVcIjogeyBcImRhdGFUeXBlXCI6IFwiZG91YmxlXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSB9LFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgXCJjaXR5XCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiLCBcInJlcXVpcmVkXCI6IHRydWUgfSxcclxuICAgICAgICAgICAgXCJzdGF0ZVwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiwgXCJyZXF1aXJlZFwiOiB0cnVlIH0sXHJcbiAgICAgICAgICAgIFwicGluY29kZVwiOiB7IFwiZGF0YVR5cGVcIjogXCJkb3VibGVcIiwgXCJyZXF1aXJlZFwiOiB0cnVlIH0sXHJcbiAgICAgICAgICAgIFwibGFuZG1hcmtcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiwgXCJyZXF1aXJlZFwiOiB0cnVlIH0sXHJcbiAgICAgICAgICAgIFwicGFzc3dvcmRcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSB9LFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIFwicm9sZVwiOiB7IFwicmVmXCI6IFwiVXNlclJvbGVcIiwgXCJyZXF1aXJlZFwiOiB0cnVlIH0sXHJcbiAgICAgICAgICAgIFwiYWN0aXZlXCI6IHsgXCJkYXRhVHlwZVwiOiBcImJvb2xlYW5cIiB9LFxyXG4gICAgICAgICAgICBcInRlbXBDb2RlXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIFwiY3JlYXRlZE9uXCI6IHsgXCJkYXRhVHlwZVwiOiBcImRhdGV0aW1lXCIgfSxcclxuICAgICAgICAgICAgXCJ1cGRhdGVkT25cIjogeyBcImRhdGFUeXBlXCI6IFwiZGF0ZXRpbWVcIiB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICAvLyBXQVJOSU5HOiBUaGlzIGZpbGUgd2FzIGF1dG8tZ2VuZXJhdGVkIHdpdGggdHNvYS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuIFJlLXJ1biB0c29hIHRvIHJlLWdlbmVyYXRlIHRoaXMgZmlsZTogaHR0cHM6Ly9naXRodWIuY29tL2x1a2VhdXRyeS90c29hXHJcbiAgICBcIlVzZXJBdXRoTW9kZWxcIjoge1xyXG4gICAgICAgIFwiZGF0YVR5cGVcIjogXCJyZWZPYmplY3RcIixcclxuICAgICAgICBcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICBcInVzZXJuYW1lXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiLCBcInJlcXVpcmVkXCI6IHRydWUgfSxcclxuICAgICAgICAgICAgXCJwYXNzd29yZFwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiwgXCJyZXF1aXJlZFwiOiB0cnVlIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIC8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuICAgIFwiVXBkYXRlVXNlck1vZGVsXCI6IHtcclxuICAgICAgICBcImRhdGFUeXBlXCI6IFwicmVmT2JqZWN0XCIsXHJcbiAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgXCJmaXJzdE5hbWVcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgXCJsYXN0TmFtZVwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICBcImRvYlwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIFwibW9iaWxlXCI6IHsgXCJkYXRhVHlwZVwiOiBcImRvdWJsZVwiIH0sXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICBcImNpdHlcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgXCJzdGF0ZVwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICBcInBpbmNvZGVcIjogeyBcImRhdGFUeXBlXCI6IFwiZG91YmxlXCIgfSxcclxuICAgICAgICAgICAgXCJsYW5kbWFya1wiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIFwicm9sZVwiOiB7IFwicmVmXCI6IFwiVXNlclJvbGVcIiB9LFxyXG4gICAgICAgICAgICBcInVwZGF0ZWRPblwiOiB7IFwiZGF0YVR5cGVcIjogXCJkYXRldGltZVwiIH0sXHJcbiAgICAgICAgICAgIFwiYWN0aXZlXCI6IHsgXCJkYXRhVHlwZVwiOiBcImJvb2xlYW5cIiB9LFxyXG4gICAgICAgICAgICBcInRlbXBDb2RlXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIC8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuICAgIFwiVXNlckFjdGl2YXRlTW9kZWxcIjoge1xyXG4gICAgICAgIFwiZGF0YVR5cGVcIjogXCJyZWZPYmplY3RcIixcclxuICAgICAgICBcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICBcInVzZXJuYW1lXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiLCBcInJlcXVpcmVkXCI6IHRydWUgfSxcclxuICAgICAgICAgICAgXCJ0ZW1wQ29kZVwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiwgXCJyZXF1aXJlZFwiOiB0cnVlIH0sXHJcbiAgICAgICAgICAgIFwidXBkYXRlZE9uXCI6IHsgXCJkYXRhVHlwZVwiOiBcImRhdGV0aW1lXCIgfSxcclxuICAgICAgICAgICAgXCJhY3RpdmVcIjogeyBcImRhdGFUeXBlXCI6IFwiYm9vbGVhblwiIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIC8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuICAgIFwiVmVoaWNsZVJlZ2lzdHJhdGlvbk1vZGVsXCI6IHtcclxuICAgICAgICBcImRhdGFUeXBlXCI6IFwicmVmT2JqZWN0XCIsXHJcbiAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgXCJ2ZWhpY2xlSWRcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgXCJ2ZWhpY2xlRGlzcGxheUlkXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIFwidmVoaWNsZU5vXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiLCBcInJlcXVpcmVkXCI6IHRydWUgfSxcclxuICAgICAgICAgICAgXCJtb2RlbFwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiwgXCJyZXF1aXJlZFwiOiB0cnVlIH0sXHJcbiAgICAgICAgICAgIFwidHlwZVwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiwgXCJyZXF1aXJlZFwiOiB0cnVlIH0sXHJcbiAgICAgICAgICAgIFwiY3VycmVudERyaXZlclwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiwgXCJyZXF1aXJlZFwiOiB0cnVlIH0sXHJcbiAgICAgICAgICAgIFwiYWdlbnRJZFwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICBcIm93ZW5lck5hbWVcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgXCJvd25lckNvbnRhY3RcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgXCJmdWVsVHlwZVwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiwgXCJyZXF1aXJlZFwiOiB0cnVlIH0sXHJcbiAgICAgICAgICAgIFwiaW5zdXJhbmNlRGV0YWlsc1wiOiB7IFwiZGF0YVR5cGVcIjogXCJuZXN0ZWRPYmplY3RMaXRlcmFsXCIsIFwibmVzdGVkUHJvcGVydGllc1wiOiB7IFwiZW5naW5lTm9cIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSwgXCJjaGFzc2lzTm9cIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSwgXCJwb2xpY3lOb1wiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LCBcImV4cGlyeURhdGVcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSwgXCJzdGFydERhdGVcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSwgXCJuYW1lXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0gfSwgXCJyZXF1aXJlZFwiOiB0cnVlIH0sXHJcbiAgICAgICAgICAgIFwicmVnaXN0cmF0aW9uRGV0YWlsc1wiOiB7IFwiZGF0YVR5cGVcIjogXCJhcnJheVwiLCBcImFycmF5XCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0gfSxcclxuICAgICAgICAgICAgXCJpbmNyZW1lbnROb1wiOiB7IFwiZGF0YVR5cGVcIjogXCJkb3VibGVcIiB9LFxyXG4gICAgICAgICAgICBcImNyZWF0ZWRPblwiOiB7IFwiZGF0YVR5cGVcIjogXCJkYXRldGltZVwiIH0sXHJcbiAgICAgICAgICAgIFwidXBkYXRlZE9uXCI6IHsgXCJkYXRhVHlwZVwiOiBcImRhdGV0aW1lXCIgfSxcclxuICAgICAgICAgICAgXCJhY3RpdmVcIjogeyBcImRhdGFUeXBlXCI6IFwiYm9vbGVhblwiIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIC8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuICAgIFwiVXBkYXRlVmVoaWNsZVJlZ2lzdHJhdGlvbk1vZGVsXCI6IHtcclxuICAgICAgICBcImRhdGFUeXBlXCI6IFwicmVmT2JqZWN0XCIsXHJcbiAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgXCJ2ZWhpY2xlTm9cIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgXCJtb2RlbFwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICBcInR5cGVcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgXCJjdXJyZW50RHJpdmVyXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIFwiYWdlbnROYW1lXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIFwiYWdlbnRJZFwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICBcIm93ZW5lck5hbWVcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgXCJvd25lckNvbnRhY3RcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgXCJmdWVsVHlwZVwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICBcImluc3VyYW5jZURldGFpbHNcIjogeyBcImRhdGFUeXBlXCI6IFwibmVzdGVkT2JqZWN0TGl0ZXJhbFwiLCBcIm5lc3RlZFByb3BlcnRpZXNcIjogeyBcImVuZ2luZU5vXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sIFwiY2hhc3Npc05vXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sIFwicG9saWN5Tm9cIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSwgXCJleHBpcnlEYXRlXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sIFwic3RhcnREYXRlXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sIFwibmFtZVwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9IH0gfSxcclxuICAgICAgICAgICAgXCJyZWdpc3RyYXRpb25EZXRhaWxzXCI6IHsgXCJkYXRhVHlwZVwiOiBcImFycmF5XCIsIFwiYXJyYXlcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSB9LFxyXG4gICAgICAgICAgICBcImFjdGl2ZVwiOiB7IFwiZGF0YVR5cGVcIjogXCJib29sZWFuXCIgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgLy8gV0FSTklORzogVGhpcyBmaWxlIHdhcyBhdXRvLWdlbmVyYXRlZCB3aXRoIHRzb2EuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiBSZS1ydW4gdHNvYSB0byByZS1nZW5lcmF0ZSB0aGlzIGZpbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYXV0cnkvdHNvYVxyXG4gICAgXCJBZ2VudFJlZ2lzdHJhdGlvbk1vZGVsXCI6IHtcclxuICAgICAgICBcImRhdGFUeXBlXCI6IFwicmVmT2JqZWN0XCIsXHJcbiAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgXCJhZ2VudElkXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIFwiYWdlbnROYW1lXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiLCBcInJlcXVpcmVkXCI6IHRydWUgfSxcclxuICAgICAgICAgICAgXCJyZWdpc3RyYXRpb25EYXRlXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiLCBcInJlcXVpcmVkXCI6IHRydWUgfSxcclxuICAgICAgICAgICAgXCJ2ZWhpY2xlUmVnSWRcIjogeyBcImRhdGFUeXBlXCI6IFwiYXJyYXlcIiwgXCJhcnJheVwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9IH0sXHJcbiAgICAgICAgICAgIFwiY29udGFjdFwiOiB7IFwiZGF0YVR5cGVcIjogXCJuZXN0ZWRPYmplY3RMaXRlcmFsXCIsIFwibmVzdGVkUHJvcGVydGllc1wiOiB7IFwiaG9tZUFkZHJlc3NcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSwgXCJicmFuY2hBZGRyZXNzXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sIFwiZW1haWxcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSwgXCJwaG9uZU5vXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sIFwiZmF4XCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sIFwibW9iaWxlMlwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LCBcIm1vYmlsZTFcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSB9IH0gfSxcclxuICAgICAgICAgICAgXCJiYW5rXCI6IHsgXCJkYXRhVHlwZVwiOiBcIm5lc3RlZE9iamVjdExpdGVyYWxcIiwgXCJuZXN0ZWRQcm9wZXJ0aWVzXCI6IHsgXCJicmFuY2hcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSwgXCJiYW5rTmFtZVwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LCBcImlmc2NDb2RlXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sIFwiYWNjb3VudE5vXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0gfSB9LFxyXG4gICAgICAgICAgICBcImNyZWF0ZWRPblwiOiB7IFwiZGF0YVR5cGVcIjogXCJkYXRldGltZVwiIH0sXHJcbiAgICAgICAgICAgIFwidXBkYXRlZE9uXCI6IHsgXCJkYXRhVHlwZVwiOiBcImRhdGV0aW1lXCIgfSxcclxuICAgICAgICAgICAgXCJhY3RpdmVcIjogeyBcImRhdGFUeXBlXCI6IFwiYm9vbGVhblwiIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIC8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuICAgIFwiVXBkYXRlQWdlbnRSZWdpc3RyYXRpb25Nb2RlbFwiOiB7XHJcbiAgICAgICAgXCJkYXRhVHlwZVwiOiBcInJlZk9iamVjdFwiLFxyXG4gICAgICAgIFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgIFwiYWdlbnROYW1lXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIFwicmVnaXN0cmF0aW9uRGF0ZVwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICBcInZlaGljbGVSZWdJZFwiOiB7IFwiZGF0YVR5cGVcIjogXCJhcnJheVwiLCBcImFycmF5XCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0gfSxcclxuICAgICAgICAgICAgXCJhY3RpdmVcIjogeyBcImRhdGFUeXBlXCI6IFwiYm9vbGVhblwiIH0sXHJcbiAgICAgICAgICAgIFwiY29udGFjdFwiOiB7IFwiZGF0YVR5cGVcIjogXCJuZXN0ZWRPYmplY3RMaXRlcmFsXCIsIFwibmVzdGVkUHJvcGVydGllc1wiOiB7IFwiaG9tZUFkZHJlc3NcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSwgXCJicmFuY2hBZGRyZXNzXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sIFwiZW1haWxcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSwgXCJwaG9uZU5vXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sIFwiZmF4XCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sIFwibW9iaWxlMlwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LCBcIm1vYmlsZTFcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSB9IH0sXHJcbiAgICAgICAgICAgIFwiYmFua1wiOiB7IFwiZGF0YVR5cGVcIjogXCJuZXN0ZWRPYmplY3RMaXRlcmFsXCIsIFwibmVzdGVkUHJvcGVydGllc1wiOiB7IFwiYnJhbmNoXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sIFwiYmFua05hbWVcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSwgXCJpZnNjQ29kZVwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LCBcImFjY291bnROb1wiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9IH0gfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgLy8gV0FSTklORzogVGhpcyBmaWxlIHdhcyBhdXRvLWdlbmVyYXRlZCB3aXRoIHRzb2EuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiBSZS1ydW4gdHNvYSB0byByZS1nZW5lcmF0ZSB0aGlzIGZpbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYXV0cnkvdHNvYVxyXG4gICAgXCJNYXN0ZXJPcmRlck1vZGVsXCI6IHtcclxuICAgICAgICBcImRhdGFUeXBlXCI6IFwicmVmT2JqZWN0XCIsXHJcbiAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgXCJtYXN0ZXJPcmRlcklkXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIFwiZGlzcGxheU1hc3RlcklkXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIFwiY3VzdG9tZXJOYW1lXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIFwiaW5jcmVtZW50Tm9cIjogeyBcImRhdGFUeXBlXCI6IFwiZG91YmxlXCIgfSxcclxuICAgICAgICAgICAgXCJ1c2VySWRcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgXCJxdWFudGl0eVwiOiB7IFwiZGF0YVR5cGVcIjogXCJkb3VibGVcIiB9LFxyXG4gICAgICAgICAgICBcInJhdGVcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgXCJsb2NhdGlvblwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICBcImNvbnRhY3RcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgXCJyZW1hcmtcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgXCJjcmVhdGVkT25cIjogeyBcImRhdGFUeXBlXCI6IFwiZGF0ZXRpbWVcIiB9LFxyXG4gICAgICAgICAgICBcInVwZGF0ZWRPblwiOiB7IFwiZGF0YVR5cGVcIjogXCJkYXRldGltZVwiIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIC8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuICAgIFwiVXBkYXRlTWFzdGVyT3JkZXJNb2RlbFwiOiB7XHJcbiAgICAgICAgXCJkYXRhVHlwZVwiOiBcInJlZk9iamVjdFwiLFxyXG4gICAgICAgIFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgIFwibWFzdGVyT3JkZXJJZFwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICBcImRpc3BsYXlNYXN0ZXJJZFwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICBcImN1c3RvbWVyTmFtZVwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICBcImluY3JlbWVudE5vXCI6IHsgXCJkYXRhVHlwZVwiOiBcImRvdWJsZVwiIH0sXHJcbiAgICAgICAgICAgIFwidXNlcklkXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIFwicXVhbnRpdHlcIjogeyBcImRhdGFUeXBlXCI6IFwiZG91YmxlXCIgfSxcclxuICAgICAgICAgICAgXCJyYXRlXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIFwibG9jYXRpb25cIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgXCJjb250YWN0XCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIFwicmVtYXJrXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIC8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuICAgIFwiT3JkZXJNb2RlbFwiOiB7XHJcbiAgICAgICAgXCJkYXRhVHlwZVwiOiBcInJlZk9iamVjdFwiLFxyXG4gICAgICAgIFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgIFwib3JkZXJJZFwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICBcImRpc3BsYXlPcmRlcklkXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIFwiZGF0ZVwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICBcIm1hc3Rlck9yZGVySWRcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgXCJpbmNyZW1lbnROb1wiOiB7IFwiZGF0YVR5cGVcIjogXCJkb3VibGVcIiB9LFxyXG4gICAgICAgICAgICBcImZyb21Mb2NhdGlvblwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICBcInRvTG9jYXRpb25cIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgXCJ2ZWhpY2xlSWRcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgXCJhZ2VudFBhcnR5TmFtZVwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICBcInZlaGljbGVUeXBlXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIFwiYWN0dWFsV2VpZ2h0XCI6IHsgXCJkYXRhVHlwZVwiOiBcImRvdWJsZVwiIH0sXHJcbiAgICAgICAgICAgIFwidG90YWxDaGFyZ2FibGVXZWlnaHRcIjogeyBcImRhdGFUeXBlXCI6IFwiZG91YmxlXCIgfSxcclxuICAgICAgICAgICAgXCJyYXRlXCI6IHsgXCJkYXRhVHlwZVwiOiBcImRvdWJsZVwiIH0sXHJcbiAgICAgICAgICAgIFwiZnJlaWdodEFtb3VudFwiOiB7IFwiZGF0YVR5cGVcIjogXCJkb3VibGVcIiB9LFxyXG4gICAgICAgICAgICBcImRlZHVjdGlvbnNcIjogeyBcImRhdGFUeXBlXCI6IFwibmVzdGVkT2JqZWN0TGl0ZXJhbFwiLCBcIm5lc3RlZFByb3BlcnRpZXNcIjogeyBcInRvdGFsRGVkdWN0aW9uc1wiOiB7IFwiZGF0YVR5cGVcIjogXCJkb3VibGVcIiB9LCBcInNob3J0YWdlXCI6IHsgXCJkYXRhVHlwZVwiOiBcImRvdWJsZVwiIH0sIFwidGRzRGVkdWN0aW9uXCI6IHsgXCJkYXRhVHlwZVwiOiBcImRvdWJsZVwiIH0sIFwiZGllc2VsRnVlbFwiOiB7IFwiZGF0YVR5cGVcIjogXCJkb3VibGVcIiB9LCBcInB1bXBDYXNoXCI6IHsgXCJkYXRhVHlwZVwiOiBcImRvdWJsZVwiIH0sIFwiY2hhbGxhblwiOiB7IFwiZGF0YVR5cGVcIjogXCJkb3VibGVcIiB9LCBcImFkdmFuY2VUb2JhbmtcIjogeyBcImRhdGFUeXBlXCI6IFwiZG91YmxlXCIgfSB9LCBcInJlcXVpcmVkXCI6IHRydWUgfSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlVG9BZ2VudFwiOiB7IFwiZGF0YVR5cGVcIjogXCJkb3VibGVcIiB9LFxyXG4gICAgICAgICAgICBcInBheW1lbnRTdGF0dXNcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgXCJyYXRlQkFcIjogeyBcImRhdGFUeXBlXCI6IFwibmVzdGVkT2JqZWN0TGl0ZXJhbFwiLCBcIm5lc3RlZFByb3BlcnRpZXNcIjogeyBcImJpbGxOb1wiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LCBcInJhdGViYWxhbmNlXCI6IHsgXCJkYXRhVHlwZVwiOiBcImRvdWJsZVwiIH0gfSwgXCJyZXF1aXJlZFwiOiB0cnVlIH0sXHJcbiAgICAgICAgICAgIFwicG9kUmVjZWl2ZWREYXRlXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIFwicG9kU3RhdHVzXCI6IHsgXCJkYXRhVHlwZVwiOiBcImJvb2xlYW5cIiB9LFxyXG4gICAgICAgICAgICBcInBvZFJlbWFya1wiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICBcImNyZWF0ZWRPblwiOiB7IFwiZGF0YVR5cGVcIjogXCJkYXRldGltZVwiIH0sXHJcbiAgICAgICAgICAgIFwidXBkYXRlZE9uXCI6IHsgXCJkYXRhVHlwZVwiOiBcImRhdGV0aW1lXCIgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgLy8gV0FSTklORzogVGhpcyBmaWxlIHdhcyBhdXRvLWdlbmVyYXRlZCB3aXRoIHRzb2EuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiBSZS1ydW4gdHNvYSB0byByZS1nZW5lcmF0ZSB0aGlzIGZpbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYXV0cnkvdHNvYVxyXG4gICAgXCJVcGRhdGVPcmRlck1vZGVsXCI6IHtcclxuICAgICAgICBcImRhdGFUeXBlXCI6IFwicmVmT2JqZWN0XCIsXHJcbiAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgXCJkaXNwbGF5T3JkZXJJZFwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICBcImRhdGVcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgXCJtYXN0ZXJPcmRlcklkXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIFwiaW5jcmVtZW50Tm9cIjogeyBcImRhdGFUeXBlXCI6IFwiZG91YmxlXCIgfSxcclxuICAgICAgICAgICAgXCJmcm9tTG9jYXRpb25cIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgXCJ0b0xvY2F0aW9uXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIFwidmVoaWNsZUlkXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIFwiYWdlbnRQYXJ0eU5hbWVcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgXCJ2ZWhpY2xlVHlwZVwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICBcImFjdHVhbFdlaWdodFwiOiB7IFwiZGF0YVR5cGVcIjogXCJkb3VibGVcIiB9LFxyXG4gICAgICAgICAgICBcInRvdGFsQ2hhcmdhYmxlV2VpZ2h0XCI6IHsgXCJkYXRhVHlwZVwiOiBcImRvdWJsZVwiIH0sXHJcbiAgICAgICAgICAgIFwicmF0ZVwiOiB7IFwiZGF0YVR5cGVcIjogXCJkb3VibGVcIiB9LFxyXG4gICAgICAgICAgICBcImZyZWlnaHRBbW91bnRcIjogeyBcImRhdGFUeXBlXCI6IFwiZG91YmxlXCIgfSxcclxuICAgICAgICAgICAgXCJkZWR1Y3Rpb25zXCI6IHsgXCJkYXRhVHlwZVwiOiBcIm5lc3RlZE9iamVjdExpdGVyYWxcIiwgXCJuZXN0ZWRQcm9wZXJ0aWVzXCI6IHsgXCJ0b3RhbERlZHVjdGlvbnNcIjogeyBcImRhdGFUeXBlXCI6IFwiZG91YmxlXCIgfSwgXCJzaG9ydGFnZVwiOiB7IFwiZGF0YVR5cGVcIjogXCJkb3VibGVcIiB9LCBcInRkc0RlZHVjdGlvblwiOiB7IFwiZGF0YVR5cGVcIjogXCJkb3VibGVcIiB9LCBcImRpZXNlbEZ1ZWxcIjogeyBcImRhdGFUeXBlXCI6IFwiZG91YmxlXCIgfSwgXCJwdW1wQ2FzaFwiOiB7IFwiZGF0YVR5cGVcIjogXCJkb3VibGVcIiB9LCBcImNoYWxsYW5cIjogeyBcImRhdGFUeXBlXCI6IFwiZG91YmxlXCIgfSwgXCJhZHZhbmNlVG9iYW5rXCI6IHsgXCJkYXRhVHlwZVwiOiBcImRvdWJsZVwiIH0gfSwgXCJyZXF1aXJlZFwiOiB0cnVlIH0sXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVRvQWdlbnRcIjogeyBcImRhdGFUeXBlXCI6IFwiZG91YmxlXCIgfSxcclxuICAgICAgICAgICAgXCJwYXltZW50U3RhdHVzXCI6IHsgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIFwicmF0ZUJBXCI6IHsgXCJkYXRhVHlwZVwiOiBcIm5lc3RlZE9iamVjdExpdGVyYWxcIiwgXCJuZXN0ZWRQcm9wZXJ0aWVzXCI6IHsgXCJiaWxsTm9cIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSwgXCJyYXRlYmFsYW5jZVwiOiB7IFwiZGF0YVR5cGVcIjogXCJkb3VibGVcIiB9IH0sIFwicmVxdWlyZWRcIjogdHJ1ZSB9LFxyXG4gICAgICAgICAgICBcInBvZFJlY2VpdmVkRGF0ZVwiOiB7IFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICBcInBvZFN0YXR1c1wiOiB7IFwiZGF0YVR5cGVcIjogXCJib29sZWFuXCIgfSxcclxuICAgICAgICAgICAgXCJwb2RSZW1hcmtcIjogeyBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgLy8gV0FSTklORzogVGhpcyBmaWxlIHdhcyBhdXRvLWdlbmVyYXRlZCB3aXRoIHRzb2EuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiBSZS1ydW4gdHNvYSB0byByZS1nZW5lcmF0ZSB0aGlzIGZpbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYXV0cnkvdHNvYVxyXG59O1xyXG5jb25zdCB2YWxpZGF0aW9uU2VydmljZSA9IG5ldyBWYWxpZGF0aW9uU2VydmljZShtb2RlbHMpO1xyXG5cclxuLy8gV0FSTklORzogVGhpcyBmaWxlIHdhcyBhdXRvLWdlbmVyYXRlZCB3aXRoIHRzb2EuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiBSZS1ydW4gdHNvYSB0byByZS1nZW5lcmF0ZSB0aGlzIGZpbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYXV0cnkvdHNvYVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZ2lzdGVyUm91dGVzKHNlcnZlcjogYW55KSB7XHJcbiAgICAvLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4gICAgLy8gIE5PVEU6IElmIHlvdSBkbyBub3Qgc2VlIHJvdXRlcyBmb3IgYWxsIG9mIHlvdXIgY29udHJvbGxlcnMgaW4gdGhpcyBmaWxlLCB0aGVuIHlvdSBtaWdodCBub3QgaGF2ZSBpbmZvcm1lZCB0c29hIG9mIHdoZXJlIHRvIGxvb2tcclxuICAgIC8vICAgICAgUGxlYXNlIGxvb2sgaW50byB0aGUgXCJjb250cm9sbGVyUGF0aEdsb2JzXCIgY29uZmlnIG9wdGlvbiBkZXNjcmliZWQgaW4gdGhlIHJlYWRtZTogaHR0cHM6Ly9naXRodWIuY29tL2x1a2VhdXRyeS90c29hXHJcbiAgICAvLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4gICAgc2VydmVyLnJvdXRlKHtcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhdGg6ICcvYXBpL3BpbmcnLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgaGFuZGxlcjogKHJlcXVlc3Q6IGFueSwgaDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcmdzID0ge1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsaWRhdGVkQXJnczogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkQXJncyA9IGdldFZhbGlkYXRlZEFyZ3MoYXJncywgcmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVzcG9uc2UoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29kZShlcnIuc3RhdHVzIHx8IDUwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBTYW1wbGVDaGVja0NvbnRyb2xsZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gY29udHJvbGxlci5waW5nLmFwcGx5KGNvbnRyb2xsZXIsIHZhbGlkYXRlZEFyZ3MgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlSGFuZGxlcihjb250cm9sbGVyLCBwcm9taXNlLCByZXF1ZXN0LCBoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gV0FSTklORzogVGhpcyBmaWxlIHdhcyBhdXRvLWdlbmVyYXRlZCB3aXRoIHRzb2EuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiBSZS1ydW4gdHNvYSB0byByZS1nZW5lcmF0ZSB0aGlzIGZpbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYXV0cnkvdHNvYVxyXG4gICAgc2VydmVyLnJvdXRlKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBwYXRoOiAnL2FwaS91c2VyJyxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGhhbmRsZXI6IChyZXF1ZXN0OiBhbnksIGg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJncyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyUGF5bG9hZDogeyBcImluXCI6IFwiYm9keVwiLCBcIm5hbWVcIjogXCJ1c2VyUGF5bG9hZFwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwicmVmXCI6IFwiVXNlck1vZGVsXCIgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRlZEFyZ3M6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZEFyZ3MgPSBnZXRWYWxpZGF0ZWRBcmdzKGFyZ3MsIHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3BvbnNlKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvZGUoZXJyLnN0YXR1cyB8fCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgVXNlcnNDb250cm9sbGVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGNvbnRyb2xsZXIuY3JlYXRlVXNlci5hcHBseShjb250cm9sbGVyLCB2YWxpZGF0ZWRBcmdzIGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZUhhbmRsZXIoY29udHJvbGxlciwgcHJvbWlzZSwgcmVxdWVzdCwgaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuICAgIHNlcnZlci5yb3V0ZSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgcGF0aDogJy9hcGkvdXNlci9sb2dpbicsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBoYW5kbGVyOiAocmVxdWVzdDogYW55LCBoOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlclBheWxvZDogeyBcImluXCI6IFwiYm9keVwiLCBcIm5hbWVcIjogXCJ1c2VyUGF5bG9kXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJyZWZcIjogXCJVc2VyQXV0aE1vZGVsXCIgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRlZEFyZ3M6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZEFyZ3MgPSBnZXRWYWxpZGF0ZWRBcmdzKGFyZ3MsIHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3BvbnNlKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvZGUoZXJyLnN0YXR1cyB8fCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgVXNlcnNDb250cm9sbGVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGNvbnRyb2xsZXIuYXV0aGVudGljYXRlVXNlci5hcHBseShjb250cm9sbGVyLCB2YWxpZGF0ZWRBcmdzIGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZUhhbmRsZXIoY29udHJvbGxlciwgcHJvbWlzZSwgcmVxdWVzdCwgaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuICAgIHNlcnZlci5yb3V0ZSh7XHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXRoOiAnL2FwaS91c2VyJyxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGhhbmRsZXI6IChyZXF1ZXN0OiBhbnksIGg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJncyA9IHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiB7IFwiaW5cIjogXCJyZXF1ZXN0XCIsIFwibmFtZVwiOiBcInJlcXVlc3RcIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcImRhdGFUeXBlXCI6IFwib2JqZWN0XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiB7IFwiaW5cIjogXCJoZWFkZXJcIiwgXCJuYW1lXCI6IFwiYXV0aG9yaXphdGlvblwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsaWRhdGVkQXJnczogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkQXJncyA9IGdldFZhbGlkYXRlZEFyZ3MoYXJncywgcmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVzcG9uc2UoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29kZShlcnIuc3RhdHVzIHx8IDUwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBVc2Vyc0NvbnRyb2xsZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gY29udHJvbGxlci5nZXRVc2VySW5mby5hcHBseShjb250cm9sbGVyLCB2YWxpZGF0ZWRBcmdzIGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZUhhbmRsZXIoY29udHJvbGxlciwgcHJvbWlzZSwgcmVxdWVzdCwgaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuICAgIHNlcnZlci5yb3V0ZSh7XHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXRoOiAnL2FwaS91c2VyL3tpZH0nLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgaGFuZGxlcjogKHJlcXVlc3Q6IGFueSwgaDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcmdzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB7IFwiaW5cIjogXCJwYXRoXCIsIFwibmFtZVwiOiBcImlkXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogeyBcImluXCI6IFwicmVxdWVzdFwiLCBcIm5hbWVcIjogXCJyZXF1ZXN0XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcIm9iamVjdFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogeyBcImluXCI6IFwiaGVhZGVyXCIsIFwibmFtZVwiOiBcImF1dGhvcml6YXRpb25cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRlZEFyZ3M6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZEFyZ3MgPSBnZXRWYWxpZGF0ZWRBcmdzKGFyZ3MsIHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3BvbnNlKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvZGUoZXJyLnN0YXR1cyB8fCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgVXNlcnNDb250cm9sbGVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGNvbnRyb2xsZXIuZ2V0VXNlckJ5SWQuYXBwbHkoY29udHJvbGxlciwgdmFsaWRhdGVkQXJncyBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VIYW5kbGVyKGNvbnRyb2xsZXIsIHByb21pc2UsIHJlcXVlc3QsIGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBXQVJOSU5HOiBUaGlzIGZpbGUgd2FzIGF1dG8tZ2VuZXJhdGVkIHdpdGggdHNvYS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuIFJlLXJ1biB0c29hIHRvIHJlLWdlbmVyYXRlIHRoaXMgZmlsZTogaHR0cHM6Ly9naXRodWIuY29tL2x1a2VhdXRyeS90c29hXHJcbiAgICBzZXJ2ZXIucm91dGUoe1xyXG4gICAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXHJcbiAgICAgICAgcGF0aDogJy9hcGkvdXNlci97aWR9JyxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGhhbmRsZXI6IChyZXF1ZXN0OiBhbnksIGg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJncyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogeyBcImluXCI6IFwicGF0aFwiLCBcIm5hbWVcIjogXCJpZFwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHsgXCJpblwiOiBcInJlcXVlc3RcIiwgXCJuYW1lXCI6IFwicmVxdWVzdFwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJvYmplY3RcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IHsgXCJpblwiOiBcImhlYWRlclwiLCBcIm5hbWVcIjogXCJhdXRob3JpemF0aW9uXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB2YWxpZGF0ZWRBcmdzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWRBcmdzID0gZ2V0VmFsaWRhdGVkQXJncyhhcmdzLCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNwb25zZShlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb2RlKGVyci5zdGF0dXMgfHwgNTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IFVzZXJzQ29udHJvbGxlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBjb250cm9sbGVyLmRlbGV0ZVVzZXJCeUlkLmFwcGx5KGNvbnRyb2xsZXIsIHZhbGlkYXRlZEFyZ3MgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlSGFuZGxlcihjb250cm9sbGVyLCBwcm9taXNlLCByZXF1ZXN0LCBoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gV0FSTklORzogVGhpcyBmaWxlIHdhcyBhdXRvLWdlbmVyYXRlZCB3aXRoIHRzb2EuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiBSZS1ydW4gdHNvYSB0byByZS1nZW5lcmF0ZSB0aGlzIGZpbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYXV0cnkvdHNvYVxyXG4gICAgc2VydmVyLnJvdXRlKHtcclxuICAgICAgICBtZXRob2Q6ICdwdXQnLFxyXG4gICAgICAgIHBhdGg6ICcvYXBpL3VzZXIve2lkfScsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBoYW5kbGVyOiAocmVxdWVzdDogYW55LCBoOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHsgXCJpblwiOiBcInBhdGhcIiwgXCJuYW1lXCI6IFwiaWRcIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiB7IFwiaW5cIjogXCJyZXF1ZXN0XCIsIFwibmFtZVwiOiBcInJlcXVlc3RcIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcImRhdGFUeXBlXCI6IFwib2JqZWN0XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiB7IFwiaW5cIjogXCJoZWFkZXJcIiwgXCJuYW1lXCI6IFwiYXV0aG9yaXphdGlvblwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJQYXlsb2FkTW9kZWw6IHsgXCJpblwiOiBcImJvZHlcIiwgXCJuYW1lXCI6IFwidXNlclBheWxvYWRNb2RlbFwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwicmVmXCI6IFwiVXBkYXRlVXNlck1vZGVsXCIgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRlZEFyZ3M6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZEFyZ3MgPSBnZXRWYWxpZGF0ZWRBcmdzKGFyZ3MsIHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3BvbnNlKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvZGUoZXJyLnN0YXR1cyB8fCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgVXNlcnNDb250cm9sbGVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGNvbnRyb2xsZXIudXBkYXRlVXNlckJ5SWQuYXBwbHkoY29udHJvbGxlciwgdmFsaWRhdGVkQXJncyBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VIYW5kbGVyKGNvbnRyb2xsZXIsIHByb21pc2UsIHJlcXVlc3QsIGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBXQVJOSU5HOiBUaGlzIGZpbGUgd2FzIGF1dG8tZ2VuZXJhdGVkIHdpdGggdHNvYS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuIFJlLXJ1biB0c29hIHRvIHJlLWdlbmVyYXRlIHRoaXMgZmlsZTogaHR0cHM6Ly9naXRodWIuY29tL2x1a2VhdXRyeS90c29hXHJcbiAgICBzZXJ2ZXIucm91dGUoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHBhdGg6ICcvYXBpL3VzZXIvYWNjb3VudC9hY3RpdmF0ZScsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBoYW5kbGVyOiAocmVxdWVzdDogYW55LCBoOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckFjdGl2YXRlUGF5bG9hZDogeyBcImluXCI6IFwiYm9keVwiLCBcIm5hbWVcIjogXCJ1c2VyQWN0aXZhdGVQYXlsb2FkXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJyZWZcIjogXCJVc2VyQWN0aXZhdGVNb2RlbFwiIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB2YWxpZGF0ZWRBcmdzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWRBcmdzID0gZ2V0VmFsaWRhdGVkQXJncyhhcmdzLCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNwb25zZShlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb2RlKGVyci5zdGF0dXMgfHwgNTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IFVzZXJzQ29udHJvbGxlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBjb250cm9sbGVyLmFjdGl2YXRlVXNlci5hcHBseShjb250cm9sbGVyLCB2YWxpZGF0ZWRBcmdzIGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZUhhbmRsZXIoY29udHJvbGxlciwgcHJvbWlzZSwgcmVxdWVzdCwgaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuICAgIHNlcnZlci5yb3V0ZSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgcGF0aDogJy9hcGkvdmVoaWNsZScsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBoYW5kbGVyOiAocmVxdWVzdDogYW55LCBoOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVmVoaWNsZVBheWxvYWQ6IHsgXCJpblwiOiBcImJvZHlcIiwgXCJuYW1lXCI6IFwiY3JlYXRlVmVoaWNsZVBheWxvYWRcIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcInJlZlwiOiBcIlZlaGljbGVSZWdpc3RyYXRpb25Nb2RlbFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogeyBcImluXCI6IFwicmVxdWVzdFwiLCBcIm5hbWVcIjogXCJyZXF1ZXN0XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcIm9iamVjdFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogeyBcImluXCI6IFwiaGVhZGVyXCIsIFwibmFtZVwiOiBcImF1dGhvcml6YXRpb25cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcImRhdGFUeXBlXCI6IFwiYW55XCIgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRlZEFyZ3M6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZEFyZ3MgPSBnZXRWYWxpZGF0ZWRBcmdzKGFyZ3MsIHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3BvbnNlKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvZGUoZXJyLnN0YXR1cyB8fCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgVmVoaWNsZVJlZ2lzdHJhdGlvbkNvbnRyb2xsZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gY29udHJvbGxlci5jcmVhdGVWZWhpY2xlUmVnaXN0YXRpb24uYXBwbHkoY29udHJvbGxlciwgdmFsaWRhdGVkQXJncyBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VIYW5kbGVyKGNvbnRyb2xsZXIsIHByb21pc2UsIHJlcXVlc3QsIGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBXQVJOSU5HOiBUaGlzIGZpbGUgd2FzIGF1dG8tZ2VuZXJhdGVkIHdpdGggdHNvYS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuIFJlLXJ1biB0c29hIHRvIHJlLWdlbmVyYXRlIHRoaXMgZmlsZTogaHR0cHM6Ly9naXRodWIuY29tL2x1a2VhdXRyeS90c29hXHJcbiAgICBzZXJ2ZXIucm91dGUoe1xyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGF0aDogJy9hcGkvdmVoaWNsZScsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBoYW5kbGVyOiAocmVxdWVzdDogYW55LCBoOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogeyBcImluXCI6IFwicmVxdWVzdFwiLCBcIm5hbWVcIjogXCJyZXF1ZXN0XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcIm9iamVjdFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogeyBcImluXCI6IFwiaGVhZGVyXCIsIFwibmFtZVwiOiBcImF1dGhvcml6YXRpb25cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcImRhdGFUeXBlXCI6IFwiYW55XCIgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRlZEFyZ3M6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZEFyZ3MgPSBnZXRWYWxpZGF0ZWRBcmdzKGFyZ3MsIHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3BvbnNlKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvZGUoZXJyLnN0YXR1cyB8fCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgVmVoaWNsZVJlZ2lzdHJhdGlvbkNvbnRyb2xsZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gY29udHJvbGxlci5nZXRWZWhpY2xlUmVnaXN0YXRpb25zLmFwcGx5KGNvbnRyb2xsZXIsIHZhbGlkYXRlZEFyZ3MgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlSGFuZGxlcihjb250cm9sbGVyLCBwcm9taXNlLCByZXF1ZXN0LCBoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gV0FSTklORzogVGhpcyBmaWxlIHdhcyBhdXRvLWdlbmVyYXRlZCB3aXRoIHRzb2EuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiBSZS1ydW4gdHNvYSB0byByZS1nZW5lcmF0ZSB0aGlzIGZpbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYXV0cnkvdHNvYVxyXG4gICAgc2VydmVyLnJvdXRlKHtcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhdGg6ICcvYXBpL3ZlaGljbGUvYXV0b0luY3JlbWVudCcsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBoYW5kbGVyOiAocmVxdWVzdDogYW55LCBoOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogeyBcImluXCI6IFwicmVxdWVzdFwiLCBcIm5hbWVcIjogXCJyZXF1ZXN0XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcIm9iamVjdFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogeyBcImluXCI6IFwiaGVhZGVyXCIsIFwibmFtZVwiOiBcImF1dGhvcml6YXRpb25cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcImRhdGFUeXBlXCI6IFwiYW55XCIgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRlZEFyZ3M6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZEFyZ3MgPSBnZXRWYWxpZGF0ZWRBcmdzKGFyZ3MsIHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3BvbnNlKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvZGUoZXJyLnN0YXR1cyB8fCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgVmVoaWNsZVJlZ2lzdHJhdGlvbkNvbnRyb2xsZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gY29udHJvbGxlci5nZXRWZWhpY2xlUmVnQXV0b0luY3JlbWVudE5vLmFwcGx5KGNvbnRyb2xsZXIsIHZhbGlkYXRlZEFyZ3MgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlSGFuZGxlcihjb250cm9sbGVyLCBwcm9taXNlLCByZXF1ZXN0LCBoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gV0FSTklORzogVGhpcyBmaWxlIHdhcyBhdXRvLWdlbmVyYXRlZCB3aXRoIHRzb2EuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiBSZS1ydW4gdHNvYSB0byByZS1nZW5lcmF0ZSB0aGlzIGZpbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYXV0cnkvdHNvYVxyXG4gICAgc2VydmVyLnJvdXRlKHtcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhdGg6ICcvYXBpL3ZlaGljbGUve2lkfScsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBoYW5kbGVyOiAocmVxdWVzdDogYW55LCBoOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHsgXCJpblwiOiBcInBhdGhcIiwgXCJuYW1lXCI6IFwiaWRcIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiB7IFwiaW5cIjogXCJyZXF1ZXN0XCIsIFwibmFtZVwiOiBcInJlcXVlc3RcIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcImRhdGFUeXBlXCI6IFwib2JqZWN0XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiB7IFwiaW5cIjogXCJoZWFkZXJcIiwgXCJuYW1lXCI6IFwiYXV0aG9yaXphdGlvblwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJhbnlcIiB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsaWRhdGVkQXJnczogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkQXJncyA9IGdldFZhbGlkYXRlZEFyZ3MoYXJncywgcmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVzcG9uc2UoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29kZShlcnIuc3RhdHVzIHx8IDUwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBWZWhpY2xlUmVnaXN0cmF0aW9uQ29udHJvbGxlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBjb250cm9sbGVyLmdldFZlaGljbGVSZWdpc3RyYXRpb25CeUlkLmFwcGx5KGNvbnRyb2xsZXIsIHZhbGlkYXRlZEFyZ3MgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlSGFuZGxlcihjb250cm9sbGVyLCBwcm9taXNlLCByZXF1ZXN0LCBoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gV0FSTklORzogVGhpcyBmaWxlIHdhcyBhdXRvLWdlbmVyYXRlZCB3aXRoIHRzb2EuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiBSZS1ydW4gdHNvYSB0byByZS1nZW5lcmF0ZSB0aGlzIGZpbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYXV0cnkvdHNvYVxyXG4gICAgc2VydmVyLnJvdXRlKHtcclxuICAgICAgICBtZXRob2Q6ICdwdXQnLFxyXG4gICAgICAgIHBhdGg6ICcvYXBpL3ZlaGljbGUve2lkfScsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBoYW5kbGVyOiAocmVxdWVzdDogYW55LCBoOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHsgXCJpblwiOiBcInBhdGhcIiwgXCJuYW1lXCI6IFwiaWRcIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcImRhdGFUeXBlXCI6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVWZWhpY2xlUmVnUGF5bG9hZDogeyBcImluXCI6IFwiYm9keVwiLCBcIm5hbWVcIjogXCJ1cGRhdGVWZWhpY2xlUmVnUGF5bG9hZFwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwicmVmXCI6IFwiVXBkYXRlVmVoaWNsZVJlZ2lzdHJhdGlvbk1vZGVsXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiB7IFwiaW5cIjogXCJyZXF1ZXN0XCIsIFwibmFtZVwiOiBcInJlcXVlc3RcIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcImRhdGFUeXBlXCI6IFwib2JqZWN0XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiB7IFwiaW5cIjogXCJoZWFkZXJcIiwgXCJuYW1lXCI6IFwiYXV0aG9yaXphdGlvblwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJhbnlcIiB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsaWRhdGVkQXJnczogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkQXJncyA9IGdldFZhbGlkYXRlZEFyZ3MoYXJncywgcmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVzcG9uc2UoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29kZShlcnIuc3RhdHVzIHx8IDUwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBWZWhpY2xlUmVnaXN0cmF0aW9uQ29udHJvbGxlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBjb250cm9sbGVyLnVwZGF0ZVZlaGljbGVSZWdpc3RyYXRpb24uYXBwbHkoY29udHJvbGxlciwgdmFsaWRhdGVkQXJncyBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VIYW5kbGVyKGNvbnRyb2xsZXIsIHByb21pc2UsIHJlcXVlc3QsIGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBXQVJOSU5HOiBUaGlzIGZpbGUgd2FzIGF1dG8tZ2VuZXJhdGVkIHdpdGggdHNvYS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuIFJlLXJ1biB0c29hIHRvIHJlLWdlbmVyYXRlIHRoaXMgZmlsZTogaHR0cHM6Ly9naXRodWIuY29tL2x1a2VhdXRyeS90c29hXHJcbiAgICBzZXJ2ZXIucm91dGUoe1xyXG4gICAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXHJcbiAgICAgICAgcGF0aDogJy9hcGkvdmVoaWNsZS97aWR9JyxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGhhbmRsZXI6IChyZXF1ZXN0OiBhbnksIGg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJncyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogeyBcImluXCI6IFwicGF0aFwiLCBcIm5hbWVcIjogXCJpZFwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHsgXCJpblwiOiBcInJlcXVlc3RcIiwgXCJuYW1lXCI6IFwicmVxdWVzdFwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJvYmplY3RcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IHsgXCJpblwiOiBcImhlYWRlclwiLCBcIm5hbWVcIjogXCJhdXRob3JpemF0aW9uXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcImFueVwiIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB2YWxpZGF0ZWRBcmdzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWRBcmdzID0gZ2V0VmFsaWRhdGVkQXJncyhhcmdzLCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNwb25zZShlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb2RlKGVyci5zdGF0dXMgfHwgNTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IFZlaGljbGVSZWdpc3RyYXRpb25Db250cm9sbGVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGNvbnRyb2xsZXIuZGVsZXRlVmVoaWNsZVJlZ2lzdHJhdGlvbi5hcHBseShjb250cm9sbGVyLCB2YWxpZGF0ZWRBcmdzIGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZUhhbmRsZXIoY29udHJvbGxlciwgcHJvbWlzZSwgcmVxdWVzdCwgaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuICAgIHNlcnZlci5yb3V0ZSh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgcGF0aDogJy9hcGkvYWdlbnQnLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgaGFuZGxlcjogKHJlcXVlc3Q6IGFueSwgaDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcmdzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUFnZW50UGF5bG9hZDogeyBcImluXCI6IFwiYm9keVwiLCBcIm5hbWVcIjogXCJjcmVhdGVBZ2VudFBheWxvYWRcIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcInJlZlwiOiBcIkFnZW50UmVnaXN0cmF0aW9uTW9kZWxcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHsgXCJpblwiOiBcInJlcXVlc3RcIiwgXCJuYW1lXCI6IFwicmVxdWVzdFwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJvYmplY3RcIiB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsaWRhdGVkQXJnczogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkQXJncyA9IGdldFZhbGlkYXRlZEFyZ3MoYXJncywgcmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVzcG9uc2UoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29kZShlcnIuc3RhdHVzIHx8IDUwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBZ2VudFJlZ2lzdHJhdGlvbkNvbnRyb2xsZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gY29udHJvbGxlci5jcmVhdGVBZ2VudFJlZ2lzdGF0aW9uLmFwcGx5KGNvbnRyb2xsZXIsIHZhbGlkYXRlZEFyZ3MgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlSGFuZGxlcihjb250cm9sbGVyLCBwcm9taXNlLCByZXF1ZXN0LCBoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gV0FSTklORzogVGhpcyBmaWxlIHdhcyBhdXRvLWdlbmVyYXRlZCB3aXRoIHRzb2EuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiBSZS1ydW4gdHNvYSB0byByZS1nZW5lcmF0ZSB0aGlzIGZpbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYXV0cnkvdHNvYVxyXG4gICAgc2VydmVyLnJvdXRlKHtcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhdGg6ICcvYXBpL2FnZW50JyxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGhhbmRsZXI6IChyZXF1ZXN0OiBhbnksIGg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJncyA9IHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiB7IFwiaW5cIjogXCJyZXF1ZXN0XCIsIFwibmFtZVwiOiBcInJlcXVlc3RcIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcImRhdGFUeXBlXCI6IFwib2JqZWN0XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiB7IFwiaW5cIjogXCJoZWFkZXJcIiwgXCJuYW1lXCI6IFwiYXV0aG9yaXphdGlvblwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJhbnlcIiB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsaWRhdGVkQXJnczogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkQXJncyA9IGdldFZhbGlkYXRlZEFyZ3MoYXJncywgcmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVzcG9uc2UoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29kZShlcnIuc3RhdHVzIHx8IDUwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBZ2VudFJlZ2lzdHJhdGlvbkNvbnRyb2xsZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gY29udHJvbGxlci5nZXRBZ2VudFJlZ2lzdGF0aW9ucy5hcHBseShjb250cm9sbGVyLCB2YWxpZGF0ZWRBcmdzIGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZUhhbmRsZXIoY29udHJvbGxlciwgcHJvbWlzZSwgcmVxdWVzdCwgaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuICAgIHNlcnZlci5yb3V0ZSh7XHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXRoOiAnL2FwaS9hZ2VudC97aWR9JyxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGhhbmRsZXI6IChyZXF1ZXN0OiBhbnksIGg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJncyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogeyBcImluXCI6IFwicGF0aFwiLCBcIm5hbWVcIjogXCJpZFwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHsgXCJpblwiOiBcInJlcXVlc3RcIiwgXCJuYW1lXCI6IFwicmVxdWVzdFwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJvYmplY3RcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IHsgXCJpblwiOiBcImhlYWRlclwiLCBcIm5hbWVcIjogXCJhdXRob3JpemF0aW9uXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcImFueVwiIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB2YWxpZGF0ZWRBcmdzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWRBcmdzID0gZ2V0VmFsaWRhdGVkQXJncyhhcmdzLCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNwb25zZShlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb2RlKGVyci5zdGF0dXMgfHwgNTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFnZW50UmVnaXN0cmF0aW9uQ29udHJvbGxlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBjb250cm9sbGVyLmdldEFnZW50UmVnaXN0cmF0aW9uQnlJZC5hcHBseShjb250cm9sbGVyLCB2YWxpZGF0ZWRBcmdzIGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZUhhbmRsZXIoY29udHJvbGxlciwgcHJvbWlzZSwgcmVxdWVzdCwgaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuICAgIHNlcnZlci5yb3V0ZSh7XHJcbiAgICAgICAgbWV0aG9kOiAncHV0JyxcclxuICAgICAgICBwYXRoOiAnL2FwaS9hZ2VudC97aWR9JyxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGhhbmRsZXI6IChyZXF1ZXN0OiBhbnksIGg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJncyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogeyBcImluXCI6IFwicGF0aFwiLCBcIm5hbWVcIjogXCJpZFwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUFnZW50UmVnUGF5bG9hZDogeyBcImluXCI6IFwiYm9keVwiLCBcIm5hbWVcIjogXCJ1cGRhdGVBZ2VudFJlZ1BheWxvYWRcIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcInJlZlwiOiBcIlVwZGF0ZUFnZW50UmVnaXN0cmF0aW9uTW9kZWxcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHsgXCJpblwiOiBcInJlcXVlc3RcIiwgXCJuYW1lXCI6IFwicmVxdWVzdFwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJvYmplY3RcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IHsgXCJpblwiOiBcImhlYWRlclwiLCBcIm5hbWVcIjogXCJhdXRob3JpemF0aW9uXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcImFueVwiIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB2YWxpZGF0ZWRBcmdzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWRBcmdzID0gZ2V0VmFsaWRhdGVkQXJncyhhcmdzLCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNwb25zZShlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb2RlKGVyci5zdGF0dXMgfHwgNTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFnZW50UmVnaXN0cmF0aW9uQ29udHJvbGxlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBjb250cm9sbGVyLnVwZGF0ZUFnZW50UmVnaXN0cmF0aW9uLmFwcGx5KGNvbnRyb2xsZXIsIHZhbGlkYXRlZEFyZ3MgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlSGFuZGxlcihjb250cm9sbGVyLCBwcm9taXNlLCByZXF1ZXN0LCBoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gV0FSTklORzogVGhpcyBmaWxlIHdhcyBhdXRvLWdlbmVyYXRlZCB3aXRoIHRzb2EuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiBSZS1ydW4gdHNvYSB0byByZS1nZW5lcmF0ZSB0aGlzIGZpbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYXV0cnkvdHNvYVxyXG4gICAgc2VydmVyLnJvdXRlKHtcclxuICAgICAgICBtZXRob2Q6ICdkZWxldGUnLFxyXG4gICAgICAgIHBhdGg6ICcvYXBpL2FnZW50L3tpZH0nLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgaGFuZGxlcjogKHJlcXVlc3Q6IGFueSwgaDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcmdzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB7IFwiaW5cIjogXCJwYXRoXCIsIFwibmFtZVwiOiBcImlkXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogeyBcImluXCI6IFwicmVxdWVzdFwiLCBcIm5hbWVcIjogXCJyZXF1ZXN0XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcIm9iamVjdFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogeyBcImluXCI6IFwiaGVhZGVyXCIsIFwibmFtZVwiOiBcImF1dGhvcml6YXRpb25cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcImRhdGFUeXBlXCI6IFwiYW55XCIgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRlZEFyZ3M6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZEFyZ3MgPSBnZXRWYWxpZGF0ZWRBcmdzKGFyZ3MsIHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3BvbnNlKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvZGUoZXJyLnN0YXR1cyB8fCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWdlbnRSZWdpc3RyYXRpb25Db250cm9sbGVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGNvbnRyb2xsZXIuZGVsZXRlQWdlbnRSZWdpc3RyYXRpb24uYXBwbHkoY29udHJvbGxlciwgdmFsaWRhdGVkQXJncyBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VIYW5kbGVyKGNvbnRyb2xsZXIsIHByb21pc2UsIHJlcXVlc3QsIGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBXQVJOSU5HOiBUaGlzIGZpbGUgd2FzIGF1dG8tZ2VuZXJhdGVkIHdpdGggdHNvYS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuIFJlLXJ1biB0c29hIHRvIHJlLWdlbmVyYXRlIHRoaXMgZmlsZTogaHR0cHM6Ly9naXRodWIuY29tL2x1a2VhdXRyeS90c29hXHJcbiAgICBzZXJ2ZXIucm91dGUoe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHBhdGg6ICcvYXBpL21hc3Rlcm9yZGVyJyxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGhhbmRsZXI6IChyZXF1ZXN0OiBhbnksIGg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJncyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVNYXN0ZXJPcmRlclBheWxvYWQ6IHsgXCJpblwiOiBcImJvZHlcIiwgXCJuYW1lXCI6IFwiY3JlYXRlTWFzdGVyT3JkZXJQYXlsb2FkXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJyZWZcIjogXCJNYXN0ZXJPcmRlck1vZGVsXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiB7IFwiaW5cIjogXCJyZXF1ZXN0XCIsIFwibmFtZVwiOiBcInJlcXVlc3RcIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcImRhdGFUeXBlXCI6IFwib2JqZWN0XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiB7IFwiaW5cIjogXCJoZWFkZXJcIiwgXCJuYW1lXCI6IFwiYXV0aG9yaXphdGlvblwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJhbnlcIiB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsaWRhdGVkQXJnczogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkQXJncyA9IGdldFZhbGlkYXRlZEFyZ3MoYXJncywgcmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVzcG9uc2UoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29kZShlcnIuc3RhdHVzIHx8IDUwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBNYXN0ZXJPcmRlckNvbnRyb2xsZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gY29udHJvbGxlci5jcmVhdGVNYXN0ZXJPcmRlci5hcHBseShjb250cm9sbGVyLCB2YWxpZGF0ZWRBcmdzIGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZUhhbmRsZXIoY29udHJvbGxlciwgcHJvbWlzZSwgcmVxdWVzdCwgaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuICAgIHNlcnZlci5yb3V0ZSh7XHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXRoOiAnL2FwaS9tYXN0ZXJvcmRlcicsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBoYW5kbGVyOiAocmVxdWVzdDogYW55LCBoOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogeyBcImluXCI6IFwicmVxdWVzdFwiLCBcIm5hbWVcIjogXCJyZXF1ZXN0XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcIm9iamVjdFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogeyBcImluXCI6IFwiaGVhZGVyXCIsIFwibmFtZVwiOiBcImF1dGhvcml6YXRpb25cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcImRhdGFUeXBlXCI6IFwiYW55XCIgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRlZEFyZ3M6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZEFyZ3MgPSBnZXRWYWxpZGF0ZWRBcmdzKGFyZ3MsIHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3BvbnNlKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvZGUoZXJyLnN0YXR1cyB8fCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgTWFzdGVyT3JkZXJDb250cm9sbGVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGNvbnRyb2xsZXIuZ2V0TWFzdGVyT3JkZXJEZXRhaWxzLmFwcGx5KGNvbnRyb2xsZXIsIHZhbGlkYXRlZEFyZ3MgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlSGFuZGxlcihjb250cm9sbGVyLCBwcm9taXNlLCByZXF1ZXN0LCBoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gV0FSTklORzogVGhpcyBmaWxlIHdhcyBhdXRvLWdlbmVyYXRlZCB3aXRoIHRzb2EuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiBSZS1ydW4gdHNvYSB0byByZS1nZW5lcmF0ZSB0aGlzIGZpbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYXV0cnkvdHNvYVxyXG4gICAgc2VydmVyLnJvdXRlKHtcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhdGg6ICcvYXBpL21hc3Rlcm9yZGVyL2F1dG9JbmNyZW1lbnQnLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgaGFuZGxlcjogKHJlcXVlc3Q6IGFueSwgaDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcmdzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHsgXCJpblwiOiBcInJlcXVlc3RcIiwgXCJuYW1lXCI6IFwicmVxdWVzdFwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJvYmplY3RcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IHsgXCJpblwiOiBcImhlYWRlclwiLCBcIm5hbWVcIjogXCJhdXRob3JpemF0aW9uXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcImFueVwiIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB2YWxpZGF0ZWRBcmdzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWRBcmdzID0gZ2V0VmFsaWRhdGVkQXJncyhhcmdzLCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNwb25zZShlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb2RlKGVyci5zdGF0dXMgfHwgNTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IE1hc3Rlck9yZGVyQ29udHJvbGxlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBjb250cm9sbGVyLmdldE1hc3Rlck9yZGVyQXV0b0luY3JlbWVudE5vLmFwcGx5KGNvbnRyb2xsZXIsIHZhbGlkYXRlZEFyZ3MgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlSGFuZGxlcihjb250cm9sbGVyLCBwcm9taXNlLCByZXF1ZXN0LCBoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gV0FSTklORzogVGhpcyBmaWxlIHdhcyBhdXRvLWdlbmVyYXRlZCB3aXRoIHRzb2EuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiBSZS1ydW4gdHNvYSB0byByZS1nZW5lcmF0ZSB0aGlzIGZpbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYXV0cnkvdHNvYVxyXG4gICAgc2VydmVyLnJvdXRlKHtcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhdGg6ICcvYXBpL21hc3Rlcm9yZGVyL3tpZH0nLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgaGFuZGxlcjogKHJlcXVlc3Q6IGFueSwgaDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcmdzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB7IFwiaW5cIjogXCJwYXRoXCIsIFwibmFtZVwiOiBcImlkXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogeyBcImluXCI6IFwicmVxdWVzdFwiLCBcIm5hbWVcIjogXCJyZXF1ZXN0XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcIm9iamVjdFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogeyBcImluXCI6IFwiaGVhZGVyXCIsIFwibmFtZVwiOiBcImF1dGhvcml6YXRpb25cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcImRhdGFUeXBlXCI6IFwiYW55XCIgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRlZEFyZ3M6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZEFyZ3MgPSBnZXRWYWxpZGF0ZWRBcmdzKGFyZ3MsIHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3BvbnNlKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvZGUoZXJyLnN0YXR1cyB8fCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgTWFzdGVyT3JkZXJDb250cm9sbGVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGNvbnRyb2xsZXIuZ2V0TWFzdGVyT3JkZXJCeUlkLmFwcGx5KGNvbnRyb2xsZXIsIHZhbGlkYXRlZEFyZ3MgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlSGFuZGxlcihjb250cm9sbGVyLCBwcm9taXNlLCByZXF1ZXN0LCBoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gV0FSTklORzogVGhpcyBmaWxlIHdhcyBhdXRvLWdlbmVyYXRlZCB3aXRoIHRzb2EuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiBSZS1ydW4gdHNvYSB0byByZS1nZW5lcmF0ZSB0aGlzIGZpbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYXV0cnkvdHNvYVxyXG4gICAgc2VydmVyLnJvdXRlKHtcclxuICAgICAgICBtZXRob2Q6ICdwdXQnLFxyXG4gICAgICAgIHBhdGg6ICcvYXBpL21hc3Rlcm9yZGVyL3tpZH0nLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgaGFuZGxlcjogKHJlcXVlc3Q6IGFueSwgaDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcmdzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB7IFwiaW5cIjogXCJwYXRoXCIsIFwibmFtZVwiOiBcImlkXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTWFzdGVyT3JkZXJQYXlsb2FkOiB7IFwiaW5cIjogXCJib2R5XCIsIFwibmFtZVwiOiBcInVwZGF0ZU1hc3Rlck9yZGVyUGF5bG9hZFwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwicmVmXCI6IFwiVXBkYXRlTWFzdGVyT3JkZXJNb2RlbFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogeyBcImluXCI6IFwicmVxdWVzdFwiLCBcIm5hbWVcIjogXCJyZXF1ZXN0XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcIm9iamVjdFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogeyBcImluXCI6IFwiaGVhZGVyXCIsIFwibmFtZVwiOiBcImF1dGhvcml6YXRpb25cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcImRhdGFUeXBlXCI6IFwiYW55XCIgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRlZEFyZ3M6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZEFyZ3MgPSBnZXRWYWxpZGF0ZWRBcmdzKGFyZ3MsIHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3BvbnNlKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvZGUoZXJyLnN0YXR1cyB8fCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgTWFzdGVyT3JkZXJDb250cm9sbGVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGNvbnRyb2xsZXIudXBkYXRlTWFzdGVyT3JkZXJEZXRhaWxzLmFwcGx5KGNvbnRyb2xsZXIsIHZhbGlkYXRlZEFyZ3MgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlSGFuZGxlcihjb250cm9sbGVyLCBwcm9taXNlLCByZXF1ZXN0LCBoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gV0FSTklORzogVGhpcyBmaWxlIHdhcyBhdXRvLWdlbmVyYXRlZCB3aXRoIHRzb2EuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiBSZS1ydW4gdHNvYSB0byByZS1nZW5lcmF0ZSB0aGlzIGZpbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYXV0cnkvdHNvYVxyXG4gICAgc2VydmVyLnJvdXRlKHtcclxuICAgICAgICBtZXRob2Q6ICdkZWxldGUnLFxyXG4gICAgICAgIHBhdGg6ICcvYXBpL21hc3Rlcm9yZGVyL3tpZH0nLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgaGFuZGxlcjogKHJlcXVlc3Q6IGFueSwgaDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcmdzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB7IFwiaW5cIjogXCJwYXRoXCIsIFwibmFtZVwiOiBcImlkXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogeyBcImluXCI6IFwicmVxdWVzdFwiLCBcIm5hbWVcIjogXCJyZXF1ZXN0XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcIm9iamVjdFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogeyBcImluXCI6IFwiaGVhZGVyXCIsIFwibmFtZVwiOiBcImF1dGhvcml6YXRpb25cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcImRhdGFUeXBlXCI6IFwiYW55XCIgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRlZEFyZ3M6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZEFyZ3MgPSBnZXRWYWxpZGF0ZWRBcmdzKGFyZ3MsIHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3BvbnNlKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvZGUoZXJyLnN0YXR1cyB8fCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgTWFzdGVyT3JkZXJDb250cm9sbGVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGNvbnRyb2xsZXIuZGVsZXRlTWFzdGVyT3JkZXJEZXRhaWxzLmFwcGx5KGNvbnRyb2xsZXIsIHZhbGlkYXRlZEFyZ3MgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlSGFuZGxlcihjb250cm9sbGVyLCBwcm9taXNlLCByZXF1ZXN0LCBoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gV0FSTklORzogVGhpcyBmaWxlIHdhcyBhdXRvLWdlbmVyYXRlZCB3aXRoIHRzb2EuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiBSZS1ydW4gdHNvYSB0byByZS1nZW5lcmF0ZSB0aGlzIGZpbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYXV0cnkvdHNvYVxyXG4gICAgc2VydmVyLnJvdXRlKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBwYXRoOiAnL2FwaS9vcmRlcicsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBoYW5kbGVyOiAocmVxdWVzdDogYW55LCBoOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlT3JkZXJQYXlsb2FkOiB7IFwiaW5cIjogXCJib2R5XCIsIFwibmFtZVwiOiBcImNyZWF0ZU9yZGVyUGF5bG9hZFwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwicmVmXCI6IFwiT3JkZXJNb2RlbFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogeyBcImluXCI6IFwicmVxdWVzdFwiLCBcIm5hbWVcIjogXCJyZXF1ZXN0XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcIm9iamVjdFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogeyBcImluXCI6IFwiaGVhZGVyXCIsIFwibmFtZVwiOiBcImF1dGhvcml6YXRpb25cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcImRhdGFUeXBlXCI6IFwiYW55XCIgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRlZEFyZ3M6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZEFyZ3MgPSBnZXRWYWxpZGF0ZWRBcmdzKGFyZ3MsIHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3BvbnNlKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvZGUoZXJyLnN0YXR1cyB8fCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgT3JkZXJDb250cm9sbGVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGNvbnRyb2xsZXIuY3JlYXRlT3JkZXIuYXBwbHkoY29udHJvbGxlciwgdmFsaWRhdGVkQXJncyBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VIYW5kbGVyKGNvbnRyb2xsZXIsIHByb21pc2UsIHJlcXVlc3QsIGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBXQVJOSU5HOiBUaGlzIGZpbGUgd2FzIGF1dG8tZ2VuZXJhdGVkIHdpdGggdHNvYS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuIFJlLXJ1biB0c29hIHRvIHJlLWdlbmVyYXRlIHRoaXMgZmlsZTogaHR0cHM6Ly9naXRodWIuY29tL2x1a2VhdXRyeS90c29hXHJcbiAgICBzZXJ2ZXIucm91dGUoe1xyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGF0aDogJy9hcGkvb3JkZXInLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgaGFuZGxlcjogKHJlcXVlc3Q6IGFueSwgaDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcmdzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHsgXCJpblwiOiBcInJlcXVlc3RcIiwgXCJuYW1lXCI6IFwicmVxdWVzdFwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJvYmplY3RcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IHsgXCJpblwiOiBcImhlYWRlclwiLCBcIm5hbWVcIjogXCJhdXRob3JpemF0aW9uXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcImFueVwiIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB2YWxpZGF0ZWRBcmdzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWRBcmdzID0gZ2V0VmFsaWRhdGVkQXJncyhhcmdzLCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNwb25zZShlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb2RlKGVyci5zdGF0dXMgfHwgNTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IE9yZGVyQ29udHJvbGxlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBjb250cm9sbGVyLmdldE9yZGVyRGV0YWlscy5hcHBseShjb250cm9sbGVyLCB2YWxpZGF0ZWRBcmdzIGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZUhhbmRsZXIoY29udHJvbGxlciwgcHJvbWlzZSwgcmVxdWVzdCwgaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuICAgIHNlcnZlci5yb3V0ZSh7XHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXRoOiAnL2FwaS9vcmRlci9hdXRvSW5jcmVtZW50JyxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGhhbmRsZXI6IChyZXF1ZXN0OiBhbnksIGg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJncyA9IHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiB7IFwiaW5cIjogXCJyZXF1ZXN0XCIsIFwibmFtZVwiOiBcInJlcXVlc3RcIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcImRhdGFUeXBlXCI6IFwib2JqZWN0XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiB7IFwiaW5cIjogXCJoZWFkZXJcIiwgXCJuYW1lXCI6IFwiYXV0aG9yaXphdGlvblwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJhbnlcIiB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsaWRhdGVkQXJnczogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkQXJncyA9IGdldFZhbGlkYXRlZEFyZ3MoYXJncywgcmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVzcG9uc2UoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29kZShlcnIuc3RhdHVzIHx8IDUwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBPcmRlckNvbnRyb2xsZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gY29udHJvbGxlci5nZXRPcmRlckF1dG9JbmNyZW1lbnROby5hcHBseShjb250cm9sbGVyLCB2YWxpZGF0ZWRBcmdzIGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZUhhbmRsZXIoY29udHJvbGxlciwgcHJvbWlzZSwgcmVxdWVzdCwgaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuICAgIHNlcnZlci5yb3V0ZSh7XHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXRoOiAnL2FwaS9vcmRlci97aWR9JyxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGhhbmRsZXI6IChyZXF1ZXN0OiBhbnksIGg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJncyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogeyBcImluXCI6IFwicGF0aFwiLCBcIm5hbWVcIjogXCJpZFwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHsgXCJpblwiOiBcInJlcXVlc3RcIiwgXCJuYW1lXCI6IFwicmVxdWVzdFwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJvYmplY3RcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IHsgXCJpblwiOiBcImhlYWRlclwiLCBcIm5hbWVcIjogXCJhdXRob3JpemF0aW9uXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcImFueVwiIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB2YWxpZGF0ZWRBcmdzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWRBcmdzID0gZ2V0VmFsaWRhdGVkQXJncyhhcmdzLCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNwb25zZShlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb2RlKGVyci5zdGF0dXMgfHwgNTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IE9yZGVyQ29udHJvbGxlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBjb250cm9sbGVyLmdldE9yZGVyQnlJZC5hcHBseShjb250cm9sbGVyLCB2YWxpZGF0ZWRBcmdzIGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZUhhbmRsZXIoY29udHJvbGxlciwgcHJvbWlzZSwgcmVxdWVzdCwgaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuICAgIHNlcnZlci5yb3V0ZSh7XHJcbiAgICAgICAgbWV0aG9kOiAncHV0JyxcclxuICAgICAgICBwYXRoOiAnL2FwaS9vcmRlci97aWR9JyxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGhhbmRsZXI6IChyZXF1ZXN0OiBhbnksIGg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJncyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogeyBcImluXCI6IFwicGF0aFwiLCBcIm5hbWVcIjogXCJpZFwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZU9yZGVyUGF5bG9hZDogeyBcImluXCI6IFwiYm9keVwiLCBcIm5hbWVcIjogXCJ1cGRhdGVPcmRlclBheWxvYWRcIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcInJlZlwiOiBcIlVwZGF0ZU9yZGVyTW9kZWxcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHsgXCJpblwiOiBcInJlcXVlc3RcIiwgXCJuYW1lXCI6IFwicmVxdWVzdFwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJvYmplY3RcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IHsgXCJpblwiOiBcImhlYWRlclwiLCBcIm5hbWVcIjogXCJhdXRob3JpemF0aW9uXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcImFueVwiIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB2YWxpZGF0ZWRBcmdzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWRBcmdzID0gZ2V0VmFsaWRhdGVkQXJncyhhcmdzLCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNwb25zZShlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb2RlKGVyci5zdGF0dXMgfHwgNTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IE9yZGVyQ29udHJvbGxlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBjb250cm9sbGVyLnVwZGF0ZU9yZGVyRGV0YWlscy5hcHBseShjb250cm9sbGVyLCB2YWxpZGF0ZWRBcmdzIGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZUhhbmRsZXIoY29udHJvbGxlciwgcHJvbWlzZSwgcmVxdWVzdCwgaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuICAgIHNlcnZlci5yb3V0ZSh7XHJcbiAgICAgICAgbWV0aG9kOiAnZGVsZXRlJyxcclxuICAgICAgICBwYXRoOiAnL2FwaS9vcmRlci97aWR9JyxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGhhbmRsZXI6IChyZXF1ZXN0OiBhbnksIGg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJncyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogeyBcImluXCI6IFwicGF0aFwiLCBcIm5hbWVcIjogXCJpZFwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHsgXCJpblwiOiBcInJlcXVlc3RcIiwgXCJuYW1lXCI6IFwicmVxdWVzdFwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJvYmplY3RcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IHsgXCJpblwiOiBcImhlYWRlclwiLCBcIm5hbWVcIjogXCJhdXRob3JpemF0aW9uXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcImFueVwiIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB2YWxpZGF0ZWRBcmdzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWRBcmdzID0gZ2V0VmFsaWRhdGVkQXJncyhhcmdzLCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNwb25zZShlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb2RlKGVyci5zdGF0dXMgfHwgNTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IE9yZGVyQ29udHJvbGxlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBjb250cm9sbGVyLmRlbGV0ZW9yZGVyRGV0YWlscy5hcHBseShjb250cm9sbGVyLCB2YWxpZGF0ZWRBcmdzIGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZUhhbmRsZXIoY29udHJvbGxlciwgcHJvbWlzZSwgcmVxdWVzdCwgaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuICAgIHNlcnZlci5yb3V0ZSh7XHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXRoOiAnL2FwaS9kYXNoYm9hcmQnLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgaGFuZGxlcjogKHJlcXVlc3Q6IGFueSwgaDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcmdzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHsgXCJpblwiOiBcInJlcXVlc3RcIiwgXCJuYW1lXCI6IFwicmVxdWVzdFwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwiZGF0YVR5cGVcIjogXCJvYmplY3RcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IHsgXCJpblwiOiBcImhlYWRlclwiLCBcIm5hbWVcIjogXCJhdXRob3JpemF0aW9uXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJkYXRhVHlwZVwiOiBcImFueVwiIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB2YWxpZGF0ZWRBcmdzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWRBcmdzID0gZ2V0VmFsaWRhdGVkQXJncyhhcmdzLCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNwb25zZShlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb2RlKGVyci5zdGF0dXMgfHwgNTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IERhc2hib2FyZENvbnRyb2xsZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gY29udHJvbGxlci5nZXREYXNoYm9hcmRDb3VudEluZm8uYXBwbHkoY29udHJvbGxlciwgdmFsaWRhdGVkQXJncyBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VIYW5kbGVyKGNvbnRyb2xsZXIsIHByb21pc2UsIHJlcXVlc3QsIGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBXQVJOSU5HOiBUaGlzIGZpbGUgd2FzIGF1dG8tZ2VuZXJhdGVkIHdpdGggdHNvYS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuIFJlLXJ1biB0c29hIHRvIHJlLWdlbmVyYXRlIHRoaXMgZmlsZTogaHR0cHM6Ly9naXRodWIuY29tL2x1a2VhdXRyeS90c29hXHJcblxyXG5cclxuICAgIC8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuXHJcbiAgICBmdW5jdGlvbiBpc0NvbnRyb2xsZXIob2JqZWN0OiBhbnkpOiBvYmplY3QgaXMgQ29udHJvbGxlciB7XHJcbiAgICAgICAgcmV0dXJuICdnZXRIZWFkZXJzJyBpbiBvYmplY3QgJiYgJ2dldFN0YXR1cycgaW4gb2JqZWN0ICYmICdzZXRTdGF0dXMnIGluIG9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcm9taXNlSGFuZGxlcihjb250cm9sbGVyT2JqOiBhbnksIHByb21pc2U6IGFueSwgcmVxdWVzdDogYW55LCBoOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHByb21pc2UpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gKGRhdGEgfHwgZGF0YSA9PT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBoLnJlc3BvbnNlKGRhdGEpLmNvZGUoMjAwKVxyXG4gICAgICAgICAgICAgICAgICAgIDogaC5yZXNwb25zZShcIlwiKS5jb2RlKDIwNCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gV0FSTklORzogVGhpcyBmaWxlIHdhcyBhdXRvLWdlbmVyYXRlZCB3aXRoIHRzb2EuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiBSZS1ydW4gdHNvYSB0byByZS1nZW5lcmF0ZSB0aGlzIGZpbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYXV0cnkvdHNvYVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc0NvbnRyb2xsZXIoY29udHJvbGxlck9iaikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gY29udHJvbGxlck9iai5nZXRIZWFkZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaGVhZGVycykuZm9yRWFjaCgobmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmhlYWRlcihuYW1lLCBoZWFkZXJzW25hbWVdKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzQ29kZSA9IGNvbnRyb2xsZXJPYmouZ2V0U3RhdHVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1c0NvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuY29kZShzdGF0dXNDb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gaC5yZXNwb25zZShlcnJvcikuY29kZShlcnJvci5zdGF0dXMgfHwgNTAwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV0FSTklORzogVGhpcyBmaWxlIHdhcyBhdXRvLWdlbmVyYXRlZCB3aXRoIHRzb2EuIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0LiBSZS1ydW4gdHNvYSB0byByZS1nZW5lcmF0ZSB0aGlzIGZpbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYXV0cnkvdHNvYVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFZhbGlkYXRlZEFyZ3MoYXJnczogYW55LCByZXF1ZXN0OiBhbnkpOiBhbnlbXSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JGaWVsZHM6IEZpZWxkRXJyb3JzID0ge307XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LmtleXMoYXJncykubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBhcmdzW2tleV0ubmFtZTtcclxuICAgICAgICAgICAgc3dpdGNoIChhcmdzW2tleV0uaW4pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3JlcXVlc3QnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncXVlcnknOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0aW9uU2VydmljZS5WYWxpZGF0ZVBhcmFtKGFyZ3Nba2V5XSwgcmVxdWVzdC5xdWVyeVtuYW1lXSwgbmFtZSwgZXJyb3JGaWVsZHMsIHVuZGVmaW5lZCwgeyBcIm5vSW1wbGljaXRBZGRpdGlvbmFsUHJvcGVydGllc1wiOiBcInRocm93LW9uLWV4dHJhc1wiLCBcInNwZWNWZXJzaW9uXCI6IDMgfSlcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3BhdGgnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0aW9uU2VydmljZS5WYWxpZGF0ZVBhcmFtKGFyZ3Nba2V5XSwgcmVxdWVzdC5wYXJhbXNbbmFtZV0sIG5hbWUsIGVycm9yRmllbGRzLCB1bmRlZmluZWQsIHsgXCJub0ltcGxpY2l0QWRkaXRpb25hbFByb3BlcnRpZXNcIjogXCJ0aHJvdy1vbi1leHRyYXNcIiwgXCJzcGVjVmVyc2lvblwiOiAzIH0pXHJcbiAgICAgICAgICAgICAgICBjYXNlICdoZWFkZXInOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0aW9uU2VydmljZS5WYWxpZGF0ZVBhcmFtKGFyZ3Nba2V5XSwgcmVxdWVzdC5oZWFkZXJzW25hbWVdLCBuYW1lLCBlcnJvckZpZWxkcywgdW5kZWZpbmVkLCB7IFwibm9JbXBsaWNpdEFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IFwidGhyb3ctb24tZXh0cmFzXCIsIFwic3BlY1ZlcnNpb25cIjogMyB9KTtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2JvZHknOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0aW9uU2VydmljZS5WYWxpZGF0ZVBhcmFtKGFyZ3Nba2V5XSwgcmVxdWVzdC5wYXlsb2FkLCBuYW1lLCBlcnJvckZpZWxkcywgbmFtZSArICcuJywgeyBcIm5vSW1wbGljaXRBZGRpdGlvbmFsUHJvcGVydGllc1wiOiBcInRocm93LW9uLWV4dHJhc1wiLCBcInNwZWNWZXJzaW9uXCI6IDMgfSk7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdib2R5LXByb3AnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0aW9uU2VydmljZS5WYWxpZGF0ZVBhcmFtKGFyZ3Nba2V5XSwgcmVxdWVzdC5wYXlsb2FkW25hbWVdLCBuYW1lLCBlcnJvckZpZWxkcywgJ2JvZHkuJywgeyBcIm5vSW1wbGljaXRBZGRpdGlvbmFsUHJvcGVydGllc1wiOiBcInRocm93LW9uLWV4dHJhc1wiLCBcInNwZWNWZXJzaW9uXCI6IDMgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoZXJyb3JGaWVsZHMpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFZhbGlkYXRlRXJyb3IoZXJyb3JGaWVsZHMsICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBXQVJOSU5HOiBUaGlzIGZpbGUgd2FzIGF1dG8tZ2VuZXJhdGVkIHdpdGggdHNvYS4gUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQuIFJlLXJ1biB0c29hIHRvIHJlLWdlbmVyYXRlIHRoaXMgZmlsZTogaHR0cHM6Ly9naXRodWIuY29tL2x1a2VhdXRyeS90c29hXHJcbn1cclxuXHJcbi8vIFdBUk5JTkc6IFRoaXMgZmlsZSB3YXMgYXV0by1nZW5lcmF0ZWQgd2l0aCB0c29hLiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdC4gUmUtcnVuIHRzb2EgdG8gcmUtZ2VuZXJhdGUgdGhpcyBmaWxlOiBodHRwczovL2dpdGh1Yi5jb20vbHVrZWF1dHJ5L3Rzb2FcclxuIl19
