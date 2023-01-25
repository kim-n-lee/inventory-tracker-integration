import { Component, OnInit } from '@angular/core';

//will need to create an item service, then import this
//then, will add item service into constructor and add a getItems method to display on dashboard view

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
