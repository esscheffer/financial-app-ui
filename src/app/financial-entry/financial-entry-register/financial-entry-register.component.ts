import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../core/category.service";
import {ErrorHandlerService} from "../../core/error-handler.service";
import {PersonService} from "../../person/person.service";

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

  constructor(private categoryService: CategoryService,
              private errorHandler: ErrorHandlerService,
              private personService: PersonService) {
  }

  ngOnInit() {
    this.categoryService.findAll()
      .then(response => this.categories = response.map(category => ({label: category.name, value: category.id})))
      .catch(error => this.errorHandler.handle(error));

    this.personService.findAll()
      .then(response => this.people = response.content.map(person => ({label: person.name, value: person.ud})))
      .catch(error => this.errorHandler.handle(error));
  }

}
