import { connect } from 'react-redux';
import { CombinedStore } from '../reducers';
import { MoviesResponse } from "../lib/commonTypes";
import { env } from '@brandingbrand/fsapp';

const mapStateToProps = (combinedStore: CombinedStore): any => {
  return {
    moviesData: combinedStore.moviesStore.movies,
    isLoading: combinedStore.moviesStore.loading
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    startLoading: () => {
      dispatch({ type: 'MOVIE_LOADING' });
    },
    fetchMovies: () => {
      fetch(`${env.apiUrl}/top_rated?api_key=${env.apiKey}&`)
      .then((response: Response) => response.json())
      .then((response: MoviesResponse) => dispatch({ type: 'FETCH_MOVIES', data: response.results }))
      .catch((e: Error) => console.error(e));
    }
  };
};

export default function withMovie(
  WrappedComponent: React.ComponentClass<any>
): React.ComponentClass<any> {
  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
}

