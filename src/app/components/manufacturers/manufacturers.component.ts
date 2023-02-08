import { Component, OnInit} from '@angular/core';
import { ManufacturerService } from 'src/app/services/manufacturer.service';
import { Manufacturer } from 'src/app/manufacturer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manufacturers',
  templateUrl: './manufacturers.component.html',
  styleUrls: ['./manufacturers.component.css']
})
export class ManufacturersComponent implements OnInit {

  public manufacturers;

  constructor(private manufacturerService: ManufacturerService, private router: Router) { }

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

  deleteManufacturer(id: number) {
    this.manufacturerService.deleteManufacturer(id).subscribe(() => {
      this.manufacturers = this.manufacturers.filter(manufacturer => manufacturer.id !== id);
    });
  }


  updateManufacturer(id:number) {
      this.router.navigate(['/manufacturers/update', id]);
    }

}




