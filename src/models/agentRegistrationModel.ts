export interface AgentRegistrationModel {
    agentId?: string;
    agentName: string;
    registrationDate: string;
    vehicleRegId?: string[];
    contact?: {
        mobile1: string;
        mobile2?: string;
        fax?: string;
        phoneNo?: string;
        email?: string;
        branchAddress?: string;
        homeAddress?: string;
    };
    bank?: {
        accountNo?: string;
        ifscCode?: string;
        bankName?: string;
        branch?: string;       
    };
    createdOn?: Date;
    updatedOn?: Date;
    active?: boolean;
}

export interface UpdateAgentRegistrationModel {
    agentName?: string;
    registrationDate?: string;
    vehicleRegId?: string[];
    active?: boolean;
    contact?: {
        mobile1?: string;
        mobile2?: string;
        fax?: string;
        phoneNo?: string;
        email?: string;
        branchAddress?: string;
        homeAddress?: string;
    };
    bank?: {
        accountNo?: string;
        ifscCode?: string;
        bankName?: string;
        branch?: string;       
    };
}