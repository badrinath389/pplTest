import { v4 as uuidv4 } from 'uuid';
import * as boom from '@hapi/boom';

export class PinError extends Error {
    public httpStatusCode: any;
    public stack: any;

    //wrap any type of error in pinError to keep track & augment stacktrace
    constructor (data: any, code?) {
        function getMessage(pinError) {
            if (pinError.message.constructor.name === "pinError") {
                return getMessage(pinError.message);
            } else if (typeof pinError.message === 'object' && pinError.message.message) {
                return data.message.message;
            } else if (typeof pinError.message === 'string' || pinError.message instanceof String) {
                return pinError.message;
            }
            return JSON.stringify(pinError.message);
        }

        if (typeof data === 'string') {
            super(data);
            if (code) {
                if (!isNaN(code)) {
                    this.httpStatusCode = Number(code);
                } else if (typeof code === 'string' || code instanceof String) {
                    this.message = this.message + " " + code.trim();
                }
            }
        } else if (data.constructor.name === "pinError") {
            super(getMessage(data));
            this.stack = `${data.stack.split('\n').slice(0).join('\n')}\n${this.stack.split('\n').slice(1,2).join('\n')}`;
            if (data.httpStatusCode) {
                this.httpStatusCode = data.httpStatusCode;
            }
            if (code) {
                if (!isNaN(code)) {
                    this.httpStatusCode = Number(code);
                } else if (typeof code === 'string' || code instanceof String) {
                    this.message = this.message + " " + code.trim();
                }
            }
        } else if (data.constructor.name === "MongoError") {
            super(data.message);
            this.stack = `${data.stack.split('\n').slice(0).join('\n')}\n${this.stack.split('\n').slice(1,2).join('\n')}`;
            if (data.httpStatusCode) {
                this.httpStatusCode = data.httpStatusCode;
            }
            if (code) {
                if (!isNaN(code)) {
                    this.httpStatusCode = Number(code);
                } else if (typeof code === 'string' || code instanceof String) {
                    this.message = this.message + " " + code.trim();
                }
            }
        } else if (data instanceof Error) {
            super(data.message);
            this.stack = `${data.stack.split('\n').slice(0).join('\n')}\n${this.stack.split('\n').slice(1,2).join('\n')}`;
            // if (data.httpStatusCode) {
            //     this.httpStatusCode = data.httpStatusCode;
            // }
            if (code) {
                if (!isNaN(code)) {
                    this.httpStatusCode = Number(code);
                } else if (typeof code === 'string' || code instanceof String) {
                    this.message = this.message + " " + code.trim();
                }
            }
        } else if (typeof data === 'object') {
            super(data.message || JSON.stringify(data));
            if (data.httpStatusCode) {
                this.httpStatusCode = data.httpStatusCode;
            } else if (data.statusCode) {
                this.httpStatusCode = data.statusCode;
            }
            if (code) {
                if (!isNaN(code)) {
                    this.httpStatusCode = Number(code);
                } else if (typeof code === 'string' || code instanceof String) {
                    this.message = this.message + " " + code.trim();
                }
            }
        }
    }

    static _addHTTPStatusCodeAndIdToErrorIfNeeded (error) {
        error.httpStatusCode = error.httpStatusCode || 500;
        error.errorId = `error-${uuidv4()}`;
    }

    static _boomReply (error) {
        const message = error.message.message || error.message || "";
        let boomReply = null;
        switch (error.httpStatusCode) {
            case 400:
                boomReply = boom.badRequest(message);
                break;
            case 401:
                boomReply = boom.unauthorized(message);
                break;
            case 403:
                boomReply = boom.forbidden(message);
                break;
            case 404:
                boomReply = boom.notFound(message);
                break;
            default:
                boomReply = boom.badImplementation("Internal Server Error");
                break;
        }
        if (error.errorId) {
            boomReply.output.payload.errorId = error.errorId;
        }
        return boomReply;
    }

    static replyWithError (request, error: any) {
        if (error.constructor.name !== 'pinError') {
            error = new PinError(error);
        }
        if (request) {
            request.pinError = error;
        }
        PinError._addHTTPStatusCodeAndIdToErrorIfNeeded(error);
        //now logging error with response and commenting below line; this will avoid redundancy
        // logger.getLogger().error(error);
        throw PinError._boomReply(error);
    }

};