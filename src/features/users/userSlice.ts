import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const URI = "https://api-firebase-redux-default-rtdb.firebaseio.com/users.json";

// action
export const getUsers = createAsyncThunk(
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
    builder
    .addCase(getUsers.pending, (state, action) => {
      state.loading = true
    })
    .addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false
      state.data = []
    })
    .addCase(getUsers.rejected, (state, action: any) => {
      state.err = action.payload
      state.loading = false
    })
  },

})
export default userSlice.reducer