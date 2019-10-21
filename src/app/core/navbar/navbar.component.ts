import {Component} from '@angular/core';
import {AuthService} from "../../security/auth.service";
import {Router} from "@angular/router";
import {ErrorHandlerService} from "../error-handler.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showMenu = false;

  constructor(public auth: AuthService,
              private router: Router,
              private errorHandler: ErrorHandlerService) {
  }

  logout() {
    this.auth.logout()
      .then(() => this.router.navigate(['/login']))
      .catch(error => this.errorHandler.handle(error));
  }
}
