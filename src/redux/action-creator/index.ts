import {Dispatch} from 'redux';
import { Action } from "../actions";
import { ActionType } from "../action-types";


import axios from 'axios';

// Redux thunk
export const fetchData = () => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.FETCH_DATA
  })

  try {
    const response = await axios("https://api-firebase-redux-default-rtdb.firebaseio.com/users.json");
    const users = [];
    for(let key in response.data) {
      users.push({...response.data[key], id: key})
    }
    dispatch({
      type: ActionType.FETCH_DATA_SUCCESS,
      payload: users
    })
    
  } catch (error) {
    dispatch({
      type: ActionType.FETCH_DATA_ERR,
      payload: "Err from fetch Data"
    })
  }
}


export const addNewUser = (newUser: any) => async(dispatch:Dispatch<Action>) => {

  const newAge =new Date().getFullYear() - newUser.dob.$y 
  const newUserAdd = {
    lName: newUser.lName,
    email: newUser.email,
    age: newAge   
  }

  const response = await axios.post("https://api-firebase-redux-default-rtdb.firebaseio.com/users.json", newUserAdd);
  
  console.log( response.data)
  
  dispatch({
    type: ActionType.ADD_NEW_USER,
    payload: response
  })
} 


export const deleteUser = (id: any) => async(dispatch: Dispatch<Action>) => {
  await axios.delete(`https://api-firebase-redux-default-rtdb.firebaseio.com/users/${id}.json`);
  
  dispatch({
    type: ActionType.DELET_USER,
    payload: id
  })
  
}

export const editUser = (user:any) => async(dispatch: Dispatch<Action>) => {
 
  const respone = await axios.patch(`https://api-firebase-redux-default-rtdb.firebaseio.com/users/${user.id}.json`,user
  );
  dispatch({
    type: ActionType.EDIT_USER,
    payload: respone.data
  })
}

