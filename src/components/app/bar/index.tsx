// Vendors
import React from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

// Data
import { supportedLanguages } from 'data';

// Types
import IRoutes from 'types/routes';

// Store
import { ILangState } from 'store/lang';

// Styles
import {
	Bar as Root, Part,
	RouteList, RouteLink, RouteItem, Heading3,
	LangList, LangItem, LangLink
} from './styles';

interface IProps {
	onSwitchLang: (arg0: string) => void,
	routes: IRoutes[]
}

function AppBar ({ onSwitchLang, routes }: IProps) {

	const intl = useIntl();
	const location = useLocation();
	const lang = useSelector(({ lang }: { lang: ILangState }) => lang);

	console.log(lang);

	const onClick = (lang: string) => () => onSwitchLang(lang);

	return (
		<Root>
			<Part>
				<RouteList>
					{routes.map(route => (
						<RouteItem key={route.id}>
							<RouteLink
								as={NavLink}
								to={route.path}
								$is_active={!!location.pathname.includes(route.path)}
							>
								<Heading3>
									{intl.formatMessage({ id: `ROUTE.${route.name.toUpperCase()}.NAME` })}
								</Heading3>
							</RouteLink>
						</RouteItem>
					))}
				</RouteList>
			</Part>
			<Part>
				<LangList>
					{supportedLanguages.map(lang_code => (
						<LangItem
							key={lang_code}
						>
							<LangLink
								onClick={onClick(lang_code)}
								is_active={lang_code === lang.code}
							>
								{lang_code.toUpperCase()}
							</LangLink>
						</LangItem>
					))}
				</LangList>
			</Part>
		</Root>
	);

}

export default AppBar;
