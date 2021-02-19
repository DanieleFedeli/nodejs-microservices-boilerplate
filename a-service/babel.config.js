module.exports = {
  plugins: [["module-resolver", { alias: { "#root": "./src" } }]],
  presets: ['@babel/preset-typescript', ['@babel/preset-env', { targets: { node: "current" } }]]
}