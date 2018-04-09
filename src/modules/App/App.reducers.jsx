import { combineReducers } from 'redux';

import authReducer from '@App/reducers/auth.reducers';

const rootReducer = combineReducers({
  // auth
  auth: authReducer
});

export default rootReducer;
