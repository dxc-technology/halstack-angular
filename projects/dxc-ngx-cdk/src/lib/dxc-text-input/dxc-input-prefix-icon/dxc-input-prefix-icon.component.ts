import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Input } from '@angular/core';
import { InputTextService } from '../services/inputText.service';
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
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;
  @Output() public onClickPrefix: EventEmitter<any> = new EventEmitter<any>();
  @HostBinding("class.onClickIconElement") hasOnClick: boolean = false;

  @HostListener("click") prefixClicked() {
    this.onClickPrefix.emit();
  }

  isDisabled: boolean = false;

  constructor(private service: InputTextService) {}

  public ngOnChanges(): void {}

  ngOnInit() {
    this.service.isDisabled.subscribe((value) => {
      if (value) {
        this.isDisabled = value;
      }
    });
    if(this.onClickPrefix.observers.length > 0){
      this.hasOnClick = true;
    }
    this.service.setHasPrefixIcon(true);
  }
}
