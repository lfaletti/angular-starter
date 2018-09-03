import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsResolve } from './products.resolve';

const routes: Routes = [
    {
        path: '',
        children: [{
            path: '', component: ProductsComponent, resolve: { clients: ProductsResolve }
        },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [ProductsResolve]
})


export class ProductsRoutingModule { }
