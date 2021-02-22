// Vendors
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';

// Routes
import List from './list';
import Post from './post';

// Components
import Section from 'components/section';

// Store
import { actions, IUserState } from 'store/user';

// Config
import Config from './config';
export { Config };


interface IProps extends RouteComponentProps {}

function User ({ match }: IProps) {

	const user = useSelector(({ user }: { user: IUserState }) => user);
	const dispatch = useDispatch();

	React.useEffect(() => {

		dispatch(actions.getUsers());

	}, []);

	return (
		<Section>
			<Switch>
				<Route path={match.url}               exact render={() => <List basePath={match.url} users={user.items} />} />
				<Route path={`${match.url}/:user_id`} exact render={() => <Post basePath={match.url} users={user.items} />} />
				<Route render={() => <Redirect to={match.url} />} />
			</Switch>
		</Section>
	);
}

export default User;
