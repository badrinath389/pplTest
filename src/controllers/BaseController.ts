import {Controller} from "tsoa";

export class BaseController extends Controller {
    protected handleError(e: any) {
        if (typeof e === "number") {
            this.setStatus(e);
        } else if (e.constructor.name === "PinError") {
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