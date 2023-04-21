import fetchDataReducer from './fetchData';
import {combineReducers} from 'redux';

const reducers = combineReducers({
  fetchData: fetchDataReducer
})

export default reducers

export type rootState = ReturnType<typeof reducers>