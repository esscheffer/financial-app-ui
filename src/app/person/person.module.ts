import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonRegisterComponent} from "./person-register/person-register.component";
import {PersonSearchComponent} from "./person-search/person-search.component";
import {MessageModule} from "primeng/message";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";
import {ButtonModule, ConfirmDialogModule, InputMaskModule, TooltipModule} from "primeng/primeng";
import {NgxViacepModule} from "@brunoc/ngx-viacep";
import {PersonService} from "./person.service";
import {ToastModule} from "primeng/toast";

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
    NgxViacepModule,
    ToastModule,
    ConfirmDialogModule
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
