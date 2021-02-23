// Vendors
import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

// Types
import IUser from 'types/user';

// Store
import { actions, IUserState } from 'store/user';

export function fetchUsers () {

	const url = 'https://jsonplaceholder.typicode.com/users';

	return axios.get(url);
}

export function useFetchUsers () {

	const user = useSelector(({ user }: { user: IUserState }) => user);
	const dispatch = useDispatch();

	React.useEffect(() => {

		dispatch(actions.getUsers());

	}, []);

	return {
		users: user.items,
		isFetching: user.isFetching
	};

}

export function updateUser (user: IUser) {

	const url = `https://jsonplaceholder.typicode.com/users/${user.id}`;

	return axios.put(url, user);
}
