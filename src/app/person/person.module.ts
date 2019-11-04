import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonRegisterComponent} from "./person-register/person-register.component";
import {PersonSearchComponent} from "./person-search/person-search.component";
import {MessageModule} from "primeng/message";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";
import {
  ButtonModule,
  ConfirmDialogModule,
  DialogModule,
  DropdownModule,
  InputMaskModule,
  PanelModule,
  TooltipModule
} from "primeng/primeng";
import {PersonService} from "./person.service";
import {ToastModule} from "primeng/toast";
import {PersonRoutingModule} from "./person-routing.module";
import {PersonContactRegisterComponent} from './person-contact-register/person-contact-register.component';

@NgModule({
  declarations: [
    PersonRegisterComponent,
    PersonSearchComponent,
    PersonContactRegisterComponent,
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
    ToastModule,
    ConfirmDialogModule,
    PersonRoutingModule,
    PanelModule,
    DialogModule,
    DropdownModule
  ],
  exports: [],
  providers: [
    PersonService
  ]
})
export class PersonModule {
}
