// Vendors
import React, { ReactNode } from 'react';

// Components
import Item, { IProps as IPropsItem } from './item';

// Styles
import { UserList as Root } from './styles';

interface IProps {
	title: ReactNode,
	users: IPropsItem[]
}

function List ({ title, users }: IProps) {

	return (
		<Root>
			{title}
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
