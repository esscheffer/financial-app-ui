import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {ErrorHandlerService} from "../../core/error-handler.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private auth: AuthService,
              private errorHandler: ErrorHandlerService,
              private router: Router) { }

  ngOnInit() {
  }

  login(username: string, password: string) {
    this.auth.login(username, password)
      .then(() => this.router.navigate(['/financialEntries']))
      .catch(error => this.errorHandler.handle(error));
  }
}
