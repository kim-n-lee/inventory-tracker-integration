import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Manufacturer } from '../manufacturer';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class ManufacturerService {

  constructor(private http:HttpClient) { }

  getManufacturerById(id: number): Observable<any> {
    return this.http.get(`/server/manufacturers/id/${id}`);
  } 

  getManufacturers() {
    return this.http.get('/server/manufacturers');
  }

  addManufacturer(manufacturer) {
    let body = JSON.stringify(manufacturer);
    return this.http.post('/server/manufacturers/add', body, httpOptions);
  }

  deleteManufacturer(id: number) {
    return this.http.delete(`/server/manufacturers/${id}`);
  }

  updateManufacturer(id: number, manufacturer: Manufacturer) {
    return this.http.put( `/server/manufacturers/`+ manufacturer.id, manufacturer);
  }
}


