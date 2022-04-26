import React, {useState, useContext, useEffect} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {DIMENS, WIDTH} from '../../../constants';
import {IconX, ICON_TYPE} from '../../../common/resources/Icons';
import {colors} from '../../../common/resources/theme';
import FastImage from 'react-native-fast-image';
import * as Utils from '../../../utils';
const UserItem = (item: any, index: number, pressItem: any) => {
  return (
    <Pressable
    onPress={() => {pressItem(item)}}
    style={({pressed}) => [
      styles.container,
      {
        opacity: pressed ? 0.5 : 1,
      },
    ]}>
      <FastImage
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
        source={{
          uri: item?.picture?.thumbnail,
          cache: FastImage.cacheControl.immutable,
        }}></FastImage>
      <View style={styles.rightContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.textName} numberOfLines={1}>
            {`${item?.name?.first} ${item?.name?.last}`}
          </Text>
          <View style={styles.headingtRightContainer}>
            <Text style={styles.textDate} numberOfLines={1}>
              {Utils.timeSince(item?.registered?.date)}
            </Text>
            <IconX
              origin={ICON_TYPE.ANT_ICON}
              name="right"
              color={colors.grey600}
              size={16}
            />
          </View>
          </View>
          <Text style={styles.textGmail} numberOfLines={1}>
            {item?.email}
          </Text>
          <Text style={styles.textCountry} numberOfLines={1}>
            {`Country | ${item?.location?.country}`}
          </Text>
      </View>
    </Pressable>
  );
};
export default UserItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: WIDTH,
    padding: DIMENS.px_10,
    backgroundColor: colors.color_primary,
  },
  image: {
    width: DIMENS.px_70,
    height: DIMENS.px_70,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: DIMENS.px_10
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textName: {
    color: colors.black,
    fontSize: DIMENS.txt_size_medium,
    fontWeight: 'bold',
  },
  textDate: {
    color: colors.grey800,
    fontSize: DIMENS.txt_size_small_small,
    marginRight: DIMENS.px_3,
  },
  textGmail: {
    color: colors.black,
    fontSize: DIMENS.txt_size_medium,
    marginTop: DIMENS.px_5,
  },
  textCountry: {
    color: colors.black,
    fontSize: DIMENS.txt_size_medium,
    marginTop: DIMENS.px_5,
  },
  headingtRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
