import {Get, Route, Tags, Request, Security, SuccessResponse, Response, Controller } from "tsoa";
  
/***
 * Test sample service after deployment
 */
@Route('ping')
@Tags("ping")
export class SampleCheckController extends Controller {

    @Get()
    public async ping() {
        return {
            message: 'sample pinpoint services ping...'
        };
    }
}