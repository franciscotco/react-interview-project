// Vendors
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';

// Routes
import List from './list';
import Post from './post';

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
		<Switch>
			<Route path={match.url}               exact render={() => <List basePath={match.url} users={user.items} isFetchingUsers={user.isFetching} />} />
			<Route path={`${match.url}/:user_id`} exact render={() => <Post basePath={match.url} users={user.items} />} />
			<Route render={() => <Redirect to={match.url} />} />
		</Switch>
	);

}

export default User;
