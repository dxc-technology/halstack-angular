import { Component, OnInit, Optional, SkipSelf, Input, ElementRef, HostBinding } from "@angular/core";
import { TinyColor } from "@ctrl/tinycolor";
import { BackgroundProviderService } from "./service/background-provider.service";
import { css } from "emotion";

@Component({
  selector: "background-provider-inner",
  template: "<ng-content></ng-content>",
})
export class BackgroundProviderInnerComponent implements OnInit {
  @HostBinding("class") className;

  @Input() color: string;

  constructor( public element:ElementRef,
    @Optional() @SkipSelf() public bgProviderService: BackgroundProviderService
  ) {}

  ngOnInit() {
    if (this.color) {
      this.setType();
    }
    this.className = `${this.getDynamicStyle()}`;
  }

  private setType() {
    const colorType = this.checkColorType(this.color);
    this.bgProviderService.changeBackgroundColor(colorType ? colorType : null);
  }

  private checkColorType(color: string): string {
    const colorInstance = new TinyColor(color);
    return colorInstance.isDark() ? "dark" : "light";
  }

  getDynamicStyle() {
    return css`
      display: contents;
    `;
  }
}
