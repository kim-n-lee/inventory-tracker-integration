import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';
import { ManufacturerService } from 'src/app/services/manufacturer.service';

//In the component where you want to display the data, subscribe to the data in the service in the ngOnInit lifecycle hook.

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  addItemForm: FormGroup;
  validMessage: string = "";
  ManufacturerList: any;

  constructor(private itemService: ItemService, private manufacturerService: ManufacturerService) { }

  public manufacturers: any;

  get() {
    this.manufacturerService.getManufacturers().subscribe(res=>
      {
        this.manufacturers=res;
        console.log(res);
      }
    );
      
  }

  mySelect = [];
  selectedValue: any;
  selectChange() {
    this.selectedValue = this.manufacturerService.getDropDownText(this.mySelect, this.manufacturers)
  }

  ngOnInit() {
    this.get();
    this.addItemForm = new FormGroup({
      name: new FormControl('', Validators.required),
      descriptiom: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      numberInInventory: new FormControl('', Validators.required),
      numberMinimumToKeepOnHand: new FormControl('', Validators.required),
      manufacturer: new FormControl('', Validators.required)
  });
}

submitItem() {
   if (this.addItemForm.valid) {
     this.validMessage = "New item added!";
     this.itemService.addItem(this.addItemForm.value).subscribe(
       data => {
         this.addItemForm.reset();
         return true;
       },
       error => {
         return Observable.throw(error);
       }
     )
   } else {
     this.validMessage = "Please fill out the form before submitting!"
   }
 }

}








  

  

  

