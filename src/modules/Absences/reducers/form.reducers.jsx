import types from '@Absences/constants/form.constants';
import absencesFormInitialState from '@Absences/states/form.states';

const absencesFormReducer = (state = absencesFormInitialState, action) => {

  switch (action.type) {

    case types.CREATE_ABSENCE:
      return {
        ...state,
        ...action.payload
      };

    case types.CREATE_ABSENCE_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    case types.CREATE_ABSENCE_FAILURE:
      return state;

    default:
      return state;
  }

};

export default absencesFormReducer;

export const getAbsencesForm = state => state.absencesForm;
