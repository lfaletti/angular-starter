import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  isLoggedIn: Observable<boolean>;

  constructor(private _authenticationService: AuthService, private _router: Router) {
    this.isLoggedIn = this._authenticationService.getLoggedInSubject();
   }

  ngOnInit() { }


  login () {
    this._authenticationService.login();
  }
  logout() {
    this._authenticationService.logout();
  }
}

