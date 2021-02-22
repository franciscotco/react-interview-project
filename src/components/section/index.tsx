// Vendors
import React from 'react';

// Styles
import { Section as Root, Heading1 } from './styles';

interface IProps {
	children: React.ReactNode,
	title: React.ReactNode
}

function Section ({ children, title }: IProps) {

	return (
		<Root>
			<Heading1>
				{title}
			</Heading1>
			{children}
		</Root>
	);

}

export default Section;
