import {Component} from '@angular/core';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent {
  people = getMockPeople();
}

function getMockPeople() {
  let people = [];
  for (let i = 0; i < 30; i++) {
    people.push({
      name: `name ${getRandomNumber()}`,
      city: `city ${getRandomNumber()}`,
      state: `state ${getRandomNumber()}`,
      active: Math.random() >= 0.5
    });
  }
  return people;

}

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}
