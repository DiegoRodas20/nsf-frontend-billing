import { PaginatedRequest } from "../../common/request/paginated.request";

export interface ServiceOrderRequest extends PaginatedRequest {

    term: string;
    id_company: number;
    id_business_unit: number;
    id_branch_office: number;
    id_store: number;
    id_status: number;

}