import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  financialEntryApiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.financialEntryApiUrl = `${environment.apiUrl}/financialEntries`;
  }

  financialEntriesByCategory(): Promise<any> {
    return this.httpClient.get(`${this.financialEntryApiUrl}/statistics/byCategory`).toPromise();
  }

  financialEntriesByDay(): Promise<any> {
    return this.httpClient.get<any>(`${this.financialEntryApiUrl}/statistics/byDay`)
      .toPromise().then(data => {
        data.forEach(singleData => {
          singleData.date = moment(singleData.date, 'YYYY-MM-DD').toDate();
        });
        return data;
      });
  }
}
