import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

interface Props {
  playing: boolean;
  onPlay: () => void;
  onPause: () => void;
  skipForwards?: () => void;
  skipBackwards?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

const PlayerControl: React.FC<Props> = ({
  playing,
  onPlay,
  onPause,
  skipForwards,
  skipBackwards,
  onNext,
  onPrevious,
}) => (
  <View style={styles.wrapper}>

    <TouchableOpacity
      style={styles.touchable}
      onPress={playing ? onPause : onPlay}>
      {playing ? <Icon
      color={'white'}
          name="pausecircleo"
          size={60}
        /> : <Icon
        color={'white'}
            name="playcircleo"
            size={60}
          />}
    </TouchableOpacity>
  </View>
);
export default PlayerControl;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 3,
  },
  touchable: {
    padding: 5,
  },
  touchableDisabled: {
    opacity: 0.3,
  },
});