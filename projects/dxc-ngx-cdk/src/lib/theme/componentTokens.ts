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
    "--alert-overlayOpacity": 0.80,

    //BOX
    //No Themable
    "--box-backgroundColor": globalTokens.white,

    // //BUTTON
    // //Themable
    // "--button-color": globalTokens.purple,
    // "--button-hoverColor": globalTokens.black,
    // "--button-primaryFontColor": globalTokens.white,
    // "--button-primaryHoverFontColor": globalTokens.white,
    // "--button-secondaryFontColor": globalTokens.black,
    // "--button-secondaryHoverFontColor": globalTokens.black,
    // "--button-textFontColor": globalTokens.purple,
    // "--button-textHoverFontColor": globalTokens.white,
    // //No Themable
    // "--button-primaryDisabledOpacity": 0.34,
    // "--button-primaryActiveOpacity": globalTokens.mediumPurple,
    // "--button-primaryActiveHoverOpacity":
    //   theme.properties["button"]["hoverColor"] +
    //   theme.properties["button"]["primaryActiveOpacity"],
    // "--button-secondaryDisabledOpacity": 0.34,
    // "--button-secondaryActiveOpacity":
    //   theme.properties["button"]["color"] +
    //   theme.properties["button"]["secondaryActiveOpacity"],
    // "--button-secondaryActiveHoverOpacity":
    //   theme.properties["button"]["hoverColor"] +
    //   theme.properties["button"]["secondaryActiveOpacity"],
    // "--button-secondaryHoverOpacity":
    //   theme.properties["button"]["hoverColor"] +
    //   theme.properties["button"]["secondaryHoverOpacity"],
    // "--button-secondaryBackgroundColor": globalTokens.transparent,
    // "--button-textDisabledOpacity": 0.34,
    // "--button-textActiveOpacity":
    //   theme.properties["button"]["color"] +
    //   theme.properties["button"]["textActiveOpacity"],
    // "--button-textActiveHoverOpacity":
    //   theme.properties["button"]["hoverColor"] +
    //   theme.properties["button"]["textActiveOpacity"],
    // "--button-textBackgroundColor": globalTokens.transparent,
    // "--button-focusColor": globalTokens.blue,

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

};
