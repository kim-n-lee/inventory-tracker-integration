import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as _ from 'lodash';
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

  getManufacturerById(id: number): Observable<Manufacturer> {
    return this.http.get<Manufacturer>(`/server/manufacturer/id/${id}`);
  } 

  getManufacturers() {
    return this.http.get('/server/manufacturers');
  }

  getDropDownText(id, manufacturer) {
    const seleObj = _.filter(manufacturer, function (o) {
      return (_.includes(id, o.id));
    });
    return seleObj;
    
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


