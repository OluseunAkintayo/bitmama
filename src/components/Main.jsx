import { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import TopNav from './TopNav';
import Filter from './Main/FIlter';
import Repo from './Main/Repo';

const Container = styled.div`
	width: 100%;
	/* padding: 0 2rem; */
	@media(max-width: 968px) {
		padding: 0;
	}
`;

const Main = () => {
	const repos = useSelector(state => state.profile.repos.data);
	const [colors, setColors] = useState(null);

	const getColors = async () => {
		return await fetch('/assets/colors.json').then(res => res.json()).then(data => {
			let result = Object.keys(data).map(item => {
				return {
					name: item,
					color: data[item]["color"]
				}
			})
			setColors(result);
		});
	}
	
	useEffect(() => {
		getColors();
	}, []);
	
	return (
		<Container>
			<TopNav />
			<Filter />
			{
				repos !== [] && repos.map(repo => <Repo repo={repo} key={repo.id} colors={colors} />)
			}
		</Container>
	)
}

export default Main;
