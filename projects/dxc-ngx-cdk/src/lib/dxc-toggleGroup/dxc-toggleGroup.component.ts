import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  HostBinding,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { css } from "emotion";

@Component({
  selector: "dxc-toggleGroup",
  templateUrl: "./dxc-toggleGroup.component.html",
  styleUrls: ["./dxc-toggleGroup.component.scss"],
  providers: [CssUtils],
})
export class DxcToggleGroupComponent implements OnInit {
  @Input() public multiple: boolean = false;
  @Input() public disabled: boolean = false;
  @Input() public margin: any;
  @Input() public value: any;
  @Input() public options: {
    label?: string;
    iconSrc?: string;
    value:string;
  }[];
  @Output() public onChange: EventEmitter<any> = new EventEmitter<any>();

  selectedOptions = [];

  @HostBinding("class") styledDxcToggleGroup;

  defaultInputs = new BehaviorSubject<any>({
    multiple: false,
    disabled: false,
  });
  constructor(private utils: CssUtils) {}

  ngOnInit() {
    if (this.value) {
      this.getSelectedByValue();
    }
    this.styledDxcToggleGroup = `${this.setDxcToggleGroupDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
  }

  ngOnChanges(changes: SimpleChanges) {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.styledDxcToggleGroup = `${this.setDxcToggleGroupDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
    if (this.value) {
      this.getSelectedByValue();
    }
  }

  getSelectedByValue() {
    this.selectedOptions = [];
    this.options.map((option, index)=>{
      if(Array.isArray(this.value)) {
        if(this.value.includes(option.value)) {
          this.selectedOptions.push(index);
        }
      } else {
        if(this.value === option.value) {
          this.selectedOptions.push(index);
        }
      }
    });
  }

  public valueChanged($event: any): void {
    if (!this.disabled) {
      this.onChange.emit(this.options[$event].value);
      if (!this.value) {
        if (this.selectedOptions && this.selectedOptions.includes($event)) {
          const index = this.selectedOptions.indexOf($event);
          this.selectedOptions.splice(index, 1);
        } else {
          if (this.multiple) {
            this.selectedOptions.push($event);
          } else {
            this.selectedOptions = [$event];
          }
        }
      }
      console.log(this);
    }
  }

  disabledStyles() {
    if (this.disabled) {
      return css`
        dxc-toggle {
          &:hover {
            cursor: not-allowed;
          }
          opacity: var(--toggle-disabled);
        }
      `;
    } else {
      return css`
        dxc-toggle {
          &:hover {
            cursor: pointer;
          }
          &:hover {
            background: var(--toggle-hoverColor);
            color: var(--toggle-hoverFontColor);
          }
          &.selected {
            background: var(--toggle-selectedColor);
            color: var(--toggle-selectedFontColor);
            &:hover {
              background: var(--toggle-selectedHoverColor);
              color: var(--toggle-selectedHoverFontColor);
            }
          }
        }
      `;
    }
  }

  setDxcToggleGroupDynamicStyle(input: any) {
    return css`
      display: flex;
      align-items: center;
      height: 43px;
      width: fit-content;
      border-radius: 4px;
      overflow: hidden;

      .toggleContainer {
        height: 100%;

        ${this.disabledStyles()}
        dxc-toggle {
          height: 100%;
          display: flex;
          background: var(--toggle-color);
          color: var(--toggle-fontColor);

          .toggleContent {
            height: 100%;
            display: flex;
            align-items: center;
            .label {
              margin: 12px 30px;
              letter-spacing: 1.25px;
              font: normal 14px Open Sans;
            }
            .icon {
              width: 24px;
              height: 24px;
              margin: 10px 12px;
            }
          }
        }
      }
    `;
  }
}
