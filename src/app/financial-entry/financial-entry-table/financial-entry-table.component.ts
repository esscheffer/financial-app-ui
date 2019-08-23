import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-financial-entry-table',
  templateUrl: './financial-entry-table.component.html',
  styleUrls: ['./financial-entry-table.component.css']
})
export class FinancialEntryTableComponent implements OnInit {

  @Input() financialEntries;

  constructor() { }

  ngOnInit() {
  }

}
