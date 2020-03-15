import React, {Component} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import withMovie from "../providers/descriptionMovieProvider";
import {MovieDescriptionInterface, SimilarItemInterface} from "../lib/commonTypes";
import {Loading} from "@brandingbrand/fscomponents";
import {LoaderStyle} from '../styles/LoaderStyles';
import {StylesMovieDescription as Styles} from '../styles/MovieDescriptionStyles';

export interface MovieDescriptionProps {
  navigator: import ('react-native-navigation').Navigator;
  movieId: number;
  fetchMovieDescription: (movieId: number) => void;
  fetchSimilarMovie: (movieId: number) => void;
  descriptionMovie: MovieDescriptionInterface;
  similarMovies: SimilarItemInterface[];
  startLoading: () => void;
  isLoading: boolean;
}

class MovieDescription extends Component<MovieDescriptionProps> {
  componentDidMount(): void {
    const {movieId} = this.props;
    this.props.startLoading();
    this.props.fetchMovieDescription(movieId);
    this.props.fetchSimilarMovie(movieId);
  }

  formatTime = (date: string): number => {
    return new Date(date).getFullYear();
  };

  roundUp = (popular: number): number => {
    return Math.round(popular);
  };

  getUrlPoster = (backdropPath: string) => {
    return `https://image.tmdb.org/t/p/w500${backdropPath}`;
  };

  render(): JSX.Element {
    const descriptionMovie: MovieDescriptionInterface = this.props.descriptionMovie;
    const similarMovies: SimilarItemInterface[] = this.props.similarMovies;

    if (this.props.isLoading) {
      return <Loading style={LoaderStyle.loader}/>;
    }

    return (
      <View style={Styles.container}>
        <ScrollView>
          <View>
            <Image
              style={Styles.posterImage}
              source={{uri: this.getUrlPoster(descriptionMovie.backdrop_path)}}/>

            <View style={Styles.popular}>
              <Text style={[Styles.text, Styles.percent]}>
                {this.roundUp(descriptionMovie.popularity)}%
              </Text>
            </View>
          </View>

          <View style={Styles.content}>
            <Text style={[Styles.text, Styles.year]}>{this.formatTime(descriptionMovie.release_date)}</Text>
            <Text style={[Styles.text, Styles.mainTitle]}>{descriptionMovie.title}</Text>

            <Text style={[Styles.text, Styles.title]}>Overview:</Text>
            <Text style={Styles.text}>{descriptionMovie.overview}</Text>

            {similarMovies.length ?
              <View>
                <Text style={[Styles.text, Styles.title]}>Similar movie:</Text>

                <ScrollView horizontal={true}>
                  {similarMovies.map((movie: SimilarItemInterface) => (
                    <View>
                      <Image
                        style={Styles.similarPoster}
                        source={{uri: this.getUrlPoster(movie.backdrop_path)}}/>
                      <Text style={[Styles.text, Styles.movieName]}>{movie.title}</Text>
                    </View>
                  ))}
                </ScrollView>
              </View>
              : null}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default withMovie(MovieDescription);
