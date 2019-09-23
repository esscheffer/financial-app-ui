import {Component, OnInit} from '@angular/core';
import {FinancialEntryService} from "../financial-entry.service";
import {FinancialEntryFilter} from "../financialEntryFilter";

@Component({
  selector: 'app-financial-entry-search',
  templateUrl: './financial-entry-search.component.html',
  styleUrls: ['./financial-entry-search.component.css']
})
export class FinancialEntrySearchComponent implements OnInit {
  financialEntries = [];
  financialEntryFilter = new FinancialEntryFilter();

  constructor(private financialEntryService: FinancialEntryService) {
  }

  ngOnInit(): void {
    this.search()
  }

  search() {
    this.financialEntryService.search(this.financialEntryFilter)
      .then(response => {
        // @ts-ignore
        this.financialEntries = response.content;
      })
      .catch(error => console.log("error: ", error));
  }
}
