import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./core/page-not-found/page-not-found.component";
import {UnauthorizedComponent} from "./core/unauthorized/unauthorized.component";

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'pageNotFound', component: PageNotFoundComponent},
  {path: 'unauthorized', component: UnauthorizedComponent},
  {path: '**', redirectTo: 'pageNotFound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
