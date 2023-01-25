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
    this.baseUrl =  "/server/users/authenticate"};

    authenticate(user: any) {
      return this.httpClient.post(this.baseUrl, user);
    }

    // isUserLoggedIn() {
    //   let user = sessionStorage.getItem('email');
    //   return !(user === null) && true;
    // }
  
    // logOut() {
    //   sessionStorage.removeItem('id');
    //   sessionStorage.removeItem('email');
    //   sessionStorage.removeItem('username');
    //   // items to check that user has been logged out:
    //   console.log(sessionStorage.getItem('id')+": should be null");
    //   return console.log("user has been logged out");
    // }
  }

