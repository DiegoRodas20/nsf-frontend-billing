import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { enter } from 'src/app/common/helpers/animations/enter.animation';
import { PAGE_SIZE } from 'src/app/common/helpers/constants/paginated.constants';
import { ParameterDetail } from 'src/app/common/helpers/enums/parameter-detail.enum';
import { ServiceOrderStatus } from 'src/app/common/helpers/enums/service-order-status.enum';
import { LoaderService } from 'src/app/common/shared/components/loader/loader.service';
import { PaginatedResponse } from 'src/app/core/models/common/response/paginated.response';
import { ResponseData } from 'src/app/core/models/common/response/response-data.response';
import { ServiceOrderRequest } from 'src/app/core/models/service-order/request/service-order.request';
import { ServiceOrderResponse } from 'src/app/core/models/service-order/response/service-order.response';
import { BusinessUnitRequest } from 'src/app/core/models/utils/request/business-unit.request';
import { StoreRequest } from 'src/app/core/models/utils/request/store.request';
import { BranchOfficeResponse } from 'src/app/core/models/utils/response/branch-office.response';
import { BusinessUnitResponse } from 'src/app/core/models/utils/response/business-unit.response';
import { EnterpriseResponse } from 'src/app/core/models/utils/response/enterprise.response';
import { ParameterResponse } from 'src/app/core/models/utils/response/parameter.response';
import { StoreResponse } from 'src/app/core/models/utils/response/store.response';
import { GetAllServiceOrderUseCase } from 'src/app/core/usecase/service-order/get-all-service-order.usecase';
import { GetAllBranchOfficeUseCase } from 'src/app/core/usecase/utils/get-all-branch-office.usecase';
import { GetAllBusinessUniteUseCase } from 'src/app/core/usecase/utils/get-all-business-unit.usecase';
import { GetAllCompaniesUseCase } from 'src/app/core/usecase/utils/get-all-companies.usecase';
import { GetAllStoreUseCase } from 'src/app/core/usecase/utils/get-all-store.usecase';
import { GetParameterByIdUseCase } from 'src/app/core/usecase/utils/get-parameter-by-id.usecase';

@Component({
    selector: 'app-manage-service-order',
    templateUrl: './manage-service-order.component.html',
    animations: [enter],
})

export class ManageServiceOrderComponent implements OnInit {

    formFilterServiceOrder: FormGroup;
    message: string;
    totalRows: number
    viewFilter: boolean = false
    pageSize = PAGE_SIZE;
    pageSizeOptions: number[] = [5, 10, 15];

    lCompany: EnterpriseResponse[] = [];
    lBranchOffice: BranchOfficeResponse[] = [];
    lBusinessUnit: BusinessUnitResponse[] = [];
    lStore: StoreResponse[] = []
    lStatus: ParameterResponse[] = [];
    lServiceOrder: ServiceOrderResponse[] = [];
    serviceOrderSelected: ServiceOrderResponse
    options: MenuItem[]

    optionsByStatus: any

    constructor(
        public loaderService: LoaderService,
        private _formBuilder: FormBuilder,
        private _getAllCompanies: GetAllCompaniesUseCase,
        private _getAllBranchOffice: GetAllBranchOfficeUseCase,
        private _getAllBusinessUnit: GetAllBusinessUniteUseCase,
        private _getAllStore: GetAllStoreUseCase,
        private _getAllStatus: GetParameterByIdUseCase,
        private _getAllServiceOrder: GetAllServiceOrderUseCase,
    ) { }

    ngOnInit() {

        this.createFormServiceOrder()
        this.subscribeSeviceOrderObserver()
        this.getAllCompanies()
        this.getAllStatus()
        this.getAllServiceOrder()
        this.setAllOptions()
        this.setOptionsByStatus()

    }

    createFormServiceOrder() {
        this.formFilterServiceOrder = this._formBuilder.group({
            term: [null],
            company: [null],
            business_unit: [null],
            branch_office: [null],
            store: [null],
            status: [null]
        });
    }

    async subscribeSeviceOrderObserver() {

        this.formFilterServiceOrder.valueChanges.subscribe(() => {
            this.getAllServiceOrder()
        })
    }

    async getAllCompanies() {

        try {
            const response: ResponseData<EnterpriseResponse[]> = await this._getAllCompanies.execute()
            this.lCompany = response.data
        }
        catch (error) {
            console.log('Error: ', error)
        }
    }

