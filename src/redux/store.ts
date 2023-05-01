// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import reducers from "./reducers";


// export const store = createStore(
//   reducers, {}, applyMiddleware(thunk)
// )

import {configureStore} from '@reduxjs/toolkit'
import userSlice from '../features/users/userSlice'

const store = configureStore({
  reducer: userSlice
})

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store