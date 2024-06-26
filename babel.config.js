module.exports = (api) => {
  api.cache(true);

  const presets = [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ];

  const plugins = ["@babel/plugin-transform-runtime"];

  return {
    presets,
    plugins,
  };
};