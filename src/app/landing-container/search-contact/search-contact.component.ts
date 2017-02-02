import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-contact',
  templateUrl: './search-contact.component.html',
  styleUrls: ['./search-contact.component.css']
})
export class SearchContactComponent implements OnInit {
searchBy;
  constructor() { }

  SearchBy(currentValue) {
     this.searchBy=currentValue;   
  }

  ngOnInit() {
  }

}
