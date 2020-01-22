import {
  Component,
  Input,
  HostBinding,
  OnChanges,
  Output,
  EventEmitter,
  SimpleChanges
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { spaces } from "../variables.js";

@Component({
  selector: "dxc-header",
  templateUrl: "./dxc-header.component.html",
  styleUrls: ["./dxc-light-header.scss", "./dxc-dark-header.scss"],
  providers: [CssUtils]
})
export class DxcHeaderComponent implements OnChanges {
  @HostBinding("class") className;
  @HostBinding("class.dxc-light") isLight: boolean = true;
  @HostBinding("class.dxc-dark") isDark: boolean = false;

  @Input() theme: string = "light";
  @Input() underline: boolean;
  @Input() logoSrc: string;
  @Input() margin: any;
  @Input() padding: any;

  @Output() onClick = new EventEmitter<any>();

  defaultInputs = new BehaviorSubject<any>({
    theme: "light",
    underline: false,
    logoSrc: null,
    margin: null,
    padding: null
  });

  constructor(private utils: CssUtils) {
  }

  public ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  getBottomMargin(margin) {
    return margin && typeof margin !== "object"
      ? css`
          margin-bottom: ${spaces[margin]};
        `
      : margin && margin !== null
      ? css`
          margin-bottom: ${spaces[margin["bottom"]]};
        `
      : css`
          margin-bottom: 0px;
        `;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    this.underline === true ? true : false;
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public onClickHandler($event: any): void {
    this.onClick.emit($event);
  }

  getDynamicStyle(inputs) {
    return css`
      display: block;
      width: 100%;
      ${this.getBottomMargin(inputs.margin)}
      .headerAnchor {
        display: flex;
      }
      .mat-toolbar {
        font-size: unset;
        .mat-toolbar-row {
          min-height: 64px;
        }
        &.underlined {
          min-height: 62px;
          .mat-toolbar-row {
            min-height: 62px;
          }
        }
      }
      mat-toolbar-row.mat-toolbar-row,
      .mat-toolbar-row {
        padding: 0 60px 0 20px;
        display: flex;
        justify-content: space-between;
        height: auto;
      }
      .dxc-logo,
      img {
        height: 32px;
        width: 181px;
        &:hover {
          cursor: pointer;
        }
      }
      .content {
        display: flex;
        align-items: center;
        max-width: calc(100% - 181px);
        width: 100%;
        overflow: hidden;
        font-family: "Open Sans", sans-serif;
        ${this.utils.getPaddings(inputs.padding)}
      }
    `;
  }
}
