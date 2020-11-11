/* eslint-disable 
    import/no-extraneous-dependencies, 
    @typescript-eslint/no-var-requires */

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const path = require('path');

const rewireAliases = (configFile) => {
  const config = configFile;

  config.resolve = {
    ...config.resolve,
    alias: {
      '@translations': path.resolve(__dirname, 'src/translations/'),
    },
  };

  return config;
};

const rewireBundleAnalyzer = (configFile) => {
  if (!process.argv.includes('--analyze-bundles')) return configFile;

  const config = configFile;

  if (!config.plugins) {
    config.plugins = [];
  }

  config.plugins.push(new BundleAnalyzerPlugin());

  return config;
};

module.exports = (config) => {
  rewireAliases(config);
  rewireBundleAnalyzer(config);
  return config;
};
