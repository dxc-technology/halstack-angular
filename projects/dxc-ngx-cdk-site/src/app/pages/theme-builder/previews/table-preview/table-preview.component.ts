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

  tableDefaultMargin = {top: 'small', bottom: 'xsmall'};

  constructor() {
    this.myItemsPerPage = 2;
  }
  getDynamicStyle = () =>
    css`
      .tablePreviewContainer {
        display: block;
        height: 400px;
        width: 100%;
        margin-bottom: 50px;
      }
    `;

  ngOnInit(): void {
    this.className = this.getDynamicStyle();
  }
}
