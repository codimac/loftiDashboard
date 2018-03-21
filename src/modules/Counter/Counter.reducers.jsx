import initialCounterState from '@modules/Counter/Counter.states';
import types from '@modules/Counter/Counter.constants';

const counterReducer = (state = initialCounterState, action) => {

  switch (action.type) {
    case types.INCREMENT:
      return state + 1;

    case types.DECREMENT:
      return state - 1 < 0 ? 0 : state - 1;

    default:
      return state;
  }
};

export default counterReducer;
