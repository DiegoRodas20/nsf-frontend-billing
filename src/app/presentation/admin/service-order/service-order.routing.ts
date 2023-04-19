import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ManageServiceOrderComponent } from "./manage-service-order/manage-service-order.component";



const routes: Routes = [

    { path: '', component: ManageServiceOrderComponent },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ServiceOrderRoutingModule { }
