import { combineReducers } from 'redux';
import newsDatReducer from './news-data-Reducer';

const reducers = {
  newsDatReducer
};
const rootReducers = combineReducers(reducers);
export default rootReducers;
