// Vendors
import React from 'react';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router-dom';

// API
import { useFetchUserPost } from 'api/post';

// Components
import Spinner from 'components/spinner';
import Section from 'components/section';
import PostList from 'components/post-list';

interface IProps {
	basePath: string
}

function UserPost ({ basePath }: IProps) {

	const intl = useIntl();
	const { user_id } = useParams<{ user_id: string }>();
	const { isFetching, posts } = useFetchUserPost(user_id);

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
		</Section>
	);

}

export default UserPost;
