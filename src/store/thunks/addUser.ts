import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
import { URI } from '../../helpers/baseURI';

export const addUser = createAsyncThunk('user/add', async(user: any) => {
  try {
     const response = await axios.post(`${URI}.json`, user)
      return response.data.name
  } catch(err: any) {
    console.log(err.message)
    return err.message
  }
})

