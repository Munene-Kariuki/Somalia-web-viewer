const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = function override(config, env) {
  // Add the NodePolyfillPlugin
  config.plugins.push(new NodePolyfillPlugin());

  // Add the resolve fallback for timers
  config.resolve.fallback = {
    timers: require.resolve("timers-browserify")
  };

  return config;
};
