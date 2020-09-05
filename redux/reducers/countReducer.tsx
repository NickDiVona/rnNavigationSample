import * as types from '../actionTypes';

const INITIAL_STATE = { count: 0 };

export default function (state = INITIAL_STATE, action: object) {
  switch (action.type) {
    case types.INCREMENT_COUNT:
      return { ...state, count: state.count + 1 };

    case types.DECREMENT_COUNT:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}
