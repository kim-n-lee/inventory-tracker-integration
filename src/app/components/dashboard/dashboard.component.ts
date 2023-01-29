import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

//will need to create an item service, then import this
//then, will add item service into constructor and add a getItems method to display on dashboard view

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private logoutservice : AuthenticationService) { }

  ngOnInit() {
  }

  submitLogout() {
    console.log("logout works!")
    this.logoutservice.logout();
  }
}
