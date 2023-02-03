import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../item';
import { ApiResponse } from '../api.response';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }
  // baseUrl: string = 'http://localhost:8080/items';

  getItems() {
    return this.http.get('/server/items');
  }

  getManufacturers() {
    return this.http.get('/server/manufacturers');
  }

  addItem(item){
    let body = JSON.stringify(item);
    return this.http.post('/server/items/add', body, httpOptions);
  }

  // updateItem(item) {
  //   let body = JSON.stringify(item);
  //   return this.http.put('/server/items/update', body, httpOptions);
  // }

  // updateItem(id: number, item: Item): Observable<ApiResponse> {
  //   return this.http.put<ApiResponse>(this.baseUrl + item.id, item);
  // }

  // deleteItem(id: number): Observable<ApiResponse> {
  // return this.http.delete<ApiResponse>(this.baseUrl + id);
  // }

}
