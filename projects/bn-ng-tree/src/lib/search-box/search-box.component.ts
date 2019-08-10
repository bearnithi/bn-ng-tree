import { Component, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'bn-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() onSearch = new EventEmitter;
  searchText: string;

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.onSearch.emit(this.searchText);
  }

}
