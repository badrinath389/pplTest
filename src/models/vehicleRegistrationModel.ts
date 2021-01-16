export interface VehicleRegistrationModel {
    vehicleId?: string;
    vehicleDisplayId?: string;
    vehicleNo: string;
    model: string;
    type: string;
    currentDriver: string;
    agentId?: string;
    owenerName?: string;
    ownerContact?: string;
    fuelType: string;
    insuranceDetails: {
        name?: string;
        startDate?: string;
        expiryDate?: string;
        policyNo?: string;
        chassisNo?: string;
        engineNo?: string;
    };
    registrationDetails?: string[];
    incrementNo?: number;
    createdOn?: Date;
    updatedOn?: Date;
    active?: boolean;
}

export interface UpdateVehicleRegistrationModel {
    vehicleNo?: string;
    model?: string;
    type?: string;
    currentDriver?: string;
    agentName?: string;
    agentId?: string;
    owenerName?: string;
    ownerContact?: string;
    fuelType?: string;
    insuranceDetails?: {
        name?: string;
        startDate?: string;
        expiryDate?: string;
        policyNo?: string;
        chassisNo?: string;
        engineNo?: string;
    };
    registrationDetails?: string[];
    active?: boolean;
}