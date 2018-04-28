import { combineReducers } from 'redux';

import authReducer from '@App/reducers/auth.reducers';
import userReducer from '@App/reducers/user.reducers';

import promotionsListReducer from '@Promos/reducers/list.reducers';

const rootReducer = combineReducers({
  // auth
  auth: authReducer,
  user: userReducer,

  // promos
  promotionsList: promotionsListReducer,
});

export default rootReducer;
