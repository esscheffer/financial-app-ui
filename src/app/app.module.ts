import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ButtonModule, InputTextareaModule, InputTextModule, TooltipModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {FinancialEntrySearchComponent} from './financial-entry-search/financial-entry-search.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PersonSearchComponent} from './person-search/person-search.component';
import {FinancialEntryRegisterComponent} from './financial-entry-register/financial-entry-register.component';

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
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
