import {createSlice} from '@reduxjs/toolkit'
import { addUser } from '../thunks/addUser';


// import { NewUsersType } from '../../type/users.type';

// Initial state
interface FetchData {
  loading: boolean,
  err: null | string,
  data: any,
}

const intialState: FetchData = {
  loading: false,
  err: null,
  data: [],
} 

// Slice

const userSlice = createSlice({
  name: 'user',
  initialState: intialState,
  reducers: {},
  extraReducers(builder) {

    // addUser
    builder.addCase(addUser.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.loading = false
      console.log(action.payload)
    })
    builder.addCase(addUser.rejected, (state, action) => {
      state.loading = false
      console.log(action.payload)
    });
  },

})
export default userSlice.reducer