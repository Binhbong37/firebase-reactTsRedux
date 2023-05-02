import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
import { URI } from '../../helpers/baseURI';


export const fetchUsers = createAsyncThunk(
  'user/getUsers',
  async (data, thunkApi) => {
    try {
      const response = await axios.get(URI);
      console.log(response)
    } catch (error: any) {
      console.log(thunkApi.rejectWithValue(error.message))
    }
  }
)