import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './common/shared/shared.module';
import { AuthModule } from './presentation/auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataModule } from './data/data.module';
import { CoreModule } from './core/core.module';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptorService } from './common/helpers/interceptors/loader.interceptor';
import { ErrorInterceptorService } from './common/helpers/interceptors/error.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,

    SharedModule,
    AuthModule,

    DataModule,
    CoreModule,

  ],
  providers: [
    DialogService,
    MessageService,
    ConfirmationService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
