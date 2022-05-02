import React from 'react';
import styled from 'styled-components';
import SideNav from '../components/SideNav';
import Main from '../components/Main';

const Wrapper = styled.section`
	* {
		color: #24292f;
	}
`;

const Space = styled.div`
	height: 4rem;
	border-bottom: 1px solid #c2ccd6;
	@media(max-width: 968px) {
		display: none;
	}
`;

const Container = styled.section`
	width: 100%;
	max-width: 1440px;
	margin: 0 auto;
	display: flex;
	margin-top: -2rem;
	background: transparent;
	@media(max-width: 968px) {
		flex-direction: column;
		margin-top: 0;
	}
`;

const Home = () => {
	return (
		<Wrapper>
			<Space />
			<Container>
				<SideNav />
				<Main />
			</Container>
		</Wrapper>
	)
}

export default Home