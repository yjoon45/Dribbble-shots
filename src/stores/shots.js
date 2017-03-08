import Immutable from 'immutable';

const shots = Immutable.Record({
  isFetching: false,
  done: false,
  isError: false,
  data: []
});
export default shots;
