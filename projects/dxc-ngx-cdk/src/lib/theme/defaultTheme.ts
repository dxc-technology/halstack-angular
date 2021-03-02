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
  grey: "#F8F8F8",
  dxcBlue:"#0067B3",
  dxcPurple:"#6F2C91"
};

export const customTheme: Theme = {
  properties: {
    "button":{
      "color": colors.dxcPurple,
      "hoverColor": colors.black,

      "primaryFontColor": colors.white,
      "primaryHoverFontColor": colors.white,

      "secondaryFontColor": colors.black,
      "secondaryHoverFontColor": colors.black,

      "textFontColor": colors.dxcPurple,
      "textHoverFontColor": colors.white
    },
    "checkbox":{
      "color": colors.dxcBlue,
      "checkColor": colors.white,
    },
    "radio":{
      "color": colors.black,
    },
    "select":{
      "selectedOptionBackgroundColor": colors.lightGrey
    },
    "slider":{
      "color": colors.dxcBlue
    },
    "switch":{
      "checkedTrackBackgroundColor": colors.dxcPurple
    },
    "chip":{
      "backgroundColor": colors.darkWhite,
      "outlinedColor": "",
      "fontColor": colors.black
    },
    "date":{
      "pickerSelectedDateBackgroundColor": colors.dxcPurple,
      "pickerSelectedDateColor": colors.white
    },
    "sidenav":{
      "backgroundColor": colors.grey,
      "arrowContainerColor": colors.lightGrey,
      "arrowColor": colors.black
    },
    "progressbar":{
      "trackLine": colors.dxcPurple,
      "totalLine": colors.darkGrey
    },
    "inputText":{
      "selectedOptionBackgroundColor": colors.lightGrey,
    },
    "footer":{
      "backgroundColor": colors.black,
      "fontColor": colors.white,
      "lineColor": colors.dxcBlue,
      "logo": "assets/dxc_logo_wht.png",
    },
    "spinner":{
      "trackCircleColor": colors.dxcPurple,
      "totalCircleColor": colors.white
    },
    "header":{
      "backgroundColor": colors.white,
      "underlinedColor": colors.black,
      "fontColor": colors.black,
      "backgroundColorMenu": colors.white,
      "fontColorMenu": colors.black,
      "hamburguerColor": colors.black,
      "logo": "assets/dxc_logo_blk_rgb.svg",
      "logoResponsive": "assets/dxc_logo_blk_rgb.svg",
    },
    "tabs":{
      "selectedFontColor": colors.dxcPurple
    },
    "toggle": {
      "unselectedBackgroundColor": colors.lightGrey,
      "unselectedHoverBackgroundColor": colors.darkWhite,
      "unselectedFontColor": colors.black,
      "unselectedHoverFontColor": colors.black,

      "selectedBackgroundColor": colors.dxcPurple,
      "selectedHoverBackgroundColor": colors.black,
      "selectedFontColor": colors.white,
      "selectedHoverFontColor": colors.white,
    },
    "wizard":{
      "selectedBackgroundColor": colors.dxcPurple,
      "selectedFont": colors.white
    },
    "accordion":{
      "arrowColor": colors.dxcPurple,
      "fontColor": colors.darkGrey
    },
    "dropdown":{
      "backgroundColor": colors.white,
      "fontColor": colors.black
    },
    "table":{
      "headerBackgroundColor": colors.dxcPurple,
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
    "alert": {
      "overlayColor": colors.black,
      "overlayOpacity": 0.80,
      "infoColor": colors.lightBlue,
      "confirmColor": colors.lightGreen,
      "warningColor": colors.lightYellow,
      "errorColor": colors.lightPink
    },
    "button":{
      "primaryDisabledOpacity": 0.34,
      "primaryActiveOpacity": "A3",

      "secondaryDisabledOpacity": 0.34,
      "secondaryHoverOpacity": "14",
      "secondaryActiveOpacity": "29",
      "secondaryBackgroundColor": "transparent",

      "textDisabledOpacity": 0.34,
      "textActiveOpacity": "A3",
      "textBackgroundColor": "transparent",

      "focusColor": colors.blue
    },
    "checkbox":{
      "opacityDisabled": 0.34,
      "opacityDisabledCheckColor": 0.34,
      "fontColor": colors.black,
      "focusColor": colors.blue
    },
    "radio":{
      // "disabledDotColor": 0.34,
      // "disabledBorderColor": 0.34
      "disabled": 0.34,
      "focusColor": colors.blue,
      "fontColor": "inherit"
    },
    "select":{
      "color": colors.black,
      "invalidColor": colors.darkRed,
      "focusColor": colors.blue,
      "scrollBarThumbColor": colors.darkGrey,
      "scrollBarTrackColor": colors.lightGrey,
      "disabled": 0.34,
      "hoverOptionBackgroundColor": "57"
    },
    "slider":{
      "totalLine": 0.34,
      "disabledThumbBackgroundColor": 0.34,
      "disabledDotsBackgroundColor": 0.34,
      "disabledTrackLine": 0.34,
      "disabledtotalLine": 0.34,
      "focusColor": colors.blue
    },
    "switch":{
      "checkedThumbBackgroundColor": colors.white,
      "uncheckedThumbBackgroundColor": colors.white,
      "uncheckedTrackBackgroundColor": colors.lightGrey,
      "disabledBackgroundColor": 0.34,
      "requiredColor": colors.darkRed,
      "focusColor": colors.blue,
      "fontColor": colors.black
    },
    "link":{
      "fontColor": colors.blue,
      "disabledColor": colors.lightGrey,
      "hoverFontColor": colors.linkBlue,
      "visitedFontColor": colors.purple,
      "visitedUnderlinedBackgroundColor": colors.purple,
      "underlinedBackgroundColor": colors.blue,
      "disabledUnderlinedBackgroundColor": colors.lightGrey,
    },
    "text":{
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
      "disabled": 0.34,
      "focusColor": colors.blue
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
      "arrowContainerOpacity": 0.80,
      "focusColor": colors.blue
    },
    "progressbar":{
      "fontColor": "inherit",
      "totalLineOpacity": 0.34,
      "overlayColor": colors.black,
      "overlayOpacity": 0.8
    },
    "inputText":{
      "hoverOptionBackgroundColor": "57",
      "hoverOptionColor": colors.black,
      "scrollBarThumbColor": colors.darkGrey,
      "scrollBarTrackColor": colors.lightGrey,
      "fontColor": colors.black,
      "placeholderColor": colors.lightGrey,
      "invalidColor": colors.darkRed,
      "disabled": 0.34,
      "focusColor": colors.blue
    },
    "footer":{},
    "spinner":{
      "fontColor": "inherit",
      "overlayColor": colors.black,
      "overlayOpacity": 0.8
    },
    "header":{
      "hoverHamburguerColor": "29",
      "overlayColor": colors.black + "b3",
      "focusColor": colors.blue
    },
    "heading":{
      "fontColor": "inherit",
    },
    "tabs":{
      "backgroundColor": colors.white,
      "fontColor": colors.darkGrey,
      "disabledFontColor": "33",
      "focusColor": colors.dxcPurple,
      "selectedUnderlinedColor": colors.dxcPurple,
      "divider": "33",
      "selectedIconColor": colors.dxcPurple,
      "hoverBackgroundColor": "1A",
      "pressedBackgroundColor": "33"
    },
    "toggle": {
      "disabled": 0.34
    },
    "wizard":{
      "fontColor": "inherit",
      "lineColor": colors.lightGrey,
      "disabledBackground": colors.lightGrey,
      "disabledFont": colors.darkGrey,
      "notVisitedOpacity": 0.64,
      "disabled": 0.34,
      "focusColor": colors.blue
    },
    "accordion":{
      "backgroundColor": colors.white,
      "hoverBackgroundColor": "1A",
      "disabledFontColor": "66",
      "focusOutline": colors.dxcPurple
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
      "separatorColor": colors.lightGrey,
      "bodyBackgroundColor": colors.white,
      "bodyFontColor": colors.black
    },
    "paginator": {},
    "textarea":{
      "fontColor": colors.black,
      "placeholderColor": colors.lightGrey,
      "disabled": 0.34,
      "invalidColor": colors.darkRed,
      "scrollBarThumbColor": colors.darkGrey,
      "scrollBarTrackColor": colors.lightGrey,
    }
  }
};