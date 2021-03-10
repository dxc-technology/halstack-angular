const globalTokens = {
  black: "#000000",
  lightBlack: "#212121",
  mediumBlack: "#000000B3",
  white: "#FFFFFF",
  darkWhite: "#EEEEEE",
  yellow: "#FFED00",
  darkGrey: "#666666",
  lightGrey: "#D9D9D9",
  lighterGrey: "#F8F8F8",
  mediumGrey: "#BFBFBF",
  darkRed: "#D0011B",
  lightRed: "#FF6161",
  lightBlue: "#CEE0F5",
  lightYellow: "#FCF2BD",
  lightPink: "#F9CFCF",
  lightGreen: "#DBF1C4",
  red: "D0011B",
  violet: "8800F6",
  darkBlue: "006BF6",
  inherit: "inherit",
  transparent: "transparent",
  purple: "#6F2C91",
  mediumPurple: "#EAD8F3",
  lightPurple: "#F5EBF9",
  blue: "#005FCC",
};

export const componentTokens = {
  //ACCORDION
  //Themable
  "--accordion-arrowColor": globalTokens.purple,
  "--accordion-fontColor": globalTokens.darkGrey,
  //No Themable
  "--accordion-backgroundColor": globalTokens.white,
  "--accordion-hoverBackgroundColor": globalTokens.lightPurple,
  "--accordion-disabledFontColor": globalTokens.mediumGrey,
  "--accordion-focusOutline": globalTokens.purple,

  //TABS
  //Themable
  "--tabs-selectedFontColor": globalTokens.purple,
  //No Themable
  "--tabs-backgroundColor": globalTokens.white,
  "--tabs-fontColor": globalTokens.darkGrey,
  "--tabs-disabledFontColor": globalTokens.mediumGrey,
  "--tabs-focusColor": globalTokens.purple,
  "--tabs-selectedUnderlinedColor": globalTokens.purple,
  "--tabs-divider": globalTokens.mediumGrey,
  "--tabs-selectedIconColor": globalTokens.purple,
  "--tabs-hoverBackgroundColor": globalTokens.lightPurple,
  "--tabs-pressedBackgroundColor": globalTokens.mediumPurple,

  //------------Sin Hacer---------------------

  //ALERT
  //No Themable
  "--alert-infoColor": globalTokens.lightBlue,
  "--alert-confirmColor": globalTokens.lightGreen,
  "--alert-warningColor": globalTokens.lightYellow,
  "--alert-errorColor": globalTokens.lightPink,
  "--alert-overlayColor": globalTokens.black,
  "--alert-overlayOpacity": 0.8,

  //BOX
  //No Themable
  "--box-backgroundColor": globalTokens.white,

  //BUTTON
  //Themable
  "--button-color": globalTokens.purple,
  "--button-hoverColor": globalTokens.black,
  "--button-primaryFontColor": globalTokens.white,
  "--button-primaryHoverFontColor": globalTokens.white,
  "--button-secondaryFontColor": globalTokens.black,
  "--button-secondaryHoverFontColor": globalTokens.black,
  "--button-textFontColor": globalTokens.purple,
  "--button-textHoverFontColor": globalTokens.white,
  //No Themable
  "--button-primaryDisabledOpacity": 0.34,
  "--button-primaryActiveOpacity": globalTokens.mediumPurple,
  "--button-primaryActiveHoverOpacity": globalTokens.darkGrey,
  "--button-secondaryDisabledOpacity": 0.34,
  "--button-secondaryActiveOpacity": globalTokens.lightPurple,
  "--button-secondaryActiveHoverOpacity": globalTokens.lightGrey,
  "--button-secondaryHoverOpacity": globalTokens.lightGrey,
  "--button-secondaryBackgroundColor": globalTokens.transparent,
  "--button-textDisabledOpacity": 0.34,
  "--button-textActiveOpacity": globalTokens.mediumPurple,
  "--button-textActiveHoverOpacity": globalTokens.darkGrey,
  "--button-textBackgroundColor": globalTokens.transparent,
  "--button-focusColor": globalTokens.blue,

  //CARD
  //No Themable
  "--card-backgroundColor": globalTokens.white,

  //CHECKBOX
  //Themable
  "--checkbox-color": globalTokens.blue,
  "--checkbox-checkColor": globalTokens.white,
  //No Themable
  "--checkbox-fontColor": globalTokens.black,
  "--checkbox-opacityDisabled": 0.34,
  "--checkbox-opacityDisabledCheckColor": 0.34,
  "--checkbox-focusColor": globalTokens.blue,

  //CHIP
  //Themable
  "--chip-backgroundColor": globalTokens.darkWhite,
  "--chip-outlinedColor": "",
  "--chip-fontColor": globalTokens.black,
  //No Themable
  "--chip-focusColor": globalTokens.blue,
  "--chip-disabled": 0.34,

  //DATE
  //Themable
  "--date-pickerSelectedDateBackgroundColor": globalTokens.purple,
  "--date-pickerSelectedDateColor": globalTokens.white,
  //No Themable
  "--date-pickerBackgroundColor": globalTokens.white,
  "--date-pickerTextColor": globalTokens.black,
  "--date-pickerActualDate": globalTokens.lightGrey,
  "--date-pickerHoverDateBackgroundColor": globalTokens.mediumPurple,
  "--date-pickerHoverDateTextColor": globalTokens.black,
  "--date-invalidColor": globalTokens.darkRed,
  "--date-focusColor": globalTokens.blue,

  //DIALOG
  //No Themable
  "--dialog-overlayColor": globalTokens.black + "CC",
  "--dialog-separator": globalTokens.lightGrey,
  "--dialog-backgroundColor": globalTokens.white,
  "--dialog-scrollBarThumbColor": globalTokens.darkGrey,
  "--dialog-scrollBarTrackColor": globalTokens.lightGrey,

  //DROPDOWN
  //Themable
  "--dropdown-backgroundColor": globalTokens.white,
  "--dropdown-fontColor": globalTokens.black,
  //No Themable
  "--dropdown-dropdownBackgroundColor": globalTokens.white,
  "--dropdown-dropdownFontColor": globalTokens.black,
  "--dropdown-hoverBackgroundOption": globalTokens.white + "57",
  "--dropdown-hoverBackgroundColor": globalTokens.white,
  "--dropdown-disabled": 0.34,
  "--dropdown-scrollBarThumbColor": globalTokens.darkGrey,
  "--dropdown-scrollBarTrackColor": globalTokens.lightGrey,

  //FOOTER
  //Themable
  "--footer-logo": "assets/dxc_logo_wht.png",
  "--footer-backgroundColor": globalTokens.black,
  "--footer-fontColor": globalTokens.white,
  "--footer-lineColor": globalTokens.blue,

  //HEADER
  //Themable
  "--header-backgroundColor": globalTokens.white,
  "--header-underlinedColor": globalTokens.black,
  "--header-fontColor": globalTokens.black,
  "--header-backgroundColorMenu": globalTokens.white,
  "--header-fontColorMenu": globalTokens.black,
  "--header-hamburguerColor": globalTokens.black,
  //No Themable
  "--header-hoverHamburguerColor": globalTokens.mediumGrey,
  "--header-overlayColor": globalTokens.black + "b3",
  "--header-focusColor": globalTokens.blue,

  //HEADER
  //No Themable
  "--heading-fontColor": globalTokens.inherit,

  //LINK
  //No Themable
  "--link-fontColor": globalTokens.blue,
  "--link-visitedFontColor": globalTokens.purple,
  "--link-disabledColor": globalTokens.lightGrey,
  "--link-hoverFontColor": globalTokens.darkBlue,
  "--link-underlinedBackgroundColor": globalTokens.blue,
  "--link-disabledUnderlinedBackgroundColor": globalTokens.lightGrey,
  "--link-visitedUnderlinedBackgroundColor": globalTokens.purple,

  //PAGINATOR
  //Themable
  "--paginator-paginatorBackgroundColor": globalTokens.darkWhite,
  "--paginator-paginatorFontColor": globalTokens.black,

  //PROGRESSBAR
  //Themable
  "--progressbar-trackLine": globalTokens.purple,
  "--progressbar-totalLine": globalTokens.darkGrey,
  //No Themable
  "--progressbar-totalLineOpacity": 0.34,
  "--progressbar-overlayColor": globalTokens.black,
  "--progressbar-overlayOpacity": 0.8,
  "--progressbar-fontColor": globalTokens.inherit,

  //RADIO
  //Themable
  "--radio-color": globalTokens.black,
  //No Themable
  "--radio-fontColor": globalTokens.inherit,
  "--radio-disabled": 0.34,
  "--radio-focusColor": globalTokens.blue,

  //SELECT
  //Themable
  "--select-selectedOptionBackgroundColor": globalTokens.lightGrey,
  //No Themable
  "--select-color": globalTokens.black,
  "--select-invalidColor": globalTokens.darkRed,
  "--select-focusColor": globalTokens.blue,
  "--select-disabled": 0.34,
  "--select-scrollBarThumbColor": globalTokens.darkGrey,
  "--select-scrollBarTrackColor": globalTokens.lightGrey,
  "--select-hoverOptionBackgroundColor": globalTokens.lighterGrey,

  //SIDENAV
  //Themable
  "--sidenav-backgroundColor": globalTokens.lighterGrey,
  "--sidenav-arrowContainerColor": globalTokens.lightGrey,
  "--sidenav-arrowColor": globalTokens.black,
  //No Themable
  "--sidenav-arrowContainerOpacity": 0.8,
  "--sidenav-focusColor": globalTokens.blue,

  //SLIDER
  //Themable
  "--slider-color": globalTokens.blue,
  //No Themable
  "--slider-totalLine": 0.34,
  "--slider-disabledThumbBackgroundColor": 0.34,
  "--slider-disabledDotsBackgroundColor": 0.34,
  "--slider-disabledTrackLine": 0.34,
  "--slider-disabledtotalLine": 0.34,
  "--slider-focusColor": globalTokens.blue,

  //SPINNER
  //Themable
  "--spinner-trackCircleColor": globalTokens.purple,
  "--spinner-totalCircleColor": globalTokens.white,
  //No Themable
  "--spinner-overlayColor": globalTokens.black,
  "--spinner-overlayOpacity": 0.8,
  "--spinner-fontColor": globalTokens.inherit,

  //SWITCH
  //Themable
  "--switch-checkedTrackBackgroundColor": globalTokens.purple,
  //No Themable
  "--switch-checkedThumbBackgroundColor": globalTokens.white,
  "--switch-uncheckedThumbBackgroundColor": globalTokens.white,
  "--switch-uncheckedTrackBackgroundColor": globalTokens.lightGrey,
  "--switch-disabled": 0.34,
  "--switch-requiredColor": globalTokens.darkRed,
  "--switch-focusColor": globalTokens.blue,
  "--switch-fontColor": globalTokens.black,

  //TABLE
  //Themable
  "--table-headerBackgroundColor": globalTokens.purple,
  "--table-headerFontColor": globalTokens.white,
  //No Themable
  "--table-separatorColor": globalTokens.lightGrey,
  "--table-bodyBackgroundColor": globalTokens.white,
  "--table-bodyFontColor": globalTokens.black,

  //TAG
  //No Themable
  "--tag-backgroundColor": globalTokens.white,

  //TEXT INPUT
  //Themable
  "--inputText-selectedOptionBackgroundColor": globalTokens.lightGrey,
  //No Themable
  "--inputText-placeholderColor": globalTokens.lightGrey,
  "--inputText-disabled": 0.34,
  "--inputText-invalidColor": globalTokens.darkRed,
  "--inputText-focusColor": globalTokens.blue,
  "--inputText-fontColor": globalTokens.black,
  "--inputText-hoverOptionBackgroundColor": globalTokens.lighterGrey,
  "--inputText-hoverOptionColor": globalTokens.black,
  "--inputText-scrollBarThumbColor": globalTokens.darkGrey,
  "--inputText-scrollBarTrackColor": globalTokens.lightGrey,

  //TEXTAREA
  //No Themable
  "--textarea-fontColor": globalTokens.black,
  "--textarea-placeholderColor": globalTokens.lightGrey,
  "--textarea-disabled": 0.34,
  "--textarea-invalidColor": globalTokens.darkRed,
  "--textarea-scrollBarThumbColor": globalTokens.darkGrey,
  "--textarea-scrollBarTrackColor": globalTokens.lightGrey,

  //TOGGLE GROUP
  //Themable
  "--toggle-unselectedBackgroundColor": globalTokens.lightGrey,
  "--toggle-unselectedHoverBackgroundColor": globalTokens.darkWhite,
  "--toggle-unselectedFontColor": globalTokens.black,
  "--toggle-unselectedHoverFontColor": globalTokens.black,
  "--toggle-selectedBackgroundColor": globalTokens.purple,
  "--toggle-selectedHoverBackgroundColor": globalTokens.black,
  "--toggle-selectedFontColor": globalTokens.white,
  "--toggle-selectedHoverFontColor": globalTokens.white,
  //No Themable
  "--toggle-disabled": 0.34,

  //WIZARD
  //Themable
  "--wizard-selectedBackgroundColor": globalTokens.purple,
  "--wizard-selectedFont": globalTokens.white,
  //No Themable
  "--wizard-fontColor": globalTokens.inherit,
  "--wizard-lineColor": globalTokens.lightGrey,
  "--wizard-disabledBackground": globalTokens.lightGrey,
  "--wizard-disabledFont": globalTokens.darkGrey,
  "--wizard-notVisitedOpacity": 0.64,
  "--wizard-disabled": 0.34,
  "--wizard-focusColor": globalTokens.blue,
};

export const componentIcons = {
  footer: {
    logo: "assets/dxc_logo_wht.png",
  },
  header: {
    logo: "assets/dxc_logo_blk_rgb.svg",
    logoResponsive: "assets/dxc_logo_blk_rgb.svg",
  },
};
