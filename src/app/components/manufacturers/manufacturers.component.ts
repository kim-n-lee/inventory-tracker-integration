import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ManufacturerService } from 'src/app/services/manufacturer.service';

@Component({
  selector: 'app-manufacturers',
  templateUrl: './manufacturers.component.html',
  styleUrls: ['./manufacturers.component.css']
})

export class ManufacturersComponent implements OnInit {

public manufacturers;

constructor(private manufacturerService: ManufacturerService) { }

ngOnInit() {
  this.getManufacturers();
}

getManufacturers(){
  this.manufacturerService.getManufacturers().subscribe(
  data => {this.manufacturers = data},
      err => console.error(err),
      () => console.log('manufacturers loaded')
     );
  }

}

