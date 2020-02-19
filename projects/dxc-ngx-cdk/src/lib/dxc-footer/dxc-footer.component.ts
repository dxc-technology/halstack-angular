import {
  Component,
  Input,
  HostBinding,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { EventEmitter } from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";

@Component({
  selector: "dxc-footer",
  templateUrl: "./dxc-footer.component.html",
  styleUrls: [],
  providers: [CssUtils]
})
export class DxcFooterComponent implements OnChanges {
  @HostBinding("class") className;

  @Input() public socialLinks: { href?: string; logoSrc?: string }[];
  @Input() public bottomLinks: { href?: string; text?: string }[];

  @Input() public copyright: string;
  @Input() public logoSrc: string;

  defaultInputs = new BehaviorSubject<any>({
    socialLinks: {},
    bottomLinks: {},
    copyright: "",
    logoSrc: ""
  });

  constructor(private utils: CssUtils) {}

  public ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  getDynamicStyle(inputs) {
    return css`
      max-width: 100%;
      display: block;
      mat-toolbar {
        overflow: hidden;
        ${this.utils.getTopMargin(inputs.margin)}
        font: unset;
        mat-toolbar-row {
          height: auto;
          padding: 0px;
          white-space: inherit;
        }
        padding: 20px 60px 20px 20px;
        font-family: "Open Sans", sans-serif;
        background-color: black;
        .footerHeader {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .logo {
            height: 34px;
            width: auto;
          }
          .socialIcons {
            display: flex;
            align-items: center;
            .socialIcon {
              display: inline-flex;
            }
          }
          .socialIconImage {
            display: inline-flex;
            height: 25px;
            width: 25px;
          }
          .spacing {
            margin-left: 15px;
          }
        }
        .childComponents {
          min-height: 15px;
          color: #fff;
        }
        .footerFooter {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          .bottomLinks {
            padding-top: 6px;
            border-top: 2px solid #ffed00;
            display: inline-flex;
            flex-wrap: wrap;
            max-width: 60%;
            .point {
              margin: 0px 10px;
              color: white;
            }
            a {
              text-decoration: none;
              color: white;
              font-size: 12px;
            }
          }
          .copyright {
            color: white;
            font-size: 12px;
            max-width: 40%;
          }
        }
      }
    `;
  }
}
