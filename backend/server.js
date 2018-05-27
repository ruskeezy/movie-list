'use strict';

const express = require('express');
const https = require('https');
const PORT = process.env.PORT || 3000;

const app = express();

const server = module.exports = app.listen(PORT, () => {
  console.log(`Server up on ${PORT}`);
});