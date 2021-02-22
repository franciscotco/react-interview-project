// Vendors
import React from 'react';

// Styles
import { Section as Root } from './styles';

interface IProps {
	children: React.ReactNode
}

function Section ({ children }: IProps) {

	return (
		<Root>
			{children}
		</Root>
	);

}

export default Section;
