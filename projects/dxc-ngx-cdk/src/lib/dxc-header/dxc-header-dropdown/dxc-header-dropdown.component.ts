import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnChanges,
} from "@angular/core";
import { css } from "emotion";

type Space =
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge";

type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};

@Component({
  selector: "dxc-header-dropdown",
  templateUrl: "./dxc-header-dropdown.component.html",
  styleUrls: [],
})
export class DxcHeaderDropdownComponent implements OnChanges {
  /**
   * In case options include icons, whether the icon should appear after or before the label.
   */
  @Input() optionsIconPosition: "before" | "after" = "before";

  /**
   * Whether the icon should appear after or before the label.
   */
  @Input() iconPosition: "before" | "after" = "before";

  /**
   * Text to be placed when the list of options is not displayed.
   */
  @Input() label: string = "";

  /**
   * Name attribute of the input element.
   */
  @Input() name: string;

  /**
   * Whether the arrow next to the label is displayed or not.
   */
  @Input() caretHidden: boolean = false;

  /**
   * Size of the margin to be applied to the component 
   * ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). 
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in 
   * order to specify different margin sizes.
   */
  @Input() margin: Space | Margin;

  /**
   * Size of the component.
   */
  @Input() size: "small" | "medium" | "large" | "fillParent" | "fitContent" =
    "fitContent";

  /**
   * This event will emit in case the selection changes. The value of the selected
   * value will be passed as a parameter.
   */
  @Output() onSelectOption: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Value of the tabindex.
   */
  @Input() tabIndexValue: number = 0;

  /**
   * If true, the options are showed when the dropdown is hover.
   */
  @Input() expandOnHover: boolean = false;

  /**
   * If true, the component will be disabled.
   */
  @Input() disabled: boolean = false;

  @HostBinding("class") triggerStyles;

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
          color: var(--header-fontColor) !important;
        }
        button {
          background-color: transparent !important;
        }
      }
    `;
  }
}
