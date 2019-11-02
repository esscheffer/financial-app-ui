import {Component, OnInit} from '@angular/core';
import {Endereco, ErroCep, ErrorValues, NgxViacepService} from "@brunoc/ngx-viacep";
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

  constructor(private viacep: NgxViacepService,
              private errorHandler: ErrorHandlerService,
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
          this.title.setTitle("Edit Person");
        })
        .catch(error => this.errorHandler.handle(error))
    }
  }

  searchZipCode(zipCode: string) {
    if (zipCode) {
      let cleanZipCode: string = zipCode.replace(/\D+/g, '');
      if (cleanZipCode && cleanZipCode.length === 8) {
        this.viacep.buscarPorCep(cleanZipCode)
          .then((address: Endereco) => {
            this.person.address.streetAddress = address.logradouro;
            this.person.address.neighborhood = address.bairro;
            this.person.address.city = address.localidade;
            this.person.address.state = address.uf;
          })
          .catch((error: ErroCep) => {
            if (error.getCode() === ErrorValues.CEP_NAO_ENCONTRADO) {
              this.errorHandler.handle("Zip Code not found.");
            } else {
              this.errorHandler.handle("Unable to get address from Zip Code.");
            }
          });
      }
    }
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
      .then(() => {
        this.messageService.add({severity: 'success', summary: 'Person successfully created.'});
        this.resetForm(form);
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
