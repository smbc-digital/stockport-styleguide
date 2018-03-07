import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'
import thunkMiddleware from 'redux-thunk'

export default function configureStore(initialState,history) {
	const routerMidd = routerMiddleware(history)
	return createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware, routerMidd))
}