import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
import { URI } from '../../helpers/baseURI';

import { NewUsersType } from '../../type/users.type';

export const addUser = createAsyncThunk('user/add', async(user: NewUsersType) => {
 const response = await axios.post(`${URI}.json`, user)
  return response.data.name
})

