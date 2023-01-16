import * as Types from './types'

interface InitState {
  data: object
  loading: boolean
  error: boolean
  searchedData:object
}

interface ActionType {
  type: string
  payload: any
}

const initState: InitState = {
  loading: false,
  error: false,
  data: {},
  searchedData: {}
}

export const reducer = (state = initState, { type, payload }: ActionType) => {
  switch (type) {
    case Types.LOADING:
      return {
        ...state,
        loading: true,
      }
    case Types.SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case Types.ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      }
    case Types.GETDATA:
      return {
        ...state,
        data: payload,
      }
    case Types.SEARCHED_DATA:
      return {
        ...state,
        searchedData: payload,
      }
    default:
      return state
  }
}
