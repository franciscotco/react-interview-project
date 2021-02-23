// Vendors
import React from 'react';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router-dom';

// API
import { useFetchUserPost } from 'api/post';

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

	const intl = useIntl();
	const { user_id } = useParams<{ user_id: string }>();
	const { isFetching, posts } = useFetchUserPost(user_id);

	const user = users.find(({ id }) => id === parseInt(user_id));

	return (
		<Section
			title={intl.formatMessage({ id: 'ROUTES.USER.POST.TITLE' })}
			backUrl={basePath}
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
