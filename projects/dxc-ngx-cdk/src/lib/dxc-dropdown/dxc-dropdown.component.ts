import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnChanges
} from "@angular/core";
@Component({
  selector: "dxc-dropdown",
  templateUrl: "./dxc-dropdown.component.html",
  styleUrls: [
    "./dxc-dropdown.component.scss",
    "./dxc-light-dropdown.scss",
    "./dxc-dark-dropdown.scss"
  ]
})
export class DxcDropdownComponent implements OnChanges {
  @HostBinding("class.dxc-light") isLight: boolean = true;
  @HostBinding("class.dxc-dark") isDark: boolean = false;

  @Input() public theme: string = "light";
  @Input() public options: { label?: string; value: any; iconSrc?: string }[];
  @Input() public disableRipple: boolean = false;
  @Input() public disabled: boolean = false;
  @Input() public name: string;
  @Input() public iconPosition: string = "before";
  @Input() public optionsIconPosition: string = "before";
  @Input() public mode: string = "basic";

  @Input() public showCaret: boolean = true;

  @Input() public iconSrc: string;
  @Input() public label: string = "";
  @Output() public selectOption: EventEmitter<any> = new EventEmitter<any>();

  public onlyHasIcons: boolean;
  public  arrowClass: string  = 'down'
  public  menuOpened: string  = 'closed'
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


  public isMenuOpened() {
    this.arrowClass = this.arrowClass === 'down' ? 'up' : 'down';
    this.menuOpened =  this.menuOpened === 'opened' ? 'closed' : 'opened';

  }
  public selectedOption(option:any): void {
      this.selectOption.emit(option.value);
  }


  public hasOptionsOnlyIcons() {
    if (this.options) {
      this.onlyHasIcons = this.options.every(
        option => option.iconSrc && !option.label
      );
    }
  }

 

}
