// Vendors
import React from 'react';
import { useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';

// Types
import IUser from 'types/user';

// Store
import { actions, IUserState } from 'store/user';

// Components
import Spinner from 'components/spinner';
import Section from 'components/section';
import UserStats from 'components/user-stats';

// Config
import Config from './config';
export { Config };

function Stats () {

	const intl = useIntl();
	const user = useSelector(({ user }: { user: IUserState }) => user);
	const dispatch = useDispatch();

	const toto;

	React.useEffect(() => {

		dispatch(actions.getUsers());

	}, []);

	const countUserAccomodation = (users: IUser[], accomodationType: string) => users.filter(({ address }) => address.suite.includes(accomodationType))?.length || 0;

	return (
		<Section
			title={intl.formatMessage({ id: 'ROUTES.STATS.TITLE' })}
		>
			{user.isFetching ? (
				<Spinner />
			) : (
				<React.Fragment>
					<UserStats
						title={intl.formatMessage({ id: 'ROUTES.STATS.USER.APT' })}
						stats={countUserAccomodation(user.items, 'Apt.')}
					/>
					<UserStats
						title={intl.formatMessage({ id: 'ROUTES.STATS.USER.SUITE' })}
						stats={countUserAccomodation(user.items, 'Suite')}
					/>
				</React.Fragment>
			)}
		</Section>
	);

}

export default Stats;
