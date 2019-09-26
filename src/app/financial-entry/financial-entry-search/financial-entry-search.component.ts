import {Component, OnInit, ViewChild} from '@angular/core';
import {FinancialEntryService} from "../financial-entry.service";
import {FinancialEntryFilter} from "../financialEntryFilter";
import {LazyLoadEvent, MessageService} from "primeng/api";
import {Table} from "primeng/table";

@Component({
  selector: 'app-financial-entry-search',
  templateUrl: './financial-entry-search.component.html',
  styleUrls: ['./financial-entry-search.component.css'],
  providers: [MessageService]
})
export class FinancialEntrySearchComponent implements OnInit {
  financialEntries = [];
  financialEntryFilter = new FinancialEntryFilter();
  totalFinancialEntries = 0;

  @ViewChild('financialEntriesTable') table: Table;

  constructor(private financialEntryService: FinancialEntryService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  search(page = 0) {
    this.financialEntryFilter.page = page;
    this.financialEntryService.search(this.financialEntryFilter)
      .then(response => {
        this.financialEntries = response.content;
        this.totalFinancialEntries = response.totalElements;
      })
      .catch(error => console.log("error: ", error));
  }

  onTableLazyLoad(event: LazyLoadEvent) {
    this.search(event.first / event.rows);
  }

  delete(financialEntry: any) {
    this.financialEntryService.delete(financialEntry.id)
      .then(() => {
        this.table.reset();
        this.messageService.add({severity: 'success', summary: 'Financial Entry successfully deleted.'});
      });
  }
}
