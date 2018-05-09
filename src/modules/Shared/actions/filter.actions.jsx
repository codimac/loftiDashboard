import types from '@Shared/constants/filter.constants';

export const filter = value => ({
  type: types.FILTERING,
  payload: {
    value
  }
});

export const changeFilterType = type => ({
  type: types.CHANGE_FILTER_TYPE,
  payload: {
    type
  }
});

export const resetFilter = () => ({
  type: types.RESET_FILTER,
  payload: {
    value: ''
  }
});
