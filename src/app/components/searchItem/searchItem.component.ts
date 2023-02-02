import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchItem',
  templateUrl: './searchItem.component.html',
  styleUrls: ['./searchItem.component.css']
})

export class SearchItemComponent {
  
  constructor(private route: ActivatedRoute, private router: Router) { }
  
  // public items;

//   ngOnInit() {
//     this.route.queryParams.subscribe()
//  }

  searchItems({searchTerm}: {searchTerm: string;}){
    console.log(searchTerm)
    this.router.navigate(['/search/results'], {queryParams: {search: searchTerm}})
  }
}
