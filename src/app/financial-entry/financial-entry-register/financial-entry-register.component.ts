import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../core/category.service";
import {ErrorHandlerService} from "../../core/error-handler.service";
import {PersonService} from "../../person/person.service";
import {FinancialEntry} from "../../core/models";
import {FinancialEntryService} from "../financial-entry.service";
import {NgForm} from "@angular/forms";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-financial-entry-register',
  templateUrl: './financial-entry-register.component.html',
  styleUrls: ['./financial-entry-register.component.css']
})
export class FinancialEntryRegisterComponent implements OnInit {

  types = [
    {label: "Income", value: "INCOME"},
    {label: "Expense", value: "EXPENSE"}
  ];

  categories = [];
  people = [];

  financialEntry = new FinancialEntry();

  constructor(private categoryService: CategoryService,
              private errorHandler: ErrorHandlerService,
              private personService: PersonService,
              private financialService: FinancialEntryService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.categoryService.findAll()
      .then(response => this.categories = response.map(category => ({label: category.name, value: category.id})))
      .catch(error => this.errorHandler.handle(error));

    this.personService.findAll()
      .then(response => this.people = response.content.map(person => ({label: person.name, value: person.id})))
      .catch(error => this.errorHandler.handle(error));
  }

  save(form: NgForm) {
    this.financialService.create(this.financialEntry)
      .then(() => {
        this.messageService.add({severity: 'success', summary: 'Financial Entry successfully created.'});
        this.financialEntry = new FinancialEntry();
        form.reset({type: this.financialEntry.type});
      })
      .catch(error => this.errorHandler.handle(error))
  }
}
