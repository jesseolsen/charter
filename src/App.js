import './App.css';
import Table from './components/Table';
import Links from './components/Links';
import React, { useEffect, useState } from 'react';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants", {
        headers: {
        Authorization: "Api-Key q3MNxtfep8Gt",
        },
    }).then(data => {
      data.json().then(json => {
        setRestaurants(json);
      })
    });
  }, []);
  return (
    <div>
      <header className="App-header">
        <h1>Restaurant Data</h1>
        <Table restaurants={restaurants}/>
        <Links />
      </header>
    </div>
  );
}

export default App;
