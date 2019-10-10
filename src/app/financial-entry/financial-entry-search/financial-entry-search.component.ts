import {Component, OnInit, ViewChild} from '@angular/core';
import {FinancialEntryService} from "../financial-entry.service";
import {FinancialEntryFilter} from "../financialEntryFilter";
import {ConfirmationService, LazyLoadEvent, MessageService} from "primeng/api";
import {Table} from "primeng/table";
import {ErrorHandlerService} from "../../core/error-handler.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-financial-entry-search',
  templateUrl: './financial-entry-search.component.html',
  styleUrls: ['./financial-entry-search.component.css']
})
export class FinancialEntrySearchComponent implements OnInit {
  financialEntries = [];
  financialEntryFilter = new FinancialEntryFilter();
  totalFinancialEntries = 0;

  @ViewChild('financialEntriesTable') table: Table;

  constructor(private financialEntryService: FinancialEntryService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private errorHandler: ErrorHandlerService,
              private title: Title) {
  }

  ngOnInit(): void {
    this.title.setTitle("Financial Entry Search");
  }

  search(page = 0) {
    this.financialEntryFilter.page = page;
    this.financialEntryService.search(this.financialEntryFilter)
      .then(response => {
        this.financialEntries = response.content;
        this.totalFinancialEntries = response.totalElements;
      })
      .catch(error => this.errorHandler.handle(error));
  }

  onTableLazyLoad(event: LazyLoadEvent) {
    this.search(event.first / event.rows);
  }

  delete(financialEntry: any) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want delete this financial entry?',
      accept: () => {
        this.financialEntryService.delete(financialEntry.id)
          .then(() => {
            this.table.reset();
            this.messageService.add({severity: 'success', summary: 'Financial Entry successfully deleted.'});
          })
          .catch(error => this.errorHandler.handle(error));
      }
    });
  }
}
