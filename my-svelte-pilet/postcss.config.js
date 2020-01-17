//postcss.config.js
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.tsx","./src/**/*.svelte","./src/**/*.css", "./src/index.html"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});


module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    autoprefixer(),
    ...(process.env.NODE_ENV === "production"
      ? [purgecss, require("cssnano")]
      : [])
  ]
};