    async getAllBranchOffice(idCompany: number) {

        try {
            const response: ResponseData<BranchOfficeResponse[]> = await this._getAllBranchOffice.execute(idCompany)
            this.lBranchOffice = response.data
        }
        catch (error) {
            console.log('Error: ', error)
        }
    }

    async getAllBusinessUnit(idCompany: number, idBranchOffice: number) {
        try {

            const request: BusinessUnitRequest = {
                idCompany: idCompany,
                idBranchOffice: idBranchOffice
            }

            const response: ResponseData<BusinessUnitResponse[]> = await this._getAllBusinessUnit.execute(request)
            this.lBusinessUnit = response.data
        }
        catch (error) {
            console.log('Error: ', error)
        }
    }

    async getAllStore(idCompany: number, idBranchOffice: number, idBusinessUnit: number) {

        try {

            const request: StoreRequest = {
                idCompany: idCompany,
                idBranchOffice: idBranchOffice,
                idBusinessUnit: idBusinessUnit
            }

            const response: ResponseData<StoreResponse[]> = await this._getAllStore.execute(request)
            this.lStore = response.data
        }
        catch (error) {
            console.log('Error: ', error)
        }
    }

    async getAllStatus() {

        try {
            const response: ResponseData<ParameterResponse[]> = await this._getAllStatus.execute(ParameterDetail.ServiceOrderStatus);
            this.lStatus = response.data;
        }
        catch (error) {
            console.log('Error: ', error);
        }
    }

    async getAllServiceOrder(pageNumber?: number) {

        try {
            const form = this.formFilterServiceOrder.value;

            const request: ServiceOrderRequest = {
                page_number: 1 ?? 0,
                page_size: this.pageSize,
                term: '',
                id_company: form.company ?? 0,
                id_branch_office: form.branch_office ?? 0,
                id_business_unit: form.business_unit ?? 0,
                id_store: form.store ?? 0,
                id_status: form.status ?? 0
            }

            const response: ResponseData<PaginatedResponse<ServiceOrderResponse>> = await this._getAllServiceOrder.execute(request)

            console.log(response)

            this.lServiceOrder = response.data.results
            this.message = response.message
            this.totalRows = response.data.total_rows
        }
        catch (error) {
            console.log('Error: ', error);

            this.lServiceOrder = null
            this.message = null
        }
    }

    onChangeCompany(idCompany: number) {

        this.lBranchOffice = null
        this.lBusinessUnit = null
        if (idCompany) this.getAllBranchOffice(idCompany)
    }

    onChangeBranchOffice(idBranchOffice: number) {

        this.lBusinessUnit = null
        const idCompany = this.formFilterServiceOrder.get('company').value
        if (idBranchOffice) this.getAllBusinessUnit(idCompany, idBranchOffice)
    }

    onChangeBusinessUnit(idBusinessUnit: number) {
        const idCompany = this.formFilterServiceOrder.get('company').value
        const idBranchOffice = this.formFilterServiceOrder.get('branch_office').value

        if (idBusinessUnit) this.getAllStore(idCompany, idBranchOffice, idBusinessUnit)
    }

    clearFilterLiquidation() {

        this.formFilterServiceOrder.reset()
    }

    setAllOptions() {
        this.options = [
            {
                label: 'Ver detalle',
                icon: 'pi pi-eye',
                command: () => { }
            },
            {
                label: 'Editar',
                icon: 'pi pi-file-edit',
                command: () => { }
            },
            {
                label: 'Anular',
                icon: 'pi pi-trash',
                command: () => { }
            }
        ]
    }

    onPageSizeChange(pageSize: number) {
        this.pageSize = pageSize
    }

    getStatusServiceOrder(code_status: string): string {

        const statusServiceOrder = {
            [ServiceOrderStatus.Pendiente]: 'point-pending',
            [ServiceOrderStatus.Parcial]: 'point-active',
        };
        return statusServiceOrder[code_status] || ''
    }

    setOptionsByStatus() {
        this.optionsByStatus = {
            [ServiceOrderStatus.Pendiente]: [this.options[0], this.options[1], this.options[2]],
            [ServiceOrderStatus.Parcial]: [this.options[0], this.options[1], this.options[2]]
        }
    }

    getOptionsByStatus(serviceOrder: ServiceOrderResponse) {

        this.serviceOrderSelected = serviceOrder
        this.options = this.optionsByStatus[serviceOrder.status_code]
    }

}
