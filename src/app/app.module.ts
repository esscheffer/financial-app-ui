import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {
  ButtonModule,
  CalendarModule,
  DropdownModule,
  InputTextareaModule,
  InputTextModule,
  SelectButtonModule,
  TooltipModule
} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {FinancialEntrySearchComponent} from './financial-entry-search/financial-entry-search.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PersonSearchComponent} from './person-search/person-search.component';
import {FinancialEntryRegisterComponent} from './financial-entry-register/financial-entry-register.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CurrencyMaskModule} from "ng2-currency-mask";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FinancialEntrySearchComponent,
    NavbarComponent,
    PersonSearchComponent,
    FinancialEntryRegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
