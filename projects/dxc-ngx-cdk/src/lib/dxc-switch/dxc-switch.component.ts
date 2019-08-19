import {
  Component,
  OnChanges,
  Input,
  Output,
  HostBinding
} from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "dxc-switch",
  templateUrl: "./dxc-switch.component.html",
  styleUrls: [
    "./dxc-switch.component.scss",
    "./dxc-light-switch.component.scss",
    "./dxc-dark-switch.component.scss"
  ]
})
export class DxcSwitchComponent implements OnChanges {
  @HostBinding("class.light") isLight: boolean = true;
  @HostBinding("class.dark") isDark: boolean = false;

  @Input() checked: boolean;
  @Input() value: string;
  @Input() theme: string;
  @Input() disableRipple: boolean;
  @Input() disabled: boolean | string;
  @Input() required: boolean | string;
  @Input() label: string;
  @Input() name: string;
  @Input() id: string;
  @Input() labelPosition: string;
  @Output() checkedChange: EventEmitter<any>;

  public ngOnChanges() :void { 
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    this.labelPosition === 'after' ?  'after': 'before'
  }

  constructor() {
    this.checkedChange = new EventEmitter();
  }

  onChange(event: any) {
    this.checkedChange.emit(event.checked);
  }
}
