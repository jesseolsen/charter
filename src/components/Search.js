import PropTypes from 'prop-types';

function Search(props) {
  const {searchText, setSearch, setSearchText, filter, setFilter} = props;
  return (
    <p>
      <input
        type="text"
        value={ searchText }
        autoFocus={filter === 'Search'}
        placeholder='search'
        onKeyDown={e => {
          setFilter('Search');
          if(e.key === 'Enter') {
            setSearch( e.target.value );
          } else {
            setSearchText( e.target.value );
          }
        }}
        onChange={e => {
          setFilter('Search');
          setSearchText( e.target.value );
        }}
      />
      <button onClick={(e) => {
        setSearch( searchText );
      }}>Search</button>
    </p>
  );
}

Search.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  setSearchText: PropTypes.func.isRequired
}

export default Search;
