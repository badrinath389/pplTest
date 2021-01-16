export interface MasterOrderModel {
    masterOrderId?: string;
    displayMasterId?: string; // auto generate
    customerName?: string;
    incrementNo?: number;
    userId?: string;
    quantity?: number;
    rate?: string;
    location?: string;
    contact?: string;
    remark?: string;
    createdOn?: Date;
    updatedOn?: Date;
}

export interface UpdateMasterOrderModel {
    masterOrderId?: string;
    displayMasterId?: string; // auto generate
    customerName?: string;
    incrementNo?: number;
    userId?: string;
    quantity?: number;
    rate?: string;
    location?: string;
    contact?: string;
    remark?: string;
}