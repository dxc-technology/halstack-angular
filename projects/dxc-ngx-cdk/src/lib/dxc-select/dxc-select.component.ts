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
  @Input() public options: { label?: string; value: string; iconSrc?: string }[];
  @Input() public disableRipple: boolean = false;
  @Input() public disabled: boolean = false;
  @Input() public required: boolean = false;
  @Input() public name: string;
  @Input() public iconPosition: string = "before";
  @Input() public label: string;
  @Input() public margin: any;
  @Input() public size: string = "medium";
  @Input() public assistiveText: string;

  @Output() public onChange: EventEmitter<any> = new EventEmitter<any>();

  renderedValue : string | string[];

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

    this.renderedValue = this.value || '';

    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;

    if(this.renderedValue) {
      this.getIconAndLabelByValue(this.renderedValue);
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

    this.renderedValue = this.value || '';

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
    if (this.value === undefined || this.value === null){
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
        option => option.iconSrc && !option.label
      );
    }
  }

  public getIconAndLabelByValue(value: any) {
    this.iconsToShow = [];
    this.labeltoShow = [];
    const multipleValue = isArray(value) ? value : [value];
    multipleValue.map(value => {
      const element = this.options.filter(item=> item.value == value);
      if(element!== undefined && element[0]) {
        this.iconsToShow.push(element[0].iconSrc);
        this.labeltoShow.push(element[0].label);
      }
    });
  }

  getDynamicStyle(inputs) {
    return css`
      ${this.utils.getMargins(inputs.margin)}
      ${this.utils.calculateWidth(this.sizes, inputs)}
    `;
  }

  hasAssistiveText(){
    if(this.assistiveText != undefined){
      return true;
    }
    return false;
  }
}
