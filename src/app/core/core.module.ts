import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {ErrorHandlerService} from "./error-handler.service";
import {CategoryService} from "./category.service";
import {RouterModule} from "@angular/router";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthService} from "../security/auth.service";

@NgModule({
  declarations: [NavbarComponent, PageNotFoundComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent],
  providers: [ErrorHandlerService, CategoryService, AuthService]
})
export class CoreModule {
}
