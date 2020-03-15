import {StyleSheet} from 'react-native';
import {fontSize, fontWeightBold, grays} from "./variables";

export const StylesMovieDescription = StyleSheet.create({
  container: {
    backgroundColor: grays.nine,
    flex: 1,
    margin: 0,
    paddingBottom: 50
  },
  posterImage: {
    width: '100%',
    height: 220,
    margin: 0,
    padding: 0
  },
  mainTitle: {
    fontSize: fontSize.huge,
    fontWeight: fontWeightBold
  },
  text: {
    marginTop: 5,
    color: grays.five,
    fontSize: fontSize.large
  },
  year: {
    margin: 0,
    padding: 0,
    fontSize: fontSize.big
  },
  popular: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -35,
    right: 20,
    backgroundColor: grays.seven,
    width: 70,
    height: 70,
    borderRadius: 50
  },
  percent: {
    fontSize: fontSize.big,
    fontWeight: fontWeightBold
  },
  title: {
    marginTop: 30,
    marginBottom: 20,
    fontWeight: fontWeightBold,
    textTransform: 'uppercase'
  },
  content: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  similarPoster: {
    width: 300,
    height: 175,
    margin: 0,
    marginRight: 20,
    padding: 0,
    borderRadius: 20
  },
  movieName: {
    width: 300,
    fontWeight: fontWeightBold,
    textTransform: 'uppercase',
    paddingTop: 10
  }
});
