import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnChanges,
  ChangeDetectionStrategy,
} from "@angular/core";
import { css } from "@emotion/css";

@Component({
  selector: "dxc-header-dropdown",
  templateUrl: "./dxc-header-dropdown.component.html",
  styleUrls: [],
})
export class DxcHeaderDropdownComponent implements OnChanges {
  @HostBinding("class") triggerStyles;
  @Input() public options: { label?: string; value: any; iconSrc?: string }[];
  @Input() public name: string;
  @Input() public iconPosition: string = "before";
  @Input() public optionsIconPosition: string = "before";
  @Input() public margin: any;
  @Input() public size: any;
  @Input() expandOnHover: boolean;
  @Input() caretHidden: boolean;
  @Input() public iconSrc: string;
  @Input() public label: string = "";
  @Output() public onSelectOption: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    this.triggerStyles = this.triggerButtonStyles();
  }

  public ngOnChanges(): void {
    this.triggerStyles = this.triggerButtonStyles();
  }

  handleSelect($event) {
    this.onSelectOption.emit($event);
  }

  triggerButtonStyles() {
    return css`
      dxc-dropdown {
        .menu-buttom-label {
          font-family: var(--fontFamily);
          color: var(--header-fontColor) !important;
        }
        button {
          background-color: transparent !important;
        }
      }
    `;
  }
}
