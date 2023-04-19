import { ResponseData } from "../models/common/response/response-data.response";

export interface UseCasePromise<S, T> {

    execute(params: S): Promise<ResponseData<T>>;

}