// Vendors
import React from 'react';
import { Provider } from 'react-redux';

// Store
import store from 'store';

// Routes
import { routes } from './routes';

function App () {

	return (
		<Provider store={store}>
			{routes}
		</Provider>
	);

}

export default App;
