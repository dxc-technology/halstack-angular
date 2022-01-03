import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-paginator-preview",
  templateUrl: "./paginator-preview.component.html",
})
export class PaginatorPreviewComponent implements OnInit {
  page: number = 1;
  totalItems: number = 27;
  itemsPerPage: number = 10;
  itemsPerPageOptions = [10,15];

  constructor() {}

  ngOnInit(): void {}

  itemsPerPageFunction(event){
    this.itemsPerPage = event;
  }

  onGoToPage(event){
    this.page = event;
  }
}
