import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FinancialEntryRegisterComponent} from "./financial-entry-register/financial-entry-register.component";
import {FinancialEntrySearchComponent} from "./financial-entry-search/financial-entry-search.component";
import {FinancialEntryTableComponent} from "./financial-entry-table/financial-entry-table.component";
import {
  CalendarModule,
  ConfirmDialogModule,
  DropdownModule,
  InputTextareaModule,
  InputTextModule,
  MessageModule,
  SelectButtonModule,
  TooltipModule
} from "primeng/primeng";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {CurrencyMaskModule} from "ng2-currency-mask";
import {FinancialEntryService} from "./financial-entry.service";
import {ToastModule} from "primeng/toast";
import {FinancialEntryRoutingModule} from "./financial-entry-routing.module";

@NgModule({
  declarations: [
    FinancialEntryRegisterComponent,
    FinancialEntrySearchComponent,
    FinancialEntryTableComponent
  ],
  imports: [
    CommonModule,
    SelectButtonModule,
    CalendarModule,
    MessageModule,
    FormsModule,
    DropdownModule,
    TableModule,
    InputTextareaModule,
    InputTextModule,
    CurrencyMaskModule,
    TooltipModule,
    ToastModule,
    ConfirmDialogModule,
    FinancialEntryRoutingModule
  ],
  exports: [],
  providers: [
    FinancialEntryService
  ]
})
export class FinancialEntryModule {
}
