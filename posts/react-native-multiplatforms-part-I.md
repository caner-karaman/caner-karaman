---
title: "How Integrate React Native Web Existing React Native Apps"
date: "28-11-2021"
description: "Learn, what is and benefits of react native web, and how can we easily and quickly integrate react native web into existing react native application!"
tags: "react-native, react-native-web, typescript"
---
Topics we will talk about in this article are:

1. What is react native web?
2. How does React Native for Web work?
3. Why should use React Native for Web?
4. Implementing react native web

### 1. What is react native web?

**React native** is a framework created by facebook to develop native ios and android applications. But what about the web? This is the main problem that **React native for web** solves. Instead of creating two different codebases for web and mobile application, it solves this problem with a single codebase. Let's take a quick look at how it solved this problem

### 2. How does React Native for Web work?

Basically, mobile application and web application have very different foundations from each other. They have different APIs that do the same job. For example, render ui.

The good news is we use the **react** library to develop **react native** and this library is one of the most popular libraries for web application development. While we use html tags such as **div**, **p**, **input** while developing web with **React**, we use **react-native** components such as **View, Text, TextInput** when developing mobile with **react-native**. Here, **react-native-web** takes these **react-native** components while building and converts them to their web counterparts.

### 3. Why should use React Native for Web?

- **Accessible HTML**. Support different devices and input modes, render semantic tags.
- **High-quality interactions**. Support gestures and multiple input modes (touch, mouse, keyboard).
- **Reliable styles**. Rely on scoped styles and automatic vendor-prefixing. Support RTL layouts.
- **Responsive containers**. Respond to element resize events.
- **Incremental adoption**. Interoperates with existing React DOM components. Bundle only what you use.

These are the reasons written on the document site.

### 4. Implementing React Native for Web

First of all, let's install our react native application as in the link. [https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup)

After the all environmental packages are installed, setup react native app with this script for typescript:
npx react-native init MyApp --template react-native-template-typescript

After the installation, let check our app is working. 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9f2a5969-4b0d-4794-ac13-a487fa63dba9/Untitled.png)

It works fine ios, and android. Now, Let's start by installing these packages in our project

`npm install react-dom react-native-web` 

`npm install --save-dev babel-plugin-react-native-web`

In this project we use webpack for building web application, and Metro for building react-native. Webpack-related dependencies: 

`npm install --save-dev babel-loader url-loader webpack webpack-cli webpack-dev-server html-webpack-plugin babel-plugin-react-native-web`

After all these installation, create three files to root folder.

```
// webpack.config.js
const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = path.resolve(__dirname);
const {presets, plugins} = require(`${appDirectory}/babel.config.js`);

const compileNodeModules = [
  // Add every react-native package that needs compiling
  // 'react-native-gesture-handler',
].map((moduleName) => path.resolve(appDirectory, `node_modules/${moduleName}`));

const babelLoaderConfiguration = {
  test: /\.ts$|tsx?$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(__dirname, 'index.web.js'), // Entry to your application
    path.resolve(__dirname, 'App.tsx'), // Change this to your main App file
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'component'),
    ...compileNodeModules,
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets,
      plugins,
    },
  },
};

const svgLoaderConfiguration = {
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
    },
  ],
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};

module.exports = {
  entry: {
    app: path.join(__dirname, 'index.web.js'),
  },
  output: {
    path: path.resolve(appDirectory, 'dist'),
    publicPath: '/',
    filename: 'rnw.bundle.js',
  },
  resolve: {
    extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.js', '.js'],
    alias: {
      'react-native$': 'react-native-web',
    },
  },
  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration,
      svgLoaderConfiguration,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      // See: https://github.com/necolas/react-native-web/issues/349
      __DEV__: JSON.stringify(true),
    }),
  ],
};
```

```jsx
import {AppRegistry} from 'react-native';
import App from './App';
if (module.hot) {
  module.hot.accept();
}
AppRegistry.registerComponent('React Native Web', () => App);
AppRegistry.runApplication('React Native Web', {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
```

```jsx
// index.html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>RN Web</title>
    <style>
      #app-root {
        display: flex;
        flex: 1 1 100%;
        height: 100vh;
      }
    </style>
  </head>
  <body>
    <div id="app-root"></div>
  </body>
</html>
```

And final change your App.tsx like this:

```jsx
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle='dark-content' />
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 24}}>React Native Web App Example</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
```

Yeah! It's finished. You can run this project on three platform, web, android, and ios. For develop web application, add script to this on package.json 

```jsx
"web": "webpack serve --mode=development --config webpack.config.js"
```

Let's test if it works on all platforms.

## References:

[React Native for Web](https://necolas.github.io/react-native-web/)

[React Native For Web: A Glimpse Into The Future - Smashing Magazine](https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/)

[How To Build Mobile-Friendly Web Apps with React Native Web | DigitalOcean](https://www.digitalocean.com/community/tutorials/build-mobile-friendly-web-apps-with-react-native-web)

[The State of React Native for Web in 2021](https://www.crowdbotics.com/blog/the-state-of-react-native-for-web-in-2021)

[React-Native-Web: A Brief Introduction -](https://codersera.com/blog/react-native-web/)

[Hands-on with React Native for Web: A complete tutorial - LogRocket Blog](https://blog.logrocket.com/react-native-web-complete-tutorial/)