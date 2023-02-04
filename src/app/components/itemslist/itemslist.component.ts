import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itemslist',
  templateUrl: './itemslist.component.html',
  styleUrls: ['./itemslist.component.css']
})
export class ItemslistComponent implements OnInit {

  public items;

  constructor(private itemService: ItemService, private router: Router) { }

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

  deleteItem(id: number) {
    this.itemService.deleteItem(id).subscribe(() => {
      this.items = this.items.filter(item => item.id !== id);
    });
  }


  updateItem(id:number) {
      this.router.navigate(['/items/update']);
    }

      //Get the product based on the id
      //Populate the form with the product details
       //Change the button value to update item

    // updateItem(item) {
    //   this.itemService.updateItem(item.id, item)
    //     .subscribe(updatedItem => {
    //       // Update the item in the table
    //       const index = this.items.findIndex(i => i.id === item.id);
    //       this.items[index] = updatedItem;
    //     });
    // }


}




