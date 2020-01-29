import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnChanges,
  OnInit,
  ViewChild,
  ElementRef,
  SimpleChanges
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";

@Component({
  selector: "dxc-slider",
  templateUrl: "./dxc-slider.component.html",
  styleUrls: [
    "./dxc-light-slider.scss",
    "./dxc-dark-slider.scss"
  ],
  providers: [CssUtils]
})
export class DxcSliderComponent implements OnChanges {
  @HostBinding("class") className;
  @HostBinding("class.dxc-light") isLight: boolean = true;
  @HostBinding("class.dxc-dark") isDark: boolean = false;
  @HostBinding("class.disabled") isDisabled: boolean = false;

  //Default values
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;
  @Input() showLimitValues: boolean = false;
  @Input() showInput: boolean = false;
  @Input() value: number = 0;
  @Input() theme: string = "light";

  @Input() name: string;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() margin: any;
  @Input() size: string;

  @Output() dragEnd: EventEmitter<any> = new EventEmitter<any>();
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() inputBlur: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild("input", { static: true }) input: ElementRef;

  tickInterval: any;

  defaultInputs = new BehaviorSubject<any>({
    min: 0,
    max: 100,
    step: 1,
    showLimitValues: false,
    showInput: false,
    value: 0,
    theme: "light",
    name: null,
    disabled: false,
    required: false,
    margin: null,
    size: null
  });

  sizes = {
    medium: "240px",
    large: "480px",
    fillParent: "100%",
    fitContent: "unset"
  };

  constructor(private utils: CssUtils) {}

  ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.tickInterval = this.step > 1 ? 1 : 0;
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    this.isDisabled = this.disabled;
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  /**
   * Executed while  slider value moves or when user press a key in input
   *  @param $event
   */
  public valueChanged($event: any): void {
    let newValue;
    if ($event.target) {
      newValue = $event.target.value;
    } else {
      newValue = $event.value;
    }

    if (newValue > this.max) {
      newValue = this.max;
    }
    if (newValue < this.min) {
      newValue = this.min;
    }
    this.value = newValue;
    this.input.nativeElement.value = newValue;
    this.valueChange.emit(newValue);
  }

  /**
   *  Eexecuted once the user has ended dragging
   * @param $event
   */
  public mouseUp($event): void {
    this.dragEnd.emit(this.value || this.input.nativeElement.value);
  }

  /**
   *Executed when input lost the focus
   */
  public onBlur($event): void {
    this.inputBlur.emit($event.target.value);
  }

  calculateWidth(margin, size) {
    if (size === "fillParent") {
      return this.utils.calculateWidthWithMargins(this.sizes, size, margin);
    }
    return css`
      width: ${this.sizes[size]};
    `;
  }

  getDynamicStyle(inputs) {
    return css`
      display: flex;
      align-items: center;
      ${this.calculateWidth(inputs.margin, inputs.size)}
      ${this.utils.getMargins(inputs.margin)}
      &.disabled {
        cursor: not-allowed;
        input {
          cursor: not-allowed;
        }
      }
      .disabled-span {
        opacity: 0.54;
      }
      mat-slider {
        flex-grow: 1;

        .mat-slider-ticks-container {
          height: 4px;
          top: -1px;
        }
        .mat-slider-track-wrapper,
        .mat-slider-track-background,
        .mat-slider-wrapper {
          height: 1px;
          background-color: #d9d9d9;
        }
        .mat-slider-track-background {
          opacity: 0.54;
        }

        &:not(.mat-slider-disabled) {
          &.mat-slider-sliding {
            .mat-slider-thumb {
              cursor: grabbing;
              transform: scale(1);
            }
          }
          &.cdk-focused:not(.mat-slider-sliding) {
            .mat-slider-thumb {
              transform: scale(0.7);
            }
            .mat-slider-focus-ring {
              transform: scale(1.4);
            }
          }
          &.mat-slider-has-ticks {
            .mat-slider-ticks {
              opacity: 1 !important;
            }
          }
        }

        &.mat-slider-disabled {
          .mat-slider-thumb {
            transform: scale(0.7) !important;
          }
        }
      }
      mat-form-field {
        width: 42px;
        margin-left: 15px;
        &.mat-form-field-disabled {
          opacity: 0.54;
        }

        .mat-form-field-infix {
          padding: 0px;
          border-top-width: 0px;
        }
      }

      span,
      input {
        font-size: 16px;
      }
    `;
  }
}
