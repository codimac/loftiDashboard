import types from '@Assignments/constants/details.constants';
import assignmentsDetailsInitialState from '@Assignments/states/details.states';

const assignmentsDetailsReducer = (state = assignmentsDetailsInitialState, action) => {

  switch (action.type) {

    case types.FETCHING_ASSIGNMENTS_DETAILS:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_ASSIGNMENTS_DETAILS_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_ASSIGNMENTS_DETAILS_FAILURE:
      return state;

    default:
      return state;

  }

};

export default assignmentsDetailsReducer;

export const getAssignmentsDetails = state => state.assignmentsDetails;
