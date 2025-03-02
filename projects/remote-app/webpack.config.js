const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  output: {
    publicPath: "auto",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remoteApp", // Name of the remote microfrontend
      filename: "remoteEntry.js", // The entry file that the host will load
      exposes: {
        // Expose components or modules from the remote app
        "./ProductList": "./src/app/product-list/product-list.component.ts",
        "./CartList": "./src/app/cart-list/cart-list.component.ts",
        "./RlazyLoadModule": "./src/app/rlazy-load/rlazy-load.module.ts",
      },
      shared: {
        "@angular/core": { singleton: true },
        "@angular/common": { singleton: true },
        "@angular/router": { singleton: true },
      },
    }),
  ],
};
