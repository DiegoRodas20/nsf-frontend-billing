import { Injectable } from '@angular/core';
import { UseCasePromise } from '../../base/use-case-promise';
import { UtilsRepository } from '../../repository/utils/utils.repository';
import { EnterpriseResponse } from '../../models/utils/response/enterprise.response';
import { ResponseData } from '../../models/common/response/response-data.response';

@Injectable({
    providedIn: 'root'
})

export class GetAllCompaniesUseCase implements UseCasePromise<null, EnterpriseResponse[]> {

    constructor(
        private _utilsRepository: UtilsRepository
    ) { }

    execute(): Promise<ResponseData<EnterpriseResponse[]>> {

        return this._utilsRepository.getAllCompanies();
    }
    
}
