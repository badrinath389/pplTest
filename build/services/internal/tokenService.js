"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const typescript_ioc_1 = require("typescript-ioc");
const configuration_1 = require("../../config/configuration");
const ErrorHandler_1 = require("../../config/ErrorHandler");
const jwt = require("jsonwebtoken");
const tsoa_1 = require("tsoa");
let TokenService = class TokenService extends tsoa_1.Controller {
    validateToken(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = request.headers["authorization"] || null;
            if (!token) {
                throw new ErrorHandler_1.PinError("No token provided", 400);
            }
            return jwt.verify(token, configuration_1.default.secretKey, function (err, decoded) {
                if (err) {
                    throw new ErrorHandler_1.PinError('Invalid token', 400);
                }
                return decoded;
            });
        });
    }
    createToken(userObject) {
        return __awaiter(this, void 0, void 0, function* () {
            return jwt.sign({
                data: userObject
            }, configuration_1.default.secretKey, { expiresIn: '30m' });
        });
    }
};
TokenService = __decorate([
    typescript_ioc_1.Singleton
], TokenService);
exports.TokenService = TokenService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2aWNlcy9pbnRlcm5hbC90b2tlblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQTJDO0FBQzNDLDhEQUFtRDtBQUNuRCw0REFBcUQ7QUFDckQsb0NBQW9DO0FBQ3BDLCtCQUFrQztBQUdsQyxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFhLFNBQVEsaUJBQVU7SUFFM0IsYUFBYSxDQUFDLE9BQU87O1lBQzlCLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxDQUFDO1lBRXZELElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1IsTUFBTSxJQUFJLHVCQUFRLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDOUM7WUFDRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLHVCQUFTLENBQUMsU0FBUyxFQUFFLFVBQVUsR0FBUSxFQUFFLE9BQVk7Z0JBQzVFLElBQUksR0FBRyxFQUFFO29CQUNMLE1BQU0sSUFBSSx1QkFBUSxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDNUM7Z0JBRUQsT0FBTyxPQUFPLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7SUFFWSxXQUFXLENBQUMsVUFBVTs7WUFDL0IsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUNaLElBQUksRUFBRSxVQUFVO2FBQ25CLEVBQUUsdUJBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNsRCxDQUFDO0tBQUE7Q0FDSixDQUFBO0FBdEJZLFlBQVk7SUFEeEIsMEJBQVM7R0FDRyxZQUFZLENBc0J4QjtBQXRCWSxvQ0FBWSIsImZpbGUiOiJzZXJ2aWNlcy9pbnRlcm5hbC90b2tlblNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaW5nbGV0b24gfSBmcm9tIFwidHlwZXNjcmlwdC1pb2NcIjtcclxuaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi4vLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgUGluRXJyb3IgfSBmcm9tICcuLi8uLi9jb25maWcvRXJyb3JIYW5kbGVyJztcclxuaW1wb3J0ICogYXMgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ3Rzb2EnO1xyXG5cclxuQFNpbmdsZXRvblxyXG5leHBvcnQgY2xhc3MgVG9rZW5TZXJ2aWNlIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHZhbGlkYXRlVG9rZW4ocmVxdWVzdCkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gcmVxdWVzdC5oZWFkZXJzW1wiYXV0aG9yaXphdGlvblwiXSB8fCBudWxsO1xyXG5cclxuICAgICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBQaW5FcnJvcihcIk5vIHRva2VuIHByb3ZpZGVkXCIsIDQwMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gand0LnZlcmlmeSh0b2tlbiwgY29uc3RhbnRzLnNlY3JldEtleSwgZnVuY3Rpb24gKGVycjogYW55LCBkZWNvZGVkOiBhbnkpIHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBpbkVycm9yKCdJbnZhbGlkIHRva2VuJywgNDAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRlY29kZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZVRva2VuKHVzZXJPYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gand0LnNpZ24oe1xyXG4gICAgICAgICAgICBkYXRhOiB1c2VyT2JqZWN0XHJcbiAgICAgICAgfSwgY29uc3RhbnRzLnNlY3JldEtleSwgeyBleHBpcmVzSW46ICczMG0nIH0pO1xyXG4gICAgfVxyXG59Il19
