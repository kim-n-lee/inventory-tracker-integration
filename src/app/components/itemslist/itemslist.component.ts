import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-itemslist',
  templateUrl: './itemslist.component.html',
  styleUrls: ['./itemslist.component.css']
})
export class ItemslistComponent implements OnInit {

  public items;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(){
    this.itemService.getItems().subscribe(
    data => {this.items = data},
        err => console.error(err),
        () => console.log('items loaded')
       );
    }

  // deleteItem(id:number) {
  // this.itemService.deleteItem(id).subscribe(
  // data => {console.log(data);
  // this.items=this.itemService.getItems();
  // },
  // error => console.error(error));
  // }

  // updateItem(id:number) {
  //   this.router.navigate(['update', id]);
  // }

}




