import {
  API,
  APP_USERS_CLEAR,
} from '../../constants';

export function getUsersRequestDataAction(data: object) {
  return {
    type: API.APP_USERS_REUQUEST,
    payload: data,
  };
}

export function getClearUsersRequestDataAction(data: any) {
  return {
    type: APP_USERS_CLEAR,
    payload: data,
  };
}