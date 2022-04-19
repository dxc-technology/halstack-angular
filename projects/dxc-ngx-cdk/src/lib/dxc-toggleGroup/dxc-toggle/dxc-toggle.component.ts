import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  ChangeDetectionStrategy,
} from "@angular/core";
import { css } from "emotion";
import { OnInit } from "@angular/core";

@Component({
  selector: "dxc-toggle",
  templateUrl: "./dxc-toggle.component.html",
  providers: [],
})
export class DxcToggleComponent implements OnInit {
  /**
   * Label displayed in the option.
   */
  @Input() label: string;
  /**
   * Value of the option.
   */
  @Input() value: string;
  @Output() public onClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onKeyPress: EventEmitter<any> = new EventEmitter<any>();
  @HostBinding("class") style;

  @HostBinding("class.selected") get valid() {
    return this.selected;
  }

  role: string;
  selected: boolean = false;
  tabIndexValue: number = 0;

  onClickHandler() {
    this.onClick.emit(this.value);
  }

  onHandleKeyPressHandler(event) {
    if (event.code === "Enter" || event.code === "Space") {
      this.onKeyPress.emit(this.value);
    }
  }

  setRole(role: string) {
    this.role = role;
  }

  ngOnInit(): void {
    this.style = `${this.getDynamicStyle()}`;
  }

  getDynamicStyle() {
    return css`
      display: flex;
      background: var(--toggleGroup-unselectedBackgroundColor);
      color: var(--toggleGroup-unselectedFontColor);
      border-radius: var(--toggleGroup-optionBorderRadius);
      border-width: var(--toggleGroup-optionBorderThickness);
      border-style: var(--toggleGroup-optionBorderStyle);
      .toggleContent {
        ${this.label
          ? `padding-left: var(--toggleGroup-labelPaddingLeft);
          padding-right: var(--toggleGroup-labelPaddingRight);`
          : `
          padding-left: var(--toggleGroup-iconPaddingLeft);
          padding-right: var(--toggleGroup-iconPaddingRight);
          `}

        &:focus,
          &:focus-within,
          &:focus-visible {
          outline: none;
        }
        height: 40px;
        width: 100% !important;
        display: flex;
        align-items: center;
        .label {
          font-family: var(--toggleGroup-labelFontFamily);
          font-size: var(--toggleGroup-labelFontSize);
          font-style: var(--toggleGroup-labelFontStyle);
          font-weight: var(--toggleGroup-labelFontWeight);
        }
        .icon {
          ${this.label
            ? `margin-right: var(--toggleGroup-iconMarginRight);`
            : ``}
          display: flex;
          height: 24px;
          overflow: hidden;
          width: 24px;
          svg {
            fill: var(--toggleGroup-unselectedFontColor);
            height: 100%;
            width: 100%;
          }
        }
      }
    `;
  }
}
