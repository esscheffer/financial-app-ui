import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ButtonModule, InputTextModule, TooltipModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {FinancialEntrySearchComponent} from './financial-entry-search/financial-entry-search.component';

@NgModule({
  declarations: [
    AppComponent,
    FinancialEntrySearchComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
