module.exports = {
  "presets": [
    ["@babel/env", { modules: process.env.BABEL_ENV === 'esm' ? false : 'commonjs' }],
    "@babel/react"
  ],
  "plugins": [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
    "@babel/transform-react-jsx"
  ]
}