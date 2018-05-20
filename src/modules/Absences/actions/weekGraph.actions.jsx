import types from '@Absences/constants/weekGraph.constants';

export const fetchAbsencesWeekGraphList = (isFetching = true) => ({
  type: types.FETCHING_ABSENCES_WEEK_GRAPH_LIST,
  payload: {
    isFetching
  }
});

export const fetchAbsencesWeekGraphListSucceed = data => ({
  type: types.FETCHING_ABSENCES_WEEK_GRAPH_LIST_SUCCESS,
  payload: {
    graph: data
  }
});

export const fetchAbsencesWeekGraphListFailed = error => ({
  type: types.FETCHING_ABSENCES_WEEK_GRAPH_LIST_FAILURE,
  payload: {
    error
  }
});
