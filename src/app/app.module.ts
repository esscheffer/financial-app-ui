import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FinancialEntryModule} from "./financial-entry/financial-entry.module";
import {PersonModule} from "./person/person.module";
import {HttpClientModule} from "@angular/common/http";
import {ConfirmationService, MessageService} from "primeng/api";
import {CoreModule} from "./core/core.module";
import {FinancialEntrySearchComponent} from "./financial-entry/financial-entry-search/financial-entry-search.component";
import {FinancialEntryRegisterComponent} from "./financial-entry/financial-entry-register/financial-entry-register.component";
import {PersonSearchComponent} from "./person/person-search/person-search.component";
import {PersonRegisterComponent} from "./person/person-register/person-register.component";
import {RouterModule} from "@angular/router";

const routes = [
  {path: 'financialEntries', component: FinancialEntrySearchComponent},
  {path: 'financialEntries/new', component: FinancialEntryRegisterComponent},
  {path: 'financialEntries/:id', component: FinancialEntryRegisterComponent},
  {path: 'people', component: PersonSearchComponent},
  {path: 'people/new', component: PersonRegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FinancialEntryModule,
    PersonModule,
    HttpClientModule,
    CoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
