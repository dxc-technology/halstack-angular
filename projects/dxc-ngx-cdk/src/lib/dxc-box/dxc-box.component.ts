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
import { BackgroundProviderService } from "../background-provider/service/background-provider.service";
import { BoxProperties, Space, Spacing } from "./dxc-box.types";

@Component({
  selector: "dxc-box",
  templateUrl: "./dxc-box.component.html",
  providers: [CssUtils, BackgroundProviderService],
})
export class DxcBoxComponent implements OnInit {
  @HostBinding("class") className;
  /**
   * The size of the shadow to be displayed around the box.
   */
  @Input() shadowDepth: 0 | 1 | 2 = 2;
  /**
   * Changes the display CSS property of the box div.
   */
  @Input() display: string = "inline-flex";
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  @Input() margin: Space | Spacing;
  /**
   * Size of the padding to be applied to the custom area ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different padding sizes.
   */
  @Input() padding: Space | Spacing;
  /**
   * Size of the component.
   */
  @Input() size: "small" | "medium" | "large" | "fillParent" | "fitContent" =
    "fitContent";
  currentBackgroundColor;

  sizes = {
    small: "60px",
    medium: "240px",
    large: "480px",
    fillParent: "100%",
    fitContent: "fit-content",
  };

  defaultInputs = new BehaviorSubject<BoxProperties>({
    display: "inline-flex",
    shadowDepth: 2,
    margin: null,
    padding: null,
    size: null,
  });

  calculateWidth(inputs) {
    if (inputs.size === undefined || inputs.size === null) {
      return css`
        width: unset;
      `;
    }

    if (inputs.size !== "fitContent") {
      return this.utils.calculateWidth(this.sizes, inputs);
    }
    return css`
      width: ${this.sizes[inputs.size]};
    `;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.currentBackgroundColor = this.utils.readProperty(
      "--box-backgroundColor"
    );
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  constructor(private utils: CssUtils) {}

  ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  getDynamicStyle(inputs) {
    return css`
      display: ${inputs.display};
      border: var(--box-borderThickness) solid;
      border-radius: var(--box-borderRadius);
      border-color: var(--box-borderColor);
      overflow: hidden;
      background-color: var(--box-backgroundColor);
      letter-spacing: var(--box-letterSpacing);

      ${this.utils.getBoxShadow(inputs.shadowDepth)}
      ${this.utils.getMargins(inputs.margin)}
      ${this.utils.getPaddings(inputs.padding)}
      ${this.calculateWidth(inputs)}
    `;
  }
}
