import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  OnChanges,
  Output,
} from "@angular/core";

@Component({
  selector: "dxc-input-prefix-icon",
  templateUrl: "./dxc-input-prefix-icon.component.html",
})
export class DxcInputPrefixIconComponent implements OnChanges {
  @Output() public onClickPrefix: EventEmitter<any> = new EventEmitter<any>();
  @HostBinding("class") className = "prefixElement";

  @HostListener("click") prefixClicked() {
    this.onClickPrefix.emit();
  }

  constructor() {}

  public ngOnChanges(): void {}
}
