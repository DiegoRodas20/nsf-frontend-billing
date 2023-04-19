import { Injectable } from '@angular/core';
import { UseCasePromise } from '../../base/use-case-promise';
import { UtilsRepository } from '../../repository/utils/utils.repository';
import { ResponseData } from '../../models/common/response/response-data.response';
import { ParameterResponse } from '../../models/utils/response/parameter.response';

@Injectable({
    providedIn: 'root'
})

export class GetParameterByIdUseCase implements UseCasePromise<string, ParameterResponse[]> {

    constructor(
        private _utilsRepository: UtilsRepository
    ) { }

    execute(idGroup: string): Promise<ResponseData<ParameterResponse[]>> {

        return this._utilsRepository.getParameterById(idGroup);
    }
    
}