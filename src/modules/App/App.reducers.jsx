import { combineReducers } from 'redux';

import authReducer from '@App/reducers/auth.reducers';
import userReducer from '@App/reducers/user.reducers';

const rootReducer = combineReducers({
  // auth
  auth: authReducer,
  user: userReducer
});

export default rootReducer;
