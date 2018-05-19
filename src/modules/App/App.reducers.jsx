import { combineReducers } from 'redux';

import authReducer from '@App/reducers/auth.reducers';
import userReducer from '@App/reducers/user.reducers';

import studentDetailsReducer from '@Students/reducers/details.reducers';

import promotionsListReducer from '@Promos/reducers/list.reducers';
import promotionsDetailsReducer from '@Promos/reducers/details.reducers';

import semestersListReducer from '@Semesters/reducers/list.reducers';

import uesListReducer from '@Ues/reducers/list.reducers';

import gradesListReducer from '@Grades/reducers/list.reducers';

import subjectsListReducer from '@Subjects/reducers/list.reducers';

import assignmentsFormReducer from '@Assignments/reducers/form.reducers';
import assignmentsDetailsReducer from '@Assignments/reducers/details.reducers';
import assignmentsListReducer from '@Assignments/reducers/list.reducers';

import filterReducer from '@Shared/reducers/filter.reducers';

import absencesListReducer from '@Absences/reducers/studentDetails.reducers';
import promoAbsencesPodiumReducer from '@Absences/reducers/promoAbsencesPodium.reducers';
import absencesWeekGraphListReducer from '@Absences/reducers/weekGraph.reducers';
import absencesFormReducer from "@Absences/reducers/form.reducers";

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

  // subjects
  subjectsList: subjectsListReducer,

  // assignments
  assignmentsList: assignmentsListReducer,
  assignmentsDetails: assignmentsDetailsReducer,
  assignmentsForm: assignmentsFormReducer,

  // absences
  absencesList: absencesListReducer,
  promoAbsencesPodium: promoAbsencesPodiumReducer,
  absencesWeekGraphList: absencesWeekGraphListReducer,
  absencesForm: absencesFormReducer,

  // others
  filter: filterReducer
});

export default rootReducer;
