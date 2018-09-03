import { AuthComponent } from './auth.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth.routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, AuthRoutingModule],
    exports: [],
    declarations: [AuthComponent],
    providers: [],
})
export class AuthModule { }
