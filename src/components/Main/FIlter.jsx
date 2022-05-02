import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { updateRepos } from '../../redux/slice';


const Container = styled.div`
	padding: 1.5rem 0;
	display: flex;
	min-height: 2.5rem;
	border-bottom: 1px solid #d0d7de;
`;
const Input = styled.input`
	border: 1px solid #d0d7de;
	flex: 1;
	padding: 0.5rem;
	outline: none;
	border-radius: 0.25rem;
	font-size: 0.875rem;
`;
const Select = styled.select`
	padding: 0 0.5rem;
	border: 1px solid #d0d7de;
	border-radius: 0.25rem;
	cursor: pointer;
	outline: none;
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

	// filters || sort .start
	const [filter, setFilter] = useState('');
	const handleSort = e => {
		let val = e.target.value.toLowerCase();
		setFilter(val);
		if(val === 'name') {
			const res = tempRepos.sort((a, b) => a.name.localeCompare(b.name));
			dispatch(updateRepos(res));
		} else if(val === 'last updated') {
			const res = tempRepos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
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
			<Container className="space-x-4">
				<Input type="text" placeholder="Find a repository..." onChange={e => search(e.target.value)} />
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
			</Container>
		</>
	)
}

export default Filter;