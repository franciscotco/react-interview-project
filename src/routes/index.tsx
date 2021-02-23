// Vendors
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Routes
import Root from './root';

export const routes = (
	<BrowserRouter>
		<Route component={Root} />
	</BrowserRouter>
);
