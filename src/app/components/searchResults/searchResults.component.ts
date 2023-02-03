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
    results: Item [] = []

  constructor(private route: ActivatedRoute, private itemService: ItemService) { }
  
  
   ngOnInit(): void {
    this.route.queryParams.subscribe( params => {
      this.searchTerm = params["search"]
      this.itemService.search(this.searchTerm).subscribe(response => {
        this.results = response.item
      })
    })
  }

}
