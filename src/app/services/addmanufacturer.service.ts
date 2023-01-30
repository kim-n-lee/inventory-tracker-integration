import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
 headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}


@Injectable({
 providedIn: 'root'
})
export class AddmanufacturerService {
 
 constructor(private http:HttpClient) { }

 createAddManufacturer(manufacturer){
   let body = JSON.stringify(manufacturer);
   return this.http.post('/server/manufacturers/add', body, httpOptions);
 }
}

