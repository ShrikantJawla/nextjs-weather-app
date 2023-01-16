import { combineReducers, legacy_createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { reducer } from './reducer'
const rootReducer = combineReducers({
  data: reducer,
})

export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)

export type State = ReturnType<typeof rootReducer>
