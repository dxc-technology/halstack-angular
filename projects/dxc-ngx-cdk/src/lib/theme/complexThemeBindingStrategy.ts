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
    //Accordion
    proccessedTokens["--accordion-arrowColor"] =
      theme?.properties?.accordion?.arrowColor ??
      tokens["--accordion-arrowColor"];
    proccessedTokens["--accordion-hoverBackgroundColor"] = this.addLightness(
      theme?.properties?.accordion?.arrowColor ??
        tokens["--accordion-arrowColor"],
      53
    );
    proccessedTokens["--accordion-fontColor"] =
      theme?.properties?.accordion?.fontColor ??
      tokens["--accordion-fontColor"];
    proccessedTokens["--accordion-backgroundColor"] =
      tokens["--accordion-backgroundColor"];
    proccessedTokens["--accordion-focusOutline"] =
      theme?.properties?.accordion?.arrowColor ??
      tokens["--accordion-arrowColor"];
    proccessedTokens["--accordion-disabledFontColor"] = this.addLightness(
      theme?.properties?.accordion?.fontColor ??
        tokens["--accordion-fontColor"],
      53
    );

    //Tabs
    proccessedTokens["--tabs-selectedFontColor"] =
      theme?.properties?.tabs?.selectedFontColor ??
      tokens["--tabs-selectedFontColor"];
    proccessedTokens["--tabs-selectedIconColor"] =
      theme?.properties?.tabs?.selectedFontColor ??
      tokens["--tabs-selectedFontColor"];
    proccessedTokens["--tabs-selectedUnderlinedColor"] =
      theme?.properties?.tabs?.selectedFontColor ??
      tokens["--tabs-selectedFontColor"];
    proccessedTokens["--tabs-divider"] = this.addLightness(
      theme?.properties?.tabs?.fontColor ?? tokens["--tabs-fontColor"],
      35
    );
    proccessedTokens["--tabs-disabledFontColor"] = this.addLightness(
      theme?.properties?.tabs?.fontColor ?? tokens["--tabs-fontColor"],
      35
    );
    proccessedTokens["--tabs-focusColor"] =
      theme?.properties?.tabs?.selectedFontColor ??
      tokens["--tabs-selectedFontColor"];
    proccessedTokens["--tabs-hoverBackgroundColor"] = this.addLightness(
      theme?.properties?.tabs?.selectedFontColor ??
        tokens["--tabs-selectedFontColor"],
      58
    );
    proccessedTokens["--tabs-pressedBackgroundColor"] = this.addLightness(
      theme?.properties?.tabs?.selectedFontColor ??
        tokens["--tabs-selectedFontColor"],
      53
    );

    //------------Sin Hacer---------------------

    //CHECKBOX
    proccessedTokens["--checkbox-color"] =
      theme?.properties?.checkbox?.color ?? tokens["--checkbox-color"];
    proccessedTokens["--checkbox-checkColor"] =
      theme?.properties?.checkbox?.checkColor ??
      tokens["--checkbox-checkColor"];

    return proccessedTokens;
  }
}
