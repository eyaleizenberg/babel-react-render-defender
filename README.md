# babel-react-render-defender

Babel preset for react-render-defender.

## Install

```sh
$ npm install --save-dev babel-react-render-defender
```

## Usage

You should add this preset only for development.

### Via `.babelrc`

**.babelrc**

```json
{
  "presets": ["babel-react-render-defender"]
}
```

### Via `webpack.config.js`

**Example of webpackConfig file**

```js
webpackConfig.module.loaders = [{
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel',
  query: {
    cacheDirectory: true,
    presets: __DEV__
      ? ['es2015', 'react', 'stage-0', 'react-hmre', 'babel-render-defender']
      : ['es2015', 'react', 'stage-0']
  }
},
```



Thanks to Alex Nudelman & Boris Nadion for their help.
Developed as part of my work in Samanage.
