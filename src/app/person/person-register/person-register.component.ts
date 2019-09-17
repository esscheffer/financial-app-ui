import {Component, OnInit} from '@angular/core';
import {Endereco, ErroCep, NgxViacepService} from "@brunoc/ngx-viacep";

@Component({
  selector: 'app-person-register',
  templateUrl: './person-register.component.html',
  styleUrls: ['./person-register.component.css']
})
export class PersonRegisterComponent implements OnInit {

  person: Person = new Person();

  constructor(private viacep: NgxViacepService) {
  }

  ngOnInit() {
  }

  searchZipCode(zipCode: string) {
    let cleanZipCode: string = zipCode.replace(/\D+/g, '');
    if (cleanZipCode && cleanZipCode.length === 8) {
      this.viacep.buscarPorCep(cleanZipCode)
        .then((address: Endereco) => {
          this.person.streetAddress = address.logradouro;
          this.person.neighborhood = address.bairro;
          this.person.city = address.localidade;
          this.person.state = address.uf;
        })
        .catch((error: ErroCep) => {
          console.log(error.message);
        });
    }
  }
}

class Person {
  name: string;
  streetAddress: string;
  addressNumber: string;
  complement: string;
  neighborhood: string;
  zipCode: string;
  city: string;
  state: string;
}
