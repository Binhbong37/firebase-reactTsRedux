import axios from 'axios'
import {Dispatch} from 'redux'

import { Action } from "../actions";
import { ActionType } from "../action-types";

// Redux thunk
export const fetchData = () => async (dispatch: Dispatch<Action>) => {
  // viet dispatch nhu vay se tranh dc TH ma dispatch nham du lieu len 
  // Dispatch cai loading truoc
  dispatch({
    type: ActionType.FETCH_DATA
  })

  try {
    const response = await axios("https://jsonplaceholder.typicode.com/posts");

    dispatch({
      type: ActionType.FETCH_DATA_SUCCESS,
      payload: response.data
    })
  } catch (error) {
    dispatch({
      type: ActionType.FETCH_DATA_ERR,
      payload: "Err from fetch Data"
    })
  }
}