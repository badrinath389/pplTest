export interface OrderModel {
    orderId?: string;
    displayOrderId?: string;
    date?: string;
    masterOrderId?: string;
    incrementNo?: number;
    fromLocation?: string;
    toLocation?: string;
    vehicleId?: string; // get from vehicle registration
    agentPartyName?: string; // get from agent registration
    vehicleType?: string;
    actualWeight?: number;
    totalChargableWeight?: number;
    rate?: number;
    freightAmount?: number; // totalChargableWeight * rate
    deductions: {
        advanceTobank?: number;
        challan?: number;
        pumpCash?: number;
        dieselFuel?: number;
        tdsDeduction?: number;
        shortage?: number;
        totalDeductions?: number;
    };
    balanceToAgent?: number;
    paymentStatus?: string;
    rateBA: {
        ratebalance?: number;
        billNo?: string;
    };
    podReceivedDate?: string;
    podStatus?: boolean;
    podRemark?: string;
    createdOn?: Date;
    updatedOn?: Date;
}

export interface UpdateOrderModel {
    displayOrderId?: string;
    date?: string;
    masterOrderId?: string;
    incrementNo?: number;
    fromLocation?: string;
    toLocation?: string;
    vehicleId?: string; // get from vehicle registration
    agentPartyName?: string; // get from agent registration
    vehicleType?: string;
    actualWeight?: number;
    totalChargableWeight?: number;
    rate?: number;
    freightAmount?: number; // totalChargableWeight * rate
    deductions: {
        advanceTobank?: number;
        challan?: number;
        pumpCash?: number;
        dieselFuel?: number;
        tdsDeduction?: number;
        shortage?: number;
        totalDeductions?: number;
    };
    balanceToAgent?: number;
    paymentStatus?: string;
    rateBA: {
        ratebalance?: number;
        billNo?: string;
    };
    podReceivedDate?: string;
    podStatus?: boolean;
    podRemark?: string;
}