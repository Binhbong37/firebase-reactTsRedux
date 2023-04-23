import { ActionType } from "../action-types";

interface FetchDataAction {
  type: ActionType.FETCH_DATA
}

interface FetchDataSucessAction {
  type: ActionType.FETCH_DATA_SUCCESS,
  payload: any
}

interface FetchDataErrAction {
  type: ActionType.FETCH_DATA_ERR,
  payload: string
}

interface DeleteUser {
  type: ActionType.DELET_USER,
  payload: string
}


export type Action = FetchDataAction | FetchDataSucessAction | FetchDataErrAction | DeleteUser