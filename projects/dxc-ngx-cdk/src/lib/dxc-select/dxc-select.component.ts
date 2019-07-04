import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnChanges
} from "@angular/core";

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

  @Input() theme: string = "light";
  @Input() multiple: boolean;
  @Input() value: string | string[];
  @Input() options: {label?:string, value:any, iconSrc?:string} [];
  @Input() disableRipple: boolean = false;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() name: string;
  @Input() iconPosition: string = 'before';
  @Input() label: string;
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  public ngOnChanges(): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
  }

  public valueChanged($event: any): void {
    let newValue = $event.value || $event.target.value;
    this.value =newValue;
    this.valueChange.emit(newValue);
  }

  

}
