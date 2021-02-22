/*
 * Dependencies
 */

// Vendors
import React from 'react';

// Styles
import { Root, Segment } from './styles';

function Spinner () {

	const segments = [];

	for (let i = 0; i < 12; i++) {
		segments.push(
			<Segment key={i} />
		);
	}

	return (
		<Root>
			{segments}
		</Root>
	);
}

export default Spinner;
