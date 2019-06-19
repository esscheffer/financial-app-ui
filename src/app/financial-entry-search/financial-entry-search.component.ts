import {Component} from '@angular/core';

@Component({
  selector: 'app-financial-entry-search',
  templateUrl: './financial-entry-search.component.html',
  styleUrls: ['./financial-entry-search.component.css']
})
export class FinancialEntrySearchComponent {
  financialEntries = [
    {
      type: 'EXPENSE',
      description: 'desc1',
      dueDate: '01/01/2000',
      paymentDay: null,
      value: 10.5,
      person: 'Person one'
    }, {
      type: 'INCOME',
      description: 'desc2',
      dueDate: '01/01/2000',
      paymentDay: '02/03/2004',
      value: 10.5,
      person: 'Person two'
    }, {
      type: 'INCOME',
      description: 'desc2',
      dueDate: '01/01/2000',
      paymentDay: '02/03/2004',
      value: 10.5,
      person: 'Person two'
    }, {
      type: 'INCOME',
      description: 'desc2',
      dueDate: '01/01/2000',
      paymentDay: '02/03/2004',
      value: 10.5,
      person: 'Person two'
    }, {
      type: 'INCOME',
      description: 'desc2',
      dueDate: '01/01/2000',
      paymentDay: '02/03/2004',
      value: 10.5,
      person: 'Person two'
    }, {
      type: 'INCOME',
      description: 'desc2',
      dueDate: '01/01/2000',
      paymentDay: '02/03/2004',
      value: 10.5,
      person: 'Person two'
    }, {
      type: 'INCOME',
      description: 'desc2',
      dueDate: '01/01/2000',
      paymentDay: '02/03/2004',
      value: 10.5,
      person: 'Person two'
    }
  ];
}
