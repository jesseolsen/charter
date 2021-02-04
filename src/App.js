import './App.css';
import { useEffect, useState } from 'react';
import { uuid } from 'lodash-uuid';

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
  console.log('restaurants', restaurants);
  const [genreFilter, setGenreFilter] = useState('');
  const [stateFilter, setStateFilter] = useState('');
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [searchText, setSearchText] = useState('');
  return (
    <div>
      <header className="App-header">
        <p>Restaurant data</p>
          <p>
            <input
              type="text"
              value={ searchText }
              autoFocus={filter === 'Search'}
              placeholder='search'
              onKeyDown={e => {
                console.log('key', e);
                setFilter('Search');
                if(e.key === 'Enter') {
                  setSearch( e.target.value );
                } else {
                  setSearchText( e.target.value );
                }
              }}
              onChange={e => {
                console.log('change');
                setFilter('Search');
                setSearchText( e.target.value );
              }}
            />
            <button onClick={(e) => {
              console.log('e', e);
              setSearch( searchText );
            }}>Search</button>
          </p>
          <table className="styled-table">
            <thead>
              <tr>
                <td key={uuid()}>Name</td>
                <td key={uuid()}>City</td>
                <td key={uuid()}>State</td>
                <td key={uuid()}>Telephone</td>
                <td key={uuid()}>Genre</td>
              </tr>
              <tr>
                <td key={uuid()}><input /></td>
                <td key={uuid()}><input /></td>
                <td key={uuid()}><input
                        type="text"
                        value={ stateFilter }
                        autoFocus={filter === 'State'}
                        onChange={e => {
                          e.preventDefault();
                          setFilter('State');
                          setStateFilter( e.target.value );
                        }}
                /></td>
                <td key={uuid()}><input /></td>
                <td key={uuid()}><input
                        type="text"
                        value={ genreFilter }
                        autoFocus={filter === 'Genre'}
                        onChange={e => {
                          e.preventDefault();
                          setFilter('Genre');
                          setGenreFilter( e.target.value );
                        }}
                /></td>
              </tr>
            </thead>
            <tbody>
              {restaurants.slice(0,10).sort((a,b)=>a.name < b.name ? -1 : 1)
                .filter(r=> r.name.toUpperCase().includes(search.toUpperCase()) ||
                            r.city.toUpperCase().includes(search.toUpperCase()) ||
                            r.genre.toUpperCase().includes(search.toUpperCase()))
                .filter(r=>r.state.startsWith(stateFilter.toUpperCase()))
                .filter(r=>r.genre.toLowerCase().includes(genreFilter.toLowerCase()))
                .map(r => <><tr key={r.id}>
                <td key={uuid()}>{r.name}</td>
                <td key={uuid()}>{r.city}</td>
                <td key={uuid()}>{r.state}</td>
                <td key={uuid()}>{r.telephone}</td>
                <td key={uuid()}>{r.genre}</td>
              </tr></>)}
            </tbody>
          </table>
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
