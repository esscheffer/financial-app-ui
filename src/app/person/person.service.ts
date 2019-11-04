import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {PersonFilter} from "./PersonFilter";
import {City, Person, PersonList, State} from "../core/models";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  personApiUrl: string;
  stateUrl: string;
  cityUrl: string;

  constructor(private httpClient: HttpClient) {
    this.personApiUrl = `${environment.apiUrl}/people`;
    this.stateUrl = `${environment.apiUrl}/states`;
    this.cityUrl = `${environment.apiUrl}/cities`;
  }

  search(filter: PersonFilter): Promise<PersonList> {
    let params = new HttpParams();

    if (filter.name) {
      params = params.set('name', filter.name)
    }

    params = params.set('page', filter.page.toString());
    params = params.set('size', filter.pageSize.toString());

    return this.httpClient.get<PersonList>(`${this.personApiUrl}`, {params})
      .toPromise();
  }

  find(id: number) {
    return this.httpClient.get<Person>(`${this.personApiUrl}/${id}`).toPromise()
  }

  findAll(): Promise<PersonList> {
    return this.search({name: null, page: 0, pageSize: 0})
  }

  delete(id: number): Promise<any> {
    return this.httpClient.delete(`${this.personApiUrl}/${id}`).toPromise();
  }

  update(person: Person): Promise<Person> {
    const headers = new HttpHeaders().append("Content-Type", "application/json");

    return this.httpClient.put<Person>(`${this.personApiUrl}/${person.id}`, person, {headers}).toPromise()
  }

  setActiveStatus(id: number, status: boolean): Promise<any> {
    const headers = new HttpHeaders().append("Content-Type", "application/json");

    return this.httpClient.put(`${this.personApiUrl}/${id}/active`, status, {headers}).toPromise();
  }

  create(person: Person): Promise<Person> {
    const headers = new HttpHeaders().append("Content-Type", "application/json");

    return this.httpClient.post<Person>(`${this.personApiUrl}`, person, {headers}).toPromise();
  }

  listStates(): Promise<State[]> {
    return this.httpClient.get<State[]>(this.stateUrl).toPromise();
  }

  listCities(stateId): Promise<City[]> {
    return this.httpClient.get<City[]>(this.cityUrl, {params: new HttpParams().set('state', stateId)})
      .toPromise();
  }
}
