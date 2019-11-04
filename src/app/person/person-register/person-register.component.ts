import {Component, OnInit} from '@angular/core';
import {Person} from "../../core/models";
import {NgForm} from "@angular/forms";
import {MessageService} from "primeng/api";
import {ErrorHandlerService} from "../../core/error-handler.service";
import {PersonService} from "../person.service";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-person-register',
  templateUrl: './person-register.component.html',
  styleUrls: ['./person-register.component.css']
})
export class PersonRegisterComponent implements OnInit {

  person = new Person();
  states = [];
  cities = [];
  selectedState: number;

  constructor(private errorHandler: ErrorHandlerService,
              private personService: PersonService,
              private messageService: MessageService,
              private title: Title,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.title.setTitle("New Person");

    let id = this.route.snapshot.params['id'];
    if (id) {
      this.personService.find(id)
        .then(person => {
          this.person = person;
          this.selectedState = this.person.address.city ? this.person.address.city.state.id : null;
          if (this.selectedState) {
            this.loadCities();
          }

          this.title.setTitle("Edit Person");
        })
        .catch(error => this.errorHandler.handle(error))
    }

    this.loadStates();
  }

  loadStates() {
    this.personService.listStates()
      .then(states => this.states = states.map(state => ({label: state.stateName, value: state.id})))
      .catch(error => this.errorHandler.handle(error));
  }

  loadCities() {
    this.personService.listCities(this.selectedState)
      .then(cities => this.cities = cities.map(city => ({label: city.cityName, value: city.id})))
      .catch(error => this.errorHandler.handle(error));
  }

  save(form: NgForm) {
    if (this.person.id) {
      this.updatePerson()
    } else {
      this.createPerson(form);
    }
  }

  newPerson(form: NgForm) {
    this.resetForm(form);
    this.router.navigate(['/people/new']);
  }

  private createPerson(form: NgForm) {
    this.person.address.zipCode = this.person.address.zipCode.replace(/\D+/g, '');
    this.personService.create(this.person)
      .then(addedPerson => {
        this.messageService.add({severity: 'success', summary: 'Person successfully created.'});
        this.router.navigate(['/people', addedPerson.id])
      });
  }

  private updatePerson() {
    this.personService.update(this.person)
      .then(person => {
        this.person = person;
        this.messageService.add({severity: 'success', summary: 'Person updated successfully.'});
      })
      .catch(error => this.errorHandler.handle(error))
  }

  private resetForm(form: NgForm) {
    this.person = new Person();
    form.reset();
  }

  get isEditing() {
    return Boolean(this.person.id)
  }
}
