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
      // console.log("logged in with " + user);
      return !(user === null);
    }

    logout(){
      sessionStorage.removeItem("sessionName");
      console.log(this.isLoggedIn());
      return this.httpClient.get(this.baseUrl+'/logout')
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

