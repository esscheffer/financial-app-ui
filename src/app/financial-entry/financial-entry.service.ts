import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {FinancialEntryFilter} from "./financialEntryFilter";
import * as moment from 'moment';
import {AppConstants} from "../appConstants";
import {FinancialEntry} from "../core/models";

@Injectable({
  providedIn: 'root'
})
export class FinancialEntryService {

  financialEntryApiUrl = 'http://localhost:8081/financialEntries';

  constructor(private httpClient: HttpClient) {
  }

  search(filter: FinancialEntryFilter): Promise<any> {
    let params = new HttpParams();

    if (filter.description) {
      params = params.set('description', filter.description)
    }

    if (filter.dueDateMin) {
      params = params.set('dueDateMin', moment(filter.dueDateMin).format(AppConstants.webServiceDateFormat))
    }

    if (filter.dueDateMax) {
      params = params.set('dueDateMax', moment(filter.dueDateMax).format(AppConstants.webServiceDateFormat))
    }

    params = params.set('page', filter.page.toString());
    params = params.set('size', filter.pageSize.toString());

    return this.httpClient.get(`${this.financialEntryApiUrl}?summary`, {params})
      .toPromise();
  }

  delete(id: number): Promise<any> {
    return this.httpClient.delete(`${this.financialEntryApiUrl}/${id}`).toPromise();
  }

  create(financialEntry: FinancialEntry): Promise<FinancialEntry> {
    const headers = new HttpHeaders().append("Content-Type", "application/json");

    return this.httpClient.post<FinancialEntry>(`${this.financialEntryApiUrl}`, financialEntry, {headers}).toPromise();
  }
}
