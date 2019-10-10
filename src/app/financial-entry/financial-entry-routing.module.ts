import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FinancialEntrySearchComponent} from "./financial-entry-search/financial-entry-search.component";
import {FinancialEntryRegisterComponent} from "./financial-entry-register/financial-entry-register.component";


const routes: Routes = [
  {path: '', redirectTo: 'financialEntries', pathMatch: 'full'},
  {path: 'financialEntries', component: FinancialEntrySearchComponent},
  {path: 'financialEntries/new', component: FinancialEntryRegisterComponent},
  {path: 'financialEntries/:id', component: FinancialEntryRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FinancialEntryRoutingModule {
}
