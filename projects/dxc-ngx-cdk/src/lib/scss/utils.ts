import { css } from "@emotion/css";
import { spaces } from "./variables";

export class CssUtils {
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

  getTopMargin(margin) {
    return margin && typeof margin !== "object"
      ? css`
          margin-top: ${spaces[margin]};
        `
      : margin && margin !== null
      ? css`
          margin-top: ${spaces[margin["top"]]};
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

  calculateWidth(sizes, inputs) {
    const width = sizes[inputs.size];
    let margins = "";
    if (inputs.size === "fillParent" && inputs.margin) {
      margins = this.getPaddingOrMargin(sizes, inputs.margin);
    }
    let paddings = "";
    if (inputs.padding) {
      paddings = this.getPaddingOrMargin(sizes, inputs.padding);
    }
    if(paddings || margins) {
      return css`
        width: calc(${width} ${paddings} ${margins});
      `;
    } else {
      return css`
        width: ${width};
      `;
    }
  }
  getPaddingOrMargin(size, paddingOrMargin) {
    let finalPaddingOrMargin = "";
    if (paddingOrMargin && typeof paddingOrMargin !== "object") {
      finalPaddingOrMargin =
        " - " + spaces[paddingOrMargin] + " - " + spaces[paddingOrMargin];
    } else if (size) {
      if (!paddingOrMargin["right"] && paddingOrMargin["left"]) {
        finalPaddingOrMargin = " - " + spaces[paddingOrMargin["left"]];
      } else if (!paddingOrMargin["left"] && paddingOrMargin["right"]) {
        finalPaddingOrMargin = " - " + spaces[paddingOrMargin["right"]];
      } else if (paddingOrMargin["left"] && paddingOrMargin["right"]) {
        finalPaddingOrMargin =
          " - " +
          spaces[paddingOrMargin["left"]] +
          " - " +
          spaces[paddingOrMargin["right"]];
      }
    }
    return finalPaddingOrMargin;
  }

  calculateWidthWithSize(size, padding) {
    let paddings = "";
    if (padding) {
      paddings =
        padding && typeof padding !== "object"
          ? " - " + spaces[padding] + " - " + spaces[padding]
          : padding && size
          ? padding["right"] === undefined && padding["left"]
            ? " - " + spaces[padding["left"]]
            : padding["left"] === undefined && padding["right"]
            ? " - " + spaces[padding["right"]]
            : padding["left"] && padding["right"]
            ? " - " + spaces[padding["left"]] + " - " + spaces[padding["right"]]
            : ""
          : "";
    }
    return css`
      width: calc(${size} ${paddings});
    `;
  }

  calculateMinWidth(sizes, margin) {
    const value =
      margin && typeof margin !== "object"
        ? css`
            min-width: calc(
              ${sizes["small"]} - ${spaces[margin]} - ${spaces[margin]}
            );
          `
        : margin
        ? margin["right"] === undefined && margin["left"]
          ? css`
              min-width: calc(${sizes["small"]} - ${spaces[margin["left"]]});
            `
          : margin["left"] === undefined && margin["right"]
          ? css`
              min-width: calc(${sizes["small"]} - ${spaces[margin["right"]]});
            `
          : margin["left"] && margin["right"]
          ? css`
              min-width: calc(
                ${sizes["small"]} - ${spaces[margin["left"]]} -${spaces[margin["right"]]}
              );
            `
          : css`
              min-width: ${sizes["small"]};
            `
        : css`
            min-width: ${sizes["small"]};
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
