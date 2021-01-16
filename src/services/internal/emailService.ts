import { Singleton, Inject } from "typescript-ioc";
import { Controller } from "tsoa";
import config from '../../config/configuration';
import * as AWS from 'aws-sdk';

// import * as sendgrid from '@sendgrid/mail';
// sendgrid.setApiKey(config.sendgrid.API_KEY);

@Singleton
export class EmailService extends Controller {

    public async sendUserActivateEmail(userPayload) {
        
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
    }
}