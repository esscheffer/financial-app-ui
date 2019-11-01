import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FinancialEntryModule} from "./financial-entry/financial-entry.module";
import {PersonModule} from "./person/person.module";
import {HttpClientModule} from "@angular/common/http";
import {ConfirmationService, MessageService} from "primeng/api";
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing.module";
import {SecurityModule} from "./security/security.module";
import {ToastModule} from "primeng/toast";
import {DashboardModule} from "./dashboard/dashboard.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FinancialEntryModule,
    PersonModule,
    DashboardModule,
    HttpClientModule,
    CoreModule,
    SecurityModule,
    AppRoutingModule,
    ToastModule
  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
