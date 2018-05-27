'use strict';

const express = require('express');
const https = require('https');
const PORT = process.env.PORT || 3000;
const API_KEY = 'af57ecb3e270a06f86dc421fb9b73d1f'
const API_URL = 'https://api.themoviedb.org/3'

const app = express();

app.get('/api/search/popularity', (req, res, next) => {
  
  https.get(`${API_URL}/discover/movie?sort_by=popularity.desc?api_key=${API_KEY}`, resp => {
    console.log('hi');
    let data = '';
  
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      res.send(data);
    });
  
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
})

const server = module.exports = app.listen(PORT, () => {
  console.log(`Server up on ${PORT}`);
});