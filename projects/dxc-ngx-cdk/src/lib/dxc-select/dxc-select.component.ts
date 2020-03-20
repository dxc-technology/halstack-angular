import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { isArray } from "util";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";

@Component({
  selector: "dxc-select",
  templateUrl: "./dxc-select.component.html",
  styleUrls: [
    "./dxc-select.component.scss",
    "./dxc-light-select.scss",
    "./dxc-dark-select.scss"
  ],
  providers: [CssUtils]
})
export class DxcSelectComponent implements OnChanges {

  @HostBinding("class") className;
  @HostBinding("class.dxc-light") isLight: boolean = true;
  @HostBinding("class.dxc-dark") isDark: boolean = false;
  @HostBinding("class.select-icons") onlyHasIcons: boolean = false;

  @Input() public theme: string = "light";
  @Input() public multiple: boolean;
  @Input() public value: string | string[];
  @Input() public options: { label?: string; value: any; iconSrc?: string }[];
  @Input() public disableRipple: boolean = false;
  @Input() public disabled: boolean = false;
  @Input() public required: boolean = false;
  @Input() public name: string;
  @Input() public iconPosition: string = "before";
  @Input() public label: string;
  @Input() public margin: any;
  @Input() public size: string = "medium";
  @Output() public valueChange: EventEmitter<any> = new EventEmitter<any>();
  public iconsToShow: string[] = []; //Auxiliar property used to get iconSRC for several values
  public labeltoShow: string[] = [] //The value is not the correct valur to display. Use label instead

  defaultInputs = new BehaviorSubject<any>({
    theme: "light",
    multiple: false,
    disableRipple: true,
    disabled: false,
    required: false,
    iconPosition: "before",
    label: "",
    size: "medium"
  });

  sizes = {
    small: "60px",
    medium: "240px",
    large: "480px",
    fillParent: "100%"
  };
  constructor(private utils: CssUtils) {}

  public ngOnInit(): void {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;

    if(this.value) {
      this.getIconAndLabelByValue(this.value);
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    this.hasOptionsOnlyIcons();
    this.getIconAndLabelByValue(this.value);

    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public valueChanged($event: any): void {
    this.value = $event.value;
    this.getIconAndLabelByValue(this.value);
    this.valueChange.emit(this.value);
  }

  public hasOptionsOnlyIcons() {
    if (this.options) {
      this.onlyHasIcons = this.options.every(
        option => option.iconSrc && !option.label
      );
    }
  }

  public getIconAndLabelByValue(value: any) {
    this.iconsToShow = [];
    this.labeltoShow = [];
    const multipleValue = isArray(value) ? value : [value];
    multipleValue.map(value => {
      if(this.options[value - 1]) {
        this.iconsToShow.push(this.options[value - 1].iconSrc);
        this.labeltoShow.push(this.options[value - 1].label);
      }
    });
  }

  getDynamicStyle(inputs) {
    return css`
      ${this.utils.getMargins(inputs.margin)}
      ${this.utils.calculateWidth(this.sizes, inputs)}
    `;
  }
}
