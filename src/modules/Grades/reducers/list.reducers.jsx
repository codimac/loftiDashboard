import types from '@Grades/constants/list.constants';
import gradesListInitialState from '@Grades/states/list.states';

const gradesListReducer = (state = gradesListInitialState, action) => {

  switch (action.type) {

    case types.FETCHING_GRADES_LIST:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_GRADES_LIST_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_GRADES_LIST_FAILURE:
      return state;

    default:
      return state;

  }
};

export default gradesListReducer;

export const getGradesList = state => state.gradesList;
