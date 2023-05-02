import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import { fetchUsers } from './thunks/fetchUser';
import { addUser } from './thunks/addUser';


const store = configureStore({
  reducer: {
    userSlice,
  }
})

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch


export {fetchUsers, addUser}
export default store