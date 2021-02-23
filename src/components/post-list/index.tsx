// Vendors
import React from 'react';

// Components
import Item, { IProps as IPropsItem } from './item';

// Styles
import { PostList as Root } from './styles';

interface IProps {
	posts: IPropsItem[]
}

function List ({ posts }: IProps) {

	return (
		<Root>
			{posts.map(post => {
				return (
					<Item
						key={post.id}
						{...post}
					/>
				);
			})}
		</Root>
	);

}

List.defaultProps = {
	users: []
};

export default List;
