import {createAsyncThunk} from '@reduxjs/toolkit';
// import axios from 'axios'
// import { URI } from '../../helpers/baseURI';


export const addUser = createAsyncThunk('user/add', async(user: any) => {
  try {
    console.log(user)
    //  const response = await axios.post(`${URI}.json`, user)
      return user
  } catch(err: any) {
    console.log(err.message)
    return 'co loi khi post user'
  }

})

