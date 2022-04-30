import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	padding: 1rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #d0d7de;
`;
const Desc = styled.div``;
const Review = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;
const NameField = styled.div``;
const Name = styled.a`
	color: #0969da !important;
	font-size: 1.25rem;
	font-weight: 600 !important;
	&:hover {
		text-decoration: underline;
	}
`;
const Type = styled.span`
	font-size: 0.75rem;
	padding: 0.2rem 0.5rem;
	border: 1px solid #d0d7de;
	border-radius: 1rem;
	margin: 0 1rem;
	text-transform: capitalize;
`;
const Info = styled.p`
	font-size: 0.875rem;
	margin: 0.5rem 0;
	font-weight: 500;
`;
const Star = styled.div``;
const Icon = styled.img`
	width: 1.5rem;
	height: 1.5rem;
	padding: 0 0.25rem;
`;
const Footer = styled.div`
	display: flex;
	margin-top: 1rem;
	font-size: 0.75rem;
	font-weight: 600;
`;
const Language = styled.div`
	display: flex;
	align-items: center;
`;
const Color = styled.div`
	width: 0.875rem;
	height: 0.875rem;
	border-radius: 50%;
	margin-right: 0.25rem;
	background-color: ${props => props.bg};
`;
const Update = styled.span``;
const Button = styled.button`
	display: flex;
	border: 1px solid #d0d7de;
	height: 2rem;
	border-radius: 0.5rem;
	overflow: hidden;
	width: 7rem;
	background: #F8F8F8;
`;
const BtnStar = styled.div`
	display: flex;
	align-items: center;
	padding: 0 0.75rem;
	border-right: 1px solid #d0d7de;
	height: 100%;
	font-size: 0.875rem;
	font-weight: 600;
`;
const Caret = styled.img`
	display: block;
	height: 100%;
`;
const Line = styled.div`
	width: 10rem;
	height: 2px;
	background: #2da44e;
	margin: 1.5rem 0;
`;

const Repo = ({ repo }) => {
	return (
		<Wrapper>
			<Desc>
				<NameField>
					<Name href={repo.html_url}>{repo.name}</Name>
					<Type>{repo.visibility}</Type>
				</NameField>
				<Info>{repo.description}</Info>
				<Footer>
					<Language>
						<Color bg="#2da44e" />
						<span>{repo.language}</span>
					</Language>
				</Footer>
			</Desc>
			<Review>
				<Button>
					<BtnStar>
						<Icon src="/assets/star.svg" />
						<span>Star</span>
					</BtnStar>
					<Caret src="/assets/caret-down.svg" />
				</Button>
				<Line />
			</Review>
		</Wrapper>
	)
}

export default Repo