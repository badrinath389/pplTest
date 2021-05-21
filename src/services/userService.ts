
export class UsersService {

    public async getAllUsers() {
        return [{
            firstName: 'test',
            lastName: 'test',
            email: 'test@gmail.com',
            mobile: 999988777,
            address: 'test'
        }, {
            firstName: 'nath',
            lastName: 'nath',
            email: 'nath@gmail.com',
            mobile: 999988777,
            address: 'test'
        }, {
            firstName: 'anup',
            lastName: 'gupta',
            email: 'anup@gmail.com',
            mobile: 999988777,
            address: 'test'
        }, {
            firstName: 'badri',
            lastName: 'test',
            email: 'test@gmail.com',
            mobile: 999988777,
            address: 'test'
        }];
    }
}