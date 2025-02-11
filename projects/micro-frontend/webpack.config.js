const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  output: {
    publicPath: "auto",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "microApp", // Name of the remote microfrontend
      filename: "remoteEntry.js", // The entry file that the host will load
      exposes: {
        // Expose components or modules from the remote app
        // "./Checkout": "./src/app/checkout/checkout.component.ts",
        "./LazyLoadModule": "./src/app/lazy-load/lazy-load.module.ts",
      },
      shared: {
        "@angular/core": { singleton: true },
        "@angular/common": { singleton: true },
        "@angular/router": { singleton: true },
      },
    }),
  ],
};
