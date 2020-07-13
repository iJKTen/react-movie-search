import { useReducer, useEffect, useState } from 'react';

const movieReducer = (state, action) => {
  switch (action.type) {
    case 'STARTED':
      return {
        ...state,
        status: 'pending'
      }
    case 'SUCCESS':
      return {
        ...state,
        pager: {
          current: action.payload.page,
          total: action.payload.total_pages
        },
        data: action.payload.results,
        status: 'success'
      }
    case 'ERROR':
      return {
        ...state,
        status: 'error',
        error: action.payload
      }
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
}

const useMovie = (initialUrl) => {
  const initialState = {
    data: null,
    error: null,
    pager: {
      current: 1,
      total: 0
    },
    status: 'initial'
  };
  const [state, dispatch] = useReducer(movieReducer, initialState);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    const fetchData = async () => {
      if (url.length === 0) {
        return;
      }

      dispatch({
        type: 'STARTED'
      });

      try {
        const response = await fetch(url);
        const data = await response.json();

        dispatch({
          type: 'SUCCESS',
          payload: data
        });
      } catch (error) {
        dispatch({
          type: 'ERROR',
          payload: error
        });
      }
    }

    fetchData();
  }, [url]);

  return {
    state: state,
    fetchMovies: setUrl
  }
}

export default useMovie;
