import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/item';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateitem',
  templateUrl: './updateitem.component.html',
  styleUrls: ['./updateitem.component.css']
})
export class UpdateitemComponent implements OnInit {

  id: number;
  item: Item = new Item();

  constructor(private itemService: ItemService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.itemService.getItemById(this.id)
      .subscribe(data => {
        console.log(data)
        this.item = data;
      }, error => console.log(error));
  }

  onSubmit() {
    console.log("This is the id: " + this.id);
    this.itemService.updateItem(this.id, {"id": this.id, "name": this.item.name, "category": this.item.category, "description": this.item.description, 
    "numberInInventory": this.item.numberInInventory, "numberMinimumToKeepOnHand": this.item.numberMinimumToKeepOnHand, "manufacturer": this.item.manufacturer,
    "isBelowMinAmount": this.item.isBelowMinAmount})
      .subscribe(data => console.log(data), error => console.log(error));
    this.item = new Item();
    this.router.navigate(['/items/all']);
    }

  list(){
    this.router.navigate(['items/all']);
  }

}







 




  
  





