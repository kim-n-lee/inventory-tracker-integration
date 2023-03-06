import { Component, OnInit} from '@angular/core';
import { ManufacturerService } from 'src/app/services/manufacturer.service';
import { Manufacturer } from 'src/app/manufacturer';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manufacturers',
  templateUrl: './manufacturers.component.html',
  styleUrls: ['./manufacturers.component.css']
})
export class ManufacturersComponent implements OnInit {

  public manufacturers;
  private deleteId: number;

  constructor(private manufacturerService: ManufacturerService, private itemService: ItemService, private router: Router, private modalService: NgbModal, private http:HttpClient) { }

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

  updateManufacturer(id:number) {
      this.router.navigate(['/manufacturers/update', id]);
    }

  openDelete(targetModal, manufacturer: Manufacturer) {
      this.deleteId = manufacturer.id;
      this.modalService.open(targetModal, {
          backdrop: 'static',
          size: 'md'
        });
    }

  onDelete() {
      const deleteURL = 'http://localhost:8080/manufacturers/' + this.deleteId;
      this.http.delete(deleteURL)
        .subscribe((results) => {
          this.ngOnInit();
          this.modalService.dismissAll();
        });
    }

    addManu(){
      this.router.navigate(['manufacturers/add']);
    }
}




