import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { updateRepos } from '../../redux/slice';


const Container = styled.div`
	padding: 1.5rem 2rem;
	display: flex;
	align-items: center;
	@media(max-width: 968px) {
		padding: 1.5rem 2rem;
		flex-direction: column;
		height: auto;
		align-items: flex-start;
	}
`;
const Input = styled.input`
	border: 1px solid #d0d7de;
	flex: 1;
	padding: 0.5rem;
	outline: none;
	border-radius: 0.25rem;
	font-size: 0.875rem;
	@media(max-width: 968px) {
		margin-bottom: 0.75rem;
		width: 100%;
	}
`;
const FilterArray = styled.div`
	height: 2.5rem;
`;
const Select = styled.select`
	padding: 0 0.5rem;
	border: 1px solid #d0d7de;
	border-radius: 0.25rem;
	cursor: pointer;
	outline: none;
	height: 100%;
	margin-left: 0.5rem;
	@media(max-width: 968px) {
		&:nth-child(1) {
			margin-left: 0;
		}
	}
`;
const Option = styled.option``;

const Filter = () => {
	const dispatch = useDispatch();
	const repos = useSelector(state => state.profile.repos.data);
	
	// search.start
	let tempRepos = JSON.parse(localStorage.getItem('repos'));
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
	// search.end

	// languages.start
	const [lang, setLang] = useState([]);
	let tempLang = [];
	tempRepos.forEach(item => {
		item.language && tempLang.push(item.language);
	});
	tempLang = [...new Set(tempLang)];
	// languages.end

	// filters || sort.start
	const [filter, setFilter] = useState('');
	const handleSort = e => {
		let val = e.target.value.toLowerCase();
		setFilter(val);
		if(val === 'name') {
			const res = tempRepos.sort((a, b) => a.name.localeCompare(b.name));
			dispatch(updateRepos(res));
		} else if(val === 'last updated') {
			const res = tempRepos.sort((a, b) => new Date(a.updated_at) - new Date(b.updated_at));
			dispatch(updateRepos(res));
		} else if(val === 'stars') {
			const res = tempRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
			dispatch(updateRepos(res));
		}
	}

	const handleFilter = e => {
		const val = e.target.value;
		if(val !== "Language") {
			const res = tempRepos.filter(item => item.language === val);
			dispatch(updateRepos(res));
		} else {
			dispatch(updateRepos(tempRepos));
		}
	}
	// filters || sort.end
	
	useEffect(() => {
		setLang(tempLang)
	}, []);

	return (
		<>
			<Container className="">
				<Input type="text" placeholder="Find a repository..." onChange={e => search(e.target.value)} />
				<FilterArray>
					<Select>
						<Option>Type</Option>
						<Option>Private</Option>
						<Option>Public</Option>
					</Select>
					<Select onChange={handleFilter}>
						<Option>Language</Option>
						{ lang && lang.sort((a, b) => a.localeCompare(b)).map(item => <Option key={item}>{item}</Option>) }
					</Select>
					<Select onChange={handleSort}>
						<Option>Sort</Option>
						<Option value="Last updated">Last updated</Option>
						<Option value="Name">Name</Option>
						<Option value="Stars">Stars</Option>
					</Select>
				</FilterArray>
			</Container>
		</>
	)
}

export default Filter;