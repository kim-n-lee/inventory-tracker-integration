import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';
import { ManufacturerService } from 'src/app/services/manufacturer.service';
import { Item } from 'src/app/item';
import { ApiResponse } from 'src/app/api.response';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-updateitem',
  templateUrl: './updateitem.component.html',
  styleUrls: ['./updateitem.component.css']
})
export class UpdateitemComponent implements OnInit {

  id: number;
  item: Item;
  apiResponse:ApiResponse;

  constructor(private itemService: ItemService, private route: ActivatedRoute,private router: Router) { }


  ngOnInit() {
    this.item = new Item();

    this.id = this.route.snapshot.params['id'];
    this.itemService.getItemById(this.id)
      .subscribe(data => {
        console.log(data)
        this.item = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.itemService.updateItem(this.id, this.item)
      .subscribe(data => console.log(data), error => console.log(error));
    this.item = new Item();
    this.router.navigate(['/items/all']);
    }

  
  list(){
    this.router.navigate(['items/all']);
  }



}







 




  
  





