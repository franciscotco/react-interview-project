// Vendors
import styled from 'styled-components';

export const PostList = styled.ul`
	padding: 0;

	margin: 0 2rem;
	@media(${props => props.theme.media.mobile_large}) {
		margin: 0 4rem;
	}

	overflow: hidden;
	border-radius: .6rem;
	border: 1px solid ${({ theme }) => theme.color.gray_medium};
`;

export const PostItem = styled.li`
	padding: 1rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	background-color: ${({ theme }) => theme.color.white};

	border-bottom: 1px solid ${({ theme }) => theme.color.gray_lighter};
	&:last-child: {
		border-bottom: unset;
	}
`;

export const Title = styled.h3`
	text-align: center;

	font-size: 1.4rem;
`;

export const Body = styled.p`
	font-size: 1.3rem;
`;
