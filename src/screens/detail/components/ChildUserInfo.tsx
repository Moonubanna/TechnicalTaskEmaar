import React, {useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DIMENS} from '../../../constants';
import {colors} from '../../../common/resources/theme';
import * as Utils from '../../../utils';
const ChildUserInfo = (userData: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} numberOfLines={1}>
        {`Email: ${userData?.email}`}
      </Text>
      <Text style={styles.text} numberOfLines={1}>
        {`Date Joined: ${Utils.timeSince(userData?.registered?.date)}`}
      </Text>
      <Text style={styles.text} numberOfLines={1}>
        {`DOB: ${Utils.convertDateTimeFormate(userData?.dob?.date)}`}
      </Text>
    </View>
  );
};
export default ChildUserInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    backgroundColor: colors.color_primary,
    borderTopWidth: DIMENS.px_2,
    borderTopColor: colors.grey300,
    marginTop: DIMENS.px_20,
    justifyContent: 'center'
  },
  text: {
    color: colors.black,
    fontSize: DIMENS.txt_size_medium_1,
    marginTop: DIMENS.px_7,
  },
});
