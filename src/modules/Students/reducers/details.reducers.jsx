import types from '@Students/constants/details.constants';
import studentDetailsInitialState from '@Students/states/details.states';

const studentDetailsReducer = (state = studentDetailsInitialState, action) => {

  switch (action.type) {

    case types.FETCHING_STUDENT_DETAILS:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_STUDENT_DETAILS_SUCCESS:
      return {
        ...state,
        ...action.payload.data
      };

    default:
      return state;

  }

};

export default studentDetailsReducer;

export const getStudent = state => state.studentDetails;
