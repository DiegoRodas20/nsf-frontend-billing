import { Injectable } from '@angular/core';
import { UseCasePromise } from '../../base/use-case-promise';
import { UtilsRepository } from '../../repository/utils/utils.repository';
import { BusinessUnitResponse } from '../../models/utils/response/business-unit.response';
import { BusinessUnitRequest } from '../../models/utils/request/business-unit.request';
import { ResponseData } from '../../models/common/response/response-data.response';

@Injectable({
    providedIn: 'root'
})

export class GetAllBusinessUniteUseCase implements UseCasePromise<BusinessUnitRequest, BusinessUnitResponse[]> {

    constructor(
        private _utilsRepository: UtilsRepository
    ) { }

    execute(request: BusinessUnitRequest): Promise<ResponseData<BusinessUnitResponse[]>> {

        return this._utilsRepository.getAllBusinessUnit(request);
    }
    
}