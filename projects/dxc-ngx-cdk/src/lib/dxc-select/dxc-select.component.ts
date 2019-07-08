import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnChanges
} from "@angular/core";
import { isArray } from "util";

@Component({
  selector: "dxc-select",
  templateUrl: "./dxc-select.component.html",
  styleUrls: [
    "./dxc-select.component.scss",
    "./dxc-light-select.scss",
    "./dxc-dark-select.scss"
  ]
})
export class DxcSelectComponent implements OnChanges {
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
  @Output() public valueChange: EventEmitter<any> = new EventEmitter<any>();
  public iconsToShow: string[] = []; //Auxiliar property used to get iconSRC for several values
  public labeltoShow: string[] = [] //The value is not the correct valur to display. Use label instead
  public ngOnChanges(): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    this.hasOptionsOnlyIcons();
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
      const selectedOption = this.options.filter(
        option => option.value === value
      )[0];
      this.iconsToShow.push(selectedOption.iconSrc);
      this.labeltoShow.push(selectedOption.label);
    });
  }
}
