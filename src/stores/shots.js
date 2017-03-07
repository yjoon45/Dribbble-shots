import Immutable from 'immutable';

const shots = Immutable.Record({
  isFetching: false,
  done: false,
  isError: false,
  data: '',
  page: 1,
});
export default shots;
