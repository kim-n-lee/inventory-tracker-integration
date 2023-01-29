import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AdditemService } from 'src/app/services/additem.service';


@Component({
 selector: 'app-additem',
 templateUrl: './additem.component.html',
 styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
 manufacturers: string[] = ['Nestle', 'Unilever',];
 addItemForm: FormGroup;
 validMessage: string = "";


 constructor(private additemService: AdditemService) { }


 ngOnInit() {
   this.addItemForm = new FormGroup({
     name: new FormControl('', Validators.required),
     description: new FormControl('', Validators.required),
     numberInInventory: new FormControl('', Validators.required),
     numberMinimumToKeepOnHand: new FormControl('', Validators.required),
     manufacturer: new FormControl('', Validators.required)
   });
 }


 submitAddItem() {
   if (this.addItemForm.valid) {
     this.validMessage = "New item added.";
     this.additemService.addItem(this.addItemForm.value).subscribe(
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

