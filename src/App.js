import './App.css';
import { useEffect, useState } from 'react';

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
        console.log(json);
      })
    });
  }, []);
  console.log('restaurants', restaurants);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Restaurant data
          <ul>
            {restaurants.map(r => (<li key={r.id}>{r.name}</li>))}
          </ul>
        </p>
        <a
          className="App-link"
          href="https://jesseolsen.github.io/charter/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hosted site
        </a>
        <a
          className="App-link"
          href="https://github.com/jesseolsen/charter"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub source repository
        </a>
      </header>
    </div>
  );
}

export default App;
