import React from 'react'
import styled from 'styled-components';

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

const FIlter = () => {
	return (
		<Container className="space-x-4">
			<Input type="text" placeholder="Find a repository..." />
			<Select>
				<Option>Type</Option>
				<Option>Private</Option>
				<Option>Public</Option>
			</Select>
			<Select>
				<Option>Language</Option>
				<Option>Dart</Option>
				<Option>Python</Option>
				<Option>JavaScript</Option>
			</Select>
			<Select>
				<Option>Sort</Option>
				<Option>Last updated</Option>
				<Option>Name</Option>
				<Option>Stars</Option>
			</Select>
		</Container>
	)
}

export default FIlter