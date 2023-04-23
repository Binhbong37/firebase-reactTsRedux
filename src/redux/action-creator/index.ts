// import axios from 'axios'
import {Dispatch} from 'redux';
import { DocumentData, QuerySnapshot, onSnapshot, addDoc,
  deleteDoc, doc
 } from 'firebase/firestore';
import { Action } from "../actions";
import { ActionType } from "../action-types";

import { userCollecion, fireStore } from '../../firebase/controller';

// Redux thunk
export const fetchData = () => async (dispatch: Dispatch<Action>) => {
  // viet dispatch nhu vay se tranh dc TH ma dispatch nham du lieu len 
  // Dispatch cai loading truoc
  dispatch({
    type: ActionType.FETCH_DATA
  })

  try {
    // const response = await axios("https://jsonplaceholder.typicode.com/posts");
     onSnapshot(userCollecion, async (snapshot: QuerySnapshot<DocumentData>) => {
     const listUser =  snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      dispatch({
        type: ActionType.FETCH_DATA_SUCCESS,
        payload: listUser
      })
    })
    
    
  } catch (error) {
    dispatch({
      type: ActionType.FETCH_DATA_ERR,
      payload: "Err from fetch Data"
    })
  }
}

export const addNewUser = (newUser: any) => async(dispatch:Dispatch) => {
  const newAge =new Date().getFullYear() - newUser.dob.$y 
   await addDoc(userCollecion, {
    lName: newUser.lName,
    email: newUser.email,
    age: newAge   
  })
 
} 


export const deleteUser = (id: any) => async(dispatch: Dispatch) => {
  const document = doc(fireStore, `users/${id}`);
  await deleteDoc(document);
}