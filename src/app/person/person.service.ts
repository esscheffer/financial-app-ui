import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {PersonFilter} from "./PersonFilter";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  personApiUrl = 'http://localhost:8081/people';

  constructor(private httpClient: HttpClient) {
  }

  search(filter: PersonFilter): Promise<any> {
    let params = new HttpParams();

    if (filter.name) {
      params = params.set('name', filter.name)
    }

    params = params.set('page', filter.page.toString());
    params = params.set('size', filter.pageSize.toString());

    return this.httpClient.get(`${this.personApiUrl}`, {params})
      .toPromise();
  }

  findAll(): Promise<any> {
    return this.search({name: null, page: 0, pageSize: 0})
  }

  delete(id: number): Promise<any> {
    return this.httpClient.delete(`${this.personApiUrl}/${id}`).toPromise();
  }

  setActiveStatus(id: number, status: boolean): Promise<any> {
    const headers = new HttpHeaders().append("Content-Type", "application/json");

    return this.httpClient.put(`${this.personApiUrl}/${id}/active`, status, {headers}).toPromise();
  }
}
