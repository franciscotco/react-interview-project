// Vendors
import React from 'react';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router-dom';

// API
import { fetchUserPost } from 'api/post';

// Types
import IUser from 'types/user';

// Components
import Section from 'components/section';
import PostList from 'components/post-list';

// Forms
import FormUser from 'forms/user';

interface IProps {
	basePath: string,
	users: IUser[]
}

function UserPost ({ basePath, users }: IProps) {

	const intl = useIntl();
	const { user_id } = useParams<{ user_id: string }>();
	const [posts, setPosts] = React.useState([]);
	const user = users.find(({ id }) => id === parseInt(user_id));

	React.useEffect(() => {
		fetchUserPost(user_id)
			.then(res => { console.log(res); setPosts(res.data); })
			.catch(res => { console.error(res); setPosts([]); });
	}, []);

	return (
		<Section
			title={intl.formatMessage({ id: 'ROUTES.USER.POST.TITLE' })}
		>
			<FormUser
				user={user}
			/>
			<PostList
				posts={posts}
			/>
		</Section>
	);
}

export default UserPost;
