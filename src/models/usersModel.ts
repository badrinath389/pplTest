export interface UserModel {
    userId?: string;
    firstName: string;
    lastName?: string;
    dob?: string;
    email: string;
    mobile: number;
    address?: string;
    city: string;
    state: string;
    pincode: number;
    landmark?: string;
    username: string;
    password: string;
    description?: string;
    role: UserRole;
    active?: boolean;
    tempCode?: string;
    createdOn?: Date;
    updatedOn?: Date;
}

export interface UpdateUserModel {
    firstName?: string;
    lastName?: string;
    dob?: string;
    email?: string;
    mobile?: number;
    address?: string;
    city?: string;
    state?: string;
    pincode?: number;
    landmark?: string;
    description?: string;
    role?: UserRole;
    updatedOn?: Date;
    active?: boolean;
    tempCode?: string;
}

export enum UserRole {
    employee = "employee",
    admin = "admin",
    manager = "manager"
}


export interface UserAuthModel {
    username: string;
    password: string;
}

export interface UserActivateModel {
    username: string;
    tempCode: string;
    updatedOn?: Date;
    active?: boolean;
}