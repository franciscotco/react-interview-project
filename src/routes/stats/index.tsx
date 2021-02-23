// Vendors
import React from 'react';
import { useIntl } from 'react-intl';

// API
import { useFetchUsers } from 'api/user';

// Components
import Spinner from 'components/spinner';
import Section from 'components/section';
import UserStats from 'components/user-stats';

// Config
import Config from './config';
export { Config };

function Stats () {

	const intl = useIntl();
	const { users, isFetching } = useFetchUsers();

	const countUserAccomodation = (accomodationType: string) => users.filter(({ address }) => address.suite.includes(accomodationType))?.length || 0;

	return (
		<Section
			title={intl.formatMessage({ id: 'ROUTES.STATS.TITLE' })}
		>
			{isFetching ? (
				<Spinner />
			) : (
				<React.Fragment>
					<UserStats
						title={intl.formatMessage({ id: 'ROUTES.STATS.USER.APT' })}
						stats={countUserAccomodation('Apt.')}
					/>
					<UserStats
						title={intl.formatMessage({ id: 'ROUTES.STATS.USER.SUITE' })}
						stats={countUserAccomodation('Suite')}
					/>
				</React.Fragment>
			)}
		</Section>
	);

}

export default Stats;
