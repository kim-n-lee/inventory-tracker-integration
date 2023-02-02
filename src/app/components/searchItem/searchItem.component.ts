import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchItem',
  templateUrl: './searchItem.component.html',
  styleUrls: ['./searchItem.component.css']
})

export class SearchItemComponent implements OnInit {
  
  constructor() { }
  
  public items;

  ngOnInit() {
  }

  searchItems({searchTerm}: {searchTerm: string}){
    console.log(searchTerm);
  }
}
