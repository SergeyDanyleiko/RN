import {connect} from 'react-redux';
import {CombinedStore} from '../reducers';
import {MovieDescriptionInterface, MoviesResponse} from '../lib/commonTypes';
import { env } from '@brandingbrand/fsapp';

const mapStateToProps = (combinedStore: CombinedStore): any => {
  return combinedStore.descriptionMovieStore;
};

// provide actions (that can change redux store) to wrapped component as props
const mapDispatchToProps = (dispatch: any) => {
  return {
    startLoading: () => {
      dispatch({type: 'DESCRIPTION_LOADING'});
    },
    fetchMovieDescription: (movieId: number): void => {
      fetch(`${env.apiUrl}/${movieId}?api_key=${env.apiKey}`)
        .then(response => response.json())
        .then((response: MovieDescriptionInterface) => dispatch({type: 'FETCH_DESCRIPTION_MOVIES', data: response}))
        .catch(e => console.error(e));
    },
    fetchSimilarMovie: (movieId: number): void => {
      fetch(`${env.apiUrl}/${movieId}/similar?api_key=${env.apiKey}`)
        .then(response => response.json())
        .then((result: MoviesResponse) => dispatch({type: 'FETCH_SIMILAR_MOVIES', data: result.results}))
        .catch(e => console.error(e));
    }
  };
};

export default function withMovie(
  WrappedComponent: React.ComponentClass<any>
): React.ComponentClass<any> {
  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
}
