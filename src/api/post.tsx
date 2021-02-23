// Vendors
import axios from 'axios';

export function fetchUserPost (id: string) {

	const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;

	return axios.get(url);
}
