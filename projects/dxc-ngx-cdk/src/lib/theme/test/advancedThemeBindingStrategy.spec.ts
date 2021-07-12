import { AdvancedThemeBindingStrategy } from '../advancedThemeBindingStrategy';
import { componentTokens } from '../componentTokens';


const advancedTheme = {
  "accordion": {
    "backgroundColor": "#FABADA",
    "arrowColor": "#6f2c91",
    "fontColorBase": "#666666",
    "hoverBackgroundColor": "#f5ebf9",
    "disabledFontColor": "#bfbfbf",
    "customContentFontFamily": "Open Sans, sans-serif",
    "customContentFontSize": "1rem",
    "customContentFontWeight": "300",
    "customContentFontColor": "#000000",
    "customContentPanelHeight":"22px",
    "assistiveTextFontFamily": "Open Sans, sans-serif",
    "assistiveTextFontSize": "1rem",
    "assistiveTextFontWeight": "300",
    "assistiveTextFontStyle": "italic",
    "assistiveTextFontColor": "#000000",
    "assistiveTextLetterSpacing": "0.025em",
    "assistiveTextMinWidth": "100px",
    "assistiveTextPaddingLeft":"0px",
    "assistiveTextPaddingRight":"0px",
    "titleLabelFontFamily": "Open Sans, sans-serif",
    "titleLabelFontSize": "1rem",
    "titleLabelFontWeight": "400",
    "titleLabelFontStyle": "normal",
    "titleLabelFontColor": "",
    "titleLabelPaddingLeft": "32px",
    "titleLabelPaddingRight": "16px",
    "titlePaddingTop": "0px",
    "titlePaddingBottom": "0px",
    "titleFocusBorderStyle": "solid",
    "titleFocusBorderThickness": "1px",
    "titleFocusBorderColor": "#6f2c91",
    "borderRadius": "4px",
    "boxShadowOffsetX": "0px",
    "boxShadowOffsetY": "6px",
    "boxShadowBlur": "10px",
    "boxShadowColor": "#00000024",
    "iconMaxHeight": "24px",
    "iconMaxWidth": "24px",
    "iconMarginLeft": "0px",
    "iconMarginRigth": "12px",
    "accordionGroupSeparatorBorderColor": "#00000024",
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
