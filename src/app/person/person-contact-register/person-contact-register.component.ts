import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../../core/models";
import {NgForm} from "@angular/forms";
import clone from 'lodash/clone';

@Component({
  selector: 'app-person-contact-register',
  templateUrl: './person-contact-register.component.html',
  styleUrls: ['./person-contact-register.component.css']
})
export class PersonContactRegisterComponent implements OnInit {

  @Input() contacts: Contact[] = [];
  contact: Contact = new Contact();
  showContactFormDialog = false;
  contactIndex = 0;

  constructor() {
  }

  ngOnInit() {
  }

  prepareNewContact() {
    this.contact = new Contact();
    this.showContactFormDialog = true;
    this.contactIndex = this.contacts.length
  }

  prepareEditContact(contact: Contact, index: number) {
    this.contact = clone(contact);
    this.showContactFormDialog = true;
    this.contactIndex = index;
  }

  confirmContact(formContact: NgForm) {
    this.contacts[this.contactIndex] = this.contact;
    this.showContactFormDialog = false;
    this.contact = new Contact();
    formContact.resetForm();
  }

  removeContact(index: number) {
    this.contacts.splice(index, 1);
  }

  get isEditing() {
    return this.contactIndex === this.contacts.length;
  }
}
