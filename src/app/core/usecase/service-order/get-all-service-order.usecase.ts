import { Injectable } from '@angular/core';
import { UseCasePromise } from '../../base/use-case-promise';
import { ResponseData } from '../../models/common/response/response-data.response';
import { ServiceOrderRepository } from '../../repository/service-order/service-order.repository';
import { ServiceOrderRequest } from '../../models/service-order/request/service-order.request';
import { ServiceOrderResponse } from '../../models/service-order/response/service-order.response';
import { PaginatedResponse } from '../../models/common/response/paginated.response';

@Injectable({
    providedIn: 'root'
})

export class GetAllServiceOrderUseCase implements UseCasePromise<ServiceOrderRequest, PaginatedResponse<ServiceOrderResponse>> {

    constructor(
        private _serviceOrderRepository: ServiceOrderRepository
    ) { }

    execute(request: ServiceOrderRequest): Promise<ResponseData<PaginatedResponse<ServiceOrderResponse>>> {

        return this._serviceOrderRepository.getAllServiceOrder(request);
    }
    
}