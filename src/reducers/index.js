import { combineReducers } from 'redux';
import {
  ADD_ITEM,
} from '../actions';

const items = (state = [], action) => {

  switch (action.type) {
    case 'ADD_ITEM':
      let newState = state.slice();
      newState.push(action.item)
      return newState;
    default:
      return state;
  };
}

const rootReducer = combineReducers({
  items,
});

export default rootReducer;
