import types from '@Assignments/constants/list.constants';
import assignmentsListInitialState from '@Assignments/states/list.states';

const assignmentsListReducer = (state = assignmentsListInitialState, action) => {

  switch (action.type) {

    case types.FETCHING_ASSIGNMENTS_LIST:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_ASSIGNMENTS_LIST_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_ASSIGNMENTS_LIST_FAILURE:
      return state;

    default:
      return state;

  }

};

export default assignmentsListReducer;

export const getAssignmentsList = state => state.assignmentsList;
