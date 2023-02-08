import { Component, OnInit } from '@angular/core';
import { ManufacturerService } from 'src/app/services/manufacturer.service';
import { Manufacturer } from 'src/app/manufacturer';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatemanufacturer',
  templateUrl: './updatemanufacturer.component.html',
  styleUrls: ['./updatemanufacturer.component.css']
})
export class UpdatemanufacturerComponent implements OnInit {

  id: number;
  manufacturer: Manufacturer = new Manufacturer();

  constructor(private manufacturerService: ManufacturerService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.manufacturerService.getManufacturerById(this.id)
      .subscribe(data => {
        console.log(data)
        this.manufacturer = data;
      }, error => console.log(error));
  }

  onSubmit() {
    console.log("This is the id: " + this.id);
    this.manufacturerService.updateManufacturer(this.id, {"id": this.id, "name": this.manufacturer.name, "address": this.manufacturer.address, "phoneNumber": this.manufacturer.phoneNumber, "items": this.manufacturer.items})
      .subscribe(data => console.log(data), error => console.log(error));
    this.manufacturer = new Manufacturer();
    this.router.navigate(['/manufacturers']);
    }

  list(){
    this.router.navigate(['manufacturers']);
  }

}







 




  
  





