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

  calculateWidthWithMargins(sizes, size, margin) {
    const value =
      margin && typeof margin !== "object"
        ? css`
            width: calc(${sizes[size]} - ${spaces[margin]} - ${spaces[margin]});
          `
        : margin
        ? margin["right"] === undefined && margin["left"]
          ? css`
              width: calc(${sizes[size]} - ${spaces[margin["left"]]});
            `
          : margin["left"] === undefined && margin["right"]
          ? css`
              width: calc(${sizes[size]} - ${spaces[margin["right"]]});
            `
          : margin["left"] && margin["right"]
          ? css`
              width: calc(${sizes[size]} - ${spaces[margin["left"]]} -${spaces[margin["right"]]});
            `
          : css`
              width: ${sizes[size]};
            `
        : css`
            width: ${sizes[size]};
          `;
    return value;
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
