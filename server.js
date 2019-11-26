/**
 * Express server
 */

'use strict';

const express = require('express');
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;

function startServer() {
  const app = express();

    app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301));

    const now = new Date();
    const time = `${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`;
    const path = `"${req.method} ${req.path}"`;
    const m = `${req.ip} - ${time} - ${path}`;
    // eslint-disable-next-line no-console
    console.log(m);
    next();
  });

  app.use(express.static('public'));

  return app.listen('8000', () => {
    // eslint-disable-next-line no-console
    console.log('Ding dong! Dev server started at port 8000...');
  });
}

startServer();
