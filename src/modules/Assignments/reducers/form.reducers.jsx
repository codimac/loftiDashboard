import types from '@Assignments/constants/form.constants';
import assignmentsFormInitialState from '@Assignments/states/form.states';

const assignmentsFormReducer = (state = assignmentsFormInitialState, action) => {

  switch (action.type) {

    case types.CREATE_ASSIGNMENT_WITH_GRADES:
    case types.EDIT_ASSIGNMENT_WITH_GRADES:
      return {
        ...state,
        ...action.payload
      };

    case types.CREATE_ASSIGNMENT_WITH_GRADES_SUCCESS:
    case types.EDIT_ASSIGNMENT_WITH_GRADES_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    case types.CREATE_ASSIGNMENT_WITH_GRADES_FAILURE:
    case types.EDIT_ASSIGNMENT_WITH_GRADES_FAILURE:
      return state;

    default:
      return state;
  }

};

export default assignmentsFormReducer;

export const getAssignmentsForm = state => state.assignmentsForm;
