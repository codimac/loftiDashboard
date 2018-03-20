import types from '@modules/Counter/Counter.constants';

export const increment = () => ({
  type: types.INCREMENT
});

export const decrement = () => ({
  type: types.DECREMENT
});
