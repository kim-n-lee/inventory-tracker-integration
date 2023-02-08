import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json'})
// }

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.baseUrl =  "/server/users"};

    authenticate(user: any) {
      return this.httpClient.post(this.baseUrl+'/authenticate', user);
    }

    isLoggedIn(){
      let user = sessionStorage.getItem('sessionName');
      return !(user === null);
    }

    logout(){
      while (sessionStorage.getItem("sessionName")){
        sessionStorage.removeItem("sessionName");
      }
      console.log(this.isLoggedIn());
      return this.httpClient.get(this.baseUrl+'/logout')
    }
  }

