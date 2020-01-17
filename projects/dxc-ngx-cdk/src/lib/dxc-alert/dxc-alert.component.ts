import {
  Component,
  Input,
  HostBinding,
  OnChanges,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  SimpleChanges
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { css } from "emotion";
import { CssUtils } from "../utils";
import { colors } from "../variables.js";

@Component({
  selector: "dxc-alert",
  templateUrl: "./dxc-alert.component.html",
  styleUrls: ["./dxc-alert.component.scss"],
  providers: [CssUtils]
})
export class DxcAlertComponent implements OnChanges {
  @HostBinding("class") className;
  @Input() type: string = "info";
  @Input() mode: string = "inline";
  @Input() inlineText: string;
  @Input() margin: any;
  @Output() onClose = new EventEmitter<any>();
  isCloseVisible = false;
  @ViewChild("contents", { static: true }) content: ElementRef;

  defaultInputs = new BehaviorSubject<any>({
    mode: "inline",
    margin: null,
    type: "info"
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
      font-size: 12px;
      overflow: hidden;
      box-shadow: 0px 3px 6px #00000012;
      border-radius: 4px;
      font-family: "Open Sans", sans-serif;
      z-index: 300;
      ${this.utils.getMargins(inputs.margin)}
      cursor: default;
      ${
        inputs.mode && inputs.mode === "modal"
          ? css`
              justify-content: center;
              align-items: center;
            `
          : css``
      }
      ${this.setBackgroundColorByAlertType(inputs.type)}
      }

    `;
  }

  setBackgroundColorByAlertType(type: string) {
    switch (type) {
      case "info":
        return css`
          background-color: ${colors.lightBlue};
        `;
      case "confirm":
        return css`
          background-color: ${colors.lightGreen};
        `;
      case "warning":
        return css`
          background-color: ${colors.lightYellow};
        `;
      case "error":
        return css`
          background-color: ${colors.lightPink};
        `;
      default:
        return css`
          background-color: ${colors.lightPink};
        `;
    }
  }

  public onCloseHandler($event: any): void {
    this.onClose.emit($event);
  }

  ngAfterViewChecked() {
    if (
      this.content &&
      this.content.nativeElement &&
      this.content.nativeElement.children.length > 0
    ) {
      this.content.nativeElement.classList.add("content");
      this.content.nativeElement.parentElement.setAttribute('style','min-width: 348px; max-width: 590px;min-height: 92px;');

    }else{
      this.content.nativeElement.parentElement.setAttribute('style','min-width: 590px;max-width: 810px;min-height: 48px;');
    }
  }
}
