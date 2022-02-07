import { configure, addDecorator } from "@storybook/angular";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";


addDecorator(withKnobs);
addDecorator(withA11y);

const req = require.context("../", true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => {
    console.log(filename);
    return req(filename);
  }
  );
}

configure(loadStories, module);
