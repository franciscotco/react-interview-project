// Vendors
import React from 'react';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router-dom';

// Types
import IUser from 'types/user';

// Components
import Spinner from 'components/spinner';
import Section from 'components/section';


// Forms
import FormUser from 'forms/user';

interface IProps {
	basePath: string,
	isFetching: boolean,
	users: IUser[]
}

function DetailUser ({ users, isFetching, basePath }: IProps) {

	const intl = useIntl();
	const { user_id } = useParams<{ user_id: string }>();
	const user = users.find(({ id }) => id === parseInt(user_id));

	return (
		<Section
			title={intl.formatMessage({ id: 'FORMS.USER.TITLE' })}
			backUrl={basePath}
		>
			{isFetching ? (
				<Spinner />
			) : (user && (
				<FormUser
					user={user}
				/>
			))}
		</Section>
	);

}

export default DetailUser;
