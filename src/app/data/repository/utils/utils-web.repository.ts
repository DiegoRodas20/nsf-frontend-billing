import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { UTILS_URL } from 'src/app/common/helpers/constants/url.constants';
import { ResponseData } from 'src/app/core/models/common/response/response-data.response';
import { BusinessUnitRequest } from 'src/app/core/models/utils/request/business-unit.request';
import { StoreRequest } from 'src/app/core/models/utils/request/store.request';
import { BranchOfficeResponse } from 'src/app/core/models/utils/response/branch-office.response';
import { BusinessUnitResponse } from 'src/app/core/models/utils/response/business-unit.response';
import { EnterpriseResponse } from 'src/app/core/models/utils/response/enterprise.response';
import { ParameterResponse } from 'src/app/core/models/utils/response/parameter.response';
import { StoreResponse } from 'src/app/core/models/utils/response/store.response';
import { UtilsRepository } from 'src/app/core/repository/utils/utils.repository';

@Injectable({
    providedIn: 'root'
})

export class UtilsWebRepository extends UtilsRepository {

    constructor(
        private http: HttpClient
    ) {
        super();
    }

    getAllCompanies(): Promise<ResponseData<EnterpriseResponse[]>> {

        const url = `${UTILS_URL}/enterprises`

        return lastValueFrom(this.http.get<ResponseData<EnterpriseResponse[]>>(url))
    }

    getAllBranchOffice(idCompany: number): Promise<ResponseData<BranchOfficeResponse[]>> {

        const url = `${UTILS_URL}/enterprise/${idCompany}/branchOffices`

        return lastValueFrom(this.http.get<ResponseData<BranchOfficeResponse[]>>(url))
    }

    getAllBusinessUnit(request: BusinessUnitRequest): Promise<ResponseData<BusinessUnitResponse[]>> {

        const url = `${UTILS_URL}/enterprise/${request.idCompany}/branchOffice/${request.idBranchOffice}/businessUnits`

        return lastValueFrom(this.http.get<ResponseData<BusinessUnitResponse[]>>(url))
    }

    getAllStore(request: StoreRequest): Promise<ResponseData<StoreResponse[]>> {

        const url = `${UTILS_URL}/enterprise/${request.idCompany}/branchOffice/${request.idBranchOffice}/businessUnit/${request.idBusinessUnit}/stores`

        return lastValueFrom(this.http.get<ResponseData<StoreResponse[]>>(url))
    }

    getParameterById(idGroup: string): Promise<ResponseData<ParameterResponse[]>> {

        const url = `${UTILS_URL}/parameter/${idGroup}`

        return lastValueFrom(this.http.get<ResponseData<ParameterResponse[]>>(url))
    }

}
