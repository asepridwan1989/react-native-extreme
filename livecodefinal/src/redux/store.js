import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import gameReducer from './reducers'

const store = createStore(gameReducer)

export default store
