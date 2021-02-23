// Vendors
import React from 'react';
import axios from 'axios';

// Utils
import { useMounted } from 'utils/useMounted';

export function fetchUserPost (id: string) {

	const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;

	return axios.get(url);
}

export function useFetchUserPost (id: string) {

	const mounted = useMounted();
	const [posts, setPosts] = React.useState([]);
	const [isFetching, setFetching] = React.useState(true);


	React.useEffect(() => {

		if (!mounted) {
			return ;
		}

		setFetching(true);

		fetchUserPost(id)
			.then(res => {
				console.log(res);
				if (mounted) {
					setFetching(false);
					setPosts(res.data);
				}
			})
			.catch(res => {
				console.error(res);
				if (mounted) {
					setFetching(false);
					setPosts([]);
				}
			});

	}, [mounted]);

	return {
		isFetching,
		posts
	};

}
