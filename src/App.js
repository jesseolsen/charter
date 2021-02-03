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
          <table>
            <thead>
              <tr>
                <td>name</td>
                <td>city</td>
                <td>state</td>
                <td>telephone</td>
                <td>genre</td>
              </tr>
            </thead>
            <tbody>
              {restaurants.map(r => <><tr key={r.id}>
                <td>{r.name}</td>
                <td>{r.city}</td>
                <td>{r.state}</td>
                <td>{r.telephone}</td>
                <td>{r.genre}</td>
              </tr></>)}
            </tbody>
          </table>
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
