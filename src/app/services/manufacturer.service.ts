import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  constructor(private http:HttpClient) { }

  getManufacturers() {
    return this.http.get('/server/manufacturers');
  }



}
