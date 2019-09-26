import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonRegisterComponent} from "./person-register/person-register.component";
import {PersonSearchComponent} from "./person-search/person-search.component";
import {MessageModule} from "primeng/message";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";
import {ButtonModule, InputMaskModule, TooltipModule} from "primeng/primeng";
import {NgxViacepModule} from "@brunoc/ngx-viacep";
import {PersonService} from "./person.service";

@NgModule({
  declarations: [
    PersonRegisterComponent,
    PersonSearchComponent,
  ],
  imports: [
    CommonModule,
    MessageModule,
    FormsModule,
    InputTextModule,
    TableModule,
    TooltipModule,
    ButtonModule,
    InputMaskModule,
    NgxViacepModule
  ],
  exports: [
    PersonRegisterComponent,
    PersonSearchComponent
  ],
  providers: [
    PersonService
  ]
})
export class PersonModule { }
