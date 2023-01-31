import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

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

  getDropDownText(id, object) {
    const seleObj = _.filter(object, function (o) {
      return (_.includes(id, o.id));
    });
    return seleObj;
  }

  addManufacturer(manufacturer) {
    let body = JSON.stringify(manufacturer);
    return this.http.post('/server/manufacturers/add', body, httpOptions);
  }
}


