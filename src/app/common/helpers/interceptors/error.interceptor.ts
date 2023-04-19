import { HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from '../../shared/services/alert.service';

@Injectable({
    providedIn: 'root'
})

export class ErrorInterceptorService {

    constructor(
        private _alertService: AlertService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req)
            .pipe(
                catchError((error: HttpErrorResponse) => {


                    if(error.status !== 204) {
                        let message = 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.'

                        if (error.error && error.error.error) {
                            message = error.error.error.join('\n');
                        }

                        this._alertService.error(message)
                    }


                    return throwError(() => error);
                })
            );
    }
}
