import PropTypes from 'prop-types';

import '../App.css';

function Pagination(props) {
  const {restaurants, page, setPage} = props;
  return (
    <>
      {' '}Page {page+1} of {Math.ceil(restaurants.length / 10)}{' '}
      <p>
        <button
          disabled={page === 0}
          onClick={()=>setPage(0)}>&lt;&lt;</button>
        <button
          disabled={page === 0}
          onClick={()=>setPage(page === 0 ? 0 : page - 1)}>&lt;</button>
        <button
          disabled={page === Math.floor(restaurants.length / 10)}
          onClick={()=>setPage((page+1)*10 > restaurants.length ? page : page + 1)}>&gt;</button>
        <button
          disabled={page === Math.floor(restaurants.length / 10)}
          onClick={()=>setPage((page+1)*10 > restaurants.length ? page : Math.floor(restaurants.length / 10))}>&gt;&gt;</button>
      </p>
    </>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  restaurants: PropTypes.array.isRequired
}

export default Pagination;
