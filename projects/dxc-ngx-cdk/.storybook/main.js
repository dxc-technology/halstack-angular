
import '@angular/localize/init';

module.exports = {
  stories: ['../src/lib/**/*.stories.@(ts|mdx)'],
  addons: ["@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-pseudo-states",
    "@storybook/addon-a11y"]
}
