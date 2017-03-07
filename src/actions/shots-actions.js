import Dispatcher from '../dispatcher';
import { fetch } from '../utils/fetchApi';

export function fetchShots () {
  Dispatcher.dispatch({type: 'FETCH_SHOTS_FETCHING'});
  fetch('shots')
    .done(d => Dispatcher.dispatch({type: 'FETCH_SHOTS', payload: d}))
    .fail((err) => Dispatcher.dispatch({type: 'FETCH_SHOTS_ERROR', error: err.statusText}));
}
