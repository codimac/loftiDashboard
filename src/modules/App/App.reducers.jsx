import { combineReducers } from 'redux';

import authReducer from '@modules/Auth/reducers/auth.reducers';

const rootReducer = combineReducers({
  // auth
  auth: authReducer
});

export default rootReducer;
