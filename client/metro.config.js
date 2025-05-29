const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const { withMonicon } = require("@monicon/metro");

let config = getDefaultConfig(__dirname);

// Apply withMonicon first
config = withMonicon(config, {
  icons: ["logos:google-icon"],
  collections: ["solar"],
});

// Then apply withNativeWind
config = withNativeWind(config, {
  input: "./styles/global.css",
});

config.resolver.unstable_enablePackageExports = true;

module.exports = config;
