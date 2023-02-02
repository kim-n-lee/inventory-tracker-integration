import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-searchItem',
  templateUrl: './searchItem.component.html',
  styleUrls: ['./searchItem.component.css']
})
export class SearchItemComponent implements OnInit {
  
  constructor(private logoutservice : AuthenticationService, private itemService : ItemService) { }
  
  public items;

  ngOnInit() {
    this.get();
  }

  get(){
  this.itemService.getItems().subscribe(
  data => {this.items = data},
      err => console.error(err),
      () => console.log('items loaded')
     );
  }

  submitLogout() {
    console.log("logout works!")
    this.logoutservice.logout();
  }
}
