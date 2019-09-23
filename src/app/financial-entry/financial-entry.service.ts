import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {FinancialEntryFilter} from "./financialEntryFilter";
import * as moment from 'moment';
import {AppConstants} from "../appConstants";

@Injectable({
  providedIn: 'root'
})
export class FinancialEntryService {

  constructor(private httpClient: HttpClient) {
  }

  search(filter: FinancialEntryFilter) {
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

    return this.httpClient.get('http://localhost:8081/financialEntries?summary', {params})
      .toPromise();
  }
}
