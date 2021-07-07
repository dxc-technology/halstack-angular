import { MappingStrategy } from "./mappingStrategy";
import * as Color from "color";
import rgbHex from "rgb-hex";

export class ComplexThemeBindingStrategy implements MappingStrategy {
  constructor() {}

  setLightness(hexColor: String, newLightness: number) {
    if (hexColor) {
      const color = Color(hexColor);
      const hslColor = color.hsl();
      const lightnessColor = hslColor.color[2];
      return hslColor.lightness(lightnessColor + newLightness).hex();
    }
    return null;
  }

  setOpacity(hexColor: String, newOpacity: number) {
    if (hexColor) {
      const color = Color(hexColor);
      console.log();
      return (
        "#" +
        rgbHex(color.color[0], color.color[1], color.color[2], newOpacity)
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
      this.setLightness(theme?.accordion?.accentColor, 53) ??
      tokens["--accordion-hoverBackgroundColor"];
    proccessedTokens["--accordion-fontColor"] =
      theme?.accordion?.textColor ?? tokens["--accordion-fontColor"];
    proccessedTokens["--accordion-focusOutline"] =
      theme?.accordion?.accentColor ?? tokens["--accordion-arrowColor"];
    proccessedTokens["--accordion-disabledFontColor"] =
      this.setLightness(theme?.accordion?.textColor, 35) ??
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
    proccessedTokens["--button-primaryDisabledFontColor"] =
      this.setOpacity(theme?.button?.primaryTextColor, 0.34) ??
      tokens["--button-primaryDisabledFontColor"];
    proccessedTokens["--button-primaryDisabledBackgroundColor"] =
      this.setOpacity(theme?.button?.baseColor, 0.34) ??
      tokens["--button-primaryDisabledBackgroundColor"];
    proccessedTokens["--button-secondaryOutlinedColor"] =
      theme?.button?.baseColor ?? tokens["--button-secondaryOutlinedColor"];
    proccessedTokens["--button-secondaryFontColor"] =
      theme?.button?.secondaryTextColor ??
      tokens["--button-secondaryFontColor"];
    proccessedTokens["--button-secondaryHoverFontColor"] =
      theme?.button?.secondaryHoverTextColor ??
      tokens["--button-secondaryHoverFontColor"];
    proccessedTokens["--button-secondaryDisabledOutlinedColor"] =
      this.setOpacity(theme?.button?.baseColor, 0.34) ??
      tokens["--button-secondaryDisabledOutlinedColor"];
    proccessedTokens["--button-secondaryDisabledFontColor"] =
      this.setOpacity(theme?.button?.secondaryTextColor, 0.34) ??
      tokens["--button-secondaryDisabledFontColor"];
    proccessedTokens["--button-textHoverBackgroundColor"] =
      theme?.button?.hoverBaseColor ?? tokens["--button-textHoverBackgroundColor"];
    proccessedTokens["--button-textFontColor"] =
      theme?.button?.textFontColor ?? tokens["--button-textFontColor"];
    proccessedTokens["--button-textHoverFontColor"] =
      theme?.button?.hoverTextColor ??
      tokens["--button-textHoverFontColor"];
    proccessedTokens["--button-textDisabledFontColor"] =
      this.setOpacity(theme?.button?.textFontColor, 0.34) ??
      tokens["--button-textDisabledFontColor"];

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
    proccessedTokens["--dropdown-buttonBackgroundColor"] =
      theme?.dropdown?.baseColor ?? tokens["--dropdown-buttonBackgroundColor"];
    proccessedTokens["--dropdown-buttonFontColor"] =
      theme?.dropdown?.textColor ?? tokens["--dropdown-buttonFontColor"];
    proccessedTokens["--dropdown-buttonHoverBackgroundColor"] =
      this.setOpacity(theme?.dropdown?.baseColor, 0.8) ??
      tokens["--dropdown-buttonHoverBackgroundColor"];
    proccessedTokens["--dropdown-optionsListHoverBackgroundColor"] =
      // this.setOpacity(theme?.dropdown?.baseColor, 0.34) ??
      tokens["--dropdown-optionsListHoverBackgroundColor"];

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
    proccessedTokens["--paginator-backgroundColor"] =
      theme?.paginator?.baseColor ??
      tokens["--paginator-backgroundColor"];
    proccessedTokens["--paginator-fontColor"] =
      theme?.paginator?.accentColor ??
      tokens["--paginator-fontColor"];

    //PROGRESSBAR
    proccessedTokens["--progressBar-trackLineColor"] =
      theme?.progressBar?.accentColor ?? tokens["--progressBar-trackLineColor"];
    proccessedTokens["--progressBar-totalLineColor"] =
      this.setOpacity(theme?.progressBar?.baseColor, 0.34) ??
      tokens["--progressBar-totalLineColor"];

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
    proccessedTokens["--slider-totalLineColor"] =
      this.setOpacity(theme?.slider?.baseColor, 0.34) ??
      tokens["--slider-totalLineColor"];
    proccessedTokens["--slider-disabledThumbBackgroundColor"] =
      this.setOpacity(theme?.slider?.baseColor, 0.34) ??
      tokens["--slider-disabledThumbBackgroundColor"];
    proccessedTokens["--slider-disabledDotsBackgroundColor"] =
      this.setOpacity(theme?.slider?.baseColor, 0.34) ??
      tokens["--slider-disabledDotsBackgroundColor"];
    proccessedTokens["--slider-disabledTrackLineColor"] =
      this.setOpacity(theme?.slider?.baseColor, 0.34) ??
      tokens["--slider-disabledTrackLineColor"];
    proccessedTokens["--slider-thumbBackgroundColor"] =
      theme?.slider?.baseColor ?? tokens["--slider-thumbBackgroundColor"];
    proccessedTokens["--slider-dotsBackgroundColor"] =
      theme?.slider?.baseColor ?? tokens["--slider-dotsBackgroundColor"];
    proccessedTokens["--slider-trackLineColor"] =
      theme?.slider?.baseColor ?? tokens["--slider-trackLineColor"];

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
    proccessedTokens["--toggleGroup-unselectedBackgroundColor"] =
      theme?.toggle?.unselectedBaseColor ??
      tokens["--toggleGroup-unselectedBackgroundColor"];
    proccessedTokens["--toggleGroup-unselectedBackgroundHoverColor"] =
      theme?.toggle?.unselectedHoverBaseColor ??
      tokens["--toggleGroup-unselectedBackgroundHoverColor"];
    proccessedTokens["--toggleGroup-unselectedFontColor"] =
      theme?.toggle?.unselectedTextColor ??
      tokens["--toggleGroup-unselectedFontColor"];
    proccessedTokens["--toggleGroup-unselectedHoverFontColor"] =
      theme?.toggle?.unselectedHoverTextColor ??
      tokens["--toggleGroup-unselectedHoverFontColor"];
    proccessedTokens["--toggleGroup-selectedBackgroundColor"] =
      theme?.toggle?.selectedBaseColor ??
      tokens["--toggleGroup-selectedBackgroundColor"];
    proccessedTokens["--toggleGroup-selectedBackgroundHoverColor"] =
      theme?.toggle?.selectedHoverBaseColor ??
      tokens["--toggleGroup-selectedBackgroundHoverColor"];
    proccessedTokens["--toggleGroup-selectedFontColor"] =
      theme?.toggle?.selectedTextColor ?? tokens["--toggleGroup-selectedFontColor"];
    proccessedTokens["--toggleGroup-selectedHoverFontColor"] =
      theme?.toggle?.selectedHoverTextColor ??
      tokens["--toggleGroup-selectedHoverFontColor"];
    proccessedTokens["--toggleGroup-disabledSelectedBackgroundColor"] =
      this.setOpacity(theme?.toggle?.selectedBaseColor, 0.34) ??
      tokens["--toggleGroup-disabledSelectedBackgroundColor"];
    proccessedTokens["--toggleGroup-disabledSelectedFontColor"] =
      this.setOpacity(theme?.toggle?.selectedTextColor, 0.34) ??
      tokens["--toggleGroup-disabledSelectedFontColor"];
    proccessedTokens["--toggleGroup-disabledUnselectedBackgroundColor"] =
      this.setOpacity(theme?.toggle?.unselectedBaseColor, 0.34) ??
      tokens["--toggleGroup-disabledUnselectedBackgroundColor"];
    proccessedTokens["--toggleGroup-disabledUnselectedFontColor"] =
      this.setOpacity(theme?.toggle?.unselectedTextColor, 0.34) ??
      tokens["--toggleGroup-disabledUnselectedFontColor"];

    //WIZARD
    proccessedTokens["--wizard-selectedBackgroundColor"] =
      theme?.wizard?.baseColor ??
      tokens["--wizard-selectedBackgroundColor"];
    proccessedTokens["--wizard-selectedFont"] =
      theme?.wizard?.textColor ?? tokens["--wizard-selectedFont"];

    return proccessedTokens;
  }
}
