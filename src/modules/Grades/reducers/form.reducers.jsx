import types from '@Grades/constants/form.constants';
import subjectWithGrades from '@Grades/states/form.states';

const gradesFormReducer = (state = subjectWithGrades, action) => {

  switch (action.type) {

    case types.CREATE_SUBJECT_WITH_GRADES:
      return {
        ...state,
        ...action.payload
      };

    case types.CREATE_SUBJECT_WITH_GRADES_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    case types.CREATE_SUBJECT_WITH_GRADES_FAILURE:
      return state;

    default:
      return state;
  }

};

export default gradesFormReducer;

export const getGradesForm = state => state.gradesForm;
