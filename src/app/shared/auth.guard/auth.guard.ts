import { AuthService } from './../../auth/services/auth.service';
import { Injectable } from '@angular/core';

import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor (private router: Router, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const authenticated = this.authService.isAuthenticated();

        if (authenticated) {
            return true;
        }
        // this.router.navigate(['/auth'], { queryParams : { returnUrl: state.url }});
        this.authService.login();
        return false;
    }
}
