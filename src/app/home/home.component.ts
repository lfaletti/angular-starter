
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
    templateUrl: 'home.component.html',
})

export class HomeComponent implements OnInit {
    constructor(private _authService: AuthService) { }

    ngOnInit() {    }

    isLoggedIn() {
        return this._authService.isAuthenticated();
    }
}
