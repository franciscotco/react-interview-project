// Vendors
import React from 'react';
import { useIntl } from 'react-intl';

// Components
import Section from 'components/section';

// Config
import Config from './config';
export { Config };

function Home () {

	const intl = useIntl();

	return (
		<Section
			title={intl.formatMessage({ id: 'ROUTES.HOME.TITLE' })}
		>
			Home
		</Section>
	);
}

export default Home;
