import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import superagent from 'superagent';

const API_KEY = 'af57ecb3e270a06f86dc421fb9b73d1f'
const API_URL = 'https://api.themoviedb.org/3'

class App extends React.Component {

  componentDidMount() {
    console.log(':::GET REQUEST::::');
    superagent.get(`${API_URL}/discover/movie?sort_by=popularity.desc?api_key=${API_KEY}`).then(function(res) {
      // res.body, res.headers, res.status
      console.log('yoh');
   });
  }

  render() {
    return (
      <section>
        <h1>Sup</h1>
      </section>
    )
  }
}

export default App;