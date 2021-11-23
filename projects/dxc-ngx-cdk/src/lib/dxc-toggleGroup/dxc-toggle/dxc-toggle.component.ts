import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  ChangeDetectionStrategy
} from "@angular/core";
import { css } from "emotion";
import { OnInit } from '@angular/core';

@Component({
  selector: "dxc-toggle",
  templateUrl: "./dxc-toggle.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class DxcToggleComponent implements OnInit {


  @Input() label: string;
  @Input() value;
  @Output() public onClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onKeyPress: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding("class") style;

  @HostBinding("class.selected") get valid() {
    return this.selected;
  }

  selected: boolean = false;
  tabIndexValue: number = 0;

  onClickHandler() {
    this.onClick.emit(this.value);
  }

  onHandleKeyPressHandler(event) {
    if ((event.code === "Enter" || event.code === "Space")){
      this.onKeyPress.emit(this.value);
    }
  };

  ngOnInit(): void {
    this.style = `${this.getDynamicStyle()}`;
  }

  getDynamicStyle(){
    return css`
      height: 100%;
      width: 100%;
      display: flex;
      background: var(--toggleGroup-unselectedBackgroundColor);
      margin: 4px;
      color: var(--toggleGroup-unselectedFontColor);
      border-radius: 4px;
      ${this.label ? `padding-left: var(--toggleGroup-labelPaddingLeft);
      padding-right: var(--toggleGroup-labelPaddingRight);
      padding-top: var(--toggleGroup-labelPaddingTop);
      padding-bottom: var(--toggleGroup-labelPaddingBottom); ` : `
      padding-left: var(--toggleGroup-iconPaddingLeft);
      padding-right: var(--toggleGroup-iconPaddingRight);
      padding-top: var(--toggleGroup-iconPaddingTop);
      padding-bottom: var(--toggleGroup-iconPaddingBottom);
      `  }

        .toggleContent {
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
            letter-spacing: var(--toggleGroup-fontLetterSpacing);
            font-family: var(--toggleGroup-fontFamily);
            font-size: var(--toggleGroup-fontSize);
            font-style: var(--toggleGroup-fontStyle);
            font-weight: var(--toggleGroup-fontWeight);
          }
          .icon {
            display: flex;
            img,
            svg {
              width: var(--toggleGroup-iconSize);
              height: var(--toggleGroup-iconSize);
              fill: var(--toggleGroup-unselectedFontColor);
            }
          }
        }

    `;
  };

}
