import React from 'react';
import styled from '@emotion/styled';
import MovieCard from './MovieCard';

const CardList = styled.div`
  margin-top: 4rem;
`

const MovieCards = (props) => {
  const { movies } = props;

  return (
    <CardList>
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        )
      })}
    </CardList>
  )
}

export default MovieCards;
