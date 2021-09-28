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
    fitContent: "unset",
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
          this.utils.readProperty("--alert-infoColor");
        return css`
          background-color: var(--alert-infoColor);
          border-color: var(--alert-infoBorderColor);
        `;
      case "confirm":
        this.currentBackgroundColor = this.utils.readProperty(
          "--alert-successColor"
        );
        return css`
          background-color: var(--alert-successColor);
          border-color: var(--alert-successBorderColor);
        `;
      case "warning":
        this.currentBackgroundColor = this.utils.readProperty(
          "--alert-warningColor"
        );
        return css`
          background-color: var(--alert-warningColor);
          border-color: var(--alert-warningBorderColor);
        `;
      case "error":
        this.currentBackgroundColor =
          this.utils.readProperty("--alert-errorColor");
        return css`
          background-color: var(--alert-errorColor);
          border-color: var(--alert-errorBorderColor);
        `;
      default:
        this.currentBackgroundColor =
          this.utils.readProperty("--alert-errorColor");
        return css`
          background-color: var(--alert-errorColor);
          border-color: var(--alert-errorBorderColor);
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
