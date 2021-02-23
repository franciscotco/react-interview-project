// Vendors
import { Dispatch } from 'redux';

// API
import { fetchUsers } from 'api/user';

// Types
import IUser from 'types/user';

// ACTIONS
const USER_FETCH_ATTEMPT = 'USER_FETCH_ATTEMPT';
const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';
const USER_FETCH_FAILURE = 'USER_FETCH_FAILURE';

interface UserFetchAttemptAction {
	type: typeof USER_FETCH_ATTEMPT
}

interface UserFetchSuccessAction {
	type: typeof USER_FETCH_SUCCESS,
	payload: {
		users: IUser[]
	}
}

interface UserFetchFailureAction {
	type: typeof USER_FETCH_FAILURE,
	payload: {
		errors: []
	}
}

type UserActionTypes = UserFetchAttemptAction | UserFetchSuccessAction | UserFetchFailureAction

function getUsers () {
	return (dispatch: Dispatch<UserActionTypes>) => {

		dispatch({ type: USER_FETCH_ATTEMPT });

		return fetchUsers()
			.then((res: { data: IUser[] }) => {

				console.log(res);

				dispatch({
					type: USER_FETCH_SUCCESS,
					payload: {
						users: res.data
					}
				});

			})
			.catch(res => {

				console.error(res);

				dispatch({
					type: USER_FETCH_FAILURE,
					payload: {
						errors: res.data.errors
					}
				});
			});
	};
}

export const actions = {
	getUsers
};

export interface IUserState {
	isFetching: boolean,
	items: IUser[],
	errors: []
}

const initialState: IUserState = {
	isFetching: true,
	items: [],
	errors: []
};

export function reducer (state = initialState, action: UserActionTypes) {
	switch (action.type) {
		case USER_FETCH_ATTEMPT:
			return {
				...state,
				isFetching: true
			};
		case USER_FETCH_SUCCESS:
			return {
				...state,
				isFetching: false,
				items: action.payload.users
			};
		case USER_FETCH_FAILURE:
			return {
				...state,
				isFetching: false,
				errors: action.payload.errors
			};
		default:
			return state;
	}
}
