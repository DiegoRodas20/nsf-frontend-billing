
import { PaginatedResponse } from "../../models/common/response/paginated.response";
import { ResponseData } from "../../models/common/response/response-data.response";
import { ServiceOrderRequest } from "../../models/service-order/request/service-order.request";
import { ServiceOrderResponse } from "../../models/service-order/response/service-order.response";

export abstract class ServiceOrderRepository {

    abstract getAllServiceOrder(request: ServiceOrderRequest): Promise<ResponseData<PaginatedResponse<ServiceOrderResponse>>>

}