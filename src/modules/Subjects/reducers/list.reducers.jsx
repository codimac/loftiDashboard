import types from '@Subjects/constants/list.constants';
import subjectsListInitialState from '@Subjects/states/list.states';

const subjectsListReducer = (state = subjectsListInitialState, action) => {

  switch (action.type) {

    case types.FETCHING_SUBJECTS_LIST:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_SUBJECTS_LIST_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_SUBJECTS_LIST_FAILURE:
      return state;

    default:
      return state;

  }
};

export default subjectsListReducer;

export const getSubjectsList = state => state.subjectsList;
