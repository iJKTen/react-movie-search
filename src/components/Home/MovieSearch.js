import React, { Fragment, useState } from 'react';
import MovieCards from './MovieCards';
import useMovie from '../../hooks/useMovie';
import MovieSearchForm from './MovieSearchForm';
import Pager from './Pager';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const { state, fetchMovies } = useMovie('');

  const buildUrl = (query, page = 1) => {
    return `https://api.themoviedb.org/3/search/movie?api_key=ff22151cbe2f68c90e1d8448c9923ad6&language=en-US&query=${query}&page=${page}&include_adult=false`
  }

  const searchMovies = (e) => {
    const url = buildUrl(query);
    e.preventDefault();
    fetchMovies(url);
  }

  const changePage = (page) => {
    const url = buildUrl(query, page);
    fetchMovies(url);
  }

  return (
    <Fragment>
      <MovieSearchForm
        onSubmit={searchMovies}
        query={query}
        setQuery={setQuery}
      />

      {state.status === 'pending' &&
        <div>Loading...</div>
      }

      {state.status === 'success' &&
        <Fragment>
          <MovieCards
            movies={state.data}
          />
          <Pager
            totalPages={state.pager.total}
            currentPage={state.pager.current}
            changePage={changePage}
          />
        </Fragment>
      }

    </Fragment>
  )
}

export default MovieSearch;
