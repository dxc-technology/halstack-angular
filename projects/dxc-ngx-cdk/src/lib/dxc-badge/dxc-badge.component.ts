import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  HostBinding,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { css } from "emotion";
import { CssUtils } from "../utils";
@Component({
  selector: "dxc-badge",
  templateUrl: "./dxc-badge.component.html",
  providers: [CssUtils],
})
export class DxcBadgeComponent implements OnInit {
  @HostBinding("class") className;
  @Input()
  notificationText: any;

  defaultInputs = new BehaviorSubject<any>({});

  ngOnChanges(changes: SimpleChanges): void {
    if(this.notificationText > 99) {
      this.notificationText = "+99";
    }
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  constructor(private utils: CssUtils) {}

  ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  getDynamicStyle(inputs) {
    return css`
      display: flex;
      padding-bottom: 1px;
      padding-right: 1px;
      flex-wrap: wrap;
      box-sizing: border-box;
      align-items: center;
      line-height: 1;
      align-content: center;
      flex-direction: row;
      justify-content: center;
      background-color: var(--tabs-badgeBackgroundColor);
      font-family: var(--tabs-badgeFontFamily);
      font-size: var(--tabs-badgeFontSize);
      font-style: var(--tabs-badgeFontStyle);
      font-weight: var(--tabs-badgeFontWeight);
      color: var(--tabs-badgeFontColor);
      letter-spacing: var("--tabs-badgeLetterSpacing);
      width: ${
        !this.notificationText
          ? "var(--tabs-badgeWidth)"
          : "var(--tabs-badgeWidthWithNotificationNumber)"
      };
      height: ${
        !this.notificationText
          ? "var(--tabs-badgeHeight)"
          : "var(--tabs-badgeHeightWithNotificationNumber)"
      };
      border-radius: ${
        !this.notificationText
          ? "var(--tabs-badgeRadius)"
          : "var(--tabs-badgeRadiusWithNotificationNumber)"
      };
    `;
  }
}
