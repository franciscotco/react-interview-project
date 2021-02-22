// Vendors
import React from 'react';
import { ThemeProvider } from 'styled-components';
// import enLocaleData from 'react-intl/locale-data/en';
// import frLocaleData from 'react-intl/locale-data/fr';
import { useSelector, useDispatch } from 'react-redux';
import { IntlProvider/*, addLocaleData*/ } from 'react-intl';
import { Switch, Route, Redirect } from 'react-router-dom';


// Theme
import { BaseGlobalStyles } from 'styles/base';
import { THEME } from 'styles/theme';

// Routes
import { getRoutes } from './routes';

import Home, { Config as HomeConfig } from './home';
import User, { Config as UserConfig } from './user';
import Stats, { Config as StatsConfig } from './stats';

// Components
import App from 'components/app';

// Store
import { actions, ILangState } from 'store/lang';

// Locales
import en from 'locales/en.json';
import fr from 'locales/fr.json';

const MESSAGES: any = {
	en: en,
	fr: fr
};

// addLocaleData(enLocaleData);
// addLocaleData(frLocaleData);

/*
 *
 */
function Root () {

	const dispatch = useDispatch();
	const lang = useSelector(({ lang }: { lang: ILangState }) => lang);

	const setLocal = (lang_code: string) => {
		dispatch(actions.setLocal(lang_code));
	};

	React.useEffect(() => {

		const browserLanguage = navigator.language?.split(/[-_]/)?.[0];

		setLocal(browserLanguage);

	}, []);

	return (
		<IntlProvider locale={lang.code} messages={MESSAGES[lang.code]}>
			<ThemeProvider theme={THEME}>
				<React.Fragment>
					<BaseGlobalStyles />
					<App
						onSwitchLang={setLocal}
						routes={getRoutes()}
					>
						<Switch>
							<Route path={HomeConfig.path}     exact         component={Home} />
							<Route path={UserConfig.path}     exact={false} component={User} />
							<Route path={StatsConfig.path}    exact         component={Stats} />
							<Route render={() => <Redirect to="/" />} />
						</Switch>
					</App>
				</React.Fragment>
			</ThemeProvider>
		</IntlProvider>
	);

}

export default Root;
