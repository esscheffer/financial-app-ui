import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "./models";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryApiUrl = 'http://localhost:8081/categories';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Promise<Category[]> {
    return this.httpClient.get<Category[]>(this.categoryApiUrl).toPromise()
  }
}
