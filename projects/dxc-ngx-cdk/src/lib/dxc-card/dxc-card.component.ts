import {
  Component,
  OnInit,
  Input,
  Output,
  HostBinding,
  ViewChild,
  ElementRef,
  EventEmitter,
  SimpleChanges,
  ChangeDetectorRef,
  Inject,
  Optional
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
import { BackgroundProviderService } from "../background-provider/service/background-provider.service";

@Component({
  selector: "dxc-card",
  templateUrl: "./dxc-card.component.html",
  styleUrls: [],
  providers: [CssUtils],
})
export class DxcCardComponent implements OnInit {
  @Input() imageSrc: string;
  @Input() imagePosition: string;
  @Input() imagePadding: any;
  @Input()
  get imageCover(): boolean {
    return this._imageCover;
  }
  set imageCover(value: boolean) {
    this._imageCover = coerceBooleanProperty(value);
  }
  private _imageCover = false;
  @Input() imageBgColor: string;
  @Input() margin: any;
  @Input() linkHref: string;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;

  @Output() onClick = new EventEmitter<any>();

  @HostBinding("class") className;

  @ViewChild("content", { static: false }) content: ElementRef;

  defaultInputs = new BehaviorSubject<any>({
    imageSrc: null,
    imagePosition: "before",
    imagePadding: null,
    imageCover: false,
    imageBgColor: "black",
    margin: null,
    linkHref: null,
    tabIndexValue: 0,
  });

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.onClick.observers.length <= 0 && !this.linkHref) {
      this.tabIndexValue = -1;
    }
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  constructor(private utils: CssUtils, private cdRef: ChangeDetectorRef,
    @Optional() @Inject("bgService") public bgProviderService: BackgroundProviderService) {
  }

  ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    this.bgProviderService?.$changeColor?.subscribe(resp => {
      console.log(resp);
    });
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

    this.cdRef.detectChanges();
  }

  public onClickHandler($event: any): void {
    this.onClick.emit($event);
  }

  applyTheme(href, outlined) {
    return css`
    mat-card {
      background-color: var(--card-backgroundColor);
      color: black;
      ${!outlined ? this.utils.getBoxShadow("1") : this.utils.getBoxShadow(0)}
    }

      mat-card:hover {
        ${!outlined
          ? this.utils.getBoxShadow(this.getShadowDepthOnHover(href))
          : this.utils.getBoxShadow("1")}
      }
    `;
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
        font-family: var(--fontFamily);
        font-size: 14px;
        display: inline-flex;
        width: 400px;
        height: 220px;
        padding: 0px;
        ${this.tabIndexValue === -1 ? "outline:none;" : ""}
        .content {
          overflow: hidden;
          width: 260px;
        }
        img,
        svg {
          height: 100%;
          ${this.utils.calculateWidthWithSize("140px", inputs.imagePadding)}
          ${inputs.imageCover
            ? css`
                object-fit: cover;
              `
            : css`
                object-fit: contain;
              `};
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
          img,
          svg {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
          }
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
      }

      mat-card.after {
        .imageContainer {
          img,
          svg {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
          }
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }
      }

      ${this.applyTheme(inputs.linkHref, inputs.outlined)}
    `;
  }
}
