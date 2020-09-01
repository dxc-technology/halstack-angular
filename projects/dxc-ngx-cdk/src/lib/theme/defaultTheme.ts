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
  purple: "#8800F6",
  blue: "#005FCC",
  linkBlue: "#006BF6",
  grey: "#F8F8F8"
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
    },
    "switch":{
      "checkedTrackBackgroundColor": colors.darkGrey
    },
    "chip":{
      "backgroundColor": colors.lightGrey,
      "outlinedColor": colors.black,
      "fontColor": colors.black
    },
    "date":{
      "pickerSelectedDateBackgroundColor": colors.black,
      "pickerSelectedDateColor": colors.yellow
    },
    "sidenav":{
      "color": colors.grey,
      "arrowBackground": colors.lightGrey,
      "arrowColor": colors.black
    },
    "progressbar":{
      "trackColor": colors.yellow,
      "color": colors.black
    },
    "autocomplete":{
      "selectedOptionBackgroundColor": colors.lightGrey,
    },
    "footer":{
      "backgroundColor": colors.black,
      "fontColor": colors.white,
      "lineColor": colors.yellow
    },
    "spinner":{
      "trackColor": colors.yellow,
      "color": colors.white
    },
    "header":{
      "backgroundColor": colors.black,
      "underlinedColor": colors.black,
      "fontColor": colors.white,
      "backgroundColorMenu": colors.lightGrey,
      "fontColorMenu": colors.black,
      "hamburguerColor": colors.white,
    },
    "tabs":{
      "selectedBackgroundColor": "transparent",
      "selectedUnderlinedColor": colors.black,
      "selectedColor": colors.black
    },
    "wizard":{
      "selectedBackgroundColor": colors.yellow,
      "selectedBackgroundFont": colors.black
    },
    "accordion":{
      "arrowColor": colors.darkGrey
    },
    "dropdown":{
      "backgroundColor": colors.white,
      "fontColor": colors.black
    },
    "table":{
      "headerBackgroundColor": colors.black,
      "headerFontColor": colors.white
    },
    "paginator":{
      "paginatorBackgroundColor": colors.darkWhite,
      "paginatorFontColor": colors.black
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
      "fontColor": "inherit",
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
      "hoverOptionBackgroundColor": "57"
    },
    "slider":{
      "totalLine": 0.34,
      "disabledThumbBackgroundColor": 0.34,
      "disabledDotsBackgroundColor": 0.34,
      "disabledTrackLine": 0.34,
      "disabledtotalLine": 0.34
    },
    "switch":{
      "checkedThumbBackgroundColor": colors.white,
      "uncheckedThumbBackgroundColor": colors.white,
      "uncheckedTrackBackgroundColor": colors.lightGrey,
      "disabledBackgroundColor": 0.34,
      "requiredColor": colors.darkRed,
      "focusColor": colors.blue
    },
    "link":{
      "fontColor": colors.blue,
      "visitedColor": colors.purple,
      "disabledColor": colors.lightGrey,
      "hoverColor": colors.linkBlue
    },
    "text":{
      "color": colors.black,
      "placeholderColor": colors.lightGrey,
      "disabledFontColor": 0.34,
      "disabledLabelColor": 0.34,
      "disabledUnderlinedColor": 0.34,
      "disabledAssistiveTextColor": 0.34,
      "invalidColor": colors.darkRed
    },
    "box":{
      "backgroundColor": colors.white
    },
    "card":{
      "backgroundColor": colors.white
    },
    "tag":{
      "backgroundColor": colors.white
    },
    "chip":{
      "disabled": 0.34
    },
    "date":{
      "pickerBackgroundColor": colors.white,
      "pickerTextColor": colors.black,
      "pickerActualDate": colors.lightGrey,
      "pickerHoverDateBackgroundColor": "57",
      "pickerHoverDateTextColor": colors.black,
      "invalidColor": colors.darkRed,
      "focusColor": colors.blue
    },
    "sidenav":{
      "arrowContainerOpacity": 0.80
    },
    "progressbar":{
      // "text": readableColor(colors.black)
      "totalLineOpacity": 0.34
    },
    "autocomplete":{
      "hoverOptionBackgroundColor": "57",
      "hoverOptionColor": colors.black,
      "scrollBarThumbColor": colors.darkGrey,
      "scrollBarTrackColor": colors.lightGrey
    },
    "footer":{},
    "spinner":{
      // "text": readableColor(colors.black)
      "totalCircleOpacity": 0.34
    },
    "header":{
      "hoverHamburguerColor": colors.darkGrey,
      "overlayColor": colors.black + "b3"
    },
    "tabs":{
      "backgroundColor": "57",
      "underlineColor": colors.lightGrey,
      "fontColor": colors.black,
      "disabled": 0.34,
      "focusColor": colors.blue
    },
    "wizard":{
      "borderColor": colors.black,
      "fontColor": colors.black,
      "lineColor": colors.lightGrey,
      "disabledBackground": colors.darkWhite,
      "disabledText": colors.darkGrey
    },
    "accordion":{
      "fontColor": colors.darkGrey,
      "backgroundColor": colors.white,
      "hoverBackgroundColor": "57",
      "hoverFontColor": colors.black,
      "disabled": 0.34
    },
    "dialog":{
      "overlayColor": colors.black + "CC",
      "separator": colors.lightGrey,
      "backgroundColor": colors.white,
      "scrollBarThumbColor": colors.darkGrey,
      "scrollBarTrackColor": colors.lightGrey
    },
    "dropdown":{
      "dropdownBackgroundColor": colors.white,
      "dropdownFontColor": colors.black,
      "hoverBackgroundOption": colors.white + "57",
      "hoverBackgroundColor": "CC",
      "disabled": 0.34,
      "scrollBarThumbColor": colors.darkGrey,
      "scrollBarTrackColor": colors.lightGrey
    },
    "table":{
      "separatorColor": colors.darkGrey,
      "bodyBackgroundColor": colors.white,
      "bodyFontColor": colors.black
    }
  }
};