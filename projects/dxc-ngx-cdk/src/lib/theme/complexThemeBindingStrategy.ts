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
      theme?.accordion?.arrowColor ?? tokens["--accordion-arrowColor"];
    proccessedTokens["--accordion-hoverBackgroundColor"] =
      this.addLightness(theme?.accordion?.arrowColor, 53) ??
      tokens["--accordion-hoverBackgroundColor"];
    proccessedTokens["--accordion-fontColor"] =
      theme?.accordion?.fontColor ?? tokens["--accordion-fontColor"];
    proccessedTokens["--accordion-focusOutline"] =
      theme?.accordion?.arrowColor ?? tokens["--accordion-arrowColor"];
    proccessedTokens["--accordion-disabledFontColor"] =
      this.addLightness(theme?.accordion?.fontColor, 35) ??
      tokens["--accordion-disabledFontColor"];

    //TABS
    proccessedTokens["--tabs-selectedFontColor"] =
      theme?.tabs?.selectedFontColor ?? tokens["--tabs-selectedFontColor"];
    proccessedTokens["--tabs-selectedIconColor"] =
      theme?.tabs?.selectedFontColor ?? tokens["--tabs-selectedFontColor"];
    proccessedTokens["--tabs-selectedUnderlinedColor"] =
      theme?.tabs?.selectedFontColor ?? tokens["--tabs-selectedFontColor"];
    proccessedTokens["--tabs-focusOutline"] =
      theme?.tabs?.selectedFontColor ?? tokens["--tabs-selectedFontColor"];
    proccessedTokens["--tabs-hoverBackgroundColor"] =
      this.addLightness(theme?.tabs?.selectedFontColor, 58) ??
      tokens["--tabs-hoverBackgroundColor"];
    proccessedTokens["--tabs-pressedBackgroundColor"] =
      this.addLightness(theme?.tabs?.selectedFontColor, 53) ??
      tokens["--tabs-pressedBackgroundColor"];

    //------------Sin Hacer---------------------

    //BUTTON
    proccessedTokens["--button-primaryBackgroundColor"] =
      theme?.button?.color ?? tokens["--button-primaryBackgroundColor"];
    proccessedTokens["--button-primaryHoverBackgroundColor"] =
      theme?.button?.hoverColor ??
      tokens["--button-primaryHoverBackgroundColor"];
    proccessedTokens["--button-primaryFontColor"] =
      theme?.button?.primaryFontColor ?? tokens["--button-primaryFontColor"];
    proccessedTokens["--button-primaryHoverFontColor"] =
      theme?.button?.primaryHoverFontColor ??
      tokens["--button-primaryHoverFontColor"];
    proccessedTokens["--button-disabledPrimaryFontColor"] =
      this.addOpacity(theme?.button?.primaryFontColor, 0.34) ??
      tokens["--button-disabledPrimaryFontColor"];
    proccessedTokens["--button-disabledPrimaryBackgroundColor"] =
      this.addOpacity(theme?.button?.color, 0.34) ??
      tokens["--button-disabledPrimaryBackgroundColor"];
    proccessedTokens["--button-secondaryOutlinedColor"] =
      theme?.button?.color ?? tokens["--button-secondaryOutlinedColor"];
    proccessedTokens["--button-secondaryFontColor"] =
      theme?.button?.secondaryFontColor ??
      tokens["--button-secondaryFontColor"];
    proccessedTokens["--button-secondaryHoverFontColor"] =
      theme?.button?.secondaryHoverFontColor ??
      tokens["--button-secondaryHoverFontColor"];
    proccessedTokens["--button-disabledSecondaryOutlinedColor"] =
      this.addOpacity(theme?.button?.color, 0.34) ??
      tokens["--button-disabledSecondaryOutlinedColor"];
    proccessedTokens["--button-disabledSecondaryFontColor"] =
      this.addOpacity(theme?.button?.secondaryFontColor, 0.34) ??
      tokens["--button-disabledSecondaryFontColor"];
    proccessedTokens["--button-textHoverBackgroundColor"] =
      theme?.button?.hoverColor ?? tokens["--button-textHoverBackgroundColor"];
    proccessedTokens["--button-textFontColor"] =
      theme?.button?.textFontColor ?? tokens["--button-textFontColor"];
    proccessedTokens["--button-textHoverFontColor"] =
      theme?.button?.textHoverFontColor ??
      tokens["--button-textHoverFontColor"];
    proccessedTokens["--button-disabledTextFontColor"] =
      this.addOpacity(theme?.button?.textFontColor, 0.34) ??
      tokens["--button-disabledTextFontColor"];

    //CHECKBOX
    proccessedTokens["--checkbox-borderColor"] =
      theme?.checkbox?.color ?? tokens["--checkbox-borderColor"];
    proccessedTokens["--checkbox-checkColor"] =
      theme?.checkbox?.checkColor ?? tokens["--checkbox-checkColor"];
    proccessedTokens["--checkbox-backgroundColorChecked"] =
      theme?.checkbox?.color ?? tokens["--checkbox-backgroundColorChecked"];
    proccessedTokens["--checkbox-disabledBackgroundColorChecked"] =
      this.addOpacity(theme?.checkbox?.color, 0.34) ??
      tokens["--checkbox-disabledBackgroundColorChecked"];
    proccessedTokens["--checkbox-disabledBorderColor"] =
      this.addOpacity(theme?.checkbox?.color, 0.34) ??
      tokens["--checkbox-disabledBorderColor"];
    proccessedTokens["--checkbox-disabledCheckColor"] =
      this.addOpacity(theme?.checkbox?.checkColor, 0.34) ??
      tokens["--checkbox-disabledCheckColor"];

    //CHIP
    proccessedTokens["--chip-backgroundColor"] =
      theme?.chip?.backgroundColor ?? tokens["--chip-backgroundColor"];
    proccessedTokens["--chip-outlinedColor"] =
      theme?.chip?.outlinedColor ?? tokens["--chip-outlinedColor"];
    proccessedTokens["--chip-fontColor"] =
      theme?.chip?.fontColor ?? tokens["--chip-fontColor"];
    proccessedTokens["--chip-disabledBackgroundColor"] =
      this.addOpacity(theme?.chip?.backgroundColor, 0.34) ??
      tokens["--chip-disabledBackgroundColor"];
    proccessedTokens["--chip-disabledFontColor"] =
      this.addOpacity(theme?.chip?.fontColor, 0.34) ??
      tokens["--chip-disabledFontColor"];

    //DATE
    proccessedTokens["--date-pickerSelectedDateBackgroundColor"] =
      theme?.date?.pickerSelectedDateBackgroundColor ??
      tokens["--date-pickerSelectedDateBackgroundColor"];
    proccessedTokens["--date-pickerSelectedDateColor"] =
      theme?.date?.pickerSelectedDateColor ??
      tokens["--date-pickerSelectedDateColor"];
    proccessedTokens["--date-pickerHoverDateBackgroundColor"] =
      this.addOpacity(theme?.date?.pickerSelectedDateBackgroundColor, 0.34) ??
      tokens["--date-pickerHoverDateBackgroundColor"];

    //DROPDOWN
    proccessedTokens["--dropdown-backgroundColor"] =
      theme?.dropdown?.backgroundColor ?? tokens["--dropdown-backgroundColor"];
    proccessedTokens["--dropdown-fontColor"] =
      theme?.dropdown?.fontColor ?? tokens["--dropdown-fontColor"];
    proccessedTokens["--dropdown-hoverBackgroundColor"] =
      this.addOpacity(theme?.dropdown?.backgroundColor, 0.8) ??
      tokens["--dropdown-hoverBackgroundColor"];
    proccessedTokens["--dropdown-hoverBackgroundOption"] =
      this.addOpacity(theme?.dropdown?.backgroundColor, 0.34) ??
      tokens["--dropdown-hoverBackgroundOption"];

    //FOOTER
    proccessedTokens["--footer-backgroundColor"] =
      theme?.footer?.backgroundColor ?? tokens["--footer-backgroundColor"];
    proccessedTokens["--footer-fontColor"] =
      theme?.footer?.fontColor ?? tokens["--footer-fontColor"];
    proccessedTokens["--footer-lineColor"] =
      theme?.footer?.lineColor ?? tokens["--footer-lineColor"];

    //HEADER
    proccessedTokens["--header-backgroundColor"] =
      theme?.header?.backgroundColor ?? tokens["--header-backgroundColor"];
    proccessedTokens["--header-underlinedColor"] =
      theme?.header?.underlinedColor ?? tokens["--header-underlinedColor"];
    proccessedTokens["--header-fontColor"] =
      theme?.header?.fontColor ?? tokens["--header-fontColor"];
    proccessedTokens["--header-backgroundColorMenu"] =
      theme?.header?.backgroundColorMenu ??
      tokens["--header-backgroundColorMenu"];
    proccessedTokens["--header-hamburguerColor"] =
      theme?.header?.hamburguerColor ?? tokens["--header-hamburguerColor"];
    proccessedTokens["--header-hoverHamburguerColor"] =
      this.addOpacity(theme?.header?.hamburguerColor, 0.16) ??
      tokens["--header-hamburguerColor"];

    //INPUT TEXT
    proccessedTokens["--inputText-selectedOptionBackgroundColor"] =
      this.addOpacity(theme?.inputText?.selectedOptionBackgroundColor, 0.34) ??
      tokens["--inputText-selectedOptionBackgroundColor"];

    //PAGINATOR
    proccessedTokens["--paginator-paginatorBackgroundColor"] =
      theme?.paginator?.paginatorBackgroundColor ??
      tokens["--paginator-paginatorBackgroundColor"];
    proccessedTokens["--paginator-paginatorFontColor"] =
      theme?.paginator?.paginatorFontColor ??
      tokens["--paginator-paginatorFontColor"];

    //PROGRESSBAR
    proccessedTokens["--progressbar-trackLine"] =
      theme?.progressbar?.trackLine ?? tokens["--progressbar-trackLine"];
    proccessedTokens["--progressbar-totalLine"] =
      this.addOpacity(theme?.progressbar?.totalLine, 0.34) ??
      tokens["--progressbar-totalLine"];
    proccessedTokens["--progressbar-fontColor"] =
      theme?.progressbar?.fontColor ?? tokens["--progressbar-fontColor"];

    //RADIO
    proccessedTokens["--radio-color"] =
      theme?.radio?.color ?? tokens["--radio-color"];
    proccessedTokens["--radio-fontColor"] =
      theme?.radio?.fontColor ?? tokens["--radio-fontColor"];
    proccessedTokens["--radio-focusColor"] =
      theme?.radio?.focusColor ?? tokens["--radio-focusColor"];
    proccessedTokens["--radio-disabledColor"] =
      this.addOpacity(theme?.radio?.color, 0.34) ??
      tokens["--radio-disabledColor"];
    proccessedTokens["--radio-disabledFontColor"] =
      this.addOpacity(theme?.radio?.fontColor, 0.34) ??
      tokens["--radio-disabledFontColor"];

    //SELECT
    proccessedTokens["--select-selectedOptionBackgroundColor"] =
      theme?.select?.selectedOptionBackgroundColor ??
      tokens["--select-selectedOptionBackgroundColor"];
    proccessedTokens["--select-hoverOptionBackgroundColor"] =
      this.addOpacity(theme?.select?.selectedOptionBackgroundColor, 0.34) ??
      tokens["--select-hoverOptionBackgroundColor"];
    proccessedTokens["--select-hoverOptionBackgroundColor"] =
      this.addOpacity(theme?.select?.selectedOptionBackgroundColor, 0.34) ??
      tokens["--select-hoverOptionBackgroundColor"];
    proccessedTokens["--select-disabledColor"] =
      this.addOpacity(theme?.select?.color, 0.34) ??
      tokens["--select-disabledColor"];

    //SIDENAV
    proccessedTokens["--sidenav-backgroundColor"] =
      theme?.sidenav?.backgroundColor ?? tokens["--sidenav-backgroundColor"];
    proccessedTokens["--sidenav-arrowContainerColor"] =
      this.addOpacity(theme?.sidenav?.arrowContainerColor, 0.34) ??
      tokens["--sidenav-arrowContainerColor"];
    proccessedTokens["--sidenav-arrowColor"] =
      theme?.sidenav?.arrowColor ?? tokens["--sidenav-arrowColor"];

    //SLIDER
    proccessedTokens["--slider-totalLine"] =
      this.addOpacity(theme?.slider?.color, 0.34) ??
      tokens["--slider-totalLine"];
    proccessedTokens["--slider-disabledThumbBackgroundColor"] =
      this.addOpacity(theme?.slider?.color, 0.34) ??
      tokens["--slider-disabledThumbBackgroundColor"];
    proccessedTokens["--slider-disabledDotsBackgroundColor"] =
      this.addOpacity(theme?.slider?.color, 0.34) ??
      tokens["--slider-disabledDotsBackgroundColor"];
    proccessedTokens["--slider-disabledTrackLine"] =
      this.addOpacity(theme?.slider?.color, 0.34) ??
      tokens["--slider-disabledTrackLine"];
    proccessedTokens["--slider-thumbBackgroundColor"] =
      theme?.slider?.color ?? tokens["--slider-thumbBackgroundColor"];
    proccessedTokens["--slider-dotsBackgroundColor"] =
      theme?.slider?.color ?? tokens["--slider-dotsBackgroundColor"];
    proccessedTokens["--slider-trackLine"] =
      theme?.slider?.color ?? tokens["--slider-trackLine"];

    //SPINNER
    proccessedTokens["--spinner-trackCircleColor"] =
      theme?.spinner?.trackCircleColor ?? tokens["--spinner-trackCircleColor"];
    proccessedTokens["--spinner-totalCircleColor"] =
      theme?.spinner?.totalCircleColor ?? tokens["--spinner-totalCircleColor"];

    //SWITCH
    proccessedTokens["--switch-checkedTrackBackgroundColor"] =
      theme?.switch?.checkedTrackBackgroundColor ??
      tokens["--switch-checkedTrackBackgroundColor"];
    proccessedTokens["--switch-disabledCheckedTrackBackgroundColor"] =
      this.addOpacity(theme?.switch?.checkedTrackBackgroundColor, 0.34) ??
      tokens["--switch-disabledCheckedTrackBackgroundColor"];

    //TABLE
    proccessedTokens["--table-headerBackgroundColor"] =
      theme?.table?.headerBackgroundColor ??
      tokens["--table-headerBackgroundColor"];
    proccessedTokens["--table-headerFontColor"] =
      theme?.table?.headerFontColor ?? tokens["--table-headerFontColor"];

    //TOGGLE GROUP
    proccessedTokens["--toggle-unselectedBackgroundColor"] =
      theme?.toggle?.unselectedBackgroundColor ??
      tokens["--toggle-unselectedBackgroundColor"];
    proccessedTokens["--toggle-unselectedBackgroundHoverColor"] =
      theme?.toggle?.unselectedBackgroundHoverColor ??
      tokens["--toggle-unselectedBackgroundHoverColor"];
    proccessedTokens["--toggle-unselectedFontColor"] =
      theme?.toggle?.unselectedFontColor ??
      tokens["--toggle-unselectedFontColor"];
    proccessedTokens["--toggle-unselectedHoverFontColor"] =
      theme?.toggle?.unselectedHoverFontColor ??
      tokens["--toggle-unselectedHoverFontColor"];
    proccessedTokens["--toggle-selectedBackgroundColor"] =
      theme?.toggle?.selectedBackgroundColor ??
      tokens["--toggle-selectedBackgroundColor"];
    proccessedTokens["--toggle-selectedHoverBackgroundColor"] =
      theme?.toggle?.selectedHoverBackgroundColor ??
      tokens["--toggle-selectedHoverBackgroundColor"];
    proccessedTokens["--toggle-selectedFontColor"] =
      theme?.toggle?.selectedFontColor ?? tokens["--toggle-selectedFontColor"];
    proccessedTokens["--toggle-selectedHoverFontColor"] =
      theme?.toggle?.selectedHoverFontColor ??
      tokens["--toggle-selectedHoverFontColor"];
    proccessedTokens["--toggle-disabledSelectedBackgroundColor"] =
      this.addOpacity(theme?.toggle?.selectedBackgroundColor, 0.34) ??
      tokens["--toggle-disabledSelectedBackgroundColor"];
    proccessedTokens["--toggle-disabledSelectedFontColor"] =
      this.addOpacity(theme?.toggle?.selectedFontColor, 0.34) ??
      tokens["--toggle-disabledSelectedFontColor"];
    proccessedTokens["--toggle-disabledUnselectedBackgroundColor"] =
      this.addOpacity(theme?.toggle?.unselectedBackgroundColor, 0.34) ??
      tokens["--toggle-disabledUnselectedBackgroundColor"];
    proccessedTokens["--toggle-disabledUnselectedFontColor"] =
      this.addOpacity(theme?.toggle?.unselectedFontColor, 0.34) ??
      tokens["--toggle-disabledUnselectedFontColor"];

    //WIZARD
    proccessedTokens["--wizard-selectedBackgroundColor"] =
      theme?.wizard?.selectedBackgroundColor ??
      tokens["--wizard-selectedBackgroundColor"];
    proccessedTokens["--wizard-selectedFont"] =
      theme?.wizard?.selectedFont ?? tokens["--wizard-selectedFont"];

    return proccessedTokens;
  }
}
