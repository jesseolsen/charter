import '../App.css';
import { useState } from 'react';
import { uuid } from 'lodash-uuid';
import PropTypes from 'prop-types';

import Pagination from './Pagination';
import Search from './Search';

function Table(props) {
  const {restaurants} = props;
  const [page, setPage] = useState(0);
  const [genreFilter, setGenreFilter] = useState('');
  const [stateFilter, setStateFilter] = useState('');
  const [filter, setFilter] = useState('');
  const [filterToggle, setFilterToggle] = useState(true);
  const [search, setSearch] = useState('');
  const [searchText, setSearchText] = useState('');
  let filteredCount = 0;
  return (
    <div>
      <header className="App-header">
          <Search
            filter={filter}
            setFilter={setFilter}
            searchText={searchText}
            setSearchText={setSearchText}
            setSearch={setSearch} />
          <Pagination page={page} setPage={setPage} restaurants={restaurants} />
          <button onClick={()=>setFilterToggle(!filterToggle)}>Toggle filters</button>
          <table className="styled-table">
            <thead>
              <tr key='h1'>
                <td key={uuid()}>Name</td>
                <td key={uuid()}>City</td>
                <td key={uuid()}>State</td>
                <td key={uuid()}>Telephone</td>
                <td key={uuid()}>Genre</td>
              </tr>
              <tr key='h2'>
                <td key={uuid()}></td>
                <td key={uuid()}></td>
                <td key={uuid()}><input
                        type="text"
                        value={ stateFilter }
                        autoFocus={filter === 'State'}
                        disabled={!filterToggle}
                        onChange={e => {
                          e.preventDefault();
                          setFilter('State');
                          setStateFilter( e.target.value );
                        }}
                /></td>
                <td key={uuid()}></td>
                <td key={uuid()}><input
                        type="text"
                        value={ genreFilter }
                        autoFocus={filter === 'Genre'}
                        disabled={!filterToggle}
                        onChange={e => {
                          e.preventDefault();
                          setFilter('Genre');
                          setGenreFilter( e.target.value );
                        }}
                /></td>
              </tr>
            </thead>
            <tbody>
              {restaurants
                .sort((a,b)=>a.name < b.name ? -1 : 1)
                .slice(page*10, (page+1)*10)
                .filter(r=> r.name.toUpperCase().includes(search.toUpperCase()) ||
                            r.city.toUpperCase().includes(search.toUpperCase()) ||
                            r.genre.toUpperCase().includes(search.toUpperCase()))
                .filter(r=>!filterToggle || r.state.startsWith(stateFilter.toUpperCase()))
                .filter(r=>!filterToggle || r.genre.toLowerCase().includes(genreFilter.toLowerCase()))
                .map(r => {
                  filteredCount++;
                  return (<><tr key={r.id}>
                    <td key={uuid()}>{r.name}</td>
                    <td key={uuid()}>{r.city}</td>
                    <td key={uuid()}>{r.state}</td>
                    <td key={uuid()}><a href={`tel:${r.telephone}`}>{r.telephone}</a></td>
                    <td key={uuid()}>{r.genre}</td>
              </tr></>)})}
            </tbody>
          </table>
          {filteredCount < 1 && <p>No results were found.</p>}
      </header>
    </div>
  );
}

Table.propTypes = {
  restaurants: PropTypes.array.isRequired
}

export default Table;
