import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-searchResults',
  templateUrl: './searchResults.component.html',
  styleUrls: ['./searchResults.component.css']
})

export class SearchResultsComponent implements OnInit {
  
    searchTerm = "";
    public items

  constructor(private route: ActivatedRoute, private itemService: ItemService) { }
  
    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        this.searchTerm = params["searchTerm"],
        console.log(this.searchTerm),
        this.itemService.search(this.searchTerm).subscribe( data => {this.items = data}, () => console.log(this.items));
      });
    }
}