import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {PersonFilter} from "./PersonFilter";
import {Person} from "../core/models";

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

  find(id: number) {
    return this.httpClient.get<any>(`${this.personApiUrl}/${id}`).toPromise()
  }

  findAll(): Promise<any> {
    return this.search({name: null, page: 0, pageSize: 0})
  }

  delete(id: number): Promise<any> {
    return this.httpClient.delete(`${this.personApiUrl}/${id}`).toPromise();
  }

  update(person: Person): Promise<Person> {
    const headers = new HttpHeaders().append("Content-Type", "application/json");

    return this.httpClient.put<any>(`${this.personApiUrl}/${person.id}`, person, {headers}).toPromise()
  }

  setActiveStatus(id: number, status: boolean): Promise<any> {
    const headers = new HttpHeaders().append("Content-Type", "application/json");

    return this.httpClient.put(`${this.personApiUrl}/${id}/active`, status, {headers}).toPromise();
  }

  create(person: Person): Promise<Person> {
    const headers = new HttpHeaders().append("Content-Type", "application/json");

    return this.httpClient.post<Person>(`${this.personApiUrl}`, person, {headers}).toPromise();
  }
}
