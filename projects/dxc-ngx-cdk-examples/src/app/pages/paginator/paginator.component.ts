import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  paginationActions : Array<string> = ['prev', 'next', 'first'];

  page : number = 1;
  totalItems : number = 27;
  itemsPerPage : number =10;

  constructor() { }

  ngOnInit() {
  }

  navigate(page:number, operation:string){
    console.log(page);
    this.page = page;
    console.log('navigate: ' + operation);
  }
}
