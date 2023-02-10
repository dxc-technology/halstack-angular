import { MappingStrategy } from "./mappingStrategy";
import { TinyColor } from "@ctrl/tinycolor";
import rgbHex from "rgb-hex";

export class ComplexThemeBindingStrategy implements MappingStrategy {
  constructor() { }

  setLightness(hexColor, newLightness: number) {
    if (hexColor) {
      let colorInstance = new TinyColor(hexColor);
      // const hslColor = colorInstance.toHsl();
      const lightnessColor = colorInstance.lighten(newLightness);
      const lightnessColorHex = lightnessColor.toHexString();
      return lightnessColorHex;
    }
    return null;
  }

  subLightness(hexColor, newLightness) {
    try {
      if (hexColor) {
        let colorInstance = new TinyColor(hexColor);
        const lightnessColor = colorInstance.darken(newLightness);
        const lightnessColorHex = lightnessColor.toHexString();
        return lightnessColorHex;
      }
    } catch (e) {
      return null;
    }
  }

  setOpacity(hexColor, newOpacity: number) {
    if (hexColor) {
      let colorInstance = new TinyColor(hexColor);
      return colorInstance.setAlpha(newOpacity)?.toHex8String();
    }
    return null;
  }

  bindProperties(theme: any, tokens: any) {
    let proccessedTokens = tokens;

    //ACCORDION
    proccessedTokens["--accordion-arrowColor"] =
      theme?.accordion?.accentColor ?? tokens["--accordion-arrowColor"];
    proccessedTokens["--accordion-hoverBackgroundColor"] =
      this.setLightness(theme?.accordion?.accentColor, 0.20) ??
      tokens["--accordion-hoverBackgroundColor"];
    proccessedTokens["--accordion-fontColor"] =
      theme?.accordion?.textColor ?? tokens["--accordion-fontColor"];
    proccessedTokens["--accordion-focusOutline"] =
      theme?.accordion?.accentColor ?? tokens["--accordion-arrowColor"];
    proccessedTokens["--accordion-disabledFontColor"] =
      this.setLightness(theme?.accordion?.textColor, 35) ??
      tokens["--accordion-disabledFontColor"];
    proccessedTokens["--accordion-backgroundColor"] =
      theme?.accordion?.baseColor ?? tokens["--accordion-backgroundColor"];

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
      this.setLightness(theme?.tabs?.baseColor, 58) ??
      tokens["--tabs-hoverBackgroundColor"];
    proccessedTokens["--tabs-pressedBackgroundColor"] =
      this.setLightness(theme?.tabs?.baseColor, 53) ??
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
      this.setOpacity(theme?.button?.primaryTextColor, 0.34) ??
      tokens["--button-disabledPrimaryFontColor"];
    proccessedTokens["--button-disabledPrimaryBackgroundColor"] =
      this.setOpacity(theme?.button?.baseColor, 0.34) ??
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
      this.setOpacity(theme?.button?.baseColor, 0.34) ??
      tokens["--button-disabledSecondaryOutlinedColor"];
    proccessedTokens["--button-disabledSecondaryFontColor"] =
      this.setOpacity(theme?.button?.secondaryTextColor, 0.34) ??
      tokens["--button-disabledSecondaryFontColor"];
    proccessedTokens["--button-textHoverBackgroundColor"] =
      theme?.button?.hoverBaseColor ?? tokens["--button-textHoverBackgroundColor"];
    proccessedTokens["--button-textFontColor"] =
      theme?.button?.textFontColor ?? tokens["--button-textFontColor"];
    proccessedTokens["--button-textHoverFontColor"] =
      theme?.button?.hoverTextColor ??
      tokens["--button-textHoverFontColor"];
    proccessedTokens["--button-disabledTextFontColor"] =
      this.setOpacity(theme?.button?.textFontColor, 0.34) ??
      tokens["--button-disabledTextFontColor"];

    //CHECKBOX
    proccessedTokens["--checkbox-borderColor"] =
      theme?.checkbox?.baseColor ?? tokens["--checkbox-borderColor"];
    proccessedTokens["--checkbox-checkColor"] =
      theme?.checkbox?.checkColor ?? tokens["--checkbox-checkColor"];
    proccessedTokens["--checkbox-backgroundColorChecked"] =
      theme?.checkbox?.baseColor ?? tokens["--checkbox-backgroundColorChecked"];
    proccessedTokens["--checkbox-disabledBackgroundColorChecked"] =
      this.setOpacity(theme?.checkbox?.baseColor, 0.34) ??
      tokens["--checkbox-disabledBackgroundColorChecked"];
    proccessedTokens["--checkbox-disabledBorderColor"] =
      this.setOpacity(theme?.checkbox?.baseColor, 0.34) ??
      tokens["--checkbox-disabledBorderColor"];
    proccessedTokens["--checkbox-disabledCheckColor"] =
      this.setOpacity(theme?.checkbox?.checkColor, 0.34) ??
      tokens["--checkbox-disabledCheckColor"];

    //CHIP
    proccessedTokens["--chip-backgroundColor"] =
      theme?.chip?.baseColor ?? tokens["--chip-backgroundColor"];
    proccessedTokens["--chip-outlinedColor"] =
      theme?.chip?.accentColor ?? tokens["--chip-outlinedColor"];
    proccessedTokens["--chip-fontColor"] =
      theme?.chip?.textColor ?? tokens["--chip-fontColor"];
    proccessedTokens["--chip-disabledBackgroundColor"] =
      this.setOpacity(theme?.chip?.baseColor, 0.34) ??
      tokens["--chip-disabledBackgroundColor"];
    proccessedTokens["--chip-disabledFontColor"] =
      this.setOpacity(theme?.chip?.textColor, 0.34) ??
      tokens["--chip-disabledFontColor"];

    //DATE
    proccessedTokens["--date-pickerSelectedDateBackgroundColor"] =
      theme?.date?.baseColor ??
      tokens["--date-pickerSelectedDateBackgroundColor"];
    proccessedTokens["--date-pickerSelectedDateColor"] =
      theme?.date?.accentColor ??
      tokens["--date-pickerSelectedDateColor"];
    proccessedTokens["--date-pickerHoverDateBackgroundColor"] =
      this.setOpacity(theme?.date?.baseColor, 0.34) ??
      tokens["--date-pickerHoverDateBackgroundColor"];

    //DROPDOWN
    proccessedTokens["--dropdown-backgroundColor"] =
      theme?.dropdown?.baseColor ?? tokens["--dropdown-backgroundColor"];
    proccessedTokens["--dropdown-fontColor"] =
      theme?.dropdown?.textColor ?? tokens["--dropdown-fontColor"];
    proccessedTokens["--dropdown-hoverBackgroundColor"] =
      this.setOpacity(theme?.dropdown?.baseColor, 0.8) ??
      tokens["--dropdown-hoverBackgroundColor"];
    proccessedTokens["--dropdown-hoverBackgroundOption"] =
      this.setOpacity(theme?.dropdown?.baseColor, 0.34) ??
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
      this.setOpacity(theme?.header?.hamburguerColor, 0.16) ??
      tokens["--header-hoverHamburguerColor"];

    //INPUT TEXT
    proccessedTokens["--inputText-selectedOptionBackgroundColor"] =
      this.setOpacity(theme?.inputText?.selectedBaseColor, 0.34) ??
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
      this.setOpacity(theme?.progressBar?.baseColor, 0.34) ??
      tokens["--progressBar-totalLine"];

    //RADIO
    proccessedTokens["--radio-color"] =
      theme?.radio?.baseColor ?? tokens["--radio-color"];
    proccessedTokens["--radio-disabledColor"] =
      this.setOpacity(theme?.radio?.baseColor, 0.34) ??
      tokens["--radio-disabledColor"];

    //SELECT
    proccessedTokens["--select-selectedOptionBackgroundColor"] =
      theme?.select?.baseColor ??
      tokens["--select-selectedOptionBackgroundColor"];
    proccessedTokens["--select-hoverOptionBackgroundColor"] =
      this.setOpacity(theme?.select?.baseColor, 0.34) ??
      tokens["--select-hoverOptionBackgroundColor"];

    //SIDENAV
    proccessedTokens["--sidenav-backgroundColor"] =
      theme?.sidenav?.baseColor ?? tokens["--sidenav-backgroundColor"];
    proccessedTokens["--sidenav-arrowContainerColor"] =
      this.setOpacity(theme?.sidenav?.arrowBaseColor, 0.80) ??
      tokens["--sidenav-arrowContainerColor"];
    proccessedTokens["--sidenav-arrowColor"] =
      theme?.sidenav?.arrowAccentColor ?? tokens["--sidenav-arrowColor"];

    //SLIDER
    proccessedTokens["--slider-totalLine"] =
      this.setOpacity(theme?.slider?.baseColor, 0.34) ??
      tokens["--slider-totalLine"];
    proccessedTokens["--slider-disabledThumbBackgroundColor"] =
      this.setOpacity(theme?.slider?.baseColor, 0.34) ??
      tokens["--slider-disabledThumbBackgroundColor"];
    proccessedTokens["--slider-disabledDotsBackgroundColor"] =
      this.setOpacity(theme?.slider?.baseColor, 0.34) ??
      tokens["--slider-disabledDotsBackgroundColor"];
    proccessedTokens["--slider-disabledTrackLine"] =
      this.setOpacity(theme?.slider?.baseColor, 0.34) ??
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
      this.setOpacity(theme?.switch?.checkedBaseColor, 0.34) ??
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
      this.setOpacity(theme?.toggle?.selectedBaseColor, 0.34) ??
      tokens["--toggle-disabledSelectedBackgroundColor"];
    proccessedTokens["--toggle-disabledSelectedFontColor"] =
      this.setOpacity(theme?.toggle?.selectedTextColor, 0.34) ??
      tokens["--toggle-disabledSelectedFontColor"];
    proccessedTokens["--toggle-disabledUnselectedBackgroundColor"] =
      this.setOpacity(theme?.toggle?.unselectedBaseColor, 0.34) ??
      tokens["--toggle-disabledUnselectedBackgroundColor"];
    proccessedTokens["--toggle-disabledUnselectedFontColor"] =
      this.setOpacity(theme?.toggle?.unselectedTextColor, 0.34) ??
      tokens["--toggle-disabledUnselectedFontColor"];

    //WIZARD
    proccessedTokens["--wizard-selectedBackgroundColor"] =
      theme?.wizard?.baseColor ??
      tokens["--wizard-selectedBackgroundColor"];
    proccessedTokens["--wizard-selectedFont"] =
      theme?.wizard?.textColor ?? tokens["--wizard-selectedFont"];

    //THEME PALETTE
    proccessedTokens["--theme-palette-borderColor"] =
      theme?.themePalette?.baseColor ??
      tokens["--theme-palette-borderColor"];

    //Others
    for (const key in theme.customs) {
      proccessedTokens[key] = theme.customs[key];
    }

    return proccessedTokens;
  }
}
