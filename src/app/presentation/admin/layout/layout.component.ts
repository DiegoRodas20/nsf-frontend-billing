import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { filter, map, Subscription } from 'rxjs';

@Component({
    selector: 'app-layout',
    templateUrl: 'layout.component.html',
    styleUrls: ['./layout.component.scss'],
})

export class LayoutComponent implements OnInit {

    display: boolean
    items: MenuItem[] = []
    activeItem: MenuItem

    breadcrumbItems: MenuItem[] = []
    titleSubscription: Subscription

    constructor(
        private _router: Router
    ) {
        this.titleSubscription = this.getArgumentosRuta().subscribe(({ title }) => {
            this.setBreadCrumb(title)
        })
    }

    ngOnInit() {
        this.setItemsMenu()
        this.activeItem = this.items[0];
    }

    setItemsMenu() {

        this.items = [
            {
                label: 'Orden de Servicio',
                url: 'service-order'
            },
            {
                label: 'Facturación',
                url: 'service-order'
            },
        ]
    }

    setBreadCrumb(title: string) {
        this.breadcrumbItems = [
            { label: 'Inicio' },
            { label: title }
        ];
    }

    getArgumentosRuta() {
        return this._router.events
            .pipe(
                filter(event => event instanceof ActivationEnd),
                filter((event: ActivationEnd) => event.snapshot.firstChild === null),
                map((event: ActivationEnd) => event.snapshot.data)
            )
    }
}