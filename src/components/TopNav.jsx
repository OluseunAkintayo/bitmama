import React from 'react'
import styled from 'styled-components';

const Nav = styled.nav`
	height: 2.5rem;
	margin-top: -0.5rem;
`;
const Wrapper = styled.div`
	display: flex;
`;
const Link = styled.a`
	display: flex;
	align-items: center;
	padding: 0.4rem 0.75rem;
	/* background: pink; */
	width: auto;
	span {
		font-size: 1rem;
	}
	&:hover {
		border-radius: 0.25rem;
		/* border-bottom: 2px solid #FD8C73; */
		/* span {
			font-weight: 600;
		} */
		background: #E8E8E8;
	}
`;
const Img = styled.img`
	width: 1.125rem;
	height: 1.125rem;
	margin-right: 0.375rem;
`;


const TopNav = () => {
	return (
		<Nav>
			<Wrapper>
				<Link href="#">
					<Img src="/assets/book.svg" alt="Book" />
					<span>Overview</span>
				</Link>
				<Link href="#">
					<Img src="/assets/repo.svg" alt="" />
					<span>Repositories</span>
				</Link>
				<Link href="#">
					<Img src="/assets/projects.svg" alt="" />
					<span>Projects</span>
				</Link>
				<Link href="#">
					<Img src="/assets/package.svg" alt="" />
					<span>Packages</span>
				</Link>
				<Link href="#">
					<Img src="/assets/star.svg" alt="" />
					<span>Stars</span>
				</Link>
			</Wrapper>
		</Nav>
	)
}

export default TopNav;