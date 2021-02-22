// Vendors
import React from 'react';
import { useIntl } from 'react-intl';

// Types
import IUser from 'types/user';

// Components
import List from 'components/user-list';
import Spinner from 'components/spinner';
import Section from 'components/section';

interface IProps {
	users: IUser[],
	basePath: string,
	isFetchingUsers: boolean
}

function UserList ({ users, basePath, isFetchingUsers }: IProps) {

	const intl = useIntl();

	return (
		<Section
			title={intl.formatMessage({ id: 'ROUTES.USER.LIST.TITLE' })}
		>
			{isFetchingUsers ? (
				<Spinner />
			) : (
				<List
					users={users.map(({ name, username, id }) => ({
						name,
						username,
						id,
						to: `${basePath}/${id}`
					}))}
				/>
			)}
		</Section>
	);

}

UserList.defaultProps = {
	users: []
};

export default UserList;
