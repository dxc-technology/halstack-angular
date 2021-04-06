const globalTokens = {
  black: "#000000",
  lightBlack: "#212121",
  yellow: "#FFED00",
  lightGrey: "#D9D9D9",
  darkRed: "#D0011B",
  lightRed: "#FF6161",
  lightBlue: "#CEE0F5",
  lightYellow: "#FCF2BD",
  lightPink: "#F9CFCF",
  lightGreen: "#DBF1C4",
  blue: "#005FCC",
  lighterGrey: "#F8F8F8",
  violet: "#8800F6",
  darkBlue: "#006BF6",
  inherit: "inherit",
  transparent: "transparent",
  purple: "#6f2c91",
  mediumPurple: "#ead8f3",
  lightPurple: "#f5ebf9",
  lighterPurple: "#d0bddb",
  white: "#ffffff",
  darkGrey: "#666666",
  mediumGrey: "#bfbfbf",
  mediumWhite: "#f9f9f9",
  mediumBlue: "#0067b3",
  softBlue: "#b1cee6",
  darkWhite: "#eeeeee",
  lighterBlack: "#b1b1b1",
  mediumBlack: "#676767",
  mediumGreyBlack: "#dbdbdb",
  lightWhite: "#f2f2f2",
  softGrey: "#cecece",
  softBlack: "#565656",
};

