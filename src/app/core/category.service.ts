import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryApiUrl = 'http://localhost:8081/categories';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Promise<any> {
    return this.httpClient.get(this.categoryApiUrl).toPromise()
  }
}
