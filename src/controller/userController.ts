import {Get, Route, Tags} from "tsoa";
import {Inject} from "typescript-ioc";
import { UsersService } from '../services';

@Route("users")
@Tags('Users Service')
export class UsersController {

    @Inject usersService: UsersService;

    @Get('')
    public async getAllUsers() {
        try {

            return await this.usersService.getAllUsers();
        } catch (error) {
            console.log(error);
        }
    }
}