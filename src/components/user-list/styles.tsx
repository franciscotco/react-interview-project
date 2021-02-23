// Vendors
import styled from 'styled-components';

export const UserList = styled.ul`
	padding: 0;
	margin: 0;

	overflow: hidden;
	border-radius: .6rem;
	border: 1px solid ${({ theme }) => theme.color.gray_medium};
`;

export const UserItem = styled.li`
	position: relative;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	padding: 1.5rem 1rem;
	@media(${props => props.theme.media.tablet_large}) {
		padding: 3rem 2rem;
	}

	background-color: ${({ theme }) => theme.color.white};

	border-bottom: .1rem solid ${({ theme }) => theme.color.gray_medium};
	&:last-child {
		border-bottom: unset;
	}

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left:0;
		bottom:0;
		opacity: 0;
		width: .4rem;
		background-color: rgb(225, 199, 58);
		transition: opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1) 0s;
	}

	&:hover {
		&:before {
			opacity: 1;
		}
	}
`;

export const Part = styled.div`
	flex: 1;

	margin: 0 .1rem;

	overflow: hidden;
	font-size: 1.4rem;
`;

export const Link = styled.a`
`;
