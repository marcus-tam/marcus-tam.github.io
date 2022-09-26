import React from 'react';
import './App.css';
import { Buffer } from 'buffer';
import { json } from 'stream/consumers';
import {add} from './spotify_demo.js';

<script type="text/javascript" src="spotify_demo.js"></script>
const logo = require("./logo.svg") as string;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className = "app">
        <p><code>SECRET_KEY: </code> {process.env.REACT_APP_SPOTIFY_SECRET_KEY}</p>
        <p><code>PUBLIC_KEY: </code> {process.env.REACT_APP_SPOTIFY_PUBLIC_KEY}</p>
        <p> {process.env.REACT_APP_NOT_SECRET_CODE} </p>

        <p>
          Hello World!
        </p>
        <p>{add(2,3)}</p>
        <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// var client_id = process.env.REACT_APP_SPOTIFY_PUBLIC_KEY;
// var client_secret = process.env.REACT_APP_SPOTIFY_SECRET_KEY;


// var authOptions = {
//   url: 'https://accounts.spotify.com/api/token',
//   headers: {
//     'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
//   },
//   form: {
//     grant_type: 'client_credentials'
//   },
//   json: true
// };
// // console.log(JSON.stringify(authOptions));

// fetch(JSON.stringify(authOptions))
//   .then((response) => response.json())
//   .then((data) => console.log(data));

export default App;
