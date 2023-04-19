import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from 'src/app/common/shared/primeng/primeng.module';

// Client Components
import { SharedModule } from 'src/app/common/shared/shared.module';
import { ManageServiceOrderComponent } from './manage-service-order/manage-service-order.component';
import { ServiceOrderRoutingModule } from './service-order.routing';


const COMPONENTS = [
    ManageServiceOrderComponent
]

@NgModule({
    declarations: [
        COMPONENTS
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        PrimeNGModule,
        SharedModule,
        ServiceOrderRoutingModule
    ],
})

export class ServiceOrderModule { }
