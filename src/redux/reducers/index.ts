import {combineReducers} from 'redux';

import getUsersRequestCasesReducer from './GetUsersRequestCasesReducer';

const rootReducer = combineReducers({
  getUsersRequestCasesReducer,
});

export default rootReducer;
