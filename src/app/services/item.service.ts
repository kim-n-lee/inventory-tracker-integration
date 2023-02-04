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

  getItems() {
    return this.http.get('/server/items');
  }

  getItemById(id: number): Observable<any> {
    return this.http.get('/server/items' + id);
  }

  getManufacturers() {
    return this.http.get('/server/manufacturers');
  }

  addItem(item){
    let body = JSON.stringify(item);
    return this.http.post('/server/items/add', body, httpOptions);
  }

  deleteItem(id: number) {
    return this.http.delete(`/server/items/${id}`);
  }

  updateItem(id: number, item: Item): Observable<ApiResponse> {
    return this.http.put<ApiResponse>( `/server/items/`+ item.id, item);
  }

  // updateItem(id, item) {
  //   return this.http.put(`/server/items/${id}`, item);
  // }

  // updateItem(item){
  //   let body = JSON.stringify(item);
  //   return this.http.post('/server/items/update', body, httpOptions);
  // }



}
