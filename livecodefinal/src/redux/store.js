import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import figureReducer from './reducers'

const store = createStore(figureReducer, applyMiddleware(thunk))

export default store
