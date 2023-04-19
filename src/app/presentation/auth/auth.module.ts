import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from 'src/app/common/shared/primeng/primeng.module';
import { LoginComponent } from './login/login.component';

const COMPONENTS = [
    LoginComponent
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

        AuthRoutingModule,
        PrimeNGModule
    ]
})

export class AuthModule { }
