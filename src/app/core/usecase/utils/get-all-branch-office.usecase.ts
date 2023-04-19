import { Injectable } from '@angular/core';
import { UseCasePromise } from '../../base/use-case-promise';
import { UtilsRepository } from '../../repository/utils/utils.repository';
import { BranchOfficeResponse } from '../../models/utils/response/branch-office.response';
import { ResponseData } from '../../models/common/response/response-data.response';

@Injectable({
    providedIn: 'root'
})

export class GetAllBranchOfficeUseCase implements UseCasePromise<number, BranchOfficeResponse[]> {

    constructor(
        private _utilsRepository: UtilsRepository
    ) { }

    execute(idCompany: number): Promise<ResponseData<BranchOfficeResponse[]>> {

        return this._utilsRepository.getAllBranchOffice(idCompany);
    }
    
}