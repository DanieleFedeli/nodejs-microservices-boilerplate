module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "~": "./src"
        }
      }
    ]
  ],
  presets: ['@babel/preset-typescript',
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ]
  ]
};