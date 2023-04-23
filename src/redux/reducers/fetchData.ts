import { ActionType } from "../action-types"
import { Action } from "../actions"

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


const fetchDataReducer = (state= intialState, action:Action): FetchData => {
  switch(action.type) {
    case ActionType.FETCH_DATA:
      return {loading:true, err: null, data: []}
    case ActionType.FETCH_DATA_ERR:
      return {loading:false, err: action.payload, data: []}
    case ActionType.FETCH_DATA_SUCCESS:
      return {loading:false, err: null, data: action.payload}
    
    case ActionType.DELET_USER:
      const newData = state.data.filter((user:any) => {
        return user.id !== action.payload
      })

      return {
        ...state,
        data: newData
      }

    default:
      return state
  }
}


export default fetchDataReducer