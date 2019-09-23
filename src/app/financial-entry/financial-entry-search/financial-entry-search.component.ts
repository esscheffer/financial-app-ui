import {Component, OnInit} from '@angular/core';
import {FinancialEntryService} from "../financial-entry.service";
import {FinancialEntryFilter} from "../financialEntryFilter";
import {LazyLoadEvent} from "primeng/api";

@Component({
  selector: 'app-financial-entry-search',
  templateUrl: './financial-entry-search.component.html',
  styleUrls: ['./financial-entry-search.component.css']
})
export class FinancialEntrySearchComponent implements OnInit {
  financialEntries = [];
  financialEntryFilter = new FinancialEntryFilter();
  totalFinancialEntries = 0;

  constructor(private financialEntryService: FinancialEntryService) {
  }

  ngOnInit(): void {
  }

  search(page = 0) {
    this.financialEntryFilter.page = page;
    this.financialEntryService.search(this.financialEntryFilter)
      .then((response: any) => {
        this.financialEntries = response.content;
        this.totalFinancialEntries = response.totalElements;
      })
      .catch(error => console.log("error: ", error));
  }

  onTableLazyLoad(event: LazyLoadEvent) {
    this.search(event.first / event.rows);
  }
}
