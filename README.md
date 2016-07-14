# Babel React Render Defender

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

The default threshold is 200ms. If you want to change it or go into quiet mode, do the following:
1. In your root directory create a file called: ```rdefender.json```
2. In your file specify the constructor name of the component of which you want to change the threshold:

```json
{
  "LogCallForm" : 200
}
```

3. If you want to go into 'quiet mode' for a little while, add ```"quiet_mode": true``` to the file (don't forget to remove it when you are done with your heavy debugging):

```json
{
  "LogCallForm" : 200,
  "quiet_mode": true
}
```


Thanks to Alex Nudelman & Boris Nadion for their help.
Developed as part of my work in Samanage.
