import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ManufacturerService } from 'src/app/services/manufacturer.service';
import { UserService } from 'src/app/services/user.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-addmanufacturer',
  templateUrl: './addmanufacturer.component.html',
  styleUrls: ['./addmanufacturer.component.css']
})
export class AddmanufacturerComponent implements OnInit {
  addManufacturerForm: FormGroup;
  validMessage: string = "";
  
  constructor(private manufacturerService: ManufacturerService) { }

  ngOnInit() {
    this.addManufacturerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required)
    });
  }

  submitManufacturer() {
    if (this.addManufacturerForm.valid) {
      this.validMessage = "New manufacturer added!";
      this.manufacturerService.addManufacturer(this. addManufacturerForm.value).subscribe(
        data => {
          this. addManufacturerForm.reset();
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
