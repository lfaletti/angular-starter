import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { catchError } from 'rxjs/operators';
import { Product } from '../models/typings';
import { AlertService } from '../shared/services/alert.service';
import { ProductService } from './services/product.service';

@Injectable()
export class ProductsResolve implements Resolve<Observable<Product>> {

    constructor(private alertService: AlertService, private clientService: ProductService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.clientService.getAll().pipe(
            catchError(err => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status !== 401) {
                        this.alertService.error('An error has occurred. Please, try again later.');
                    }
                }
                    return _throw(err);
                }));
    }
}
