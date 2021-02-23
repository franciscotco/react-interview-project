// Vendors
import React from 'react';

// Styles
import { PostItem as Root, Title, Body } from './styles';

export interface IProps {
	id: number,
	title: string,
	body: string
}

function Item ({ title, body }: IProps) {

	return (
		<Root>
			<Title>
				{title}
			</Title>
			<Body>
				{body}
			</Body>
		</Root>
	);

}

export default Item;
