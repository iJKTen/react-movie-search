import React from 'react';
import styled from '@emotion/styled';

const Card = styled.div`
  padding: 2rem 4rem;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.25);
  margin-bottom: 2rem;
`

const CardTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 3.2rem;
`

const CardImage = styled.img`
  margin: 0 auto;
  display: block;
`

const MovieCard = (props) => {
  const { movie } = props;
  return (
    <Card>
      {movie.poster_path !== null &&
        <CardImage
          alt={`${movie.title} Poster`}
          className='card-image'
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`}
        />
      }
      <div>
        <CardTitle>{movie.title}</CardTitle>
        <p><small>RELEASE DATE: {movie.release_date}</small></p>
        <p><small>RATING: {movie.vote_average}</small></p>
        <p className='card-desc'>{movie.overview}</p>
      </div>
    </Card>
  )
}

export default MovieCard;
