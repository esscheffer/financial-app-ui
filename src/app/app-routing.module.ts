import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./core/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', redirectTo: 'financialEntries', pathMatch: 'full'},
  {path: 'pageNotFound', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'pageNotFound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
