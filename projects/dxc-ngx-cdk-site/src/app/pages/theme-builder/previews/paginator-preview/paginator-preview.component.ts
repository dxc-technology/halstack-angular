import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-paginator-preview",
  templateUrl: "./paginator-preview.component.html",
})
export class PaginatorPreviewComponent implements OnInit {
  paginationActions: Array<string> = ["prev", "next", "first", "last"];
  page: number = 1;
  totalItems: number = 27;
  itemsPerPage: number = 10;
  itemsPerPageOptions = [10,15];

  constructor() {}

  ngOnInit(): void {}

  navigate(page: number, operation: string) {
    this.page = page;
    console.log("navigate: " + operation);
  }
}