export const componentTokens = {
  //ACCORDION
  "--accordion-arrowColor": globalTokens.purple,
  "--accordion-fontColor": globalTokens.darkGrey,
  "--accordion-backgroundColor": globalTokens.white,
  "--accordion-hoverBackgroundColor": globalTokens.lightPurple,
  "--accordion-disabledFontColor": globalTokens.mediumGrey,
  "--accordion-focusOutline": globalTokens.purple,

  //TABS
  "--tabs-selectedFontColor": globalTokens.purple,
  "--tabs-backgroundColor": globalTokens.white,
  "--tabs-fontColor": globalTokens.darkGrey,
  "--tabs-disabledFontColor": globalTokens.mediumGrey,
  "--tabs-focusOutline": globalTokens.purple,
  "--tabs-selectedUnderlinedColor": globalTokens.purple,
  "--tabs-divider": globalTokens.mediumGrey,
  "--tabs-selectedIconColor": globalTokens.purple,
  "--tabs-hoverBackgroundColor": globalTokens.lightPurple,
  "--tabs-pressedBackgroundColor": globalTokens.mediumPurple,

  //------------Sin Hacer---------------------

  //ALERT
  "--alert-infoColor": globalTokens.lightBlue,
  "--alert-confirmColor": globalTokens.lightGreen,
  "--alert-warningColor": globalTokens.lightYellow,
  "--alert-errorColor": globalTokens.lightPink,
  "--alert-overlayColor": globalTokens.black,
  "--alert-focusColor": globalTokens.blue, //ponerlo en el componente

  //BOX
  "--box-backgroundColor": globalTokens.white,

  //BUTTON
  "--button-primaryBackgroundColor": globalTokens.purple,
  "--button-primaryHoverBackgroundColor": globalTokens.black,
  "--button-primaryFontColor": globalTokens.white,
  "--button-primaryHoverFontColor": globalTokens.white,
  "--button-disabledPrimaryBackgroundColor": globalTokens.lighterPurple,
  "--button-primaryActiveBackgroundColor": globalTokens.mediumBlack,
  "--button-disabledPrimaryFontColor": globalTokens.white,
  "--button-secondaryFontColor": globalTokens.black,
  "--button-secondaryHoverFontColor": globalTokens.black,
  "--button-secondaryBackgroundColor": globalTokens.transparent,
  "--button-secondaryOutlinedColor": globalTokens.purple,
  "--button-hoverOutlinedColor": globalTokens.black,
  "--button-secondaryActiveBackgroundColor": globalTokens.mediumGreyBlack,
  "--button-secondaryHoverBackgroundColor": globalTokens.darkWhite,
  "--button-disabledSecondaryOutlinedColor": globalTokens.lighterPurple,
  "--button-disabledSecondaryFontColor": globalTokens.lighterBlack,
  "--button-textHoverBackgroundColor": globalTokens.black,
  "--button-textActiveBackgroundColor": globalTokens.mediumBlack,
  "--button-textFontColor": globalTokens.purple,
  "--button-textHoverFontColor": globalTokens.white,
  "--button-textBackgroundColor": globalTokens.transparent,
  "--button-disabledTextFontColor": globalTokens.lighterPurple,
  "--button-focusColor": globalTokens.blue,

  //CARD
  "--card-backgroundColor": globalTokens.white,

  //CHECKBOX
  "--checkbox-borderColor": globalTokens.mediumBlue,
  "--checkbox-checkColor": globalTokens.white,
  "--checkbox-backgroundColorChecked": globalTokens.mediumBlue,
  "--checkbox-fontColor": globalTokens.inherit,
  "--checkbox-focusColor": globalTokens.blue,
  "--checkbox-disabledBackgroundColorChecked": globalTokens.softBlue,
  "--checkbox-disabledBorderColor": globalTokens.softBlue,
  "--checkbox-disabledCheckColor": globalTokens.white,
  "--checkbox-disabledFontColor": globalTokens.lighterBlack,

  //CHIP
  "--chip-backgroundColor": globalTokens.darkWhite,
  "--chip-outlinedColor": "",
  "--chip-fontColor": globalTokens.black,
  "--chip-focusColor": globalTokens.blue, //no esta en react
  "--chip-disabledBackgroundColor": globalTokens.mediumWhite,
  "--chip-disabledFontColor": globalTokens.lighterBlack,

  //DATE
  "--date-pickerSelectedDateBackgroundColor": globalTokens.purple,
  "--date-pickerSelectedDateColor": globalTokens.white,
  "--date-pickerBackgroundColor": globalTokens.white,
  "--date-pickerActualDate": globalTokens.lightGrey,
  "--date-pickerFontColor": globalTokens.black,
  "--date-pickerHoverDateFontColor": globalTokens.black,
  "--date-pickerHoverDateBackgroundColor": globalTokens.lighterPurple,
  "--date-focusColor": globalTokens.blue,

  //DIALOG
  "--dialog-overlayColor": globalTokens.black,
  "--dialog-backgroundColor": globalTokens.white,
  "--dialog-scrollBarThumbColor": globalTokens.darkGrey,
  "--dialog-scrollBarTrackColor": globalTokens.lightGrey,

  //DROPDOWN
  "--dropdown-backgroundColor": globalTokens.white,
  "--dropdown-fontColor": globalTokens.black,
  "--dropdown-dropdownBackgroundColor": globalTokens.white,
  "--dropdown-dropdownFontColor": globalTokens.black,
  "--dropdown-hoverBackgroundOption": globalTokens.white,
  "--dropdown-hoverBackgroundColor": globalTokens.white,
  "--dropdown-scrollBarThumbColor": globalTokens.darkGrey,
  "--dropdown-scrollBarTrackColor": globalTokens.lightGrey,
  "--dropdown-focusColor": globalTokens.blue, //añadir al componente

  //FOOTER
  "--footer-backgroundColor": globalTokens.black,
  "--footer-fontColor": globalTokens.white,
  "--footer-lineColor": globalTokens.mediumBlue,

  //HEADER
  "--header-backgroundColor": globalTokens.white,
  "--header-underlinedColor": globalTokens.black,
  "--header-fontColor": globalTokens.black,
  "--header-backgroundColorMenu": globalTokens.white,
  "--header-fontColorMenu": globalTokens.black,
  "--header-hamburguerColor": globalTokens.black,
  "--header-hoverHamburguerColor": globalTokens.mediumGreyBlack,
  "--header-overlayColor": globalTokens.softBlack,
  "--header-focusColor": globalTokens.blue,

  //HEADING
  "--heading-fontColor": globalTokens.inherit,

  //INPUT TEXT
  "--inputText-selectedOptionBackgroundColor": globalTokens.lightGrey,
  "--inputText-placeholderColor": globalTokens.lightGrey,
  "--inputText-error": globalTokens.darkRed,
  "--inputText-focusColor": globalTokens.blue,
  "--inputText-fontColor": globalTokens.black,
  "--inputText-scrollBarThumbColor": globalTokens.darkGrey,
  "--inputText-scrollBarTrackColor": globalTokens.lightGrey,
  "--inputText-disabledFontColor": globalTokens.lighterBlack,

  //LINK
  "--link-fontColor": globalTokens.blue,
  "--link-visitedFontColor": globalTokens.violet,
  "--link-disabledColor": globalTokens.lightGrey,
  "--link-hoverFontColor": globalTokens.darkBlue,
  "--link-underlinedBackgroundColor": globalTokens.blue,
  "--link-disabledUnderlinedBackgroundColor": globalTokens.lightGrey,
  "--link-visitedUnderlinedBackgroundColor": globalTokens.violet,

  //PAGINATOR
  "--paginator-paginatorBackgroundColor": globalTokens.darkWhite,
  "--paginator-paginatorFontColor": globalTokens.black,

  //PROGRESSBAR
  "--progressBar-trackLine": globalTokens.purple,
  "--progressBar-totalLine": globalTokens.softGrey,
  "--progressBar-overlayColor": globalTokens.black,
  "--progressBar-fontColor": globalTokens.inherit,

  //RADIO
  "--radio-color": globalTokens.black,
  "--radio-disabledColor": globalTokens.lighterBlack,
  "--radio-fontColor": globalTokens.inherit,
  "--radio-disabledFontColor": globalTokens.lighterBlack,
  "--radio-focusColor": globalTokens.blue,

  //SELECT
  "--select-selectedOptionBackgroundColor": globalTokens.lightGrey,
  "--select-color": globalTokens.black,
  "--select-error": globalTokens.darkRed,
  "--select-focusColor": globalTokens.blue,
  "--select-disabledColor": globalTokens.lighterBlack,
  "--select-scrollBarThumbColor": globalTokens.darkGrey,
  "--select-scrollBarTrackColor": globalTokens.lightGrey,
  "--select-hoverOptionBackgroundColor": globalTokens.lightWhite,

  //SIDENAV
  "--sidenav-backgroundColor": globalTokens.lighterGrey,
  "--sidenav-arrowContainerColor": globalTokens.lightGrey,
  "--sidenav-arrowColor": globalTokens.black,

  //SLIDER
  "--slider-thumbBackgroundColor": globalTokens.mediumBlue,
  "--slider-dotsBackgroundColor": globalTokens.mediumBlue,
  "--slider-trackLine": globalTokens.mediumBlue,
  "--slider-totalLine": globalTokens.softBlue,
  "--slider-disabledThumbBackgroundColor": globalTokens.softBlue,
  "--slider-disabledDotsBackgroundColor": globalTokens.softBlue,
  "--slider-disabledTrackLine": globalTokens.softBlue,
  "--slider-disabledtotalLine": globalTokens.softBlue,
  "--slider-focusColor": globalTokens.blue,

  //SPINNER
  "--spinner-trackCircleColor": globalTokens.purple,
  "--spinner-totalCircleColor": globalTokens.white,
  "--spinner-overlayColor": globalTokens.black,
  "--spinner-fontColor": globalTokens.inherit,

  //SWITCH
  "--switch-checkedTrackBackgroundColor": globalTokens.purple,
  "--switch-checkedThumbBackgroundColor": globalTokens.white,
  "--switch-uncheckedThumbBackgroundColor": globalTokens.white,
  "--switch-uncheckedTrackBackgroundColor": globalTokens.lightGrey,
  "--switch-requiredColor": globalTokens.darkRed,
  "--switch-focusColor": globalTokens.blue,
  "--switch-fontColor": globalTokens.black,
  "--switch-disabledCheckedTrackBackgroundColor": globalTokens.lighterPurple,
  "--switch-disabledUncheckedTrackBackgroundColor": globalTokens.lightWhite,
  "--switch-disabledFontColor": globalTokens.lighterBlack,

  //TABLE
  "--table-headerBackgroundColor": globalTokens.purple,
  "--table-headerFontColor": globalTokens.white,
  "--table-separatorColor": globalTokens.lightGrey,
  "--table-bodyBackgroundColor": globalTokens.white,
  "--table-bodyFontColor": globalTokens.black,
  "--table-scrollBarThumbColor": globalTokens.darkGrey,
  "--table-scrollBarTrackColor": globalTokens.lightGrey,

  //TAG
  "--tag-backgroundColor": globalTokens.white,

  //TEXTAREA
  "--textarea-fontColor": globalTokens.black,
  "--textarea-placeholderColor": globalTokens.lightGrey,
  "--textarea-disabledFontColor": globalTokens.lighterBlack,
  "--textarea-error": globalTokens.darkRed,
  "--textarea-scrollBarThumbColor": globalTokens.darkGrey,
  "--textarea-scrollBarTrackColor": globalTokens.lightGrey,

  //TOGGLE GROUP
  "--toggle-unselectedBackgroundColor": globalTokens.lightGrey,
  "--toggle-unselectedBackgroundHoverColor": globalTokens.darkWhite,
  "--toggle-unselectedFontColor": globalTokens.black,
  "--toggle-unselectedHoverFontColor": globalTokens.black,
  "--toggle-selectedBackgroundColor": globalTokens.purple,
  "--toggle-selectedHoverBackgroundColor": globalTokens.black,
  "--toggle-selectedFontColor": globalTokens.white,
  "--toggle-selectedHoverFontColor": globalTokens.white,
  "--toggle-disabledSelectedBackgroundColor": globalTokens.lighterPurple,
  "--toggle-disabledSelectedFontColor": globalTokens.white,
  "--toggle-disabledUnselectedBackgroundColor": globalTokens.lighterPurple,
  "--toggle-disabledUnselectedFontColor": globalTokens.lightGrey,

  //UPLOAD
  "--upload-fontColor": globalTokens.darkGrey,
  "--upload-shadowColor": globalTokens.lightWhite,
  "--upload-backgroundDragColor": globalTokens.lightWhite,
  "--upload-accentColor": globalTokens.lightGrey,
  "--upload-fileHoverColor": globalTokens.darkWhite,
  "--upload-scrollBarThumbColor": globalTokens.darkGrey,
  "--upload-scrollBarTrackColor": globalTokens.lightGrey,
  "--upload-errorColor": globalTokens.darkRed,

  //WIZARD
  "--wizard-selectedBackgroundColor": globalTokens.purple,
  "--wizard-selectedFont": globalTokens.white,
  "--wizard-borderColor": globalTokens.black,
  "--wizard-fontColor": globalTokens.inherit,
  "--wizard-lineColor": globalTokens.lightGrey,
  "--wizard-disabledBackground": globalTokens.lightGrey,
  "--wizard-disabledFont": globalTokens.darkGrey,
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
