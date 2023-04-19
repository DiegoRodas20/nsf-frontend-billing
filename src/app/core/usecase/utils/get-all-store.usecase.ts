import { Injectable } from '@angular/core';
import { UseCasePromise } from '../../base/use-case-promise';
import { UtilsRepository } from '../../repository/utils/utils.repository';
import { StoreRequest } from '../../models/utils/request/store.request';
import { StoreResponse } from '../../models/utils/response/store.response';
import { ResponseData } from '../../models/common/response/response-data.response';

@Injectable({
    providedIn: 'root'
})

export class GetAllStoreUseCase implements UseCasePromise<StoreRequest, StoreResponse[]> {

    constructor(
        private _utilsRepository: UtilsRepository
    ) { }

    execute(request: StoreRequest): Promise<ResponseData<StoreResponse[]>> {

        return this._utilsRepository.getAllStore(request);
    }
    
}