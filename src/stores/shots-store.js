import Dispatcher from '../dispatcher';
import { ReduceStore } from 'flux/utils';
import Immutable from 'immutable';
import Shots from './shots';

class ShotsStore extends ReduceStore {
  constructor () {
    super(Dispatcher);
  }

  getInitialState () {
    return Immutable.OrderedMap({'shots': Shots()});
  }

  reduce (state, action) {
    switch (action.type) {
      case 'FETCH_SHOTS':
        return state.set('shots', Shots({
          data: action.payload,
          done: true,
        }));
      break;
      case 'FETCH_SHOTS_FETCHING':
        return state.set('shots', Shots({isFetching: true}));
      break;
      case 'FETCH_SHOTS_ERROR':
        return state.set('shots', Shots({isError: true}));
      break;
      default:
        return state;
    }
  }
}

export default new ShotsStore();
