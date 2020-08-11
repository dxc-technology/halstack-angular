import { Theme } from "./symbols";
// import { readableColor } from 'polished';

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
  disableDark: "#959595",
  blue: "#005FCC"
};

export const customTheme: Theme = {
  properties: {
    "button":{
      "color": colors.yellow,
      "hoverColor": colors.black,

      "primaryFontColor": colors.black,
      "primaryHoverFontColor": colors.yellow,
      "primaryHoverBackgroundColor": colors.black,

      "secondaryFontColor": colors.black,
      "secondaryHoverFontColor": colors.black,

      "textFontColor": colors.black,
      "textHoverFontColor": colors.white
    },
    "checkbox":{
      "color": colors.yellow,
      "checkColor": colors.black,
      "fontColor": colors.black
    },
    "radio":{
      "color": colors.black,
      "fontColor": colors.black
    },
    "select":{
      "selectedOptionBackgroundColor": colors.lightGrey
    },
    "slider":{
      "color": colors.black
    }
  }
};

export const defaultTheme: Theme = {
  properties: {
    "button":{
      "primaryDisabledOpacity": 0.34,
      "primaryActiveOpacity": 0.64,

      "secondaryDisabledOpacity": 0.34,
      "secondaryActiveOpacity": 0.64,
      "secondaryBackgroundColor": "transparent",

      "textDisabledOpacity": 0.34,
      "textActiveOpacity": 0.64,
      "textBackgroundColor": "transparent",

      "focusColor": colors.blue
    },
    "checkbox":{
      "opacityDisabled": 0.34,
      "opacityDisabledCheckColor": 0.34,
      // "text": readableColor(colors.black)
      "focusColor": colors.blue
    },
    "radio":{
      // "disabledDotColor": 0.34,
      // "disabledBorderColor": 0.34
      "disabled": 0.34,
      "focusColor": colors.blue
    },
    "select":{
      "color": colors.black,
      "invalidColor": colors.darkRed,
      "focusColor": colors.blue,
      "hoverOptionBackgroundColor": customTheme.properties["select"]["selectedOptionBackgroundColor"] + "57"
    },
    "slider":{
      "totalLine": 0.34,
      "disabledThumbBackgroundColor": 0.34,
      "disabledDotsBackgroundColor": 0.34,
      "disabledTrackLine": 0.34,
      "disabledtotalLine": 0.34
    }
  }
};


