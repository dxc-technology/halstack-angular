import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator-default',
  templateUrl: './paginator-default.component.html',
  styleUrls: ['./paginator-default.component.scss']
})
export class PaginatorDefaultComponent implements OnInit {

  paginationActions : Array<string> = ['prev', 'next', 'first', 'last'];

  page : number = 1;
  totalItems : number = 27;
  itemsPerPage : number =10;

  constructor() { }

  ngOnInit() {
  }

  navigate(page:number, operation:string) {
    this.page = page;
    console.log('navigate: ' + operation);
  }

}
