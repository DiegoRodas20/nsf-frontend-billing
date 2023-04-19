import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { SERVICE_ORDER_URL } from 'src/app/common/helpers/constants/url.constants';
import { PaginatedResponse } from 'src/app/core/models/common/response/paginated.response';
import { ResponseData } from 'src/app/core/models/common/response/response-data.response';
import { ServiceOrderRequest } from 'src/app/core/models/service-order/request/service-order.request';
import { ServiceOrderResponse } from 'src/app/core/models/service-order/response/service-order.response';
import { ServiceOrderRepository } from 'src/app/core/repository/service-order/service-order.repository';

@Injectable({
    providedIn: 'root'
})

export class ServiceOrderWebRepository extends ServiceOrderRepository {

    constructor(
        private http: HttpClient
    ) {
        super();
    }

    getAllServiceOrder(request: ServiceOrderRequest): Promise<ResponseData<PaginatedResponse<ServiceOrderResponse>>> {

        const url = `${SERVICE_ORDER_URL}s`

        const filter = {
            page_number: request.page_number,
            page_size: request.page_size,
            term: request.term,
            id_company: request.id_company,
            id_business_unit: request.id_business_unit,
            id_branch_office: request.id_branch_office,
            id_store: request.id_store,
            id_status: request.id_status
        }

        return lastValueFrom(this.http.get<ResponseData<PaginatedResponse<ServiceOrderResponse>>>(url, { params: filter }))
    }
}