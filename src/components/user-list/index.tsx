// Vendors
import React from 'react';

// Components
import Item, { IProps as IPropsItem } from './item';

// Styles
import { UserList as Root } from './styles';

interface IProps {
	users: IPropsItem[]
}

function List ({ users }: IProps) {

	return (
		<Root>
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
