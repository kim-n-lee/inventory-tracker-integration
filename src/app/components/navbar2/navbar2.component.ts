import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {

  constructor(private logoutservice: AuthenticationService) { }

  ngOnInit() {
  }

  submitLogout() {
    console.log("logout works!")
    this.logoutservice.logout();
  }
}
