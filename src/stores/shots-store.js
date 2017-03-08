import Dispatcher from '../dispatcher';
import { ReduceStore } from 'flux/utils';
import Immutable from 'immutable';
import Shots from './shots';

class ShotsStore extends ReduceStore {
  constructor () {
    super(Dispatcher);
  }

  getInitialState () {
    return Immutable.OrderedMap(Shots());
  }

  reduce (state, action) {
    switch (action.type) {
      case 'FETCH_SHOTS':
        return state
          .set('data', state.get('data').concat(action.payload))
          .set('done', true)
          .set('isFetching', false);
      break;
      case 'FETCH_SHOTS_FETCHING':
        return state.set('isFetching', true).set('done', false).set('isError', false);
      break;
      case 'FETCH_SHOTS_ERROR':
        return state.set('isError', true).set('isFetching', false).set('done', false);
      break;
      default:
        return state;
    }
  }
}

export default new ShotsStore();
