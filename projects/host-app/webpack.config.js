const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  output: {
    publicPath: "auto",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "hostApp", // Name of the host application
      remotes: {
        // Define remotes (other microfrontends that this app will load)
        remoteApp: "remoteApp@http://localhost:4201/remoteEntry.js",
        microApp: "microApp@http://localhost:4202/remoteEntry.js",
      },
      shared: {
        "@angular/core": { singleton: true },
        "@angular/common": { singleton: true },
        "@angular/router": { singleton: true },
      },
    }),
  ],
};
