import React from 'react';
import TopNav from '../components/TopNav';
import SideNav from '../components/SideNav';
import styled from 'styled-components';

const Container = styled.section`
	max-width: 1440px;
	margin: 0 auto;
`;

const Home = () => {
	return (
		<Container>
			<TopNav />
			<SideNav />
		</Container>
	)
}

export default Home