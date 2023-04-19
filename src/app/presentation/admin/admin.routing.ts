import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";

const DEFAULT_ROUTE: string = 'service-order'

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [

            // Ruta Default
            {
                path: '',
                redirectTo: DEFAULT_ROUTE,
                pathMatch: 'full'
            },

            // Service Order Module
            {
                path: 'service-order',
                loadChildren: () => import('./service-order/service-order.module').then(m => m.ServiceOrderModule),
                data: { title: 'Búsqueda Orden de Servicio' }
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class AdminRoutingModule { }