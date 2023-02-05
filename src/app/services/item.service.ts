import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../item';
import { ApiResponse } from '../api.response';

type ItemsResponse = {
  items: Item[];
}

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

  getItemById(id: number): Observable<Item> {
    return this.http.get<Item>(`/server/items/id/${id}`);
  }

  getManufacturers() {
    return this.http.get('/server/manufacturers');
  }

  addItem(item){
    // let body = JSON.stringify(item);
    return this.http.post('/server/items/add', item, httpOptions);
  }

  deleteItem(id: number) {
    return this.http.delete(`/server/items/${id}`);
  }

  updateItem(id: number, item: Item) {
    return this.http.put( `/server/items/id/`+ item.id, item);
  }

  search(searchTerm: string){
    return this.http.post("/server/search/results?searchTerm=" + `${searchTerm}`, httpOptions);
    }

}
