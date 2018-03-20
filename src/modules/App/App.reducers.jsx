import { combineReducers } from 'redux';

import counterReducer from '@modules/Counter/Counter.reducers';

const rootReducer = combineReducers({
  count: counterReducer
});

export default rootReducer;
