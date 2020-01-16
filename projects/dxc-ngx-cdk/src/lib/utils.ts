import { css } from "emotion";
import { spaces } from "./variables.js";

export class CssUtils {
  spacesVariables = spaces;
  getMargins(margin) {
    return margin && typeof margin !== "object"
      ? css`
          margin: ${spaces[margin]};
        `
      : margin && margin !== null
      ? css`
          margin-left: ${spaces[margin["left"]]};
          margin-top: ${spaces[margin["top"]]};
          margin-right: ${spaces[margin["right"]]};
          margin-bottom: ${spaces[margin["bottom"]]};
        `
      : css`
          margin: 0px;
        `;
  }

  getPaddings(padding) {
    return padding && typeof padding !== "object"
      ? css`
          padding: ${spaces[padding]};
        `
      : padding && padding !== null
      ? css`
          padding-left: ${spaces[padding["left"]]};
          padding-top: ${spaces[padding["top"]]};
          padding-right: ${spaces[padding["right"]]};
          padding-bottom: ${spaces[padding["bottom"]]};
        `
      : css`
          padding: 0px;
        `;
  }

  getMarginValue(marginType, margin) {
    return margin && typeof margin !== "object"
      ? spaces[margin]
      : margin && margin[marginType]
      ? spaces[margin[marginType]]
      : "0px";
  }

  getPaddingValue(paddingType, padding) {
    return padding && typeof padding !== "object"
      ? spaces[padding]
      : padding && padding[paddingType]
      ? spaces[padding[paddingType]]
      : "0px";
  }

  getBoxShadow(shadowDepth) {
    switch (shadowDepth) {
      case "1":
        return css`
          box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
            0px 1px 1px 0px rgba(0, 0, 0, 0.14),
            0px 1px 3px 0px rgba(0, 0, 0, 0.12);
        `;
      case "2":
        return css`
          box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
            0px 3px 4px 0px rgba(0, 0, 0, 0.14),
            0px 1px 8px 0px rgba(0, 0, 0, 0.12);
        `;
      default:
        return css`
          box-shadow: none;
        `;
    }
  }
}
