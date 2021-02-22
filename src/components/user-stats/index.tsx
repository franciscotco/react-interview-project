// Vendors
import React from 'react';

// Styles
import { UserStats as Root, Title, Stats } from './styles';

interface IProps {
	title: string,
	stats: number
}

function UserStats ({ title, stats }: IProps) {

	return (
		<Root>
			<Title>
				{title}
			</Title>
			<Stats>
				{stats}
			</Stats>
		</Root>
	);

}

export default UserStats;
