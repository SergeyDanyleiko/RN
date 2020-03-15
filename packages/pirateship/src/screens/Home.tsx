import React, {Component} from 'react';
import {FlatList, ScrollView} from 'react-native';
import {ScreenProps} from '../lib/commonTypes';
import withMovie from '../providers/movieProvider';
import Card from "../components/Card";
import {MovieStore} from "../reducers/movieReducer";
import {HomeStyle} from "../styles/HomeStyles";
import {LoaderStyle} from "../styles/LoaderStyles";
import {Loading} from "@brandingbrand/fscomponents";

export interface HomeProps extends ScreenProps {
  fetchMovies: () => void;
  startLoading: () => void;
  moviesData: ReadonlyArray<MovieStore>;
  isLoading: boolean;
}

export class Home extends Component<HomeProps> {
  componentDidMount(): void {
    this.props.startLoading();
    this.props.fetchMovies();
  }

  goToDescriptionScreen = (id: number): void => {
    this.props.navigator.push({
      screen: 'MovieDescription',
      passProps: {
        movieId: id
      }
    });
  };

  render(): JSX.Element {
    if (this.props.isLoading) {
      return <Loading style={LoaderStyle.loader}/>;
    }

    return (
        <ScrollView>
          <FlatList
            contentContainerStyle={HomeStyle.container}
            data={this.props.moviesData}
            renderItem={({item}) => <Card movie={item} goTo={this.goToDescriptionScreen}/>}
            keyExtractor={(item: any) => item.id}
          />
        </ScrollView>
    );
  }
}

export default withMovie(Home);
