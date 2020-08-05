import { Theme } from "./symbols";

const colors = {
  black: "#000000",
  lightBlack: "#212121",
  white: "#FFFFFF",
  darkWhite: "#EEEEEE",
  yellow: "#FFED00",
  darkGrey: "#666666",
  lightGrey: "#D9D9D9",
  darkRed: "#D0011B",
  lightRed: "#FF6161",
  lightBlue: "#CEE0F5",
  lightYellow: "#FCF2BD",
  lightPink: "#F9CFCF",
  lightGreen: "#DBF1C4",
  disableLight: "#A5A5A5",
  disableDark: "#959595"
};

export const defaultTheme: Theme = {
  properties: {
    "button":{
      "color": colors.yellow,
      "hoverColor": colors.black,

      "primaryDisabledOpacity": 0.34,
      "primaryActiveOpacity": 0.64,
      "primaryFontColor": colors.black,
      "primaryHoverFontColor": colors.yellow,
      "primaryHoverBackgroundColor": colors.black,

      "secondaryDisabledOpacity": 0.34,
      "secondaryActiveOpacity": 0.64,
      "secondaryBackgroundColor": "transparent",
      "secondaryFontColor": colors.black,
      "secondaryHoverFontColor": colors.black,

      "textDisabledOpacity": 0.34,
      "textActiveOpacity": 0.64,
      "textBackgroundColor": "transparent",
      "textFontColor": colors.black,
      "textHoverFontColor": colors.white
    }
  }
};


