// Vendors
import React from 'react';
import { FormattedMessage } from 'react-intl';
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
					<FormattedMessage id="COMPONENTS.USER_LIST.LINK.MESSAGES" />
				</Link>
			</Part>
			<Part>
				<Link as={NavLink} to={to}>
					<FormattedMessage id="COMPONENTS.USER_LIST.LINK.DETAIL" />
				</Link>
			</Part>
		</Root>
	);

}

export default Item;
