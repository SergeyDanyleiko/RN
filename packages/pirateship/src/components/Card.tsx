import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {MovieInterface, MovieProps} from '../lib/commonTypes';
import {CartStyle} from '../styles/CardStyles';

export interface CardProps extends MovieProps {
  movie: MovieInterface;
  goTo: (id: number) => void;
}

export default class Card extends Component<CardProps> {

  getFullYear = (date: string): number => {
    return new Date(date).getFullYear();
  };

  render(): JSX.Element {
    const {id, title, poster_path, release_date} = this.props.movie;
    const urlPoster = `https://image.tmdb.org/t/p/w154${poster_path}`;
    const year = this.getFullYear(release_date);

    return (
      <TouchableOpacity onPress={e => this.props.goTo(id)}>
        <View style={CartStyle.card}>
          <Image
            source={{uri: urlPoster}}
            style={CartStyle.image}/>

          <View style={CartStyle.description}>
            <Text style={CartStyle.title}>{title}</Text>
            <Text style={CartStyle.year}>{year}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
