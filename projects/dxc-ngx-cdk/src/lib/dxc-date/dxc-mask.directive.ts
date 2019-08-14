import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  OnChanges
} from "@angular/core";
import * as textMask from "vanilla-text-mask/dist/vanillaTextMask.js";

@Directive({
  selector: `[dxcMask]`
})
export class DXCMaskDirective implements OnInit, OnDestroy, OnChanges {
  @Input() dxcMask: any;

  private maskConfig = {
    mask: [],
    showMask: false,
    guide: true,
    placeholderChar: "_"
  };
  maskedInputController: any;
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.createRegExFromFormat();
    this.maskedInputController = textMask.maskInput({
      inputElement: this.element.nativeElement,
      ...this.maskConfig
    });
  }

  ngOnDestroy() {
    this.maskedInputController.destroy();
  }

  ngOnChanges() {
    if (this.maskedInputController && this.element.nativeElement.value) {
      this.maskedInputController.textMaskInputElement.update(
        this.element.nativeElement.value
      );
    }
  }

  private createRegExFromFormat(): void {
    this.maskConfig.showMask = this.dxcMask.showMask || false;
    for (let i = 0; i < this.dxcMask.format.length; i++) {
      if (this.dxcMask.format[i].toUpperCase() === this.dxcMask.format[i].toLowerCase()) {
        this.maskConfig.mask.push(this.dxcMask.format[i]);
      } else {
        this.maskConfig.mask.push(new RegExp("\\d"));
      }
    }
  }
}
