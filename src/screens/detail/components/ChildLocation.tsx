import React, {useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DIMENS} from '../../../constants';
import {colors} from '../../../common/resources/theme';
const ChildUserInfo = (userData: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeading} numberOfLines={1}>
        {'LOCATION'}
      </Text>
      <View style={styles.subContainer}>
        <Text style={styles.text} numberOfLines={1}>
          {`city: "${userData?.location?.city}"`}
        </Text>
        <Text style={styles.text} numberOfLines={1}>
          {`state: "${userData?.location?.state}"`}
        </Text>
        <Text style={styles.text} numberOfLines={1}>
          {`country: "${userData?.location?.country}"`}
        </Text>
        <Text style={styles.text} numberOfLines={1}>
          {`postcode: "${userData?.location?.postcode}"`}
        </Text>
      </View>
    </View>
  );
};
export default ChildUserInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    backgroundColor: colors.color_primary,
    marginTop: DIMENS.px_20,
  },
  subContainer: {
    flexDirection: 'column',
    width: '100%',
    borderTopWidth: DIMENS.px_2,
    borderTopColor: colors.grey300,
    marginTop: DIMENS.px_7
  },
  text: {
    color: colors.black,
    fontSize: DIMENS.txt_size_medium_1,
    marginTop: DIMENS.px_7,
  },
  textHeading: {
    color: colors.black,
    fontSize: DIMENS.txt_size_large,
    marginTop: DIMENS.px_7,
    fontWeight: 'bold',
  },
});
