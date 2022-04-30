import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import TopNav from './TopNav';
import Filter from './Main/FIlter';
import Repo from './Main/Repo';

const Container = styled.div`
	width: 100%;
	padding: 0 2rem;
`;

const Main = () => {
	const repos = useSelector(state => state.profile.repos.data);
	console.log(repos);
	return (
		<Container>
			<TopNav />
			<Filter />
			{
				repos !== [] && repos.map(repo => <Repo repo={repo} key={repo.id} />)
			}
		</Container>
	)
}

export default Main;
