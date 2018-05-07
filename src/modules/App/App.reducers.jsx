import { combineReducers } from 'redux';

import authReducer from '@App/reducers/auth.reducers';
import userReducer from '@App/reducers/user.reducers';

import promotionsListReducer from '@Promos/reducers/list.reducers';
import promotionsDetailsReducer from '@Promos/reducers/details.reducers';

import uesListReducer from '@Courses/reducers/uesList.reducers';
import gradesListReducer from '@Grades/reducers/list.reducers';

import filterReducer from '@Shared/reducers/filter.reducers';

const rootReducer = combineReducers({
  // auth
  auth: authReducer,

  // users
  user: userReducer,

  // promos
  promotionsList: promotionsListReducer,
  promotionsDetails: promotionsDetailsReducer,

  // courses
  uesList: uesListReducer,

  // grades
  gradesList: gradesListReducer,

  // others
  filter: filterReducer
});

export default rootReducer;
