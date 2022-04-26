import {put} from 'redux-saga/effects';
import {
    API,
    APP_USERS_SUCESS,
    APP_USERS_FAIL,
} from '../../constants';
import callApis from '../services';

export function* getUsersRequestCasesSaga(action: any) {
  try {
    const data = yield callApis(action);
    yield put({
      type: APP_USERS_SUCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: APP_USERS_FAIL,
      payload: null,
    });
  }
}
