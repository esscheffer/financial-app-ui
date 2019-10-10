import {Component, OnInit, ViewChild} from '@angular/core';
import {PersonFilter} from "../PersonFilter";
import {PersonService} from "../person.service";
import {ConfirmationService, LazyLoadEvent, MessageService} from "primeng/api";
import {Table} from "primeng/table";
import {ErrorHandlerService} from "../../core/error-handler.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {
  people = [];
  personFilter = new PersonFilter();
  totalPeople = 0;

  @ViewChild('personTable') table: Table;

  constructor(private personService: PersonService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private errorHandler: ErrorHandlerService,
              private title: Title) {
  }

  ngOnInit(): void {
    this.title.setTitle("Person Search");
  }

  search(page = 0) {
    this.personFilter.page = page;
    this.personService.search(this.personFilter)
      .then(response => {
        this.people = response.content;
        this.totalPeople = response.totalElements;
      })
      .catch(error => this.errorHandler.handle(error));
  }

  onTableLazyLoad(event: LazyLoadEvent) {
    this.search(event.first / event.rows);
  }

  delete(person: any) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want delete this person?',
      accept: () => {
        this.personService.delete(person.id)
          .then(() => {
            this.table.reset();
            this.messageService.add({severity: 'success', summary: 'Person successfully deleted.'});
          })
          .catch(error => this.errorHandler.handle(error));
      }
    });
  }

  changeActiveStatus(person: any) {
    this.personService.setActiveStatus(person.id, !person.active)
      .then(() => {
        this.table.reset();
        this.messageService.add({severity: 'success', summary: 'Person status changed successfully.'});
      })
      .catch(error => this.errorHandler.handle(error))
  }
}
