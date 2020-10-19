import {
  Component,
  OnInit,
  HostBinding,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  SimpleChanges,
  OnChanges,
  AfterViewChecked,
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { FormControl } from "@angular/forms";
import { CssUtils } from "../utils";
import { coerceNumberProperty } from "@angular/cdk/coercion";

@Component({
  selector: "dxc-textarea",
  templateUrl: "./dxc-textarea.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CssUtils],
})
export class DxcTextareaComponent
  implements OnInit, OnChanges, AfterViewChecked {
  @HostBinding("class") className;
  @HostBinding("class.disabled") isDisabled: boolean = false;
  @HostBinding("class.invalid") isInvalid: boolean = false;

  @Input() public value: string;
  @Input() public label: String;
  @Input() public assistiveText: string;
  @Input() public name: string;
  @Input() public placeholder: string;
  @Input() public disabled: boolean = false;
  @Input() public required: boolean = false;
  @Input() public invalid: boolean = false;
  @Input() public margin: any;
  @Input() public size: string;

  @Input()
  get numRows(): number {
    return this._numRows;
  }
  set numRows(value: number) {
    this._numRows = coerceNumberProperty(value);
  }
  private _numRows;

  @Output() public onChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onBlur: EventEmitter<any> = new EventEmitter<any>();

  renderedValue = "";
  private _valueChangeTrack: boolean;
  options;
  type: string;

  clicked: boolean = false;

  sizes = {
    small: "42px",
    medium: "240px",
    large: "480px",
    fillParent: "100%",
  };

  defaultInputs = new BehaviorSubject<any>({
    value: null,
    label: null,
    assistiveText: null,
    name: null,
    numRows: 4,
    placeholder: null,
    disabled: false,
    required: false,
    invalid: false,
    margin: null,
    size: "medium",
  });

  public formControl = new FormControl();

  constructor(private utils: CssUtils) {
    this.numRows = 4;
  }

  ngOnInit() {
    this.renderedValue = this.value || "";
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  ngAfterViewChecked(): void {
    if (this._valueChangeTrack) {
      this._valueChangeTrack = false;
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.isDisabled = this.disabled;
    this.isInvalid = this.invalid;

    this.renderedValue = this.value || "";
    this.label = this.label || "";

    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});

    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    this._valueChangeTrack = true;
  }

  public onChanged($event: any): void {
    this.clicked = false;
    this.onChange.emit($event.target.value);
    if (this.value === undefined || this.value === null) {
      this.renderedValue = $event.target.value;
    } else {
      $event.target.value = this.renderedValue;
    }
  }

  /**
   * internal click event handler
   *
   * @param $event
   */
  public onClickHandle($event): void {
    this.clicked = true;
  }

  /**
   *Executed when input lost the focus
   */
  public onBlurHandle($event: any): void {
    this.onBlur.emit(this.renderedValue);
  }

  calculateWidth(inputs) {
    if (inputs.size === "fillParent") {
      return this.utils.calculateWidth(this.sizes, inputs);
    }
    return css`
      width: ${this.sizes[inputs.size]};
    `;
  }

  getDynamicStyle(inputs) {
    return css`
      height: auto;
      ${this.calculateWidth(inputs)}
      ${this.utils.getMargins(inputs.margin)}
      display: inline-flex;
      &::-webkit-scrollbar {
        width: 3px;
      }
      &::-webkit-scrollbar-track {
        background-color: var(--textarea-scrollBarTrackColor);
        border-radius: 3px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: var(--textarea-scrollBarThumbColor);
        border-radius: 3px;
      }
      &.disabled {
        cursor: default;
      }
      .mat-form-field {
        line-height: unset;
        width: 100%;
        textarea {
          min-height: 22px;
          text-overflow: ellipsis;
          color: var(--textarea-fontColor);
        }
        &.disabled {
          pointer-events: none;
          .mat-hint {
            opacity: var(--textarea-disabled);
          }
          .mat-form-field-underline {
            opacity: var(--textarea-disabled);
          }
          .mat-form-field-empty mat-label {
            opacity: var(--textarea-disabled);
          }
          &.mat-focused .mat-form-field-empty mat-label {
            opacity: var(--textarea-disabled);
          }
          .mat-form-field-label:not(.mat-form-field-empty) mat-label {
            opacity: var(--textarea-disabled);
          }
          .mat-form-field-wrapper {
            .mat-form-field-flex {
              .mat-form-field-infix input {
                opacity: var(--textarea-disabled);
              }
            }
          }
        }
      }
      .mat-hint {
        color: var(--textarea-fontColor);
      }
      .mat-form-field-underline {
        background-color: var(--textarea-fontColor);
      }
      label.mat-form-field-label {
        color: var(--textarea-fontColor);
      }
      input::placeholder {
        color: var(--textarea-placeholderColor);
      }
      &.invalid {
        .mat-hint {
          color: var(--textarea-invalidColor);
        }
        .mat-form-field-underline {
          background-color: var(--textarea-invalidColor);
          .mat-form-field-ripple {
            background-color: var(--textarea-invalidColor);
          }
        }
        .mat-form-field-empty mat-label {
          color: var(--textarea-fontColor);
        }
        &.mat-focused .mat-form-field-empty mat-label {
          color: var(--textarea-invalidColor);
        }
        .mat-form-field-label:not(.mat-form-field-empty) mat-label {
          color: var(--textarea-invalidColor);
        }
        .mat-form-field {
          &.mat-form-field-should-float {
            mat-label {
              color: var(--textarea-invalidColor);
            }
          }
        }
      }
      .mat-form-field {
        &.mat-form-field-should-float {
          .mat-form-field-infix {
            padding-bottom: 7px;
          }
          mat-label {
            font-size: 15px;
          }
        }
        .mat-form-field-label-wrapper {
          display: flex;
          .mat-form-field-label {
            flex-direction: row-reverse;
            justify-content: flex-end;
            display: flex;
            span {
              color: var(--textarea-invalidColor);
            }
          }
        }
        .mat-form-field-subscript-wrapper {
          margin-top: 6px;
        }
        .mat-form-field-infix {
          padding-top: 6px;
        }
      }
      .mat-form-field-flex {
        align-items: center;
        .mat-form-field-infix {
          border-top: unset;
        }
      }
    `;
  }
}
