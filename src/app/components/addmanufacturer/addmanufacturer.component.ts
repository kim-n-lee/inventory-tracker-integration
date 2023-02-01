import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AddmanufacturerService } from 'src/app/services/addmanufacturer.service';


@Component({
 selector: 'app-addmanufacturer',
 templateUrl: './addmanufacturer.component.html',
 styleUrls: ['./addmanufacturer.component.css']
})
export class AddmanufacturerComponent implements OnInit {
 addManufacturerForm: FormGroup;
 validMessage: string = "";


 constructor(private addmanufacturerService: AddmanufacturerService) { }


 ngOnInit() {
   this.addManufacturerForm = new FormGroup({
     name: new FormControl('', Validators.required),
     address: new FormControl('', Validators.required),
     phoneNumber: new FormControl('', Validators.required)
   });
 }


 submitAddManufacturer() {
   if (this.addManufacturerForm.valid) {
     this.validMessage = "New manufacturer added.";
     this.addmanufacturerService.createAddManufacturer(this.addManufacturerForm.value).subscribe(
       data => {
         this.addManufacturerForm.reset();
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

