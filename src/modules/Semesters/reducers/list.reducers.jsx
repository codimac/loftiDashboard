import types from '@Semesters/constants/list.constants';
import semestersListInitialState from '@Semesters/states/list.states';

const semestersListReducer = (state = semestersListInitialState, action) => {

  switch (action.type) {
    case types.FETCHING_SEMESTERS_LIST:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_SEMESTERS_LIST_SUCCESS:
      return {
        ...state,
        semestersList: action.payload.data
      };

    case types.FETCHING_SEMESTERS_LIST_FAILURE:
      return state;

    default:
      return state;

  }

};

export default semestersListReducer;

export const getSemestersList = state => state.semestersList;
