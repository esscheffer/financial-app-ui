import {Component, OnInit} from '@angular/core';
import {PersonFilter} from "../PersonFilter";
import {PersonService} from "../person.service";
import {LazyLoadEvent} from "primeng/api";

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {
  people = [];
  personFilter = new PersonFilter();
  totalPeople = 0;

  constructor(private personService: PersonService) {
  }

  ngOnInit(): void {
  }

  search(page = 0) {
    this.personFilter.page = page;
    this.personService.search(this.personFilter)
      .then(response => {
        this.people = response.content;
        this.totalPeople = response.totalElements;
      })
      .catch(error => console.log("error: ", error));
  }

  onTableLazyLoad(event: LazyLoadEvent) {
    this.search(event.first / event.rows);
  }
}
