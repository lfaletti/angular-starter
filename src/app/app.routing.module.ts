import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: 'home', loadChildren: './home/home.module#HomeModule'},
    { path: 'products', loadChildren: './products/products.module#ProductsModule'},
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},

    // otherwise redirect to home
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
