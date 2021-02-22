// Vendors
import React from 'react';
import { Link as NavLink } from 'react-router-dom';

// Styles
import { UserItem as Root, Part, Link } from './styles';

export interface IProps {
	id: number,
	to: string,
	name: string,
	username: string
}

function Item ({ name, username, to }: IProps) {

	return (
		<Root>
			<Part>
				{name}
			</Part>
			<Part>
				{username}
			</Part>
			<Part>
				<Link as={NavLink} to={to}>
					View Post
				</Link>
			</Part>
		</Root>
	);
}

export default Item;
