import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private logoutservice : AuthenticationService, private itemService : ItemService) { }

  public items;
  public username = sessionStorage.getItem('sessionName');

  ngOnInit() {
    this.get();
  }

  get(){
  this.itemService.getLowStock().subscribe(
  data => {this.items = data},
      err => console.error(err),
      () => console.log('items loaded')
     );
  this.itemService.formatPhoneNumber(manufacturerPhoneNumber)
  }

  submitLogout() {
    console.log("logout works!")
    this.logoutservice.logout();
  }

}
