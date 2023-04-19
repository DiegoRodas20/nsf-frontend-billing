
import { ResponseData } from "../../models/common/response/response-data.response";
import { BusinessUnitRequest } from "../../models/utils/request/business-unit.request";
import { StoreRequest } from "../../models/utils/request/store.request";
import { BranchOfficeResponse } from "../../models/utils/response/branch-office.response";
import { BusinessUnitResponse } from "../../models/utils/response/business-unit.response";
import { EnterpriseResponse } from "../../models/utils/response/enterprise.response";
import { ParameterResponse } from "../../models/utils/response/parameter.response";
import { StoreResponse } from "../../models/utils/response/store.response";

export abstract class UtilsRepository {

    abstract getAllCompanies(): Promise<ResponseData<EnterpriseResponse[]>>

    abstract getAllBranchOffice(idCompany: number): Promise<ResponseData<BranchOfficeResponse[]>>

    abstract getAllBusinessUnit(request: BusinessUnitRequest): Promise<ResponseData<BusinessUnitResponse[]>>

    abstract getAllStore(request: StoreRequest): Promise<ResponseData<StoreResponse[]>>
    
    abstract getParameterById(idGroup: string): Promise<ResponseData<ParameterResponse[]>>

}