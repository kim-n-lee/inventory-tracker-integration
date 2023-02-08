import { Component, OnInit } from '@angular/core';
import { ManufacturerService } from 'src/app/services/manufacturer.service';
import { Manufacturer } from 'src/app/manufacturer';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatemanufacturer',
  templateUrl: './updatemanufacturer.component.html',
  styleUrls: ['./updatemanufacturer.component.css']
})
export class UpdatemanufacturerComponent implements OnInit {
  updateManufacturerForm: FormGroup;
  id: number;
  manufacturer: Manufacturer = new Manufacturer();
  validMessage: string = "";

  constructor(private manufacturerService: ManufacturerService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.manufacturerService.getManufacturerById(this.id)
      .subscribe(data => {
        console.log(data)
        this.manufacturer = data;
      }, error => console.log(error));
    this.updateManufacturerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$")])
    });
  }

  onSubmit() {
    console.log("This is the id: " + this.id);
    if (this.updateManufacturerForm.valid) {
      this.validMessage = "New user has been registered. Thank you!";
      this.manufacturerService.updateManufacturer(this.id, {"id": this.id, "name": this.manufacturer.name, "address": this.manufacturer.address, "phoneNumber": this.manufacturer.phoneNumber, "items": this.manufacturer.items})
      .subscribe(data => console.log(data), error => console.log(error));
      this.manufacturer = new Manufacturer();
      this.router.navigate(['/manufacturers']);
    } else {
      this.validMessage = "Please fill out the form before submitting!"
    }
  }

  list(){
    this.router.navigate(['manufacturers']);
  }

}







 




  
  





