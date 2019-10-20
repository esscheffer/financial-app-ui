import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FinancialEntrySearchComponent} from "./financial-entry-search/financial-entry-search.component";
import {FinancialEntryRegisterComponent} from "./financial-entry-register/financial-entry-register.component";
import {AuthGuard} from "../security/auth.guard";

const routes: Routes = [
  {
    path: 'financialEntries',
    component: FinancialEntrySearchComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_SEARCH_FINANCIAL_ENTRY']}
  },
  {
    path: 'financialEntries/new',
    component: FinancialEntryRegisterComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_REGISTER_FINANCIAL_ENTRY']}
  },
  {
    path: 'financialEntries/:id',
    component: FinancialEntryRegisterComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_REGISTER_FINANCIAL_ENTRY']}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialEntryRoutingModule {
}
