import {StyleSheet} from 'react-native';
import {colors} from '../../common/resources/theme';
import {DIMENS, WIDTH} from '../../constants';
export default StyleSheet.create({
  header: {
    flex: 1,
    width: WIDTH,
    backgroundColor: colors.color_primary,
  },
  container: {
    backgroundColor: colors.color_primary,
    flex: 1,
    width: WIDTH,
    padding: DIMENS.px_20,
    alignItems: 'center'
  },
  topComponent:{
    width: WIDTH,
    height: WIDTH / 2  + DIMENS.px_25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ageContainer:{
      width: DIMENS.px_50,
      height: DIMENS.px_50,
      backgroundColor: colors.orange300,
      position: 'absolute',
      bottom: DIMENS.px_15,
      right: WIDTH / 4 - DIMENS.px_25,
      transform: [{ rotate: '45deg' }],
      borderColor: colors.yellow300,
      borderWidth: DIMENS.px_2,
      alignItems: 'center',
      justifyContent: 'center'
    },
  image: {
    width: WIDTH / 2,
    height: WIDTH / 2,
  },
  text: {
    color: colors.black,
    fontSize: DIMENS.txt_size_medium_1,
    marginTop: DIMENS.px_7,
    fontWeight: 'bold',
    transform: [{ rotate: '-45deg' }]
  },
});
