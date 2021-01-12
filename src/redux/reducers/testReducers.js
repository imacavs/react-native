import {INCREMENT} from '../actions/testActions';

const INITIAL_STATE = {
  count: 0,
};

const test = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${INCREMENT}`:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default test;
