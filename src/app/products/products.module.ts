import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppInterceptor } from '../shared/helpers/app.interceptors';
import { ProductsComponent } from './products.component';
import { ProductsResolve } from './products.resolve';
import { ProductsRoutingModule } from './products.routing.module';
import { ProductService } from './services/product.service';

@NgModule({
    imports: [CommonModule, ProductsRoutingModule, HttpClientModule, FormsModule],
    exports: [],
    declarations: [ProductsComponent],
    providers: [    ProductService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AppInterceptor,
          multi: true
        },
        ProductsResolve]
})
export class ProductsModule { }
