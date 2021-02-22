// Vendors
import React from 'react';
import { useIntl } from 'react-intl';

// Components
import Item, { IProps as IPropsItem } from './item';

// Styles
import { UserList as Root, Head, HeadPart } from './styles';

interface IProps {
	users: IPropsItem[]
}

function List ({ users }: IProps) {

	const intl = useIntl();

	return (
		<Root>
			<Head>
				<HeadPart>
					{intl.formatMessage({ id: 'COMPONENTS.USER_LIST.HEAD.NAME' })}
				</HeadPart>
				<HeadPart>
					{intl.formatMessage({ id: 'COMPONENTS.USER_LIST.HEAD.LAST_NAME' })}
				</HeadPart>
				<HeadPart>
					{intl.formatMessage({ id: 'COMPONENTS.USER_LIST.HEAD.POST' })}
				</HeadPart>
			</Head>
			{users.map(user => {
				return (
					<Item
						key={user.id}
						{...user}
					/>
				);
			})}
		</Root>
	);

}

List.defaultProps = {
	users: []
};

export default List;
