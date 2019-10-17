import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from './login-form/login-form.component';
import {SecurityRoutingModule} from "./security-routing.module";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {JwtHelperService, JwtModule} from "@auth0/angular-jwt";

export function tokenGetter(): string {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:8081'],
        blacklistedRoutes: ['http://localhost:8081/oauth/token']
      }
    })
  ],
  providers: [JwtHelperService]
})
export class SecurityModule {
}
