import { Component, EventEmitter, HostBinding, OnChanges } from "@angular/core";
import { css } from "@emotion/css";

@Component({
  selector: "dxc-dropdown-icon",
  templateUrl: "./dxc-dropdown-icon.component.html",
})
export class DxcDropdownIconComponent {
  @HostBinding("class") iconClass;

  constructor() {}

  ngOnInit() {
    this.iconClass = `${this.getDynamicStyle()}`;
  }

  getDynamicStyle() {
    return css`
      display: flex;
    `;
  }
}
