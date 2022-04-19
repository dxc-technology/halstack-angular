import { css } from "emotion";
import { spaces } from "./variables";
import { Injectable } from "@angular/core";

@Injectable()
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

  getMarginValue = (margin, type) => {
    const marginSize = margin && margin !== null ? spaces[margin[type]] : "0px";
    return marginSize;
  };

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
    if (paddings || margins) {
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

  calculateHeightWithSize(size, padding) {
    let paddings = "";
    if (padding) {
      paddings =
        padding && typeof padding !== "object"
          ? " - " + spaces[padding] + " - " + spaces[padding]
          : padding && size
          ? padding["top"] === undefined && padding["bottom"]
            ? " - " + spaces[padding["bottom"]]
            : padding["bottom"] === undefined && padding["top"]
            ? " - " + spaces[padding["top"]]
            : padding["bottom"] && padding["top"]
            ? " - " + spaces[padding["bottom"]] + " - " + spaces[padding["top"]]
            : ""
          : "";
    }
    return css`
      height: calc(${size} ${paddings});
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

  getBoxShadow(shadowDepth, isImportant: boolean = false) {
    switch (shadowDepth) {
      case 1:
        return css`
          box-shadow: var(--box-oneShadowDepthShadowOffsetX)
            var(--box-oneShadowDepthShadowOffsetY)
            var(--box-oneShadowDepthShadowBlur)
            var(--box-oneShadowDepthShadowSpread)
            var(--box-oneShadowDepthShadowColor)
            ${this.isPropertyImportant(isImportant)};
        `;
      case 2:
        return css`
          box-shadow: var(--box-twoShadowDepthShadowOffsetX)
            var(--box-twoShadowDepthShadowOffsetY)
            var(--box-twoShadowDepthShadowBlur)
            var(--box-twoShadowDepthShadowSpread)
            var(--box-twoShadowDepthShadowColor)
            ${this.isPropertyImportant(isImportant)};
        `;
      default:
        return css`
          box-shadow: var(--box-noneShadowDepthShadowOffsetX)
            var(--box-noneShadowDepthShadowOffsetY)
            var(--box-noneShadowDepthShadowBlur)
            var(--box-noneShadowDepthShadowSpread)
            var(--box-noneShadowDepthShadowColor)
            ${this.isPropertyImportant(isImportant)};
        `;
    }
  }

  readProperty(name: string): string {
    let bodyStyles = window.getComputedStyle(document.body);
    return bodyStyles.getPropertyValue(name);
  }

  private isPropertyImportant(isImportant) {
    return isImportant ? " !important" : "";
  }
}
