import { combineReducers } from 'redux';

import authReducer from '@App/reducers/auth.reducers';
import userReducer from '@App/reducers/user.reducers';

import promotionsListReducer from '@Promos/reducers/list.reducers';
import promotionsDetailsReducer from '@Promos/reducers/details.reducers';

import gradesListReducer from '@Grades/reducers/list.reducers';

const rootReducer = combineReducers({
  // auth
  auth: authReducer,
  user: userReducer,

  // promos
  promotionsList: promotionsListReducer,
  promotionsDetails: promotionsDetailsReducer,

  // grades
  gradesList: gradesListReducer
});

export default rootReducer;
