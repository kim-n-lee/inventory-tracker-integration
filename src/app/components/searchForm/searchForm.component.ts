import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ItemService } from 'src/app/services/item.service';
//will need to create an item service, then import this
//then, will add item service into constructor and add a getItems method to display on searchForm view

@Component({
  selector: 'app-searchForm',
  templateUrl: './searchForm.component.html',
  styleUrls: ['./searchForm.component.css']
})
export class SearchFormComponent implements OnInit {
  
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
