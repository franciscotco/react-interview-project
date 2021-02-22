// Vendors
import React, { ReactNode } from 'react';
// import Helmet from 'react-helmet';

// Types
import IRoutes from 'types/routes';

// Components
import Bar from './bar';

// Styles
import { App as Root, Body } from './styles';

interface IProps {
	children: ReactNode,
	onSwitchLang: (arg0: string) => void,
	routes: IRoutes[]
}

function App ({ children, onSwitchLang, routes }: IProps) {

	return (
		<Root>
			<Bar
				routes={routes}
				onSwitchLang={onSwitchLang}
			/>
			<Body>
				{children}
			</Body>
		</Root>
	);

}

export default App;
