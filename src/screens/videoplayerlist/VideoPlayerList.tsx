import React, {useState, useContext, useEffect} from 'react';
import {View, FlatList, ActivityIndicator, Alert} from 'react-native';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {DIMENS, HEIGHT, SCREEN, WIDTH} from '../../constants';
import {colors} from '../../common/resources/theme';
import {BookContext} from '../../contexts';
//Hoc
import * as HOC from '../../common/components/hoc';

import ChildItem from './ChildItem';
const videoList = require('./videoList.json');
const videoListSingle = require('./videoListSingle.json');
const HeaderHOCView = HOC.HeaderHOC(View);
const VideoPlayerList = ({}) => {
  const {navigation, route} = useContext(BookContext);
  const [videoListArray, setVideoListArray] = useState(videoListSingle.data.data);
  const [active, setActive] = useState(0);

  const renderFeedView = ({ item, index }) => {
        return (
          <ChildItem
          item={item}
          index={index}
          active={active}
          />
        );
  };

  // Setup initial state
  useEffect(() => {}, []);
  const onViewRef = React.useRef(({viewableItems}) => {
    if (
      viewableItems !== undefined &&
      viewableItems.length !== 0 &&
      viewableItems.length !== []
    ) {
      console.log('abc', JSON.stringify(viewableItems));
      // Use viewable items in state or as intended
      setActive(viewableItems[0].index);
    }
  });

  return (
    <HeaderHOCView
      header={'Player List'}
      isLoading={false}
      isBack={false}
      style={{flex: 1}}>
      <View style={{flex: 1, width: WIDTH}}>
        <FlatList
          key={'userFlatList'}
          data={videoListArray}
          renderItem={renderFeedView}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          onViewableItemsChanged={onViewRef.current}
            viewabilityConfig={{
              itemVisiblePercentThreshold: 70,
            }}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  height: 2,
                  width: WIDTH - DIMENS.px_20,
                  backgroundColor: colors.grey300,
                  alignSelf: 'center',
                }}
              />
            );
          }}
          onEndReachedThreshold={0.5}
        />
      </View>
    </HeaderHOCView>
  );
};

export default VideoPlayerList;
