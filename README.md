# babel-react-render-defender

<img src="http://i.imgur.com/XSjJMKR.png" />

Babel preset for react-render-defender.

## What does it do?

React Render Defender lets you know when any React component has rendered twice in less than 200ms. This helps you find components which render when they really shouldn't. If a component has rendered twice in the specified time, you will see a message in the console like this:

 <img src ="http://i.imgur.com/ozLuEqQ.png" />

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
      ? ['es2015', 'react', 'stage-0', 'react-hmre', 'babel-react-render-defender']
      : ['es2015', 'react', 'stage-0']
  }
},
```

## Additional Settings

The default threshold is 200ms. If you want to change it, somewhere in your component (for example in componentWillMount) specify: ```this.warningThreshold = 100```



Thanks to Alex Nudelman & Boris Nadion for their help.
Developed as part of my work in Samanage.
