import {StyleSheet} from 'react-native';
import {fontSize, fontWeightBold, grays} from './variables';

export const CartStyle = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 200,
    margin: 10,
    borderWidth: 0.3,
    borderColor: grays.four,
    borderRadius: 15,
    shadowColor: grays.seven,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15
  },
  description: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 65,
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 5,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  title: {
    fontWeight: fontWeightBold,
    fontSize: fontSize.small
  },
  year: {
    paddingTop: 5,
    fontSize: fontSize.small
  }
});

