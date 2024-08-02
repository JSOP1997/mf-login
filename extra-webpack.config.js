const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  singleSpaWebpackConfig.output = {
    ...singleSpaWebpackConfig.output,
    publicPath: 'http://localhost:4200/',  // Asegurarse de que publicPath está configurado correctamente
  };

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};

