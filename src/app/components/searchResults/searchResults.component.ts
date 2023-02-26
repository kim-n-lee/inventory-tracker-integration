import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/item';
import { ItemService } from 'src/app/services/item.service';
import { ModalDismissReasons, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-searchResults',
  templateUrl: './searchResults.component.html',
  styleUrls: ['./searchResults.component.css']
})

export class SearchResultsComponent implements OnInit {

    searchTerm = "";
    public items;
    private deleteId: number;

  constructor(private route: ActivatedRoute, private itemService: ItemService, private modalService: NgbModal, private http:HttpClient) { }

    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        this.searchTerm = params["searchTerm"],
        console.log(this.searchTerm),
        this.itemService.search(this.searchTerm).subscribe( data => {this.items = data}, data => console.log(this.items), () => console.log(this.items));
      });
    }

/*     deleteItem(id: number) {
      this.itemService.deleteItem(id).subscribe(() => {
        this.items = this.items.filter(item => item.id !== id);
      });
    } */

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
