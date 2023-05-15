import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { css } from "@emotion/css";

@Component({
  selector: 'color-preview',
  templateUrl: './color-preview.component.html',
  styleUrls: ['./color-preview.component.scss']
})
export class ColorPreviewComponent implements OnInit {

  @HostBinding("class") className;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
    this.className = `${this.getDynamicStyle()}`;
  }

  getDynamicStyle(){
    return css `
    .color-preview{
        padding: 10px;
        width: 15px;
        border-radius: 10px;
        border: 1px solid #00000070;
        background-color:  ${this.color};
        margin-right: 10px;
      }
    `;
  }

}
