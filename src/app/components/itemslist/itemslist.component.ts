import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/item';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-itemslist',
  templateUrl: './itemslist.component.html',
  styleUrls: ['./itemslist.component.css']
})
export class ItemslistComponent implements OnInit {

  public items;
  closeResult: string;
  deleteId;

  constructor(private itemService: ItemService, private router: Router, private modalService: NgbModal) { }

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

  deleteItem(id: number) {
     this.itemService.deleteItem(id).subscribe(() => {
     this.items = this.items.filter(item => item.id !== id);
     });
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

}




