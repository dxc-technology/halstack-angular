import {
  Component,
  Input,
  HostBinding,
  OnChanges,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  SimpleChanges,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { css } from "emotion";
import { CssUtils } from "../utils";
import { coerceNumberProperty } from "@angular/cdk/coercion";
import { BackgroundProviderService } from "../background-provider/service/background-provider.service";
import { BackgroundProviderInnerComponent } from "../background-provider/background-provider-inner.component";

@Component({
  selector: "dxc-alert",
  templateUrl: "./dxc-alert.component.html",
  styleUrls: ["./dxc-alert.component.scss"],
  providers: [CssUtils, BackgroundProviderService],
})
export class DxcAlertComponent implements OnChanges {
  @HostBinding("class") className;
  @Input() type: string = "info";
  @Input() mode: string = "inline";
  @Input() inlineText: string;
  @Input() margin: any;
  @Input() size: string;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;

  @Output() onClose = new EventEmitter<any>();
  isCloseVisible = false;
  @ViewChild("contents", { static: true })
  content: BackgroundProviderInnerComponent;

  currentBackgroundColor: string;

  sizes = {
    small: "280px",
    medium: "480px",
    large: "820px",
    fillParent: "100%",
    fitContent: "auto",
  };

  defaultInputs = new BehaviorSubject<any>({
    mode: "inline",
    margin: null,
    type: "info",
    size: "fitContent",
    tabIndexValue: 0,
  });

  constructor(private utils: CssUtils) {}

  public ngOnInit() {
    this.isCloseVisible = this.onClose.observers.length > 0;
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  getDynamicStyle(inputs) {
    return css`
      .container {
        overflow: hidden;
        box-shadow: var(--alert-boxShadowOffsetX) var(--alert-boxShadowOffsetY)
          var(--alert-boxShadowBlur) var(--alert-boxShadowColor);
        border-radius: var(--alert-borderRadius);
        z-index: 300;
        ${this.utils.getMargins(inputs.margin)}
        ${this.utils.calculateWidth(this.sizes, inputs)}
      cursor: default;
        ${inputs.mode && inputs.mode === "modal"
          ? css`
              justify-content: center;
              align-items: center;
            `
          : css``}
        ${this.setBackgroundColorByAlertType(inputs.type)}
      }
    `;
  }

  setBackgroundColorByAlertType(type: string) {
    switch (type) {
      case "info":
        this.currentBackgroundColor =
          this.utils.readProperty("--alert-infoBackgroundColor");
        return css`
          background-color: var(--alert-infoBackgroundColor);
          border-color: var(--alert-infoBorderColor);
          .icon svg{
            fill: var(--alert-infoIconColor);
          }
        `;
      case "confirm":
        this.currentBackgroundColor = this.utils.readProperty(
          "--alert-successBackgroundColor"
        );
        return css`
          background-color: var(--alert-successBackgroundColor);
          border-color: var(--alert-successBorderColor);
          .icon svg{
            fill: var(--alert-successIconColor);
          }
        `;
      case "warning":
        this.currentBackgroundColor = this.utils.readProperty(
          "--alert-warningBackgroundColor"
        );
        return css`
          background-color: var(--alert-warningBackgroundColor);
          border-color: var(--alert-warningBorderColor);
          .icon svg{
            fill: var(--alert-warningIconColor);
          }
        `;
      case "error":
        this.currentBackgroundColor =
          this.utils.readProperty("--alert-errorBackgroundColor");
        return css`
          background-color: var(--alert-errorBackgroundColor);
          border-color: var(--alert-errorBorderColor);
          .icon svg{
            fill: var(--alert-errorIconColor);
          }
        `;
      default:
        this.currentBackgroundColor =
          this.utils.readProperty("--alert-errorBackgroundColor");
        return css`
          background-color: var(--alert-errorBackgroundColor);
          border-color: var(--alert-errorBorderColor);
          .icon svg{
            fill: var(--alert-errorIconColor);
          }
        `;
    }
  }

  public onCloseHandler($event: any): void {
    this.onClose.emit($event);
  }

  ngAfterViewChecked() {
    if (
      this.content &&
      this.content.element &&
      this.content.element.nativeElement &&
      (this.content.element.nativeElement.children.length > 0 ||
        this.content.element.nativeElement.innerText)
    ) {
      this.content.element.nativeElement.classList.add("content");
    }
  }
}
