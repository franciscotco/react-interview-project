// Vendors
import React from 'react';
import { useParams } from 'react-router-dom';

// API
import { fetchUserPost } from 'api/post';

// Types
import IUser from 'types/user';

// Components
import PostList from 'components/post-list';

// Forms
import FormUser from 'forms/user';

interface IProps {
	basePath: string,
	users: IUser[]
}

function UserPost ({ basePath, users }: IProps) {

	const { user_id } = useParams<{ user_id: string }>();
	const [posts, setPosts] = React.useState([]);
	const user = users.find(({ id }) => id === parseInt(user_id));

	React.useEffect(() => {
		fetchUserPost(user_id)
			.then(res => { console.log(res); setPosts(res.data); })
			.catch(res => { console.error(res); setPosts([]); });
	}, []);

	return (
		<React.Fragment>
			<FormUser
				user={user}
			/>
			<PostList
				posts={posts}
			/>
		</React.Fragment>
	);
}

export default UserPost;
