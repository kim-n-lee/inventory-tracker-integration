import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
 headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
 providedIn: 'root'
})
export class AdditemService {

 constructor(private http:HttpClient) { }

 getItems() {
   return this.http.get('/server/items');
 }

 addItem(item){
   let body = JSON.stringify(item);
   return this.http.post('/server/items/add', body, httpOptions);
 }

}

