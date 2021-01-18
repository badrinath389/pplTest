"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.AgentRegistrationController = void 0;
const tsoa_1 = require("tsoa");
const typescript_ioc_1 = require("typescript-ioc");
const BaseController_1 = require("./BaseController");
const services_1 = require("../services");
let AgentRegistrationController = class AgentRegistrationController extends BaseController_1.BaseController {
    /**
     *
     * @param createAgentModel
     * Agent create data body request
     *
     * @param request
     * request to validate the token
     */
    createAgentRegistation(createAgentPayload, request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.agentRegistrationService.createAgentRegistration(createAgentPayload);
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
    /**
    *
    * @param request
    * request to validate the token
    *
    * @param authorization
    * check authorization sending from Header
    */
    getAgentRegistations(request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.agentRegistrationService.getAgentRegistration(null);
            }
            catch (error) {
                this.handleError(error);
            }
        });
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
    getAgentRegistrationById(id, request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.agentRegistrationService.getAgentRegistration(id);
            }
            catch (error) {
                this.handleError(error);
            }
        });
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
    updateAgentRegistration(id, updateAgentRegPayload, request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.agentRegistrationService.updateAgentRegistration(id, updateAgentRegPayload);
            }
            catch (error) {
                this.handleError(error);
            }
        });
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
    deleteAgentRegistration(id, request, authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate token
                yield this.tokenService.validateToken(request);
                return yield this.agentRegistrationService.deleteAgentRegistration(id);
            }
            catch (error) {
                this.handleError(error);
            }
        });
    }
};
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", services_1.AgentRegistrationService)
], AgentRegistrationController.prototype, "agentRegistrationService", void 0);
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", services_1.TokenService)
], AgentRegistrationController.prototype, "tokenService", void 0);
__decorate([
    tsoa_1.Post(),
    __param(0, tsoa_1.Body()),
    __param(1, tsoa_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AgentRegistrationController.prototype, "createAgentRegistation", null);
__decorate([
    tsoa_1.Get(),
    __param(0, tsoa_1.Request()), __param(1, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AgentRegistrationController.prototype, "getAgentRegistations", null);
__decorate([
    tsoa_1.Get('{id}'),
    __param(1, tsoa_1.Request()), __param(2, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], AgentRegistrationController.prototype, "getAgentRegistrationById", null);
__decorate([
    tsoa_1.Put('{id}'),
    __param(1, tsoa_1.Body()),
    __param(2, tsoa_1.Request()), __param(3, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AgentRegistrationController.prototype, "updateAgentRegistration", null);
__decorate([
    tsoa_1.Delete('{id}'),
    __param(1, tsoa_1.Request()), __param(2, tsoa_1.Header()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], AgentRegistrationController.prototype, "deleteAgentRegistration", null);
AgentRegistrationController = __decorate([
    tsoa_1.Route('agent'),
    tsoa_1.Tags("Agent Registration")
], AgentRegistrationController);
exports.AgentRegistrationController = AgentRegistrationController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVycy9hZ2VudFJlZ2lzdHJhdGlvbkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQWlGO0FBQ2pGLG1EQUF3QztBQUN4QyxxREFBa0Q7QUFDbEQsMENBQXFFO0FBS3JFLElBQWEsMkJBQTJCLEdBQXhDLE1BQWEsMkJBQTRCLFNBQVEsK0JBQWM7SUFJM0Q7Ozs7Ozs7T0FPRztJQUVVLHNCQUFzQixDQUFTLGtCQUEwQyxFQUN2RSxPQUFZOztZQUNuQixJQUFJO2dCQUNBLGlCQUFpQjtnQkFDakIsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFL0MsT0FBTyxNQUFNLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQzFGO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzQjtRQUNULENBQUM7S0FBQTtJQUVBOzs7Ozs7O01BT0U7SUFFVSxvQkFBb0IsQ0FBWSxPQUFZLEVBQVksYUFBa0I7O1lBQ25GLElBQUk7Z0JBQ0EsaUJBQWlCO2dCQUNqQixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUUvQyxPQUFPLE1BQU0sSUFBSSxDQUFDLHdCQUF3QixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pFO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzQjtRQUNMLENBQUM7S0FBQTtJQUVEOzs7Ozs7Ozs7OztPQVdHO0lBRVUsd0JBQXdCLENBQUMsRUFBVSxFQUFhLE9BQVksRUFBWSxhQUFrQjs7WUFDbkcsSUFBSTtnQkFDQSxpQkFBaUI7Z0JBQ2pCLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRS9DLE9BQU8sTUFBTSxJQUFJLENBQUMsd0JBQXdCLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDdkU7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNCO1FBQ0wsQ0FBQztLQUFBO0lBRUQ7Ozs7Ozs7Ozs7Ozs7O09BY0c7SUFFVSx1QkFBdUIsQ0FBQyxFQUFVLEVBQVUscUJBQW1ELEVBQzdGLE9BQVksRUFBWSxhQUFrQjs7WUFDckQsSUFBSTtnQkFDQSxpQkFBaUI7Z0JBQ2pCLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRS9DLE9BQU8sTUFBTSxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsRUFBRSxFQUFFLHFCQUFxQixDQUFDLENBQUM7YUFDakc7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNCO1FBQ0wsQ0FBQztLQUFBO0lBRUQ7Ozs7Ozs7Ozs7T0FVRztJQUVVLHVCQUF1QixDQUFDLEVBQVUsRUFBYSxPQUFZLEVBQVksYUFBa0I7O1lBQ2xHLElBQUk7Z0JBQ0EsaUJBQWlCO2dCQUNqQixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUUvQyxPQUFPLE1BQU0sSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzFFO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzQjtRQUNMLENBQUM7S0FBQTtDQUNKLENBQUE7QUF0SFc7SUFBUCx1QkFBTTs4QkFBMkIsbUNBQXdCOzZFQUFDO0FBQ25EO0lBQVAsdUJBQU07OEJBQWUsdUJBQVk7aUVBQUM7QUFXbkM7SUFEQyxXQUFJLEVBQUU7SUFDOEIsV0FBQSxXQUFJLEVBQUUsQ0FBQTtJQUN0QyxXQUFBLGNBQU8sRUFBRSxDQUFBOzs7O3lFQVNiO0FBV0Q7SUFEQyxVQUFHLEVBQUU7SUFDNkIsV0FBQSxjQUFPLEVBQUUsQ0FBQSxFQUFnQixXQUFBLGFBQU0sRUFBRSxDQUFBOzs7O3VFQVNuRTtBQWVEO0lBREMsVUFBRyxDQUFDLE1BQU0sQ0FBQztJQUN1QyxXQUFBLGNBQU8sRUFBRSxDQUFBLEVBQWdCLFdBQUEsYUFBTSxFQUFFLENBQUE7Ozs7MkVBU25GO0FBa0JEO0lBREMsVUFBRyxDQUFDLE1BQU0sQ0FBQztJQUNzQyxXQUFBLFdBQUksRUFBRSxDQUFBO0lBQ25ELFdBQUEsY0FBTyxFQUFFLENBQUEsRUFBZ0IsV0FBQSxhQUFNLEVBQUUsQ0FBQTs7OzswRUFTckM7QUFjRDtJQURDLGFBQU0sQ0FBQyxNQUFNLENBQUM7SUFDbUMsV0FBQSxjQUFPLEVBQUUsQ0FBQSxFQUFnQixXQUFBLGFBQU0sRUFBRSxDQUFBOzs7OzBFQVNsRjtBQXRIUSwyQkFBMkI7SUFGdkMsWUFBSyxDQUFDLE9BQU8sQ0FBQztJQUNkLFdBQUksQ0FBQyxvQkFBb0IsQ0FBQztHQUNkLDJCQUEyQixDQXVIdkM7QUF2SFksa0VBQTJCIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2FnZW50UmVnaXN0cmF0aW9uQ29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2V0LCBSb3V0ZSwgVGFncywgUG9zdCwgQm9keSwgUmVxdWVzdCwgRGVsZXRlLCBIZWFkZXIsIFB1dCB9IGZyb20gXCJ0c29hXCI7XHJcbmltcG9ydCB7IEluamVjdCB9IGZyb20gXCJ0eXBlc2NyaXB0LWlvY1wiO1xyXG5pbXBvcnQgeyBCYXNlQ29udHJvbGxlciB9IGZyb20gXCIuL0Jhc2VDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFRva2VuU2VydmljZSwgQWdlbnRSZWdpc3RyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IEFnZW50UmVnaXN0cmF0aW9uTW9kZWwsIFVwZGF0ZUFnZW50UmVnaXN0cmF0aW9uTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuQFJvdXRlKCdhZ2VudCcpXHJcbkBUYWdzKFwiQWdlbnQgUmVnaXN0cmF0aW9uXCIpXHJcbmV4cG9ydCBjbGFzcyBBZ2VudFJlZ2lzdHJhdGlvbkNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XHJcbiAgICBASW5qZWN0IGFnZW50UmVnaXN0cmF0aW9uU2VydmljZTogQWdlbnRSZWdpc3RyYXRpb25TZXJ2aWNlO1xyXG4gICAgQEluamVjdCB0b2tlblNlcnZpY2U6IFRva2VuU2VydmljZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGNyZWF0ZUFnZW50TW9kZWwgXHJcbiAgICAgKiBBZ2VudCBjcmVhdGUgZGF0YSBib2R5IHJlcXVlc3RcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHJlcXVlc3QgXHJcbiAgICAgKiByZXF1ZXN0IHRvIHZhbGlkYXRlIHRoZSB0b2tlblxyXG4gICAgICovXHJcbiAgICBAUG9zdCgpXHJcbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlQWdlbnRSZWdpc3RhdGlvbihAQm9keSgpIGNyZWF0ZUFnZW50UGF5bG9hZDogQWdlbnRSZWdpc3RyYXRpb25Nb2RlbCxcclxuICAgICAgICBAUmVxdWVzdCgpIHJlcXVlc3Q6IGFueSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gdmFsaWRhdGUgdG9rZW5cclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudG9rZW5TZXJ2aWNlLnZhbGlkYXRlVG9rZW4ocmVxdWVzdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuYWdlbnRSZWdpc3RyYXRpb25TZXJ2aWNlLmNyZWF0ZUFnZW50UmVnaXN0cmF0aW9uKGNyZWF0ZUFnZW50UGF5bG9hZCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHJlcXVlc3QgXHJcbiAgICAgKiByZXF1ZXN0IHRvIHZhbGlkYXRlIHRoZSB0b2tlblxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXphdGlvbiBcclxuICAgICAqIGNoZWNrIGF1dGhvcml6YXRpb24gc2VuZGluZyBmcm9tIEhlYWRlclxyXG4gICAgICovXHJcbiAgICBAR2V0KClcclxuICAgIHB1YmxpYyBhc3luYyBnZXRBZ2VudFJlZ2lzdGF0aW9ucyhAUmVxdWVzdCgpIHJlcXVlc3Q6IGFueSwgQEhlYWRlcigpIGF1dGhvcml6YXRpb246IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIHRva2VuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudG9rZW5TZXJ2aWNlLnZhbGlkYXRlVG9rZW4ocmVxdWVzdCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5hZ2VudFJlZ2lzdHJhdGlvblNlcnZpY2UuZ2V0QWdlbnRSZWdpc3RyYXRpb24obnVsbCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gaWQgXHJcbiAgICAgKiBhZ2VudCByZWdpc3RyYXRpb24gSWRcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHJlcXVlc3QgXHJcbiAgICAgKiByZXF1ZXN0IHRvIHZhbGlkYXRlIHRoZSB0b2tlblxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXphdGlvbiBcclxuICAgICAqIGNoZWNrIGF1dGhvcml6YXRpb24gc2VuZGluZyBmcm9tIEhlYWRlclxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIEBHZXQoJ3tpZH0nKVxyXG4gICAgcHVibGljIGFzeW5jIGdldEFnZW50UmVnaXN0cmF0aW9uQnlJZChpZDogc3RyaW5nLCBAUmVxdWVzdCgpIHJlcXVlc3Q6IGFueSwgQEhlYWRlcigpIGF1dGhvcml6YXRpb246IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIHRva2VuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudG9rZW5TZXJ2aWNlLnZhbGlkYXRlVG9rZW4ocmVxdWVzdCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5hZ2VudFJlZ2lzdHJhdGlvblNlcnZpY2UuZ2V0QWdlbnRSZWdpc3RyYXRpb24oaWQpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGlkIFxyXG4gICAgICogQWdlbnQgcmVnaXN0cmF0aW9uIElkXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB1cGRhdGVBZ2VudFJlZ1BheWxvYWQgXHJcbiAgICAgKiB1cGRhdGUgZGV0YWlscyBmb3IgdGhlIHZlaGljbGUgcmVnaXN0cmF0aW9uXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0IFxyXG4gICAgICogcmVxdWVzdCB0byB2YWxpZGF0ZSB0aGUgdG9rZW5cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGF1dGhvcml6YXRpb24gXHJcbiAgICAgKiBjaGVjayBhdXRob3JpemF0aW9uIHNlbmRpbmcgZnJvbSBIZWFkZXJcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBAUHV0KCd7aWR9JylcclxuICAgIHB1YmxpYyBhc3luYyB1cGRhdGVBZ2VudFJlZ2lzdHJhdGlvbihpZDogc3RyaW5nLCBAQm9keSgpIHVwZGF0ZUFnZW50UmVnUGF5bG9hZDogVXBkYXRlQWdlbnRSZWdpc3RyYXRpb25Nb2RlbCxcclxuICAgICAgICBAUmVxdWVzdCgpIHJlcXVlc3Q6IGFueSwgQEhlYWRlcigpIGF1dGhvcml6YXRpb246IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIHRva2VuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudG9rZW5TZXJ2aWNlLnZhbGlkYXRlVG9rZW4ocmVxdWVzdCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5hZ2VudFJlZ2lzdHJhdGlvblNlcnZpY2UudXBkYXRlQWdlbnRSZWdpc3RyYXRpb24oaWQsIHVwZGF0ZUFnZW50UmVnUGF5bG9hZCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gaWQgXHJcbiAgICAgKiBhZ2VudCByZWdpc3RyYXRpb24gaWRcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHJlcXVlc3QgXHJcbiAgICAgKiByZXF1ZXN0IHRvIHZhbGlkYXRlIHRoZSB0b2tlblxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXphdGlvbiBcclxuICAgICAqIGNoZWNrIGF1dGhvcml6YXRpb24gc2VuZGluZyBmcm9tIEhlYWRlclxyXG4gICAgICovXHJcbiAgICBARGVsZXRlKCd7aWR9JylcclxuICAgIHB1YmxpYyBhc3luYyBkZWxldGVBZ2VudFJlZ2lzdHJhdGlvbihpZDogc3RyaW5nLCBAUmVxdWVzdCgpIHJlcXVlc3Q6IGFueSwgQEhlYWRlcigpIGF1dGhvcml6YXRpb246IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIHRva2VuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudG9rZW5TZXJ2aWNlLnZhbGlkYXRlVG9rZW4ocmVxdWVzdCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5hZ2VudFJlZ2lzdHJhdGlvblNlcnZpY2UuZGVsZXRlQWdlbnRSZWdpc3RyYXRpb24oaWQpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==
