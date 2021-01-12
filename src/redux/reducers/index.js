import {combineReducers} from 'redux';

import testStore from './testReducers';
import count from './countReducer';

const allReducers = combineReducers({
  testStore,
  count,
});

export default allReducers;
