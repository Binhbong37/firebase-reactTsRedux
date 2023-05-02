import {createSlice} from '@reduxjs/toolkit'
import { fetchUsers } from '../thunks/fetchUser';
import { addUser } from '../thunks/addUser';

// Initial state
interface FetchData {
  loading: boolean,
  err: null | string,
  data: any
}

const intialState: FetchData = {
  loading: false,
  err: null,
  data: []
} 

// Slice

const userSlice = createSlice({
  name: 'user',
  initialState: intialState,
  reducers: {},
  extraReducers(builder) {

    // fetchUser
    builder
    .addCase(fetchUsers.pending, (state, action) => {
      state.loading = true
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      state.data = []
    });
    builder.addCase(fetchUsers.rejected, (state, action: any) => {
      state.err = action.payload
      state.loading = false
    });

    // addUser
    builder.addCase(addUser.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.loading = false
      console.log(state)
      console.log(action)
    })
    builder.addCase(addUser.rejected, (state, action) => {
      state.loading = false
      console.log(action)
    })
  },

})
export default userSlice.reducer