import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';
import { ManufacturerService } from 'src/app/services/manufacturer.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  categories:string[] = [
    'Baking Supplies', 'Cereals', 'Dairy', 'Drinks', 'Fruits/Vegetables', 'Oils', 'Proteins', 'Sweets', 'Tools/Appliances'];

  addItemForm: FormGroup;
  validMessage: string = "";

  constructor(private itemService: ItemService, private manufacturerService: ManufacturerService) { }

  public manufacturers: any;

  get() {
    this.manufacturerService.getManufacturers().subscribe(res=>
      {this.manufacturers=res;}
    ); 
  }

  ngOnInit() {
    this.get();
    this.addItemForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      numberInInventory: new FormControl('', Validators.required),
      numberMinimumToKeepOnHand: new FormControl('', Validators.required),
      manufacturer: new FormControl('', Validators.required),
  });
  
}

submitItem() {
   if (this.addItemForm.valid) {
     this.validMessage = "New item added!";
     console.log(this.addItemForm.value);
     this.itemService.addItem(this.addItemForm.value).subscribe(
       data => {
         this.addItemForm.reset();
         return true;
       },
       error => {
         return throwError(error);
       }
     )
   } else {
     this.validMessage = "Please fill out the form before submitting!"
   }
 }

}








  

  

  

