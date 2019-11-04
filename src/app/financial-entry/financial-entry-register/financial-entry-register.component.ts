import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../core/category.service";
import {ErrorHandlerService} from "../../core/error-handler.service";
import {PersonService} from "../../person/person.service";
import {FinancialEntry} from "../../core/models";
import {FinancialEntryService} from "../financial-entry.service";
import {NgForm} from "@angular/forms";
import {MessageService} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

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
              private financialEntryService: FinancialEntryService,
              private messageService: MessageService,
              private route: ActivatedRoute,
              private router: Router,
              private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle("New Financial Entry");

    let id = this.route.snapshot.params['id'];
    if (id) {
      this.financialEntryService.find(id)
        .then(financialEntry => {
          this.financialEntry = financialEntry;
          this.title.setTitle("Edit Financial Entry");
        })
        .catch(error => this.errorHandler.handle(error))
    }

    this.loadCategories();
    this.loadPeople();
  }

  loadCategories() {
    this.categoryService.findAll()
      .then(response => this.categories = response.map(category => ({label: category.name, value: category.id})))
      .catch(error => this.errorHandler.handle(error));
  }

  loadPeople() {
    this.personService.findAll()
      .then(response => this.people = response.content.map(person => ({label: person.name, value: person.id})))
      .catch(error => this.errorHandler.handle(error));
  }

  save(form: NgForm) {
    if (this.isEditing) {
      this.updateFinancialEntry();
    } else {
      this.createFinancialEntry(form);
    }
  }

  updateFinancialEntry() {
    this.financialEntryService.update(this.financialEntry)
      .then(financialEntry => {
        this.financialEntry = financialEntry;
        this.messageService.add({severity: 'success', summary: 'Financial Entry updated successfully.'});
      })
      .catch(error => this.errorHandler.handle(error))
  }

  createFinancialEntry(form: NgForm) {
    this.financialEntryService.create(this.financialEntry)
      .then(addedFinancialEntry => {
        this.messageService.add({severity: 'success', summary: 'Financial Entry successfully created.'});
        this.router.navigate(['/financialEntries', addedFinancialEntry.id]);
      })
      .catch(error => this.errorHandler.handle(error))
  }

  newFinancialEntry(form: NgForm) {
    this.resetForm(form);

    this.router.navigate(['/financialEntries/new']);
  }

  resetForm(form: NgForm) {
    this.financialEntry = new FinancialEntry();
    form.reset({type: this.financialEntry.type});
  }

  get isEditing() {
    return Boolean(this.financialEntry.id)
  }
}
