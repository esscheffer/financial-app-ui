import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonRegisterComponent} from "./person-register/person-register.component";
import {PersonSearchComponent} from "./person-search/person-search.component";
import {PersonTableComponent} from "./person-table/person-table.component";
import {MessageModule} from "primeng/message";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";
import {ButtonModule, InputMaskModule, TooltipModule} from "primeng/primeng";

@NgModule({
  declarations: [
    PersonRegisterComponent,
    PersonSearchComponent,
    PersonTableComponent
  ],
  imports: [
    CommonModule,
    MessageModule,
    FormsModule,
    InputTextModule,
    TableModule,
    TooltipModule,
    ButtonModule,
    InputMaskModule
  ],
  exports: [
    PersonRegisterComponent,
    PersonSearchComponent
  ]
})
export class PersonModule { }
