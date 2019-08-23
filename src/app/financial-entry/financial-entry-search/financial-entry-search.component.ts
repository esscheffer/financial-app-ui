import {Component} from '@angular/core';

@Component({
  selector: 'app-financial-entry-search',
  templateUrl: './financial-entry-search.component.html',
  styleUrls: ['./financial-entry-search.component.css']
})
export class FinancialEntrySearchComponent {
  financialEntries = getMockFinancialEntries();
}

function getMockFinancialEntries() {
  let financialEntries = [];
  for (let i = 0; i < 30; i++) {
    financialEntries.push({
      type: Math.random() >= 0.5 ? 'EXPENSE' : "INCOME",
      description: `description ${getRandomNumber()}`,
      dueDate: randomDate(),
      paymentDay: randomDate(),
      value: 10.5,
      person: `Person ${getRandomNumber()}`,
    });
  }
  return financialEntries;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function randomDate() {
  let start = new Date();
  start.setDate(start.getDate() - 10);

  let end = new Date();
  end.setDate(end.getDate() + 10);

  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
