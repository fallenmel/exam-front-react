import update from 'immutability-helper';
import { UPDATE_USER } from '../actions/user';

export default function user(state = {}, action) {
  switch (action.type) {
    case UPDATE_USER:
      return update(state, { $merge: action.user });
    default:
      return state;
  }
}
