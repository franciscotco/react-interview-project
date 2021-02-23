// Vendors
import axios from 'axios';

// Types
import IUser from 'types/user';

export function fetchUsers () {

	const url = 'https://jsonplaceholder.typicode.com/users';

	return axios.get(url);
}

export function updateUser (user: IUser) {

	const url = `https://jsonplaceholder.typicode.com/users/${user.id}`;

	return axios.put(url, user);
}
