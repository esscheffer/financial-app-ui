import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {FinancialEntryFilter} from "./financialEntryFilter";
import * as moment from 'moment';
import {AppConstants} from "../appConstants";
import {FinancialEntry, FinancialEntrySummaryList} from "../core/models";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FinancialEntryService {

  financialEntryApiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.financialEntryApiUrl = `${environment.apiUrl}/financialEntries`;
  }

  find(id: number): Promise<FinancialEntry> {
    return this.httpClient.get<any>(`${this.financialEntryApiUrl}/${id}`).toPromise()
      .then(financialEntry => this.responseToFinancialEntry(financialEntry))
  }

  search(filter: FinancialEntryFilter): Promise<FinancialEntrySummaryList> {
    let params = new HttpParams({
      fromObject: {
        page: filter.page.toString(),
        size: filter.pageSize.toString()
      }
    });

    if (filter.description) {
      params = params.set('description', filter.description)
    }

    if (filter.dueDateMin) {
      params = params.set('dueDateMin', moment(filter.dueDateMin).format(AppConstants.webServiceDateFormat))
    }

    if (filter.dueDateMax) {
      params = params.set('dueDateMax', moment(filter.dueDateMax).format(AppConstants.webServiceDateFormat))
    }

    return this.httpClient.get<FinancialEntrySummaryList>(`${this.financialEntryApiUrl}?summary`, {params})
      .toPromise();
  }

  delete(id: number): Promise<any> {
    return this.httpClient.delete(`${this.financialEntryApiUrl}/${id}`).toPromise();
  }

  create(financialEntry: FinancialEntry): Promise<FinancialEntry> {
    const headers = new HttpHeaders().append("Content-Type", "application/json");

    return this.httpClient.post<FinancialEntry>(`${this.financialEntryApiUrl}`, financialEntry, {headers}).toPromise();
  }

  update(financialEntry: FinancialEntry): Promise<FinancialEntry> {
    const headers = new HttpHeaders().append("Content-Type", "application/json");

    return this.httpClient.put<any>(`${this.financialEntryApiUrl}/${financialEntry.id}`, financialEntry, {headers}).toPromise()
      .then(financialEntry => this.responseToFinancialEntry(financialEntry))
  }

  responseToFinancialEntry(financialEntry: any): FinancialEntry {
    if (financialEntry.dueDate) {
      financialEntry.dueDate = new Date(financialEntry.dueDate);
    }

    if (financialEntry.paymentDate) {
      financialEntry.paymentDate = new Date(financialEntry.paymentDate);
    }

    return financialEntry
  }
}
