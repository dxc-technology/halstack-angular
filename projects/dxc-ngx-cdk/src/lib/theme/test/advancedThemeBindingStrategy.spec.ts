import { AdvancedThemeBindingStrategy } from '../advancedThemeBindingStrategy';
import { componentTokens } from '../componentTokens';


const advancedTheme = {
  "accordion": {
    "backgroundColor": "#ffffff",
    "disabledBackgroundColor": "transparent",
    "hoverBackgroundColor": "#f2eafa",
    "arrowColor": "#5f249f",
    "disabledArrowColor": "#999999",
    "assistiveTextFontFamily": "Open Sans, sans-serif",
    "assistiveTextFontSize": "1rem",
    "assistiveTextFontWeight": "300",
    "assistiveTextFontStyle": "italic",
    "assistiveTextLetterSpacing": "0.025em",
    "assistiveTextFontColor": "#666666",
    "disabledAssistiveTextFontColor": "#999999",
    "assistiveTextMinWidth": "100px",
    "assistiveTextPaddingRight": "24px",
    "assistiveTextPaddingLeft": "0px",
    "titleLabelFontFamily": "Open Sans, sans-serif",
    "titleLabelFontSize": "1rem",
    "titleLabelFontWeight": "400",
    "titleLabelFontStyle": "normal",
    "titleLabelFontColor": "#000000",
    "disabledTitleLabelFontColor": "#999999",
    "titleLabelPaddingLeft": "0px",
    "titleLabelPaddingRight": "16px",
    "titleLabelPaddingTop": "0px",
    "titleLabelPaddingBottom": "0px",
    "focusBorderStyle": "solid",
    "focusBorderThickness": "2px",
    "focusBorderColor": "#0095ff",
    "borderRadius": "4px",
    "boxShadowOffsetX": "0px",
    "boxShadowOffsetY": "6px",
    "boxShadowBlur": "10px",
    "boxShadowColor": "#0000001a",
    "iconColor": "#5f249f",
    "disabledIconColor": "#999999",
    "iconSize": "24px",
    "iconMarginLeft": "0px",
    "iconMarginRigth": "12px",
    "accordionGroupSeparatorBorderColor": "#0000001a",
    "accordionGroupSeparatorBorderThickness": "1px",
    "accordionGroupSeparatorBorderRadius": "0px",
    "accordionGroupSeparatorBorderStyle": "solid"
  }
};

test('test binding', () => {
  const binder = new AdvancedThemeBindingStrategy();
  const result = binder.bindProperties(advancedTheme,JSON.parse(JSON.stringify(componentTokens)))
  expect(result).not.toBeNull();
});
