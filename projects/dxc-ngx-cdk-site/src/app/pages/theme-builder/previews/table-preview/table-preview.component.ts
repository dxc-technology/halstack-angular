import { Component, HostBinding, OnInit } from "@angular/core";
import { Stylable } from "../../../../components/theme-builder/model/stylable";
import { css } from "emotion";
@Component({
  selector: "app-table-preview",
  templateUrl: "./table-preview.component.html",
})
export class TablePreviewComponent implements OnInit, Stylable {
  @HostBinding("class") className;

  myItemsPerPage: number;

  tableDefaultMargin = { top: "small", bottom: "xsmall" };

  data: Array<any> = [
    {
      id: "001",
      name: "Peter",
      city: "Miami",
      actions: true,
    },
    {
      id: "002",
      name: "Louis",
      city: "London",
      actions: false,
    },
    {
      id: "003",
      name: "Lana",
      city: "Amsterdam",
      actions: true,
    },
    {
      id: "004",
      name: "Rick",
      city: "London",
      actions: true,
    },
    {
      id: "005",
      name: "Mark",
      city: "Miami",
      actions: true,
    },
    {
      id: "006",
      name: "Cris",
      city: "Paris",
      actions: false,
    },
    {
      id: "007",
      name: "Kim",
      city: "Tokyo",
      actions: false,
    },
    {
      id: "008",
      name: "Anna",
      city: "York",
      actions: false,
    },
    {
      id: "009",
      name: "James",
      city: "Glasgow",
      actions: true,
    },
  ];

  constructor() {
    this.myItemsPerPage = 2;
  }
  getDynamicStyle = () =>
    css`
      .tablePreviewContainer {
        display: flex;
        flex-direction: row;
        height: 400px;
        overflow-y: auto;
        margin-bottom: 50px;
      }
    `;

  ngOnInit(): void {
    this.className = this.getDynamicStyle();
  }

  itemsPerPageFunction(event) {
    console.log("event:", event);
  }
}
