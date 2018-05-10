import types from '@Promos/constants/list.constants';
import absencesListInitialState from '@Promos/states/list.states';

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
        ...action.payload
      };

    case types.FETCHING_ABSENCES_LIST_FAILURE:
      return state;

    default:
      return state;

  }
};

export default absencesListReducer;

export const getAbsencesList = state => state.absencesList;