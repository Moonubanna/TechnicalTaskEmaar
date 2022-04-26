import {StyleSheet} from 'react-native';
import {colors} from '../../common/resources/theme';
import {WIDTH} from '../../constants';
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
  },
});
