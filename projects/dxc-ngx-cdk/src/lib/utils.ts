import { css } from "emotion";
import { spaces } from "./variables.js";

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
      margins =
        inputs.margin && typeof inputs.margin !== "object"
          ? " - " + spaces[inputs.margin] + " - " + spaces[inputs.margin]
          : inputs.margin && inputs.size
          ? inputs.margin["right"] === undefined && inputs.margin["left"]
            ? " - " + spaces[inputs.margin["left"]]
            : inputs.margin["left"] === undefined && inputs.margin["right"]
            ? " - " + spaces[inputs.margin["right"]]
            : inputs.margin["left"] && inputs.margin["right"]
            ? " - " +
              spaces[inputs.margin["left"]] +
              " - " +
              spaces[inputs.margin["right"]]
            : ""
          : "";
    }

    let paddings = "";
    if (inputs.padding) {
      paddings =
        inputs.padding && typeof inputs.padding !== "object"
          ? " - " + spaces[inputs.padding] + " - " + spaces[inputs.padding]
          : inputs.padding && inputs.size
          ? inputs.padding["right"] === undefined && inputs.padding["left"]
            ? " - " + spaces[inputs.padding["left"]]
            : inputs.padding["left"] === undefined && inputs.padding["right"]
            ? " - " + spaces[inputs.padding["right"]]
            : inputs.padding["left"] && inputs.padding["right"]
            ? " - " +
              spaces[inputs.padding["left"]] +
              " - " +
              spaces[inputs.padding["right"]]
            : ""
          : "";
    }
    return css`
      width: calc(${width} ${paddings} ${margins});
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
