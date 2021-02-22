// Vendors
import React from 'react';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router-dom';

// API
import { fetchUserPost } from 'api/post';

// Types
import IUser from 'types/user';

// Components
import Spinner from 'components/spinner';
import Section from 'components/section';
import PostList from 'components/post-list';

// Forms
import FormUser from 'forms/user';

interface IProps {
	basePath: string,
	users: IUser[]
}

function UserPost ({ basePath, users }: IProps) {
	let mounted = false;

	const intl = useIntl();
	const { user_id } = useParams<{ user_id: string }>();
	const [posts, setPosts] = React.useState([]);
	const [isFetching, setFetching] = React.useState(true);

	const user = users.find(({ id }) => id === parseInt(user_id));

	React.useEffect(() => {
		mounted = true;

		return () => { mounted = false; };
	}, []);

	React.useEffect(() => {

		setFetching(true);

		fetchUserPost(user_id)
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
	}, []);

	return (
		<Section
			title={intl.formatMessage({ id: 'ROUTES.USER.POST.TITLE' })}
		>
			{isFetching ? (
				<Spinner />
			) : (
				<PostList
					posts={posts}
				/>
			)}
			{user && (
				<FormUser
					user={user}
				/>
			)}
		</Section>
	);

}

export default UserPost;
