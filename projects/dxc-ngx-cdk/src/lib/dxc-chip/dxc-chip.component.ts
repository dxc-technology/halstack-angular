import {
  Component,
  Input,
  HostBinding,
  OnChanges,
  Output,
  EventEmitter,
  SimpleChanges,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { css } from "emotion";
import { CssUtils } from "../utils";

@Component({
  selector: "dxc-chip",
  templateUrl: "./dxc-chip.component.html",
  styleUrls: ["./dxc-chip.component.scss"],
  providers: [CssUtils],
})
export class DxcChipComponent implements OnChanges {
  @HostBinding("class") className;
  @Input() label: string;
  @Input() suffixIconSrc: string;
  @Input() prefixIconSrc: string;
  @Input() disabled: boolean;
  @Input() margin: any;
  @Input() backgroundColor: string;
  @Input() borderColor: string;

  @Output() suffixIconClick = new EventEmitter<any>();
  @Output() prefixIconClick = new EventEmitter<any>();

  defaultInputs = new BehaviorSubject<any>({
    label: "",
    suffixIconSrc: null,
    prefixIconSrc: null,
    disabled: false,
    magin: "",
  });

  constructor(private utils: CssUtils) {}

  public ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

    ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  handlePrefrixClick() {
    this.prefixIconClick.emit();
  }

  handleSuffixClick() {
    this.suffixIconClick.emit();
  }

  getDynamicStyle(inputs) {
    return css`
      opacity: ${inputs.disabled ? "0.34" : "1"};
      height: ${inputs.borderColor ? "20px" : "22px"};
      ${this.utils.getMargins(inputs.margin)}
      display: flex;
      max-width: calc(100% - 40px);
      flex-wrap: nowrap;
      text-overflow: ellipsis;
      border-radius: 48px;
      background-color: ${inputs.backgroundColor
        ? inputs.backgroundColor
        : inputs.borderColor
        ? "transparent"
        : "var(--darkWhite, #EEEEEE);"};
      padding: 10px 20px;
      width: fit-content;
      border: ${inputs.borderColor
        ? "1px solid " + inputs.borderColor
        : "none"};
      .labelContainer {
        font-size: 16px;
        font-family: "Open Sans", sans-serif;
        line-height: 24px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .prefixIcon {
        margin-right: 10px;
        height: 24px;
        width: 24px;
        &:hover {
          cursor: ${inputs.disabled ? "not-allowed" : "pointer"};
        }
      }
      .suffixIcon {
        margin-left: 10px;
        height: 24px;
        width: 24px;
        &:hover {
          cursor: ${inputs.disabled ? "not-allowed" : "pointer"};
        }
      }
    `;
  }
}
