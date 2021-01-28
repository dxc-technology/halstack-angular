import {
    Component,
  EventEmitter,
  HostBinding,
  HostListener,
    OnChanges,
    Output,
  } from "@angular/core";
  
  @Component({
    selector: "dxc-input-suffix-icon",
    templateUrl: "./dxc-input-suffix-icon.component.html",
  })
  export class DxcInputSuffixIconComponent implements OnChanges {
    @Output() public onClickSuffix: EventEmitter<any> = new EventEmitter<any>();
    @HostBinding("class") className = "suffixElement";
  
    @HostListener("click") suffixClicked() {
      this.onClickSuffix.emit();
    }
  
    constructor() {}
  
    public ngOnChanges(): void {}
  }
  