import Immutable from 'immutable';

const shots = Immutable.Record({
  isFetching: false,
  isError: false,
  done: false,
  data: []
});

export default shots;
