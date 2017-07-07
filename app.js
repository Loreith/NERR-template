import http from 'http';
import express from 'express';

/*
 *  App main file.
 *  Handles Express instantiation.
 */

const app = express();

if (process.env.NODE_ENV === 'development') {
  //Dev env stuff like hot reloading ect.
} else {
  //Default env
  const routes = require('./out').default;
  app.use(routes);
}


module.exports = app;
