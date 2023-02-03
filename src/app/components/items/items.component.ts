import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { ManufacturerService } from 'src/app/services/manufacturer.service';

@Component({
  selector: 'app-item',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

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

}
