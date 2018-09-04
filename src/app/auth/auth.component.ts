import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'auth.component.html'
})

// This component is used to handle the authentication result
export class AuthComponent implements OnInit {
    constructor(private _authService: AuthService) { }

    ngOnInit() {
        this._authService.isAuthenticated();
    }
}
