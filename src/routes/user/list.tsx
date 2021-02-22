// Vendors
import React from 'react';
import { useIntl } from 'react-intl';

// Types
import IUser from 'types/user';

// Components
import List from 'components/user-list';

interface IProps {
	users: IUser[],
	basePath: string
}

function UserList ({ users, basePath }: IProps) {

	const intl = useIntl();

	return (
		<List
			title={intl.formatMessage({ id: 'ROUTES.USER.LIST.TITLE' })}
			users={users.map(({ name, username, id }) => ({
				name,
				username,
				id,
				to: `${basePath}/${id}`
			}))}
		/>
	);

}

UserList.defaultProps = {
	users: []
};

export default UserList;
