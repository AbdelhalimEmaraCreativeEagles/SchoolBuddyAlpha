import { combineReducers } from 'redux'
import { LOGIN, SIGNUP, UPDATE_EMAIL, UPDATE_NAME, UPDATE_PASSWORD, SAVECHANGES } from '../actions/user'

const user = (state = {}, action) => {
	switch (action.type) {
		case LOGIN:
			return action.payload
		case SIGNUP:
			return action.payload
		case UPDATE_EMAIL:
			return { ...state, email: action.payload }
		case UPDATE_PASSWORD:
			return { ...state, password: action.payload }
		case UPDATE_NAME:
			return { ...state, name: action.payload }
		case SAVECHANGES:
			return action.payload
		default:
			return state
	}
}
const courses = (state ={}, action) => {
	return {
	  courses: state.courses
	}
  }
  

const rootReducer = combineReducers({
	user , courses
})

export default rootReducer
