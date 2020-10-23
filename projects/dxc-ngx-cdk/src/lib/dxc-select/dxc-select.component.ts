import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";

@Component({
  selector: "dxc-select",
  templateUrl: "./dxc-select.component.html",
  styleUrls: ["./dxc-select.component.scss"],
  providers: [CssUtils],
})
export class DxcSelectComponent implements OnChanges {
  @HostBinding("class") className;
  @HostBinding("class.select-icons") onlyHasIcons: boolean = false;

  @Input() public multiple: boolean;
  @Input() public value: string | string[];
  @Input() public options: {
    label?: string;
    value: string;
    iconSrc?: string;
  }[];
  @Input() public disabled: boolean = false;
  @Input() public required: boolean = false;
  @Input() public name: string;
  @Input() public iconPosition: string = "before";
  @Input() public label: string;
  @Input() public margin: any;
  @Input() public size: string = "medium";
  @Input() public assistiveText: string;
  @Input() public invalid: boolean = false;
  @Output() public onChange: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild("dxcSelect", { static: true }) dxcSelect;

  renderedValue: string | string[];

  public iconsToShow: string[] = []; //Auxiliar property used to get iconSRC for several values
  public labeltoShow: string[] = []; //The value is not the correct valur to display. Use label instead

  defaultInputs = new BehaviorSubject<any>({
    multiple: false,
    disabled: false,
    required: false,
    iconPosition: "before",
    label: "",
    size: "medium",
  });

  sizes = {
    small: "60px",
    medium: "240px",
    large: "480px",
    fillParent: "100%",
  };
  constructor(private utils: CssUtils) {}

  public ngOnInit(): void {
    this.renderedValue = this.value || "";

    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;

    if (this.renderedValue) {
      this.getIconAndLabelByValue(this.renderedValue);
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.hasOptionsOnlyIcons();

    this.renderedValue = this.value || "";

    this.getIconAndLabelByValue(this.renderedValue);

    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public valueChanged($event: any): void {
    this.onChange.emit($event.value);
    if (this.value === undefined || this.value === null) {
      this.renderedValue = $event.value;
      this.getIconAndLabelByValue(this.renderedValue);
    } else {
      $event.source._selectionModel.clear();
      this.renderedValue = $event.value;
      $event.source.writeValue(this.renderedValue);
    }
  }

  public hasOptionsOnlyIcons() {
    if (this.options) {
      this.onlyHasIcons = this.options.every(
        (option) => option.iconSrc && !option.label
      );
    }
  }

  public getIconAndLabelByValue(value: any) {
    this.iconsToShow = [];
    this.labeltoShow = [];
    const multipleValue = Array.isArray(value) ? value : [value];
    multipleValue.map((value) => {
      const element = this.options.filter((item) => item.value == value);
      if (element !== undefined && element[0]) {
        this.iconsToShow.push(element[0].iconSrc);
        this.labeltoShow.push(element[0].label);
      }
    });
  }

  openSelect($event: any) {
    if ($event.keyCode && ($event.keyCode === 40 || $event.keyCode === 38)) {
      this.dxcSelect.open();
    }
  }

  getInvalidStyles(inputs) {
    if (inputs.invalid) {
      return css`
        /* .assistiveText {
          color: var(--select-invalidColor) !important;
        } */
        .mat-form-field {
          .mat-hint {
            color: var(--select-invalidColor) !important;
          }
          .mat-form-field-ripple,
          .mat-form-field-underline {
            background-color: var(--select-invalidColor) !important;
          }
          .mat-form-field-empty mat-label {
            color: var(--select-color) !important;
          }
          &.mat-focused .mat-form-field-empty mat-label {
            color: var(--select-invalidColor) !important;
          }
          .mat-form-field-label:not(.mat-form-field-empty) mat-label {
            color: var(--select-invalidColor) !important;
          }
        }
      `;
    }
  }

  getDynamicStyle(inputs) {
    return css`
      ${this.utils.getMargins(inputs.margin)}
      ${this.utils.calculateWidth(this.sizes, inputs)}
      ${this.getInvalidStyles(inputs)}
      ::ng-deep {
        .mat-form-field-label:not(.mat-form-field-empty) {
          color: var(--select-color);
        }
        .mat-form-field-label.mat-form-field-empty {
          color: var(--select-selectedOptionBackgroundColor);
        }
        .mat-form-field-appearance-legacy .mat-form-field-underline {
          background-color: var(--select-color);
          height: 1px;
        }
      }
    `;
  }

  public hasAssistiveText() {
    if (this.assistiveText != undefined) {
      return true;
    }
    return false;
  }
}
