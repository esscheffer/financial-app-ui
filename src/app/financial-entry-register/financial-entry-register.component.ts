import {Component, OnInit} from '@angular/core';

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

  categories = [
    {label: "Category 1", value: 1},
    {label: "Category 2", value: 2}
  ];

  people = [
    {label: "Person 1", value: 1},
    {label: "Person 2", value: 2}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
