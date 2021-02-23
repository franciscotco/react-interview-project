// Vendors
import React from 'react';
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';

// API
import { useFetchUsers } from 'api/user';

// Routes
import List from './list';
import Post from './post';
import Detail from './detail';

// Config
import Config from './config';
export { Config };


interface IProps extends RouteComponentProps {}

function User ({ match }: IProps) {

	const { users, isFetching } = useFetchUsers();

	return (
		<Switch>
			<Route path={match.url}                       exact render={() => <List   basePath={match.url} users={users} isFetching={isFetching} />} />
			<Route path={`${match.url}/detail/:user_id`}  exact render={() => <Detail basePath={match.url} users={users} isFetching={isFetching} />} />
			<Route path={`${match.url}/message/:user_id`} exact render={() => <Post   basePath={match.url} />} />
			<Route render={() => <Redirect to={match.url} />} />
		</Switch>
	);

}

export default User;
