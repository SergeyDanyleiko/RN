export interface ScreenProps {
  navigator: import ('react-native-navigation').Navigator;
  onNav: (handler: (event: any) => void) => void;
}

export interface MovieProps {
  movie: MovieInterface;
}

export interface ActionInterface {
  type: string;
  data: any;
}

export interface MoviesResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: MovieInterface[];
}

export interface MovieInterface {
  id: number;
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

export interface MovieDescriptionInterface {
  adult: false;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: GenresMovie[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [];
  production_countries: [];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
}

export interface GenresMovie {
  id: number;
  name: string;
}

export interface SimilarItemInterface {
  id: number;
  video: false;
  vote_count: number;
  vote_average: number;
  title: string;
  release_date: string;
  original_language: string;
  original_title: string;
  genre_ids: GenresMovie[];
  backdrop_path: string;
  adult: false;
  overview: number;
  poster_path: string;
  popularity: number;
}
