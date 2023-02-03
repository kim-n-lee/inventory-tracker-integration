import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';
import { ManufacturerService } from 'src/app/services/manufacturer.service';

@Component({
  selector: 'app-updateitem',
  templateUrl: './updateitem.component.html',
  styleUrls: ['./updateitem.component.css']
})
export class UpdateitemComponent implements OnInit {
  updateItemForm: FormGroup;
  validMessage: string = "";

  constructor(private itemService: ItemService, private manufacturerService: ManufacturerService) { }

  public manufacturers: any;

  get() {
    this.manufacturerService.getManufacturers().subscribe(res=>
      {
        this.manufacturers=res;
      }
    );
      
  }

  ngOnInit() {
    this.get();
    this.updateItemForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      numberInInventory: new FormControl('', Validators.required),
      numberMinimumToKeepOnHand: new FormControl('', Validators.required),
      //manufacturer: new FormControl('', Validators.required),
  });
  }

  submitUpdateItem() {
    if (this.updateItemForm.valid) {
      this.validMessage = "Item updated!";
      this.itemService.updateItem(this.updateItemForm.value).subscribe(
        data => {
          this.updateItemForm.reset();
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




  
  





