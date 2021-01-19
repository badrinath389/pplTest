"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const tsoa_1 = require("tsoa");
class BaseController extends tsoa_1.Controller {
    handleError(e) {
        if (typeof e === "number") {
            this.setStatus(e);
        }
        else if (e.constructor.name === "PinError") {
            if (e.httpStatusCode) {
                this.setStatus(e.httpStatusCode);
                this.setHeader('ppl-error', e.message);
                return e;
            }
        }
        console.log(e);
        throw e;
    }
}
exports.BaseController = BaseController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVycy9CYXNlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBZ0M7QUFFaEMsTUFBYSxjQUFlLFNBQVEsaUJBQVU7SUFDaEMsV0FBVyxDQUFDLENBQU07UUFDeEIsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQjthQUFNLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQzFDLElBQUksQ0FBQyxDQUFDLGNBQWMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdkMsT0FBTyxDQUFDLENBQUM7YUFDWjtTQUNKO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLE1BQU0sQ0FBQyxDQUFDO0lBQ1osQ0FBQztDQUNKO0FBZEQsd0NBY0MiLCJmaWxlIjoiY29udHJvbGxlcnMvQmFzZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gXCJ0c29hXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUNvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIHByb3RlY3RlZCBoYW5kbGVFcnJvcihlOiBhbnkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiUGluRXJyb3JcIikge1xyXG4gICAgICAgICAgICBpZiAoZS5odHRwU3RhdHVzQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZS5odHRwU3RhdHVzQ29kZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEhlYWRlcigncHBsLWVycm9yJywgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICB9XHJcbn0iXX0=
