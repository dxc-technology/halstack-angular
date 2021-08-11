import { Component, OnInit, Optional, SkipSelf, Input, ElementRef } from "@angular/core";
import { TinyColor } from "@ctrl/tinycolor";
import { BackgroundProviderService } from "./service/background-provider.service";

@Component({
  selector: "background-provider-inner",
  template: "<ng-content></ng-content>",
})
export class BackgroundProviderInnerComponent implements OnInit {
  @Input() color: string;

  constructor( public element:ElementRef,
    @Optional() @SkipSelf() public bgProviderService: BackgroundProviderService
  ) {}

  ngOnInit() {
    if (this.color) {
      this.setType();
    }
  }

  private setType() {
    const colorType = this.checkColorType(this.color);
    this.bgProviderService.changeBackgroundColor(colorType ? colorType : null);
  }

  private checkColorType(color: string): string {
    const colorInstance = new TinyColor(color);
    return colorInstance.isDark() ? "dark" : "light";
  }
}
