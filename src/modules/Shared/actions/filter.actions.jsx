import types from '@Shared/constants/filter.constants';

export const filter = value => ({
  type: types.FILTERING,
  payload: {
    value
  }
});

export const resetFilter = () => ({
  type: types.RESET_FILTER,
  payload: {
    value: ''
  }
});

export const setVisibilityFilter = visibilityFilter => ({
  type: types.SET_VISIBILITY_FILTER,
  payload: {
    visibilityFilter
  }
});
