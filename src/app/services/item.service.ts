import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../item';

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
    return this.http.get('/server/items/');
  }

  getLowStock() {
    return this.http.get('/server/items/dashboard/toOrder');
  }

  getItemById(id: number): Observable<Item> {
    return this.http.get<Item>(`/server/items/id/${id}`);
  }

  getManufacturers() {
    return this.http.get('/server/manufacturers');
  }

  addItem(item){
    return this.http.post('/server/items/add', item, httpOptions);
  }

  deleteItem(id: number) {
    return this.http.delete(`/server/items/${id}`);
  } 

  updateItem(id: number, item: Item) {
    return this.http.put( `/server/items/`+ item.id, item);
  }

  search(searchTerm: string){
    return this.http.post("/server/search/results?searchTerm=" + `${searchTerm}`, httpOptions);
    }

    formatPhoneNumber(phoneNumber: number) {
      const phoneNumberString = phoneNumber.toString();
      const match = phoneNumberString.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
      }
      return null;
    }

}
