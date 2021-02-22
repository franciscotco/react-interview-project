// Vendors
import React from 'react';
import { useIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';

// Styles
import { Section as Root, Link, Heading1 } from './styles';

interface IProps {
	children: React.ReactNode,
	title: React.ReactNode,
	backUrl?: string
}

function Section ({ children, title, backUrl }: IProps) {

	const intl = useIntl();

	return (
		<Root>
			{backUrl && (
				<Link
					as={NavLink}
					to={backUrl}
				>
					{intl.formatMessage({ id: 'COMPONENTS.SECTION.BACK_URL.TITLE' })}
				</Link>
			)}
			<Heading1>
				{title}
			</Heading1>
			{children}
		</Root>
	);

}

export default Section;
