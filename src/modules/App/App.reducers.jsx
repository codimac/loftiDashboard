import { combineReducers } from 'redux';

import authReducer from '@modules/Auth/reducers/auth.reducers';

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;
