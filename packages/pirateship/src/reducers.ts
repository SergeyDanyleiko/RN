import movieReducer, { MovieStore } from './reducers/movieReducer';
import descriptionMovieReducer, { DescriptionMovieStore } from "./reducers/descriptionMovieReducer";

export interface CombinedStore {
  moviesStore: MovieStore;
  descriptionMovieStore: DescriptionMovieStore
}

export default {
  moviesStore: movieReducer,
  descriptionMovieStore: descriptionMovieReducer
};
