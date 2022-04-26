import {
    API,
    APP_USERS_SUCESS,
    APP_USERS_FAIL,
    APP_USERS_CLEAR,
  } from '../../constants';
  
  export default function getUsersRequestCasesReducer(
    state = {},
    action: any,
  ) {
    switch (action.type) {
      case API.APP_USERS_REUQUEST:
        return {...state, loading: true};
  
      case APP_USERS_SUCESS:
        return {...state, loading: false, response: action.payload};
  
      case APP_USERS_FAIL:
        return {...state, loading: false, response: null};
  
      case APP_USERS_CLEAR:
        return {...state, loading: false, response: null};
  
      default:
        return state;
    }
  }
  