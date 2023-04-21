import { ActionType } from "../action-types";

interface SearchRepoAction {
  type: ActionType.FETCH_DATA
}

interface SearchRepoSuccessAction {
  type: ActionType.FETCH_DATA_SUCCESS,
  payload: string[]
}

interface SearchRepoErrAction {
  type: ActionType.FETCH_DATA_ERR,
  payload: string
}


export type Action = SearchRepoAction | SearchRepoErrAction | SearchRepoSuccessAction 