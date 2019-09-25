import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {PersonFilter} from "./PersonFilter";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient) {
  }

  search(filter: PersonFilter): Promise<any> {
    let params = new HttpParams();

    if (filter.name) {
      params = params.set('name', filter.name)
    }

    params = params.set('page', filter.page.toString());
    params = params.set('size', filter.pageSize.toString());

    return this.httpClient.get('http://localhost:8081/people', {params})
      .toPromise();
  }
}
