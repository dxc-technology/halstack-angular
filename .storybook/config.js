import { configure, addParameters, addDecorator } from "@storybook/angular";
import dxcTheme from "./dxc-theme.js";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";

import "../src/styles.scss";

addDecorator(withKnobs);
addDecorator(withA11y);

const req = require.context("../", true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    theme: dxcTheme
  }
});

configure(loadStories, module);
