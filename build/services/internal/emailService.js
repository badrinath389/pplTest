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
exports.EmailService = void 0;
const typescript_ioc_1 = require("typescript-ioc");
const tsoa_1 = require("tsoa");
// import * as sendgrid from '@sendgrid/mail';
// sendgrid.setApiKey(config.sendgrid.API_KEY);
let EmailService = class EmailService extends tsoa_1.Controller {
    sendUserActivateEmail(userPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            //     let emailLink = `${config.sendgrid.EMAIL_LINK}/#/auth/activate?tempCode=${userPayload.tempCode}&username=${userPayload.username}`;
            //    return await sendgrid.send({
            //             to: userPayload.email,
            //             from: 'admin@pinpointlogistic.com',
            //             subject: 'Activate User Account',
            //             text: 'hi',
            //             html: `
            //                 <div>Hi,</div>
            //                 <br />
            //                 <div>You have been invited to access the services of <span style="font-size: 16px;font-weight:600">PinPoint Logistics</span></div>
            //                 <div>Please click below button to activate account</div>
            //                 <br />
            //                 <div>
            //                     <a style="background-color: #1068B5;
            //                     color: white;
            //                     padding: 10px 30px 10px 30px;
            //                             margin-left: 60px;
            //                             box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149);
            //                     text-decoration: none;
            //                     display: inline-block;" href="${emailLink}" target="_blank">ACTIVATE</a>
            //                 </div>
            //                 <br />
            //                 <div>Thank you.</div>
            //             `,
            //       })
            //       .then(() => {
            //         console.log('Email sent');
            //       })
            //       .catch((error) => {
            //             //Log friendly error
            //         console.error(error.toString());
            //         //Extract error msg
            //         const { message, code, response } = error;
            //         //Extract response msg
            //         const { headers, body } = response;
            //       });
        });
    }
};
EmailService = __decorate([
    typescript_ioc_1.Singleton
], EmailService);
exports.EmailService = EmailService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2aWNlcy9pbnRlcm5hbC9lbWFpbFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQW1EO0FBQ25ELCtCQUFrQztBQUlsQyw4Q0FBOEM7QUFDOUMsK0NBQStDO0FBRy9DLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQWEsU0FBUSxpQkFBVTtJQUUzQixxQkFBcUIsQ0FBQyxXQUFXOztZQUU5Qyx5SUFBeUk7WUFFekksa0NBQWtDO1lBQ2xDLHFDQUFxQztZQUNyQyxrREFBa0Q7WUFDbEQsZ0RBQWdEO1lBQ2hELDBCQUEwQjtZQUMxQixzQkFBc0I7WUFDdEIsaUNBQWlDO1lBQ2pDLHlCQUF5QjtZQUN6QixxSkFBcUo7WUFDckosMkVBQTJFO1lBQzNFLHlCQUF5QjtZQUN6Qix3QkFBd0I7WUFDeEIsMkRBQTJEO1lBQzNELG9DQUFvQztZQUNwQyxvREFBb0Q7WUFDcEQsaURBQWlEO1lBQ2pELGdIQUFnSDtZQUNoSCw2Q0FBNkM7WUFDN0MsK0ZBQStGO1lBQy9GLHlCQUF5QjtZQUN6Qix5QkFBeUI7WUFDekIsd0NBQXdDO1lBQ3hDLGlCQUFpQjtZQUNqQixXQUFXO1lBQ1gsc0JBQXNCO1lBQ3RCLHFDQUFxQztZQUNyQyxXQUFXO1lBQ1gsNEJBQTRCO1lBQzVCLG1DQUFtQztZQUNuQywyQ0FBMkM7WUFFM0MsOEJBQThCO1lBQzlCLHFEQUFxRDtZQUVyRCxpQ0FBaUM7WUFDakMsOENBQThDO1lBQzlDLFlBQVk7UUFDWixDQUFDO0tBQUE7Q0FDSixDQUFBO0FBNUNZLFlBQVk7SUFEeEIsMEJBQVM7R0FDRyxZQUFZLENBNEN4QjtBQTVDWSxvQ0FBWSIsImZpbGUiOiJzZXJ2aWNlcy9pbnRlcm5hbC9lbWFpbFNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaW5nbGV0b24sIEluamVjdCB9IGZyb20gXCJ0eXBlc2NyaXB0LWlvY1wiO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcInRzb2FcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi9jb25maWcvY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCAqIGFzIEFXUyBmcm9tICdhd3Mtc2RrJztcclxuXHJcbi8vIGltcG9ydCAqIGFzIHNlbmRncmlkIGZyb20gJ0BzZW5kZ3JpZC9tYWlsJztcclxuLy8gc2VuZGdyaWQuc2V0QXBpS2V5KGNvbmZpZy5zZW5kZ3JpZC5BUElfS0VZKTtcclxuXHJcbkBTaW5nbGV0b25cclxuZXhwb3J0IGNsYXNzIEVtYWlsU2VydmljZSBleHRlbmRzIENvbnRyb2xsZXIge1xyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzZW5kVXNlckFjdGl2YXRlRW1haWwodXNlclBheWxvYWQpIHtcclxuICAgICAgICBcclxuICAgIC8vICAgICBsZXQgZW1haWxMaW5rID0gYCR7Y29uZmlnLnNlbmRncmlkLkVNQUlMX0xJTkt9LyMvYXV0aC9hY3RpdmF0ZT90ZW1wQ29kZT0ke3VzZXJQYXlsb2FkLnRlbXBDb2RlfSZ1c2VybmFtZT0ke3VzZXJQYXlsb2FkLnVzZXJuYW1lfWA7XHJcblxyXG4gICAgLy8gICAgcmV0dXJuIGF3YWl0IHNlbmRncmlkLnNlbmQoe1xyXG4gICAgLy8gICAgICAgICAgICAgdG86IHVzZXJQYXlsb2FkLmVtYWlsLFxyXG4gICAgLy8gICAgICAgICAgICAgZnJvbTogJ2FkbWluQHBpbnBvaW50bG9naXN0aWMuY29tJyxcclxuICAgIC8vICAgICAgICAgICAgIHN1YmplY3Q6ICdBY3RpdmF0ZSBVc2VyIEFjY291bnQnLFxyXG4gICAgLy8gICAgICAgICAgICAgdGV4dDogJ2hpJyxcclxuICAgIC8vICAgICAgICAgICAgIGh0bWw6IGBcclxuICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2PkhpLDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDxkaXY+WW91IGhhdmUgYmVlbiBpbnZpdGVkIHRvIGFjY2VzcyB0aGUgc2VydmljZXMgb2YgPHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7Zm9udC13ZWlnaHQ6NjAwXCI+UGluUG9pbnQgTG9naXN0aWNzPC9zcGFuPjwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDxkaXY+UGxlYXNlIGNsaWNrIGJlbG93IGJ1dHRvbiB0byBhY3RpdmF0ZSBhY2NvdW50PC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjMTA2OEI1O1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDMwcHg7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSg2MCw2NCw2NywwLjMwMiksIDAgMXB4IDNweCAxcHggcmdiYSg2MCw2NCw2NywwLjE0OSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1wiIGhyZWY9XCIke2VtYWlsTGlua31cIiB0YXJnZXQ9XCJfYmxhbmtcIj5BQ1RJVkFURTwvYT5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2PlRoYW5rIHlvdS48L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgIGAsXHJcbiAgICAvLyAgICAgICB9KVxyXG4gICAgLy8gICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnRW1haWwgc2VudCcpO1xyXG4gICAgLy8gICAgICAgfSlcclxuICAgIC8vICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIC8vTG9nIGZyaWVuZGx5IGVycm9yXHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgLy8gICAgICAgICAvL0V4dHJhY3QgZXJyb3IgbXNnXHJcbiAgICAvLyAgICAgICAgIGNvbnN0IHsgbWVzc2FnZSwgY29kZSwgcmVzcG9uc2UgfSA9IGVycm9yO1xyXG5cclxuICAgIC8vICAgICAgICAgLy9FeHRyYWN0IHJlc3BvbnNlIG1zZ1xyXG4gICAgLy8gICAgICAgICBjb25zdCB7IGhlYWRlcnMsIGJvZHkgfSA9IHJlc3BvbnNlO1xyXG4gICAgLy8gICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=
