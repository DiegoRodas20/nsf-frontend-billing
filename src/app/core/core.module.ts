import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceOrderRepository } from './repository/service-order/service-order.repository';
import { ServiceOrderWebRepository } from '../data/repository/service-order/service-order-web.repository';
import { UtilsRepository } from './repository/utils/utils.repository';
import { UtilsWebRepository } from '../data/repository/utils/utils-web.repository';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    exports: [],
    providers: [

        { provide: ServiceOrderRepository, useClass: ServiceOrderWebRepository },
        { provide: UtilsRepository, useClass: UtilsWebRepository },

    ]
})

export class CoreModule { }
