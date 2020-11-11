/* eslint-disable 
    import/no-extraneous-dependencies, 
    @typescript-eslint/no-var-requires */

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const rewireBundleAnalyzer = (configFile) => {
  if (!process.argv.includes('--analyze-bundles')) return configFile;

  const config = configFile;

  if (!config.plugins) {
    config.plugins = [];
  }

  config.plugins.push(new BundleAnalyzerPlugin());

  return config;
};

module.exports = (config, env) => {
  rewireBundleAnalyzer(config, env);
  return config;
};
