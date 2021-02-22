// Vendors
import styled from 'styled-components';

export const UserList = styled.ul`
	margin: 0;
	padding: 0 2rem;

	@media(${props => props.theme.media.mobile_large}) {
		padding: 0 4rem;
	}
`;

export const UserItem = styled.li`
	position: relative;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	margin: .5rem 0;
	padding: 1rem;

	background: ${({ theme }) => theme.color.white};
	border-left: 1px solid ${({ theme }) => theme.color.white};

	border-width: 1px 1px 2px;
    border-style: solid;
    border-color: rgb(234, 234, 234);

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left:0;
		bottom:0;
		opacity: 0;
		width: .4rem;
		background-color: rgb(225, 199, 58);
	}

	&:hover {
		&:before {
			opacity: 1;
		}
	}
`;

export const Part = styled.div`
	flex: 1;

	font-size: 1.2rem;
`;

export const Head = styled.li`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	padding: 1rem;
`;

export const HeadPart = styled.div`
	flex: 1;

	font-size: 1.6rem;
	font-weight: 700;
`;

export const Link = styled.a`
`;
