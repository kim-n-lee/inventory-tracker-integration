import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchForm',
  templateUrl: './searchForm.component.html',
  styleUrls: ['./searchForm.component.css']
})

export class SearchFormComponent {

constructor(private router: Router) { }


 searchFunction({searchTerm}: {searchTerm: string;}) {
  this.router.navigate(['/search/results'], {queryParams: { searchTerm: searchTerm}})
 }

}