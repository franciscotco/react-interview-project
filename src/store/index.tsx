// Vendors
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// Reducers
import { reducer as user } from './user';
import { reducer as lang } from './lang';

const reducers = combineReducers({
	user,
	lang
});

const store = applyMiddleware(thunk)(createStore)(reducers);

export default store;
