import { ActionInterface, MovieDescriptionInterface, SimilarItemInterface } from "../lib/commonTypes";
import { DESCRIPTION_LOADING, FETCH_DESCRIPTION_MOVIES, FETCH_SIMILAR_MOVIES } from "../lib/constants";

export interface DescriptionMovieStore {
  descriptionMovie: MovieDescriptionInterface[];
  similarMovies: SimilarItemInterface[];
  isLoading: boolean;
}

const INITIAL_STATE: DescriptionMovieStore = {
  descriptionMovie: [],
  similarMovies: [],
  isLoading: false
};

export default function descriptionMovieReducer(
  descriptionStore: DescriptionMovieStore = INITIAL_STATE, action: ActionInterface
): DescriptionMovieStore {
  switch (action.type) {
    case DESCRIPTION_LOADING: {
      return {
        ...descriptionStore,
        descriptionMovie: [],
        similarMovies: [],
        isLoading: true
      };
    }
    case FETCH_DESCRIPTION_MOVIES: {
      return {
        ...descriptionStore,
        descriptionMovie: action.data,
        isLoading: false
      };
    }
    case FETCH_SIMILAR_MOVIES: {
      return {
        ...descriptionStore,
        similarMovies: action.data,
        isLoading: false
      };
    }
    default: {
      return descriptionStore;
    }
  }
}
