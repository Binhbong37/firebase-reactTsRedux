import repotoriReducer from "./fetchData";
import {combineReducers} from 'redux';

const reducers = combineReducers({
  repo: repotoriReducer
})

export default reducers

export type rootState = ReturnType<typeof reducers>