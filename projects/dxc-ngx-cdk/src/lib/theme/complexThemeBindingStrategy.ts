import { MappingStrategy } from "./mappingStrategy";
import * as Color from "color";
import rgbHex from "rgb-hex";

export class ComplexThemeBindingStrategy implements MappingStrategy {
  constructor() {}

  addLightness(hexColor: String, increaseLightness: number) {
    if (hexColor) {
      const color = Color(hexColor);
      const hslColor = color.hsl();
      const lightnessColor = hslColor.color[2];
      return hslColor.lightness(lightnessColor + increaseLightness).hex();
    }
    return null;
  }

  addOpacity(hexColor: String, increaseOpacity: number) {
    if (hexColor) {
      const color = Color(hexColor);
      console.log();
      return (
        "#" +
        rgbHex(color.color[0], color.color[1], color.color[2], increaseOpacity)
      );
    }
    return null;
  }

  bindProperties(theme: any, tokens: any) {
    let proccessedTokens = tokens;

    //ACCORDION
    proccessedTokens["--accordion-arrowColor"] =
      theme?.accordion?.accentColor ?? tokens["--accordion-arrowColor"];
    proccessedTokens["--accordion-hoverBackgroundColor"] =
      this.addLightness(theme?.accordion?.accentColor, 53) ??
      tokens["--accordion-hoverBackgroundColor"];
    proccessedTokens["--accordion-fontColor"] =
      theme?.accordion?.textColor ?? tokens["--accordion-fontColor"];
    proccessedTokens["--accordion-focusOutline"] =
      theme?.accordion?.accentColor ?? tokens["--accordion-arrowColor"];
    proccessedTokens["--accordion-disabledFontColor"] =
      this.addLightness(theme?.accordion?.textColor, 35) ??
      tokens["--accordion-disabledFontColor"];

    //TABS
    proccessedTokens["--tabs-selectedFontColor"] =
      theme?.tabs?.baseColor ?? tokens["--tabs-selectedFontColor"];
    proccessedTokens["--tabs-selectedIconColor"] =
      theme?.tabs?.baseColor ?? tokens["--tabs-selectedFontColor"];
    proccessedTokens["--tabs-selectedUnderlinedColor"] =
      theme?.tabs?.baseColor ?? tokens["--tabs-selectedFontColor"];
    proccessedTokens["--tabs-focusOutline"] =
      theme?.tabs?.baseColor ?? tokens["--tabs-selectedFontColor"];
    proccessedTokens["--tabs-hoverBackgroundColor"] =
      this.addLightness(theme?.tabs?.baseColor, 58) ??
      tokens["--tabs-hoverBackgroundColor"];
    proccessedTokens["--tabs-pressedBackgroundColor"] =
      this.addLightness(theme?.tabs?.baseColor, 53) ??
      tokens["--tabs-pressedBackgroundColor"];

    //------------Sin Hacer---------------------

    //BUTTON
    proccessedTokens["--button-primaryBackgroundColor"] =
      theme?.button?.baseColor ?? tokens["--button-primaryBackgroundColor"];
    proccessedTokens["--button-primaryHoverBackgroundColor"] =
      theme?.button?.hoverBaseColor ??
      tokens["--button-primaryHoverBackgroundColor"];
    proccessedTokens["--button-primaryFontColor"] =
      theme?.button?.primaryTextColor ?? tokens["--button-primaryFontColor"];
    proccessedTokens["--button-primaryHoverFontColor"] =
      theme?.button?.primaryHoverTextColor ??
      tokens["--button-primaryHoverFontColor"];
    proccessedTokens["--button-disabledPrimaryFontColor"] =
      this.addOpacity(theme?.button?.primaryTextColor, 0.34) ??
      tokens["--button-disabledPrimaryFontColor"];
    proccessedTokens["--button-disabledPrimaryBackgroundColor"] =
      this.addOpacity(theme?.button?.baseColor, 0.34) ??
      tokens["--button-disabledPrimaryBackgroundColor"];
    proccessedTokens["--button-secondaryOutlinedColor"] =
      theme?.button?.baseColor ?? tokens["--button-secondaryOutlinedColor"];
    proccessedTokens["--button-secondaryFontColor"] =
      theme?.button?.secondaryTextColor ??
      tokens["--button-secondaryFontColor"];
    proccessedTokens["--button-secondaryHoverFontColor"] =
      theme?.button?.secondaryHoverTextColor ??
      tokens["--button-secondaryHoverFontColor"];
    proccessedTokens["--button-disabledSecondaryOutlinedColor"] =
      this.addOpacity(theme?.button?.baseColor, 0.34) ??
      tokens["--button-disabledSecondaryOutlinedColor"];
    proccessedTokens["--button-disabledSecondaryFontColor"] =
      this.addOpacity(theme?.button?.secondaryTextColor, 0.34) ??
      tokens["--button-disabledSecondaryFontColor"];
    proccessedTokens["--button-textHoverBackgroundColor"] =
      theme?.button?.hoverBaseColor ?? tokens["--button-textHoverBackgroundColor"];
    proccessedTokens["--button-textFontColor"] =
      theme?.button?.textFontColor ?? tokens["--button-textFontColor"];
    proccessedTokens["--button-textHoverFontColor"] =
      theme?.button?.hoverTextColor ??
      tokens["--button-textHoverFontColor"];
    proccessedTokens["--button-disabledTextFontColor"] =
      this.addOpacity(theme?.button?.textFontColor, 0.34) ??
      tokens["--button-disabledTextFontColor"];

    //CHECKBOX
    proccessedTokens["--checkbox-borderColor"] =
      theme?.checkbox?.baseColor ?? tokens["--checkbox-borderColor"];
    proccessedTokens["--checkbox-checkColor"] =
      theme?.checkbox?.checkColor ?? tokens["--checkbox-checkColor"];
    proccessedTokens["--checkbox-backgroundColorChecked"] =
      theme?.checkbox?.baseColor ?? tokens["--checkbox-backgroundColorChecked"];
    proccessedTokens["--checkbox-disabledBackgroundColorChecked"] =
      this.addOpacity(theme?.checkbox?.baseColor, 0.34) ??
      tokens["--checkbox-disabledBackgroundColorChecked"];
    proccessedTokens["--checkbox-disabledBorderColor"] =
      this.addOpacity(theme?.checkbox?.baseColor, 0.34) ??
      tokens["--checkbox-disabledBorderColor"];
    proccessedTokens["--checkbox-disabledCheckColor"] =
      this.addOpacity(theme?.checkbox?.checkColor, 0.34) ??
      tokens["--checkbox-disabledCheckColor"];

    //CHIP
    proccessedTokens["--chip-backgroundColor"] =
      theme?.chip?.baseColor ?? tokens["--chip-backgroundColor"];
    proccessedTokens["--chip-outlinedColor"] =
      theme?.chip?.accentColor ?? tokens["--chip-outlinedColor"];
    proccessedTokens["--chip-fontColor"] =
      theme?.chip?.textColor ?? tokens["--chip-fontColor"];
    proccessedTokens["--chip-disabledBackgroundColor"] =
      this.addOpacity(theme?.chip?.baseColor, 0.34) ??
      tokens["--chip-disabledBackgroundColor"];
    proccessedTokens["--chip-disabledFontColor"] =
      this.addOpacity(theme?.chip?.textColor, 0.34) ??
      tokens["--chip-disabledFontColor"];

    //DATE
    proccessedTokens["--date-pickerSelectedDateBackgroundColor"] =
      theme?.date?.baseColor ??
      tokens["--date-pickerSelectedDateBackgroundColor"];
    proccessedTokens["--date-pickerSelectedDateColor"] =
      theme?.date?.accentColor ??
      tokens["--date-pickerSelectedDateColor"];
    proccessedTokens["--date-pickerHoverDateBackgroundColor"] =
      this.addOpacity(theme?.date?.baseColor, 0.34) ??
      tokens["--date-pickerHoverDateBackgroundColor"];

    //DROPDOWN
    proccessedTokens["--dropdown-backgroundColor"] =
      theme?.dropdown?.baseColor ?? tokens["--dropdown-backgroundColor"];
    proccessedTokens["--dropdown-fontColor"] =
      theme?.dropdown?.textColor ?? tokens["--dropdown-fontColor"];
    proccessedTokens["--dropdown-hoverBackgroundColor"] =
      this.addOpacity(theme?.dropdown?.baseColor, 0.8) ??
      tokens["--dropdown-hoverBackgroundColor"];
    proccessedTokens["--dropdown-hoverBackgroundOption"] =
      this.addOpacity(theme?.dropdown?.baseColor, 0.34) ??
      tokens["--dropdown-hoverBackgroundOption"];

    //FOOTER
    proccessedTokens["--footer-backgroundColor"] =
      theme?.footer?.baseColor ?? tokens["--footer-backgroundColor"];
    proccessedTokens["--footer-fontColor"] =
      theme?.footer?.textColor ?? tokens["--footer-fontColor"];
    proccessedTokens["--footer-lineColor"] =
      theme?.footer?.accentColor ?? tokens["--footer-lineColor"];

    //HEADER
    proccessedTokens["--header-backgroundColor"] =
      theme?.header?.baseColor ?? tokens["--header-backgroundColor"];
    proccessedTokens["--header-underlinedColor"] =
      theme?.header?.accentColor ?? tokens["--header-underlinedColor"];
    proccessedTokens["--header-fontColor"] =
      theme?.header?.textColor ?? tokens["--header-fontColor"];
    proccessedTokens["--header-backgroundColorMenu"] =
      theme?.header?.menuBaseColor ??
      tokens["--header-backgroundColorMenu"];
    proccessedTokens["--header-hamburguerColor"] =
      theme?.header?.hamburguerColor ?? tokens["--header-hamburguerColor"];
    proccessedTokens["--header-hoverHamburguerColor"] =
      this.addOpacity(theme?.header?.hamburguerColor, 0.16) ??
      tokens["--header-hamburguerColor"];

    //INPUT TEXT
    proccessedTokens["--inputText-selectedOptionBackgroundColor"] =
      this.addOpacity(theme?.inputText?.selectedBaseColor, 0.34) ??
      tokens["--inputText-selectedOptionBackgroundColor"];

    //PAGINATOR
    proccessedTokens["--paginator-paginatorBackgroundColor"] =
      theme?.paginator?.baseColor ??
      tokens["--paginator-paginatorBackgroundColor"];
    proccessedTokens["--paginator-paginatorFontColor"] =
      theme?.paginator?.accentColor ??
      tokens["--paginator-paginatorFontColor"];

    //PROGRESSBAR
    proccessedTokens["--progressBar-trackLine"] =
      theme?.progressBar?.accentColor ?? tokens["--progressBar-trackLine"];
    proccessedTokens["--progressBar-totalLine"] =
      this.addOpacity(theme?.progressBar?.baseColor, 0.34) ??
      tokens["--progressBar-totalLine"];

    //RADIO
    proccessedTokens["--radio-color"] =
      theme?.radio?.baseColor ?? tokens["--radio-color"];
    proccessedTokens["--radio-disabledColor"] =
      this.addOpacity(theme?.radio?.baseColor, 0.34) ??
      tokens["--radio-disabledColor"];

    //SELECT
    proccessedTokens["--select-selectedOptionBackgroundColor"] =
      theme?.select?.baseColor ??
      tokens["--select-selectedOptionBackgroundColor"];
    proccessedTokens["--select-hoverOptionBackgroundColor"] =
      this.addOpacity(theme?.select?.baseColor, 0.34) ??
      tokens["--select-hoverOptionBackgroundColor"];

    //SIDENAV
    proccessedTokens["--sidenav-backgroundColor"] =
      theme?.sidenav?.baseColor ?? tokens["--sidenav-backgroundColor"];
    proccessedTokens["--sidenav-arrowContainerColor"] =
      this.addOpacity(theme?.sidenav?.arrowBaseColor, 0.34) ??
      tokens["--sidenav-arrowContainerColor"];
    proccessedTokens["--sidenav-arrowColor"] =
      theme?.sidenav?.arrowAccentColor ?? tokens["--sidenav-arrowColor"];

    //SLIDER
    proccessedTokens["--slider-totalLine"] =
      this.addOpacity(theme?.slider?.baseColor, 0.34) ??
      tokens["--slider-totalLine"];
    proccessedTokens["--slider-disabledThumbBackgroundColor"] =
      this.addOpacity(theme?.slider?.baseColor, 0.34) ??
      tokens["--slider-disabledThumbBackgroundColor"];
    proccessedTokens["--slider-disabledDotsBackgroundColor"] =
      this.addOpacity(theme?.slider?.baseColor, 0.34) ??
      tokens["--slider-disabledDotsBackgroundColor"];
    proccessedTokens["--slider-disabledTrackLine"] =
      this.addOpacity(theme?.slider?.baseColor, 0.34) ??
      tokens["--slider-disabledTrackLine"];
    proccessedTokens["--slider-thumbBackgroundColor"] =
      theme?.slider?.baseColor ?? tokens["--slider-thumbBackgroundColor"];
    proccessedTokens["--slider-dotsBackgroundColor"] =
      theme?.slider?.baseColor ?? tokens["--slider-dotsBackgroundColor"];
    proccessedTokens["--slider-trackLine"] =
      theme?.slider?.baseColor ?? tokens["--slider-trackLine"];

    //SPINNER
    proccessedTokens["--spinner-trackCircleColor"] =
      theme?.spinner?.accentColor ?? tokens["--spinner-trackCircleColor"];
    proccessedTokens["--spinner-totalCircleColor"] =
      theme?.spinner?.baseColor ?? tokens["--spinner-totalCircleColor"];

    //SWITCH
    proccessedTokens["--switch-checkedTrackBackgroundColor"] =
      theme?.switch?.checkedBaseColor ??
      tokens["--switch-checkedTrackBackgroundColor"];
    proccessedTokens["--switch-disabledCheckedTrackBackgroundColor"] =
      this.addOpacity(theme?.switch?.checkedBaseColor, 0.34) ??
      tokens["--switch-disabledCheckedTrackBackgroundColor"];

    //TABLE
    proccessedTokens["--table-headerBackgroundColor"] =
      theme?.table?.baseColor ??
      tokens["--table-headerBackgroundColor"];
    proccessedTokens["--table-headerFontColor"] =
      theme?.table?.textColor ?? tokens["--table-headerFontColor"];

    //TOGGLE GROUP
    proccessedTokens["--toggle-unselectedBackgroundColor"] =
      theme?.toggle?.unselectedBaseColor ??
      tokens["--toggle-unselectedBackgroundColor"];
    proccessedTokens["--toggle-unselectedBackgroundHoverColor"] =
      theme?.toggle?.unselectedHoverBaseColor ??
      tokens["--toggle-unselectedBackgroundHoverColor"];
    proccessedTokens["--toggle-unselectedFontColor"] =
      theme?.toggle?.unselectedTextColor ??
      tokens["--toggle-unselectedFontColor"];
    proccessedTokens["--toggle-unselectedHoverFontColor"] =
      theme?.toggle?.unselectedHoverTextColor ??
      tokens["--toggle-unselectedHoverFontColor"];
    proccessedTokens["--toggle-selectedBackgroundColor"] =
      theme?.toggle?.selectedBaseColor ??
      tokens["--toggle-selectedBackgroundColor"];
    proccessedTokens["--toggle-selectedHoverBackgroundColor"] =
      theme?.toggle?.selectedHoverBaseColor ??
      tokens["--toggle-selectedHoverBackgroundColor"];
    proccessedTokens["--toggle-selectedFontColor"] =
      theme?.toggle?.selectedTextColor ?? tokens["--toggle-selectedFontColor"];
    proccessedTokens["--toggle-selectedHoverFontColor"] =
      theme?.toggle?.selectedHoverTextColor ??
      tokens["--toggle-selectedHoverFontColor"];
    proccessedTokens["--toggle-disabledSelectedBackgroundColor"] =
      this.addOpacity(theme?.toggle?.selectedBaseColor, 0.34) ??
      tokens["--toggle-disabledSelectedBackgroundColor"];
    proccessedTokens["--toggle-disabledSelectedFontColor"] =
      this.addOpacity(theme?.toggle?.selectedTextColor, 0.34) ??
      tokens["--toggle-disabledSelectedFontColor"];
    proccessedTokens["--toggle-disabledUnselectedBackgroundColor"] =
      this.addOpacity(theme?.toggle?.unselectedBaseColor, 0.34) ??
      tokens["--toggle-disabledUnselectedBackgroundColor"];
    proccessedTokens["--toggle-disabledUnselectedFontColor"] =
      this.addOpacity(theme?.toggle?.unselectedTextColor, 0.34) ??
      tokens["--toggle-disabledUnselectedFontColor"];

    //WIZARD
    proccessedTokens["--wizard-selectedBackgroundColor"] =
      theme?.wizard?.baseColor ??
      tokens["--wizard-selectedBackgroundColor"];
    proccessedTokens["--wizard-selectedFont"] =
      theme?.wizard?.textColor ?? tokens["--wizard-selectedFont"];

    return proccessedTokens;
  }
}
