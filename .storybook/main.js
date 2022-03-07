

module.exports = {
  stories: ['./projects/dxc-ngx-cdk/src/lib/**/*.stories.@(ts|mdx)'],
  addons: ["@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-pseudo-states",
    "@storybook/addon-a11y"],
  logLevel: 'debug',
  framework: '@storybook/angular',
  core: {
    builder: "webpack5",
  },
  angularOptions: {
    enableIvy: true,
  },

}
