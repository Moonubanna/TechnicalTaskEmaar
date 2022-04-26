/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Pressable,
} from 'react-native';
import {colors} from './../../resources/theme';
import {DIMENS, WIDTH} from '../../../constants';
import Loader from '../Loader';
import {IconX, ICON_TYPE} from '../../resources/Icons';

const HeaderHOC =
  Comp =>
  ({
    header,
    isLoading,
    isBack,
    backPress,
    children,
    ...props
  }) =>
    (
      <View
        style={{
          flex: 1,
          width: '100%',
        }}>
          <View
            style={{
              width: WIDTH,
              height: 55,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.color_accent,
            }}>
            <Text
              style={{
                fontSize: DIMENS.txt_size_large_extra,
                color: colors.black,
              }}
              numberOfLines={1}>
              {header}
            </Text>
            {isBack && (
            <Pressable
              onPress={backPress}
              style={({pressed}) => [
                {
                  opacity: pressed ? 0.5 : 1,
                  position: 'absolute',
                  left: 20,
                  alignSelf: 'center',
                },
              ]}>
              <IconX
                origin={ICON_TYPE.OCTICONS}
                name="chevron-left"
                color={colors.black}
                size={36}
              />
            </Pressable>
            )}
          </View>
        <Comp {...props}>{children}</Comp>
        {isLoading != undefined && isLoading && <Loader />}
      </View>
    );
export default HeaderHOC;
