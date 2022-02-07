module.exports = function ({ config }) {
  config.module.rules.push({
    test: /\.stories\.ts$/,
    use: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: { parser: 'typescript' },
      },
    ],
    enforce: 'pre',
  });

  return config;
};
