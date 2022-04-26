import {all, takeLatest, takeEvery} from 'redux-saga/effects';
import {API} from '../../constants';
import {getUsersRequestCasesSaga} from './GetUsersRequestCasesSaga';
function* watchUserRequestCaseAction() {
  yield takeLatest(API.APP_USERS_REUQUEST, getUsersRequestCasesSaga);
}
function* rootSaga() {
  yield all([
    watchUserRequestCaseAction(),
  ]);
}

export default rootSaga;
