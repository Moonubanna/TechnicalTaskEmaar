import React, {useState, useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {BookContext} from '../../contexts';
//Hoc
import * as HOC from '../../common/components/hoc';
import styles from './styles';

import FastImage from 'react-native-fast-image';

import childUserInfo from './components/ChildUserInfo';
import childLocation from './components/ChildLocation';

const HeaderHOCView = HOC.HeaderHOC(View);
const Detail = ({}) => {
  const {navigation, route} = useContext(BookContext);
  const [userDetail, setUserDetail] = useState(route?.params?.data);

  return (
    <HeaderHOCView
      header={`${userDetail?.name?.first} ${userDetail?.name?.last}`}
      isLoading={false}
      isBack={true}
      backPress={() => navigation.goBack()}
      style={styles.header}>
      <View style={styles.container}>
        <View style={[styles.topComponent]}>
          <FastImage
            style={styles.image}
            resizeMode={FastImage.resizeMode.cover}
            source={{
              uri: userDetail?.picture?.large,
              cache: FastImage.cacheControl.immutable,
            }}
          />
          <View style={styles.ageContainer}>
          <Text style={styles.text} numberOfLines={1}>
          {userDetail?.dob?.age}
        </Text>
          </View>
        </View>
        {userDetail && childUserInfo(userDetail)}
        {userDetail && childLocation(userDetail)}
      </View>
    </HeaderHOCView>
  );
};

export default Detail;
