import { FETCH_MOVIES, MOVIE_LOADING } from '../lib/constants';
import { ActionInterface, MovieDescriptionInterface, MovieInterface } from "../lib/commonTypes";

export interface MovieStore {
  movies: MovieInterface[];
  movieDescription: MovieDescriptionInterface[];
  loading: boolean;
}

const INITIAL_STATE: any = {
  movies: [],
  descriptionMovie: [],
  loading: false
};

export default function movieReducer(
  movieStore: MovieStore = INITIAL_STATE,
  action: ActionInterface): MovieStore {
  switch (action.type) {
    case MOVIE_LOADING: {
      return {
        ...movieStore,
        loading: true
      };
    }
    case FETCH_MOVIES: {
      return {
        ...movieStore,
        movies: action.data,
        loading: false
      };
    }
    default: {
      return movieStore;
    }
  }
}
