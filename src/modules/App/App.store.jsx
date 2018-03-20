import { createStore } from 'redux';
import rootReducer from './App.reducers';

const store = createStore(rootReducer);

export default store;
