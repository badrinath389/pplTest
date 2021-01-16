import { Singleton, Inject } from "typescript-ioc";
import { Controller } from "tsoa";
import { PinError } from "../../config/ErrorHandler";
import { AgentRegistrationService, MasterOrderService, OrderService,
    UserService, VehicleRegistrationService } from "./index";

@Singleton
export class DashboardService extends Controller {
    @Inject agentRegistrationService: AgentRegistrationService;
    @Inject masterOrderService: MasterOrderService;
    @Inject orderService: OrderService;
    @Inject userService: UserService;
    @Inject vehicleRegistrationService: VehicleRegistrationService;

    public async getDashboardCountInfo() {
        return {
            vehicleCount: await this.vehicleRegistrationService.vehicleCount(),
            agentCount: await this.agentRegistrationService.agentCount(),
            usersCount: 0,
            masterOrderCount: await this.masterOrderService.masterOrderCount(),
            orderCount: await this.orderService.orderCount()
        };
    }
}