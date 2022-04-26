import React, {useState, useContext, useEffect} from 'react';
import {View, FlatList, ActivityIndicator, Alert} from 'react-native';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {DIMENS, SCREEN, WIDTH} from '../../constants';
import {colors} from '../../common/resources/theme';
import {BookContext} from '../../contexts';
import * as Utils from '../../utils';
import * as Handlers from './handlers';
//Hoc
import * as HOC from '../../common/components/hoc';
import styles from './styles';
import {
  getUsersRequestDataAction,
  getClearUsersRequestDataAction,
} from '../../redux/actions';

import userItem from './components/UserItem'
const HeaderHOCView = HOC.HeaderHOC(View);
//route?.params?.data
let onEndReachedCalledDuringMomentum = false;
let currentPage = 1;
const Users = ({}) => {
  const {navigation, route} = useContext(BookContext);
  const dispatch = useDispatch();
  const {usersResponse, loading} = useSelector(
    state => ({
      usersResponse: state.getUsersRequestCasesReducer.response,
      loading: state.getUsersRequestCasesReducer.loading,
    }),
    shallowEqual,
  );
  const [usersArray, setUsersArray] = useState([]);
  const [loaderPagination, setLoaderPagination] = useState(false);
  const [ended, setEnded] = useState(false);

  // Setup initial state
  useEffect(() => {
    callUsersApi();
  }, []);

  /* Handle users list response  */
  useEffect(() => {
    if(usersResponse === undefined){
      return;
    }
    if (usersResponse?.results.length !== 0) {
      if(loaderPagination){
        setLoaderPagination(false)
      }
      if (currentPage === 1) {
        currentPage += 1;
        setUsersArray(usersResponse?.results);
      } else {
        currentPage += 1;
        setUsersArray([...usersArray, ...usersResponse?.results]);
      }
    } else {
      setEnded(true);
    }
  }, [usersResponse]);

  // Get list of users from remote end point
  function callUsersApi() {
    let requestObj = {
      api_type: 'GET',
      page: currentPage,
      limit: 10,
    };
    Handlers.callGetUsersApi(requestObj, dispatch, getUsersRequestDataAction);
  }
  const pressItem = (item: any) => {
    Utils.navigateWithParams(navigation, SCREEN.SCREEN_DETAIL, {
      data: item,
    });
  };
  // Load new users data using pagination
  const hiUsersApiByPagination = async () => {
    if (!ended) {
      setLoaderPagination(true);
      callUsersApi();
    }
  };
  return (
    <HeaderHOCView
      header={'Users List'}
      isLoading={!loaderPagination ? loading : false}
      isBack={false}
      style={styles.header}>
      <View style={styles.container}>
        <FlatList
          key={'userFlatList'}
          data={usersArray}
          renderItem={({item, index}) => userItem(item, index, pressItem)}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
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
          ListFooterComponent={renderFooter(loaderPagination)}
          onEndReachedThreshold={0.5}
          scrollEventThrottle={400}
          onMomentumScrollBegin={() => {
            onEndReachedCalledDuringMomentum = false;
          }}
          onEndReached={distanceFromEnd => {
            if (!onEndReachedCalledDuringMomentum) {
              if (!loaderPagination) {
                if (currentPage !== 1) {
                  hiUsersApiByPagination();
                }
              }
              onEndReachedCalledDuringMomentum = true;
            }
          }}
          removeClippedSubviews={true}
          maxToRenderPerBatch={10}
        />
      </View>
    </HeaderHOCView>
  );

  function renderFooter(loaderPagination: any) {
    if (!loaderPagination) return null;
    return <ActivityIndicator color={'#9000FF'} size={'large'} />;
  }
};

export default Users;
