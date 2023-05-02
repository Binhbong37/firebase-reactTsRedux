import {createAsyncThunk} from '@reduxjs/toolkit';
// import axios from 'axios'
// import { URI } from '../../helpers/baseURI';

export const addUser = createAsyncThunk('user/add', async(user: any) => {
  console.log(user)
  return user
})

