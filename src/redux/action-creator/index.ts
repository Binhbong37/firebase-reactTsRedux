// import axios from 'axios'
import {Dispatch} from 'redux';
import { DocumentData, QuerySnapshot, onSnapshot } from 'firebase/firestore';
import { Action } from "../actions";
import { ActionType } from "../action-types";

import { userCollecion } from '../../firebase/controller';

// Redux thunk
export const fetchData = () => async (dispatch: Dispatch<Action>) => {
  // viet dispatch nhu vay se tranh dc TH ma dispatch nham du lieu len 
  // Dispatch cai loading truoc
  dispatch({
    type: ActionType.FETCH_DATA
  })

  try {
    let users; 
    // const response = await axios("https://jsonplaceholder.typicode.com/posts");
     onSnapshot(userCollecion, async (snapshot: QuerySnapshot<DocumentData>) => {
      users = await snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
    })
    console.log("fetchUser: ", users)
    dispatch({
      type: ActionType.FETCH_DATA_SUCCESS,
      payload: []
    })
  } catch (error) {
    dispatch({
      type: ActionType.FETCH_DATA_ERR,
      payload: "Err from fetch Data"
    })
  }
}