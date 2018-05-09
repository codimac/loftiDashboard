import types from '@Ues/constants/list.constants';

export const fetchUesList = (isFetching = true) => ({
  type: types.FETCHING_UES_LIST,
  payload: {
    isFetching
  }
});

export const fetchUesListSucceed = data => ({
  type: types.FETCHING_UES_LIST_SUCCESS,
  payload: {
    ues: data
  }
});

export const fetchUesListFailed = error => ({
  type: types.FETCHING_UES_LIST_FAILURE,
  payload: {
    error
  }
});
