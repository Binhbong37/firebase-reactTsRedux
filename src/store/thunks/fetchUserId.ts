import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
import { URI } from '../../helpers/baseURI';


export const fetchUserId = createAsyncThunk(
  'user/getUserId',
  async (userId: string) => {
    try {
      const response = await axios.get(`${URI}/${userId}.json`);
      console.log(response)
      return response.data
    } catch (error: any) {
      console.log(error)
    }
  }
)