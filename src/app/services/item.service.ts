import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../item';

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

}
