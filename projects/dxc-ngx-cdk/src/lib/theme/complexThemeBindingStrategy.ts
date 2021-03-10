import { MappingStrategy } from "./mappingStrategy";
import * as Color from "color";

export class ComplexThemeBindingStrategy implements MappingStrategy {
  constructor() {}

  addLightness(hexColor: String, increaseLightness: Number) {
    const color = Color(hexColor);
    const hslColor = color.hsl();
    const lightnessColor = hslColor.color[2];
    return hslColor.lightness(lightnessColor + increaseLightness).hex();
  }

  bindProperties(theme: any, tokens: any) {
    let proccessedTokens = tokens;
    
    //ACCORDION
    proccessedTokens["--accordion-arrowColor"] =
      theme?.accordion?.arrowColor ??
      tokens["--accordion-arrowColor"];
    proccessedTokens["--accordion-hoverBackgroundColor"] = this.addLightness(
      theme?.accordion?.arrowColor ??
        tokens["--accordion-arrowColor"],
      53
    );
    proccessedTokens["--accordion-fontColor"] =
      theme?.accordion?.fontColor ??
      tokens["--accordion-fontColor"];
    proccessedTokens["--accordion-backgroundColor"] =
      tokens["--accordion-backgroundColor"];
    proccessedTokens["--accordion-focusOutline"] =
      theme?.accordion?.arrowColor ??
      tokens["--accordion-arrowColor"];
    proccessedTokens["--accordion-disabledFontColor"] = this.addLightness(
      theme?.accordion?.fontColor ??
        tokens["--accordion-fontColor"],
      53
    );

    //TABS
    proccessedTokens["--tabs-selectedFontColor"] =
      theme?.tabs?.selectedFontColor ??
      tokens["--tabs-selectedFontColor"];
    proccessedTokens["--tabs-selectedIconColor"] =
      theme?.tabs?.selectedFontColor ??
      tokens["--tabs-selectedFontColor"];
    proccessedTokens["--tabs-selectedUnderlinedColor"] =
      theme?.tabs?.selectedFontColor ??
      tokens["--tabs-selectedFontColor"];
    proccessedTokens["--tabs-divider"] = this.addLightness(
      theme?.tabs?.fontColor ?? tokens["--tabs-fontColor"],
      35
    );
    proccessedTokens["--tabs-disabledFontColor"] = this.addLightness(
      theme?.tabs?.fontColor ?? tokens["--tabs-fontColor"],
      35
    );
    proccessedTokens["--tabs-focusColor"] =
      theme?.tabs?.selectedFontColor ??
      tokens["--tabs-selectedFontColor"];
    proccessedTokens["--tabs-hoverBackgroundColor"] = this.addLightness(
      theme?.tabs?.selectedFontColor ??
        tokens["--tabs-selectedFontColor"],
      58
    );
    proccessedTokens["--tabs-pressedBackgroundColor"] = this.addLightness(
      theme?.tabs?.selectedFontColor ??
        tokens["--tabs-selectedFontColor"],
      53
    );

    //------------Sin Hacer---------------------

    //BUTTON
    proccessedTokens["--button-color"] =
      theme?.button?.color ?? tokens["--button-color"];
    proccessedTokens["--button-hoverColor"] =
      theme?.button?.hoverColor ?? tokens["--button-hoverColor"];
    proccessedTokens["--button-primaryFontColor"] =
      theme?.button?.primaryFontColor ??
      tokens["--button-primaryFontColor"];
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
      theme?.button?.textFontColor ??
      tokens["--button-textFontColor"];
    proccessedTokens["--button-textHoverFontColor"] =
      theme?.button?.textHoverFontColor ??
      tokens["--button-textHoverFontColor"];
    proccessedTokens["--button-primaryActiveOpacity"] =
      (theme?.button?.color ?? tokens["--button-color"]) + "A3";
    proccessedTokens["--button-primaryActiveHoverOpacity"] =
      (theme?.button?.hoverColor ?? tokens["--button-hoverColor"]) +
      "A3";
    proccessedTokens["--button-secondaryActiveOpacity"] =
      (theme?.button?.color ?? tokens["--button-color"]) + "29";
    proccessedTokens["--button-secondaryActiveHoverOpacity"] =
      (theme?.button?.hoverColor ?? tokens["--button-hoverColor"]) +
      "29";
    proccessedTokens["--button-secondaryHoverOpacity"] =
      (theme?.button?.hoverColor ?? tokens["--button-hoverColor"]) +
      "14";
    proccessedTokens["--button-textActiveOpacity"] =
      (theme?.button?.color ?? tokens["--button-color"]) + "A3";
    proccessedTokens["--button-textActiveHoverOpacity"] =
      (theme?.button?.hoverColor ?? tokens["--button-hoverColor"]) +
      "A3";

    //CHECKBOX
    proccessedTokens["--checkbox-color"] =
      theme?.checkbox?.color ?? tokens["--checkbox-color"];
    proccessedTokens["--checkbox-checkColor"] =
      theme?.checkbox?.checkColor ??
      tokens["--checkbox-checkColor"];

    //CHIP
    proccessedTokens["--chip-backgroundColor"] =
      theme?.chip?.backgroundColor ??
      tokens["--chip-backgroundColor"];
    proccessedTokens["--chip-outlinedColor"] =
      theme?.chip?.outlinedColor ?? tokens["--chip-outlinedColor"];
    proccessedTokens["--chip-fontColor"] =
      theme?.chip?.fontColor ?? tokens["--chip-fontColor"];

    //DATE
    proccessedTokens["--date-pickerSelectedDateBackgroundColor"] =
      theme?.date?.pickerSelectedDateBackgroundColor ??
      tokens["--date-pickerSelectedDateBackgroundColor"];
    proccessedTokens["--date-pickerSelectedDateColor"] =
      theme?.date?.pickerSelectedDateColor ??
      tokens["--date-pickerSelectedDateColor"];
    proccessedTokens["--date-pickerHoverDateBackgroundColor"] =
      (theme?.date?.pickerSelectedDateBackgroundColor ??
        tokens["--date-pickerSelectedDateBackgroundColor"]) + "57";

    //DROPDOWN
    proccessedTokens["--dropdown-backgroundColor"] =
      theme?.dropdown?.backgroundColor ??
      tokens["--dropdown-backgroundColor"];
    proccessedTokens["--dropdown-fontColor"] =
      theme?.dropdown?.fontColor ?? tokens["--dropdown-fontColor"];
    proccessedTokens["--dropdown-hoverBackgroundColor"] =
      (theme?.dropdown?.backgroundColor ??
        tokens["--dropdown-backgroundColor"]) + "CC";

    //FOOTER
    proccessedTokens["--footer-backgroundColor"] =
      theme?.footer?.backgroundColor ??
      tokens["--footer-backgroundColor"];
    proccessedTokens["--footer-fontColor"] =
      theme?.footer?.fontColor ?? tokens["--footer-fontColor"];
    proccessedTokens["--footer-lineColor"] =
      theme?.footer?.lineColor ?? tokens["--footer-lineColor"];

    //HEADER
    proccessedTokens["--header-backgroundColor"] =
      theme?.header?.backgroundColor ??
      tokens["--header-backgroundColor"];
    proccessedTokens["--header-underlinedColor"] =
      theme?.header?.underlinedColor ??
      tokens["--header-underlinedColor"];
    proccessedTokens["--header-fontColor"] =
      theme?.header?.fontColor ?? tokens["--header-fontColor"];
    proccessedTokens["--header-backgroundColorMenu"] =
      theme?.header?.backgroundColorMenu ??
      tokens["--header-backgroundColorMenu"];
    proccessedTokens["--header-fontColorMenu"] =
      theme?.header?.fontColorMenu ??
      tokens["--header-fontColorMenu"];
    proccessedTokens["--header-hamburguerColor"] =
      theme?.header?.hamburguerColor ??
      tokens["--header-hamburguerColor"];
    proccessedTokens["--header-hoverHamburguerColor"] =
      (theme?.header?.hamburguerColor ??
        tokens["--header-hamburguerColor"]) + "29";

    //PAGINATOR
    proccessedTokens["--paginator-paginatorBackgroundColor"] =
      theme?.paginator?.paginatorBackgroundColor ??
      tokens["--paginator-paginatorBackgroundColor"];
    proccessedTokens["--paginator-paginatorFontColor"] =
      theme?.paginator?.paginatorFontColor ??
      tokens["--paginator-paginatorFontColor"];

    //PROGRESSBAR
    proccessedTokens["--progressbar-trackLine"] =
      theme?.progressbar?.trackLine ??
      tokens["--progressbar-trackLine"];
    proccessedTokens["--progressbar-totalLine"] =
      theme?.progressbar?.totalLine ??
      tokens["--progressbar-totalLine"];

    //RADIO
    proccessedTokens["--radio-color"] =
      theme?.radio?.color ?? tokens["--radio-color"];

    //SELECT
    proccessedTokens["--select-selectedOptionBackgroundColor"] =
      theme?.select?.selectedOptionBackgroundColor ??
      tokens["--select-selectedOptionBackgroundColor"];
    proccessedTokens["--select-hoverOptionBackgroundColor"] =
      (theme?.select?.selectedOptionBackgroundColor ??
        tokens["--select-selectedOptionBackgroundColor"]) + "57";

    //SIDENAV
    proccessedTokens["--sidenav-backgroundColor"] =
      theme?.sidenav?.backgroundColor ??
      tokens["--sidenav-backgroundColor"];
    proccessedTokens["--sidenav-arrowContainerColor"] =
      theme?.sidenav?.arrowContainerColor ??
      tokens["--sidenav-arrowContainerColor"];
    proccessedTokens["--sidenav-arrowColor"] =
      theme?.sidenav?.arrowColor ?? tokens["--sidenav-arrowColor"];

    //SLIDER
    proccessedTokens["--slider-color"] =
      theme?.slider?.color ?? tokens["--slider-color"];

    //SPINNER
    proccessedTokens["--spinner-trackCircleColor"] =
      theme?.spinner?.trackCircleColor ??
      tokens["--slider-trackCircleColor"];
    proccessedTokens["--spinner-totalCircleColor"] =
      theme?.spinner?.totalCircleColor ??
      tokens["--slider-totalCircleColor"];

    //SWITCH
    proccessedTokens["--switch-checkedTrackBackgroundColor"] =
      theme?.switch?.checkedTrackBackgroundColor ??
      tokens["--switch-checkedTrackBackgroundColor"];

    //TABLE
    proccessedTokens["--table-headerBackgroundColor"] =
      theme?.table?.headerBackgroundColor ??
      tokens["--table-headerBackgroundColor"];
    proccessedTokens["--table-headerFontColor"] =
      theme?.table?.headerFontColor ??
      tokens["--table-headerFontColor"];

    //TEXT INPUT
    proccessedTokens["--inputText-selectedOptionBackgroundColor"] =
      theme?.inputText?.selectedOptionBackgroundColor ??
      tokens["--inputText-selectedOptionBackgroundColor"];
    proccessedTokens["--inputText-hoverOptionBackgroundColor"] =
      (theme?.inputText?.selectedOptionBackgroundColor ??
        tokens["--inputText-selectedOptionBackgroundColor"]) + "57";

    //TOGGLE GROUP
    proccessedTokens["--toggle-unselectedBackgroundColor"] =
      theme?.toggle?.unselectedBackgroundColor ??
      tokens["--toggle-unselectedBackgroundColor"];
    proccessedTokens["--toggle-unselectedHoverBackgroundColor"] =
      theme?.toggle?.unselectedHoverBackgroundColor ??
      tokens["--toggle-unselectedHoverBackgroundColor"];
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
      theme?.toggle?.selectedFontColor ??
      tokens["--toggle-selectedFontColor"];
    proccessedTokens["--toggle-selectedHoverFontColor"] =
      theme?.toggle?.selectedHoverFontColor ??
      tokens["--toggle-selectedHoverFontColor"];

    //WIZARD
    proccessedTokens["--wizard-selectedBackgroundColor"] =
      theme?.wizard?.selectedBackgroundColor ??
      tokens["--wizard-selectedBackgroundColor"];
    proccessedTokens["--wizard-selectedFont"] =
      theme?.wizard?.selectedFont ??
      tokens["--wizard-selectedFont"];

    return proccessedTokens;
  }
}
