import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Product } from '../../models/typings';

@Injectable()
export class ProductService {
    private apiUrl = environment.API_PRODUCTS_URL;

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Product[]>(this.apiUrl).
            pipe (
                map ((response: Product[]) => response),
                catchError(err => {
                    return _throw(err);
                })
            );
    }

    getProductById(id: number): Observable<Product> {
        return this.http.get<Product>(this.apiUrl + '/' + id).
            pipe(
                map((response: Product) => response),
                catchError(err => {
                    return _throw(err);
                }));
    }

}
