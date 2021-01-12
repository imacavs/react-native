import {INCREMENT_COUNT} from '../actions/countActions';

const INITIAL_STATE = {
  count: 0,
};

const count = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${INCREMENT_COUNT}`:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default count;
