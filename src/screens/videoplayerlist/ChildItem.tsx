import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {DIMENS, SCREEN, WIDTH, HEIGHT} from '../../constants';
import PagerView from 'react-native-pager-view';

import Player from './videoplayer/Player';
interface State {
  paused: boolean;
  activeIndex: number;
  selectedParentIndex: number;
}

const ChildItem = props => {
  const [state, setState] = useState<State>({
    paused: false,
    activeIndex: props.active,
    selectedParentIndex: 10001,
  });
  const [pause, setPause] = useState(false);
  const [selectedChildIndex, setSelectedChildIndex] = useState(undefined);
  const [selectedParentIndex, setSelectedParentIndex] = useState(undefined);

  useEffect(() => {
    console.warn('activeFlag_', props.active);
  }, [props.active]);

  useEffect(() => {
    console.warn('state.paused', state.paused);
  }, [state.paused]);

  const subChildCompnont = (
    childItem: any,
    index: number,
    thumbArray,
    selectedParentIndex: number,
    parentIndex: number,
  ) => {
    let checkThumbFlag = false;
    if (thumbArray !== null && thumbArray !== undefined) {
      if (thumbArray.length !== 0) checkThumbFlag = thumbArray[index];
    }
    return (
      <>
        {selectedParentIndex !== undefined && selectedParentIndex === props.active ? (
          <Player
            style={{
              width: WIDTH,
              height: WIDTH,
            }}
            url={childItem}
            play={ selectedChildIndex === undefined ? true : index === selectedChildIndex && pause ? true : false}
            activeIndex={props?.index === props.active ? false : true}
          />
        ) : (
          <>
          { checkThumbFlag ?
          <View
            style={{
              width: WIDTH,
              height: WIDTH,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'blue',
            }}>
            <TouchableOpacity
              onPress={() => {
                setSelectedChildIndex(index);
                setSelectedParentIndex(parentIndex);
                setPause(true)
              }}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  alignSelf: 'center',
                }}
                source={{
                  uri: 'https://source.unsplash.com/user/c_v_r/1900x800',
                }}
              />
            </TouchableOpacity>
          </View>
          :
          null
  }
          </>
        )}
      </>
    );
  };

  return (
    <View
      style={{
        width: WIDTH,
        height: HEIGHT - 50,
        backgroundColor: 'orange',
        justifyContent: 'center',
      }}>
      <PagerView
        style={{
          width: WIDTH,
          height: WIDTH,
        }}
        initialPage={0}
        onPageScroll={() => {}}
        onPageSelected={e => {
          console.warn('onPageSelected', state.paused);
          //setState({...state, selectedParentIndex: 10001});
        }}>
        {props?.item.posts.content_urls.map((childItem: any, index: number) =>
          subChildCompnont(
            childItem,
            index,
            props.item.posts?.thumbnail_flags,
            selectedParentIndex,
            props.index,
          ),
        )}
      </PagerView>
    </View>
  );
};
export default ChildItem;
