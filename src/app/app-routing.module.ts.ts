import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonSearchComponent} from "./person/person-search/person-search.component";
import {PersonRegisterComponent} from "./person/person-register/person-register.component";
import {PageNotFoundComponent} from "./core/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', redirectTo: 'financialEntries', pathMatch: 'full'},
  {path: 'people', component: PersonSearchComponent},
  {path: 'people/new', component: PersonRegisterComponent},
  {path: 'pageNotFound', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'pageNotFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
