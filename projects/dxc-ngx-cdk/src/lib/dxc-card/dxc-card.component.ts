import {
  Component,
  OnInit,
  Input,
  Output,
  HostBinding,
  ViewChild,
  ElementRef,
  EventEmitter,
  SimpleChanges
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";

@Component({
  selector: "dxc-card",
  templateUrl: "./dxc-card.component.html",
  styleUrls: [],
  providers: [CssUtils]
})
export class DxcCardComponent implements OnInit {
  @Input() imageSrc: string;
  @Input() imagePosition: string;
  @Input() imagePadding: any;
  @Input() imageCover: boolean;
  @Input() imageBgColor: string;
  @Input() outlined: boolean;
  @Input() theme: string;
  @Input() margin: any;
  @Input() linkHref: string;

  @Output() onClick = new EventEmitter<any>();

  @HostBinding("class") className;
  @HostBinding("class.light") isLight: boolean = true;
  @HostBinding("class.dark") isDark: boolean = false;

  @ViewChild("content", { static: false }) content: ElementRef;

  defaultInputs = new BehaviorSubject<any>({
    imageSrc: null,
    imagePosition: "before",
    imagePadding: null,
    imageCover: false,
    imageBgColor: "black",
    outlined: false,
    theme: "light",
    margin: null,
    linkHref: null
  });

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
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

  ngAfterContentChecked() {
    if (
      this.content &&
      this.content.nativeElement &&
      this.content.nativeElement.children.length > 0
    ) {
      this.content.nativeElement.classList.add("childComponents");
      this.content.nativeElement.parentElement.classList.add("hasChildren");
    }
  }

  public onClickHandler($event: any): void {
    this.onClick.emit($event);
  }

  applyTheme(theme, href, outlined) {
    if (theme === "dark") {
      return css`
        mat-card {
          background-color: var(--black, black);
          color: white;
          ${!outlined
            ? this.utils.getBoxShadow("1")
            : this.utils.getBoxShadow(0)}
        }

        mat-card.outlined {
          border: solid white 2px;
          color: white;
          max-width: 396px;
          max-height: 216px;
        }
        mat-card:hover {
          ${!outlined
            ? this.utils.getBoxShadow(this.getShadowDepthOnHover(href))
            : this.utils.getBoxShadow("1")}
        }
        mat-card.outlined:hover {
          ${this.getBorderOnHover(href)}
        }
      `;
    } else if (theme === "medium") {
      return css`
        mat-card {
          background-color: var(--lightBlack, #212121);
          color: white;
          ${!outlined
            ? this.utils.getBoxShadow("1")
            : this.utils.getBoxShadow(0)}
        }

        mat-card.outlined {
          border: solid white 2px;
          color: white;
          max-width: 396px;
          max-height: 216px;
        }
        mat-card:hover {
          ${!outlined
            ? this.utils.getBoxShadow(this.getShadowDepthOnHover(href))
            : this.utils.getBoxShadow("1")}
        }
        mat-card.outlined:hover {
          ${this.getBorderOnHover(href)}
        }
      `;
    } else {
      return css`
        mat-card {
          background-color: var(--white, white);
          color: black;
          ${!outlined
            ? this.utils.getBoxShadow("1")
            : this.utils.getBoxShadow(0)}
        }

        mat-card.outlined {
          border: solid black 2px;
          color: black;
          max-width: 396px;
          max-height: 216px;
        }
        mat-card:hover {
          ${!outlined
            ? this.utils.getBoxShadow(this.getShadowDepthOnHover(href))
            : this.utils.getBoxShadow("1")}
        }
        mat-card.outlined:hover {
          ${this.getBorderOnHover(href)}
        }
      `;
    }
  }

  getCursor(href) {
    if (this.onClick.observers.length > 0 || href) {
      return css`
        cursor: pointer;
      `;
    } else {
      return css``;
    }
  }

  getBorderOnHover(href) {
    if (this.onClick.observers.length > 0 || href) {
      return css`
        border-color: var(--yellow, #FFED00);
      `;
    } else {
      return css``;
    }
  }

  getShadowDepthOnHover(href) {
    if (this.onClick.observers.length > 0 || href) {
      return "2";
    } else {
      return "1";
    }
  }

  getDynamicStyle(inputs) {
    return css`
      display: inline-flex;
      mat-card {
        ${this.utils.getMargins(inputs.margin)}
        ${this.getCursor(inputs.linkHref)}
        font-size: 14px;
        display: inline-flex;
        width: 400px;
        height: 220px;
        padding: 0px;
        .content {
          overflow: hidden;
          width: 260px;
        }
        img {
          height: 100%;
          ${this.utils.calculateWidthWithSize("140px", inputs.imagePadding)}
          ${inputs.imageCover ? css`object-fit: cover` : css`object-fit: contain`};
        }

        .imageContainer {
          display: inline-flex;
          background-color: ${inputs.imageBgColor};
          ${this.utils.calculateWidthWithSize("140px", inputs.imagePadding)}
          ${this.utils.getPaddings(inputs.imagePadding)}
        }
      }

      mat-card.after {
        flex-direction: row-reverse;
        align-items: stretch;
      }

      mat-card.before {
        flex-direction: row;
        align-items: stretch;
      }

      mat-card.above {
        flex-direction: column;
        align-items: center;
      }

      mat-card.below {
        flex-direction: column-reverse;
        align-items: center;
      }

      mat-card.before {
        .imageContainer {
          img {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
          }
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
      }

      mat-card.after {
        .imageContainer {
          img {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
          }
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }
      }

      ${this.applyTheme(inputs.theme, inputs.linkHref, inputs.outlined)}
    `;
  }
}
