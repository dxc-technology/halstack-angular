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
    selector: "dxc-input-suffix-icon",
    templateUrl: "./dxc-input-suffix-icon.component.html",
  })
  export class DxcInputSuffixIconComponent implements OnChanges {
    @Input()
    get tabIndexValue(): number {
      return this._tabIndexValue;
    }
    set tabIndexValue(value: number) {
      this._tabIndexValue = coerceNumberProperty(value);
    }
    private _tabIndexValue;
    @Output() public onClickSuffix: EventEmitter<any> = new EventEmitter<any>();
    @HostBinding("class.onClickIconElement") hasOnClick: boolean = false;

    isDisabled: boolean = false;
  
    @HostListener("click") suffixClicked() {
      this.onClickSuffix.emit();
    }

    ngOnInit() {
      this.service.isDisabled.subscribe((value) => {
        if (value) {
          this.isDisabled = value;
        }
      });
      if(this.onClickSuffix.observers.length > 0){
        this.hasOnClick = true;
      }
    }
  
    constructor(private service: InputTextService) {}
  
    public ngOnChanges(): void {}
  }
  