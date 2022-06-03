import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Video, {
  OnSeekData,
  OnLoadData,
  OnProgressData,
} from 'react-native-video';
import PlayerControl from './PlayerControl';
import ProgressBar from './ProgressBar';
import {DIMENS, SCREEN, WIDTH, HEIGHT} from '../../../constants';

interface State {
  fullscreen: boolean;
  play: boolean;
  currentTime: number;
  duration: number;
  showControls: boolean;
  activeFlag: boolean;
}

const Player = (props) => {
  const videoRef = React.createRef<Video>();
  const [state, setState] = useState<State>({
    fullscreen: false,
    play: props.play,
    currentTime: 0,
    duration: 0,
    showControls: true,
    activeFlag: props.activeIndex,
  });

  useEffect(() => {
    console.warn('activeFlag', state.activeFlag)
  }, [props.activeIndex]);

  useEffect(() => {
    //setState({...state, play: props.play});
    console.warn('play_play', state.play)
  }, [props.play]);

  return (
    <View style={props.style ? props.style : styles.container}>
      <TouchableWithoutFeedback onPress={showControls}>
        <View>
          <Video
            ref={videoRef}
            source={{
              uri: props.url,
            }}
            style={styles.video}
            controls={false}
            resizeMode={'contain'}
            onLoad={onLoadEnd}
            onProgress={onProgress}
            onEnd={onEnd}
            //paused={!state.play}
            paused={!props.activeIndex ? state.play === true ? false : true : true}
            thumbnail={'https://source.unsplash.com/user/c_v_r/1900x800'}
          />
          {state.showControls && (
            <View style={styles.controlOverlay}>
              <TouchableOpacity
                onPress={handleFullscreen}
                hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                style={styles.fullscreenButton}></TouchableOpacity>
              <PlayerControl
                onPlay={handlePlayPause}
                onPause={handlePlayPause}
                playing={state.play}
              />
              <ProgressBar
                currentTime={state.currentTime}
                duration={state.duration > 0 ? state.duration : 0}
                onSlideStart={handlePlayPause}
                onSlideComplete={handlePlayPause}
                onSlideCapture={onSeek}
              />
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
  function handleFullscreen() {}

  function handlePlayPause() {
    // If playing, pause and show controls immediately.
    if (state.play) {
      setState({...state, play: false, showControls: true});
      return;
    }

    setState({...state, play: true});
    setTimeout(() => setState(s => ({...s, showControls: false})), 2000);
  }

  function onSeek(data: OnSeekData) {
    videoRef.current.seek(data.seekTime);
    setState({...state, currentTime: data.seekTime});
  }

  function onLoadEnd(data: OnLoadData) {
    setState(s => ({
      ...s,
      duration: data.duration,
      currentTime: data.currentTime,
    }));
  }

  function onProgress(data: OnProgressData) {
    setState(s => ({
      ...s,
      currentTime: data.currentTime,
    }));
  }

  function onEnd() {
    setState({...state, play: false});
    videoRef.current.seek(0);
  }

  function showControls() {
    state.showControls
      ? setState({...state, showControls: false})
      : setState({...state, showControls: true});
  }
};
export default Player;
const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: WIDTH,
  },
  video: {
    //height: Dimensions.get('window').width * (9 / 16),
    width: WIDTH,
    height: WIDTH,
    backgroundColor: 'black',
  },
  fullscreenVideo: {
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').height,
    backgroundColor: 'black',
  },
  text: {
    marginTop: 30,
    marginHorizontal: 20,
    fontSize: 15,
    textAlign: 'justify',
  },
  fullscreenButton: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    paddingRight: 10,
  },
  controlOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
  },
});
