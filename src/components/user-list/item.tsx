// Vendors
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link as NavLink } from 'react-router-dom';

// Components
import Ellipsis from 'components/ellipsis';

// Styles
import { UserItem as Root, Part, Link } from './styles';

export interface IProps {
	id: number,
	name: string,
	username: string,
	toDetail: string,
	toMessage: string
}

function Item ({ name, username, toDetail, toMessage }: IProps) {

	return (
		<Root>
			<Part>
				<Ellipsis>
					{name}
				</Ellipsis>
			</Part>
			<Part>
				<Ellipsis>
					{username}
				</Ellipsis>
			</Part>
			<Part>
				<Link as={NavLink} to={toMessage}>
					<FormattedMessage id="COMPONENTS.USER_LIST.LINK.MESSAGES" />
				</Link>
			</Part>
			<Part>
				<Link as={NavLink} to={toDetail}>
					<FormattedMessage id="COMPONENTS.USER_LIST.LINK.DETAIL" />
				</Link>
			</Part>
		</Root>
	);

}

export default Item;
