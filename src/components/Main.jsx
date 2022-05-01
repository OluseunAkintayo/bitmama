import { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import TopNav from './TopNav';
import Filter from './Main/FIlter';
import Repo from './Main/Repo';
import Fuse from 'fuse.js';
import { updateRepos } from '../redux/slice';

const Container = styled.div`
	width: 100%;
	padding: 0 2rem;
`;

const Main = () => {
	const dispatch = useDispatch();
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

	// search.start
	let tempRepos = JSON.parse(localStorage.getItem('repos'));
	const options = { keys: ['name'] };
	const fuse = new Fuse(tempRepos, options);
	// const search = (val) => {
	// 	if(val.trim() !== '') {
	// 		let result = fuse.search(val);
	// 		result = result.map(item => { return item.item });
	// 		console.log(result);
	// 		dispatch(updateRepos(result));
	// 	} else {
	// 		dispatch(updateRepos(tempRepos));
	// 	}
	// }

	const [searchTxt, setSearchTxt] = useState('');
	const search = (val) => {
		setSearchTxt(val);
		if(val.trim() !== '') {
			const result = tempRepos.filter((item) => {
				return Object.values(item).join('').toLowerCase().includes(searchTxt.toLowerCase())
			});
			dispatch(updateRepos(result));
		} else {
			dispatch(updateRepos(tempRepos));
		}
	}
	
	return (
		<Container>
			<TopNav />
			<Filter search={search} />
			{
				repos !== [] && repos.map(repo => <Repo repo={repo} key={repo.id} colors={colors} />)
			}
		</Container>
	)
}

export default Main;
