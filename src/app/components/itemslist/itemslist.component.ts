import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/item';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-itemslist',
  templateUrl: './itemslist.component.html',
  styleUrls: ['./itemslist.component.css']
})
export class ItemslistComponent implements OnInit {

  public items;
  private deleteId: number;

  constructor(private itemService: ItemService, private router: Router, private modalService: NgbModal, private http:HttpClient) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(){
    this.itemService.getItems().subscribe(
    data => {this.items = data},
        err => console.error(err),
        () => console.log('items loaded')
       );
  }

  updateItem(id:number) {
      this.router.navigate(['/items/update', id]);
  }

  openDelete(targetModal, item: Item) {
    this.deleteId = item.id;
    this.modalService.open(targetModal, {
        backdrop: 'static',
        size: 'md'
      });
  }

  onDelete() {
    const deleteURL = 'http://localhost:8080/items/' + this.deleteId;
    this.http.delete(deleteURL)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }
    
}
