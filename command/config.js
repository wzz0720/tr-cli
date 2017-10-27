#!/usr/bin/env node --harmony
'use strict'
const config = {

};

config.packageConfig = {
  "name": "react-demo",
  "version": "1.0.0",
  "description": "app",
  "main": "index.js",
  "scripts": {
    "start:pre": "node scripts/start.pre.js",
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "mocha  --compilers js:babel-core/register test"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "add-asset-html-webpack-plugin": "^2.1.2",
    "babel-core": "^6.24.1",
    "babel-loader": "^7.1.2",
    "babel-preset-env": "^1.6.0",
    "babel-preset-react": "^6.24.1",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "chai": "^4.1.2",
    "chalk": "^2.1.0",
    "css-loader": "^0.28.7",
    "extract-text-webpack-plugin": "^3.0.0",
    "file-loader": "^0.11.2",
    "fs-extra": "^4.0.2",
    "html-webpack-plugin": "^2.30.1",
    "node-sass": "^4.5.3",
    "sass-loader": "^6.0.6",
    "style-loader": "^0.18.2",
    "url-loader": "^0.5.9",
    "webpack": "^3.6.0",
    "webpack-dev-server": "^2.8.2"
  },
  "proxy": {}
}


module.exports = config;