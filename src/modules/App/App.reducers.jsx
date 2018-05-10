import { combineReducers } from 'redux';

import authReducer from '@App/reducers/auth.reducers';
import userReducer from '@App/reducers/user.reducers';

import studentDetailsReducer from '@Students/reducers/details.reducers';

import promotionsListReducer from '@Promos/reducers/list.reducers';
import promotionsDetailsReducer from '@Promos/reducers/details.reducers';

import semestersListReducer from '@Semesters/reducers/list.reducers';

import uesListReducer from '@Ues/reducers/list.reducers';

import gradesListReducer from '@Grades/reducers/list.reducers';

import filterReducer from '@Shared/reducers/filter.reducers';

import absencesListReducer from '@Absences/reducers/list.reducers';

const rootReducer = combineReducers({
  // auth
  auth: authReducer,

  // users
  user: userReducer,

  // students
  studentDetails: studentDetailsReducer,

  // semesters
  semestersList: semestersListReducer,

  // promos
  promotionsList: promotionsListReducer,
  promotionsDetails: promotionsDetailsReducer,

  // ues
  uesList: uesListReducer,

  // grades
  gradesList: gradesListReducer,

  // absences
  absencesList: absencesListReducer,

  // others
  filter: filterReducer
});

export default rootReducer;
