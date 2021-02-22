// Vendors
import React from 'react';
import { useIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';

// Data
import { supportedLanguages } from 'data';

// Types
import IRoutes from 'types/routes';

// Styles
import { Bar as Root, Part, Link } from './styles';

interface IProps {
	onSwitchLang: (arg0: string) => void,
	routes: IRoutes[]
}

function AppBar ({ onSwitchLang, routes }: IProps) {

	const intl = useIntl();
	const onClick = (lang: string) => () => onSwitchLang(lang);

	return (
		<Root>
			<Part>
				{routes.map(route => (
					<Link
						as={NavLink}
						key={route.path}
						to={route.path}
					>
						{intl.formatMessage({ id: `ROUTE.${route.name.toUpperCase()}.NAME` })}
					</Link>
				))}
			</Part>
			<Part>
				{supportedLanguages.map(lang => (
					<Link
						key={lang}
						onClick={onClick(lang)}
					>
						{lang}
					</Link>
				))}
			</Part>
		</Root>
	);

}

export default AppBar;
