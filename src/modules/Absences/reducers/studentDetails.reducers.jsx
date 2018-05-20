import types from '@Absences/constants/studentDetails.constants';
import absencesListInitialState from '@Absences/states/list.states';

const absencesListReducer = (state = absencesListInitialState, action) => {

  switch (action.type) {

    case types.FETCHING_ABSENCES_LIST:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_ABSENCES_LIST_SUCCESS:
      return {
        ...state,
        ...action.payload,
        error: null
      };

    case types.FETCHING_ABSENCES_LIST_FAILURE:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;

  }
};

export default absencesListReducer;

export const getAbsencesList = state => state.absencesList;
