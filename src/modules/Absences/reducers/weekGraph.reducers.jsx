import types from '@Absences/constants/weekGraph.constants';
import absencesWeekGraphListInitialState from '@Absences/states/weekGraph.states';

const absencesWeekGraphListReducer = (state = absencesWeekGraphListInitialState, action) => {

  switch (action.type) {

    case types.FETCHING_ABSENCES_WEEK_GRAPH_LIST:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_ABSENCES_WEEK_GRAPH_LIST_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_ABSENCES_WEEK_GRAPH_LIST_FAILURE:
      return state;

    default:
      return state;

  }
};

export default absencesWeekGraphListReducer;

export const getAbsencesWeekGraphList = state => state.absencesWeekGraphList;
