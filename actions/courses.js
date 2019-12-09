import Firebase, { db } from '../config/Firebase.js'

// define types

export const LOGIN = 'LOGIN'


// actions
export const getCourses = uid => {
	return async (dispatch, getState) => {
		try {
			const courses = await db
				.collection('courses')
				.doc(uid)
				.get()

                dispatch(getCourses(response.courses.uid))
		} catch (e) {
			alert(e)
		}
	}
}

