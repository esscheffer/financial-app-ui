import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../core/category.service";
import {ErrorHandlerService} from "../../core/error-handler.service";
import {PersonService} from "../../person/person.service";
import {FinancialEntry} from "../../core/models";
import {FinancialEntryService} from "../financial-entry.service";

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
              private financialService: FinancialEntryService) {
  }

  ngOnInit() {
    this.categoryService.findAll()
      .then(response => this.categories = response.map(category => ({label: category.name, value: category.id})))
      .catch(error => this.errorHandler.handle(error));

    this.personService.findAll()
      .then(response => this.people = response.content.map(person => ({label: person.name, value: person.id})))
      .catch(error => this.errorHandler.handle(error));
  }

  save() {
    this.financialService.create(this.financialEntry)
      .then(financialEntry => console.log("success:", financialEntry))
      .catch(error => this.errorHandler.handle(error))
  }
}
