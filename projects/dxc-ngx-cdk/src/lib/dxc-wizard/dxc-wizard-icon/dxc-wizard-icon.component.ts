import { Component, HostBinding } from "@angular/core";
import { css } from "emotion";

@Component({
  selector: "dxc-wizard-icon",
  templateUrl: "./dxc-wizard-icon.component.html",
})
export class DxcWizardIconComponent {
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
