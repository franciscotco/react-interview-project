// Vendors
import styled from 'styled-components';

export const PostList = styled.ul`
	margin: 0;
	padding: 0 2rem;

	@media(${props => props.theme.media.mobile_large}) {
		padding: 0 4rem;
	}
`;

export const PostItem = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Title = styled.h3`
	text-align: center;
`;

export const Body = styled.p`
`;
