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
    proccessedTokens["--tabs-focusColor"] =
      theme?.tabs?.selectedFontColor ?? tokens["--tabs-selectedFontColor"];
    proccessedTokens["--tabs-hoverBackgroundColor"] =
      this.addLightness(theme?.tabs?.selectedFontColor, 58) ??
      tokens["--tabs-hoverBackgroundColor"];
    proccessedTokens["--tabs-pressedBackgroundColor"] =
      this.addLightness(theme?.tabs?.selectedFontColor, 53) ??
      tokens["--tabs-pressedBackgroundColor"];

    //------------Sin Hacer---------------------

    //BUTTON sin hacer todavia
    proccessedTokens["--button-color"] =
      theme?.button?.color ?? tokens["--button-color"];
    proccessedTokens["--button-hoverColor"] =
      theme?.button?.hoverColor ?? tokens["--button-hoverColor"];
    proccessedTokens["--button-primaryFontColor"] =
      theme?.button?.primaryFontColor ?? tokens["--button-primaryFontColor"];
    proccessedTokens["--button-primaryHoverFontColor"] =
      theme?.button?.primaryHoverFontColor ??
      tokens["--button-primaryHoverFontColor"];
    proccessedTokens["--button-secondaryFontColor"] =
      theme?.button?.secondaryFontColor ??
      tokens["--button-secondaryFontColor"];
    proccessedTokens["--button-secondaryHoverFontColor"] =
      theme?.button?.secondaryHoverFontColor ??
      tokens["--button-secondaryHoverFontColor"];
    proccessedTokens["--button-textFontColor"] =
      theme?.button?.textFontColor ?? tokens["--button-textFontColor"];
    proccessedTokens["--button-textHoverFontColor"] =
      theme?.button?.textHoverFontColor ??
      tokens["--button-textHoverFontColor"];
    proccessedTokens["--button-primaryActiveOpacity"] =
      this.addOpacity(theme?.button?.color, 0.64) ?? tokens["--button-color"];
    proccessedTokens["--button-primaryActiveHoverOpacity"] =
      this.addOpacity(theme?.button?.color, 0.64) ??
      tokens["--button-hoverColor"];
    proccessedTokens["--button-secondaryActiveOpacity"] =
      this.addOpacity(theme?.button?.color, 0.16) ?? tokens["--button-color"];
    proccessedTokens["--button-secondaryActiveHoverOpacity"] =
      this.addOpacity(theme?.button?.color, 0.16) ??
      tokens["--button-hoverColor"];
    proccessedTokens["--button-secondaryHoverOpacity"] =
      this.addOpacity(theme?.button?.color, 0.08) ??
      tokens["--button-hoverColor"];
    proccessedTokens["--button-textActiveOpacity"] =
      this.addOpacity(theme?.button?.color, 0.64) ?? tokens["--button-color"];
    proccessedTokens["--button-textActiveHoverOpacity"] =
      this.addOpacity(theme?.button?.color, 0.64) ??
      tokens["--button-hoverColor"];
    proccessedTokens["--button-primaryDisabledOpacity"] =
      this.addOpacity(theme?.button?.color, 0.34) ?? tokens["--button-color"];

    //CHECKBOX
    proccessedTokens["--checkbox-borderColor"] =
      theme?.checkbox?.color ?? tokens["--checkbox-borderColor"];
    proccessedTokens["--checkbox-checkColor"] =
      theme?.checkbox?.checkColor ?? tokens["--checkbox-checkColor"];
    proccessedTokens["--checkbox-backgroundColorChecked"] =
      theme?.checkbox?.color ?? tokens["--checkbox-backgroundColorChecked"];
    proccessedTokens["--checkbox-disabledBackgroundColorChecked"] =
      this.addOpacity(theme?.checkbox?.color, 0.34) ??
      proccessedTokens["--checkbox-disabledBackgroundColorChecked"];
    proccessedTokens["--checkbox-disabledBorderColor"] =
      this.addOpacity(theme?.checkbox?.color, 0.34) ??
      proccessedTokens["--checkbox-disabledBorderColor"];
    proccessedTokens["--checkbox-disabledCheckColor"] =
      this.addOpacity(theme?.checkbox?.checkColor, 0.34) ??
      proccessedTokens["--checkbox-disabledCheckColor"];

    //CHIP
    proccessedTokens["--chip-backgroundColor"] =
      theme?.chip?.backgroundColor ?? tokens["--chip-backgroundColor"];
    proccessedTokens["--chip-outlinedColor"] =
      theme?.chip?.outlinedColor ?? tokens["--chip-outlinedColor"];
    proccessedTokens["--chip-fontColor"] =
      theme?.chip?.fontColor ?? tokens["--chip-fontColor"];
    proccessedTokens["--chip-disabledBackgroundColor"] =
      this.addOpacity(theme?.chip?.backgroundColor, 0.34) ??
      proccessedTokens["--chip-disabledBackgroundColor"];
    proccessedTokens["--chip-disabledFontColor"] =
      this.addOpacity(theme?.chip?.fontColor, 0.34) ??
      proccessedTokens["--chip-disabledFontColor"];

    //DATE
    proccessedTokens["--date-pickerSelectedDateBackgroundColor"] =
      theme?.date?.pickerSelectedDateBackgroundColor ??
      tokens["--date-pickerSelectedDateBackgroundColor"];
    proccessedTokens["--date-pickerSelectedDateColor"] =
      theme?.date?.pickerSelectedDateColor ??
      tokens["--date-pickerSelectedDateColor"];
    proccessedTokens["--date-pickerHoverDateBackgroundColor"] =
      this.addOpacity(theme?.date?.pickerSelectedDateBackgroundColor, 0.34) ??
      tokens["--date-pickerSelectedDateBackgroundColor"];

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
      proccessedTokens["--dropdown-hoverBackgroundOption"];

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
    proccessedTokens["--header-fontColorMenu"] =
      theme?.header?.fontColorMenu ?? tokens["--header-fontColorMenu"];
    proccessedTokens["--header-hamburguerColor"] =
      theme?.header?.hamburguerColor ?? tokens["--header-hamburguerColor"];
    proccessedTokens["--header-hoverHamburguerColor"] =
      this.addOpacity(theme?.header?.hamburguerColor, 0.16) ??
      tokens["--header-hamburguerColor"];

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

    //RADIO
    proccessedTokens["--radio-color"] =
      theme?.radio?.color ?? tokens["--radio-color"];
    proccessedTokens["--select-disabledColor"] =
      this.addOpacity(theme?.select?.color, 0.34) ??
      tokens["--select-disabledColor"];

    //SELECT
    proccessedTokens["--select-selectedOptionBackgroundColor"] =
      theme?.select?.selectedOptionBackgroundColor ??
      tokens["--select-selectedOptionBackgroundColor"];
    proccessedTokens["--select-hoverOptionBackgroundColor"] =
      this.addOpacity(theme?.select?.selectedOptionBackgroundColor, 0.34) ??
      tokens["--select-selectedOptionBackgroundColor"];

    //SIDENAV
    proccessedTokens["--sidenav-backgroundColor"] =
      theme?.sidenav?.backgroundColor ?? tokens["--sidenav-backgroundColor"];
    proccessedTokens["--sidenav-arrowContainerColor"] =
      this.addOpacity(theme?.sidenav?.arrowContainerColor, 0.34) ??
      tokens["--sidenav-arrowContainerColor"];
    proccessedTokens["--sidenav-arrowColor"] =
      theme?.sidenav?.arrowColor ?? tokens["--sidenav-arrowColor"];

    //SLIDER
    proccessedTokens["--slider-color"] =
      theme?.slider?.color ?? tokens["--slider-color"];
    proccessedTokens["--slider-totalLine"] =
      this.addOpacity(theme?.slider?.color, 0.34) ??
      proccessedTokens["--slider-totalLine"];
    proccessedTokens["--slider-disabledThumbBackgroundColor"] =
      this.addOpacity(theme?.slider?.color, 0.34) ??
      proccessedTokens["--slider-disabledThumbBackgroundColor"];
    proccessedTokens["--slider-disabledDotsBackgroundColor"] =
      this.addOpacity(theme?.slider?.color, 0.34) ??
      proccessedTokens["--slider-disabledDotsBackgroundColor"];
    proccessedTokens["--slider-disabledTrackLine"] =
      this.addOpacity(theme?.slider?.color, 0.34) ??
      proccessedTokens["--slider-disabledTrackLine"];
    proccessedTokens["--slider-disabledtotalLine"] =
      this.addOpacity(theme?.slider?.color, 0.34) ??
      proccessedTokens["--slider-disabledtotalLine"];

    //SPINNER
    proccessedTokens["--spinner-trackCircleColor"] =
      theme?.spinner?.trackCircleColor ?? tokens["--slider-trackCircleColor"];
    proccessedTokens["--spinner-totalCircleColor"] =
      theme?.spinner?.totalCircleColor ?? tokens["--slider-totalCircleColor"];

    //SWITCH
    proccessedTokens["--switch-checkedTrackBackgroundColor"] =
      theme?.switch?.checkedTrackBackgroundColor ??
      tokens["--switch-checkedTrackBackgroundColor"];
    proccessedTokens["--switch-disabledUncheckedTrackBackgroundColor"] =
      this.addOpacity(theme?.switch?.uncheckedTrackBackgroundColor, 0.34) ??
      proccessedTokens["--switch-disabledUncheckedTrackBackgroundColor"];
    proccessedTokens["--switch-disabledFontColor"] =
      this.addOpacity(theme?.switch?.fontColor, 0.34) ??
      proccessedTokens["--switch-disabledFontColor"];
    proccessedTokens["--switch-disabledCheckedTrackBackgroundColor"] =
      this.addOpacity(theme?.switch?.checkedTrackBackgroundColor, 0.34) ??
      proccessedTokens["--switch-disabledCheckedTrackBackgroundColor"];

    //TABLE
    proccessedTokens["--table-headerBackgroundColor"] =
      theme?.table?.headerBackgroundColor ??
      tokens["--table-headerBackgroundColor"];
    proccessedTokens["--table-headerFontColor"] =
      theme?.table?.headerFontColor ?? tokens["--table-headerFontColor"];

    //TEXTAREA
    proccessedTokens["--textarea-disabledFontColor"] =
      this.addOpacity(tokens["--textarea-fontColor"], 0.34) ??
      tokens["--textarea-disabledFontColor"];

    //TEXT INPUT
    proccessedTokens["--inputText-selectedOptionBackgroundColor"] =
      theme?.inputText?.selectedOptionBackgroundColor ??
      tokens["--inputText-selectedOptionBackgroundColor"];
    proccessedTokens["--inputText-hoverOptionBackgroundColor"] =
      this.addOpacity(theme?.inputText?.selectedOptionBackgroundColor, 0.34) ??
      tokens["--inputText-selectedOptionBackgroundColor"];
    proccessedTokens["--inputText-disabledFontColor"] =
      this.addOpacity(tokens["--inputText-fontColor"], 0.34) ??
      tokens["--inputText-disabledFontColor"];

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
    proccessedTokens["--inputText-disabledSelectedBackgroundColor"] =
      this.addOpacity(theme?.toggle?.selectedBackgroundColor, 0.34) ??
      tokens["--inputText-disabledSelectedBackgroundColor"];
    proccessedTokens["--inputText-disabledSelectedFontColor"] =
      this.addOpacity(theme?.toggle?.selectedFontColor, 0.34) ??
      tokens["--inputText-disabledSelectedFontColor"];
    proccessedTokens["--inputText-disabledUnselectedBackgroundColor"] =
      this.addOpacity(theme?.toggle?.unselectedBackgroundColor, 0.34) ??
      tokens["--inputText-disabledUnselectedBackgroundColor"];
    proccessedTokens["--inputText-disabledUnselectedFontColor"] =
      this.addOpacity(theme?.toggle?.unselectedFontColor, 0.34) ??
      tokens["--inputText-disabledUnselectedFontColor"];

    //WIZARD
    proccessedTokens["--wizard-selectedBackgroundColor"] =
      theme?.wizard?.selectedBackgroundColor ??
      tokens["--wizard-selectedBackgroundColor"];
    proccessedTokens["--wizard-selectedFont"] =
      theme?.wizard?.selectedFont ?? tokens["--wizard-selectedFont"];

    return proccessedTokens;
  }
}
