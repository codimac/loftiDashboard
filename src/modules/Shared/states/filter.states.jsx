import types from '@Shared/constants/filter.constants';

const filterInitialState = {
  value: '',
  visibilityFilter: types.SHOW_ALL,
  showAll: true,
  showedTd: null,
  grades: {
    min: 0,
    max: 20
  }
};

export default filterInitialState;
