import { Singleton } from "typescript-ioc";
import constants from "../../config/configuration";
import { PinError } from '../../config/ErrorHandler';
import * as jwt from "jsonwebtoken";
import { Controller } from 'tsoa';

@Singleton
export class TokenService extends Controller {

    public async validateToken(request) {
        const token = request.headers["authorization"] || null;

        if (!token) {
            throw new PinError("No token provided", 400);
          }
          return jwt.verify(token, constants.secretKey, function (err: any, decoded: any) {
            if (err) {
                throw new PinError('Invalid token', 400);
            }

            return decoded;
        });
    }

    public async createToken(userObject) {
        return jwt.sign({
            data: userObject
        }, constants.secretKey, { expiresIn: '30m' });
    }
}