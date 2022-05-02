import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	padding: 1rem 0;
	margin: 0 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #d0d7de;
	&:nth-child(1) {
		background: pink;
	}
`;
const Desc = styled.div``;
const Review = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	@media(max-width: 575px) {
		display: none;
	}
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
const ForkDesc = styled.p`
	font-size: 0.75rem;
	margin: 0.25rem 0;
	a:hover {
		color: #0969da;
	}
`;
const Type = styled.span`
	font-size: 0.75rem;
	padding: 0.2rem 0.5rem;
	border: 1px solid #d0d7de;
	border-radius: 1rem;
	margin: 0 1rem;
`;
const Info = styled.p`
	font-size: 0.875rem;
	margin: 0.5rem 0;
	color: #57606a;
	max-width: 20rem;
	@media(max-width: 575px) {
		max-width: unset;
	}
`;
const Icon = styled.img`
	width: 1.5rem;
	height: 1.5rem;
	padding: 0 0.25rem;
`;
const Footer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 1rem;
	font-size: 0.75rem;
	font-weight: 400;
	color: #57606a;
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
const Star = styled.div`
	display: flex;
	align-items: center;
	margin-left: 0.5rem;
	cursor: pointer;
	&:hover {
		color: #0969da;
	}
`;
const ForkInfo = styled.div`
	display: flex;
	align-items: center;
	margin: 0 1rem;
	cursor: pointer;
	&:hover {
		color: #0969da;
	}
`;
const FooterIcon = styled.img`
	width: 1rem;
	height: 1.25rem;
	margin: 0 0.25rem;
`;
const Update = styled.span`
	margin: 0 0.75rem;
`;
const License = styled.span`
margin: 0 0.75rem;
display: flex;
align-items: center
`;
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

const Repo = ({ repo, colors }) => {
	const [forkedRepo, setForkedRepo] = useState(null);

	const getForkedColor = () => {
		if(colors && repo.fork === true && forkedRepo ) {
			const color = colors.find(color => color.name === forkedRepo.parent.language);
			if(color) {
				return <Color bg={color.color} />;
			}
		}
	}

	// color.start
	const getColor = () => {
		if(colors) {
			const color = colors.find(color => color.name === repo.language);
			if(color) {
				return <Color bg={color.color} />;
			}
		}
	}
	// color.end
	// forked repo.start
	const getForkedRepo = (url) => {
		if(repo.fork === true) {
			return fetch(url).then(res => res.json()).then(res => {
				setForkedRepo(res);
			}).catch(err => console.error(err));
		}
	}
	// forked repo.end
	const updated = repo_date => {
		const currentYear = new Date(new Date().getFullYear(), 0, 1, 1).toISOString();
		let date = new Date(repo_date);
		let today = new Date();
		let diff = Math.abs(today - date);
		let hours = Math.floor(diff / (1000 * 60 * 60));
		let days = Math.floor(diff / (1000 * 60 * 60 * 24));
		let dateMonth = date.toUTCString().split(" ");
		dateMonth = dateMonth[2] + " " + dateMonth[1] + " " + (date < new Date(currentYear) ? dateMonth[3] : '');
		if(hours < 1) {
			return "Updated moments ago";
		} else if(hours < 24) {
			if(hours < 2) {
				return `Updated ${hours} hour ago`;
			} else {
				return `Updated ${hours} hours ago`;
			}
		} else if(hours >= 24 && days < 30) {
			if(days < 2) {
				return `Updated ${days} day ago`;
			} else {
				return `Updated ${days} days ago`;
			}
		} else if (hours > 24 && days > 30) {
			return `Updated on ${dateMonth}`;
		}
	}
	let date = updated(repo.updated_at);

	const renderLicense = () => {
		if(repo.forked === true) {
			return <License>
							<Icon src='/assets/law/svg' alt='' />
							<span>{forkedRepo.license.name}</span>
						</License>
		} else if(repo.license) {
			return <License>
							<Icon src='/assets/law.svg' alt='' />
							<span>{repo.license.name}</span>
						</License>
		} else {
			return null;
		}
	}

	useEffect(() => {
		getForkedRepo(repo.url);
	}, [repo.url])

	return (
		<Wrapper>
			<Desc>
				<NameField>
					<Name href={repo.html_url}>{repo.name}</Name>
					<Type>{repo.private === false && "Public"}</Type>
				</NameField>
				{
					repo.fork === true && forkedRepo && (
						<ForkDesc>
							Forked from <a href={forkedRepo.parent.html_url}>{forkedRepo.parent.full_name}</a>
						</ForkDesc>
					)
				}
				<Info>{repo.description}</Info>
				<Footer>
					<Language>
						{ 
							repo.fork === true && forkedRepo ? getForkedColor() :	getColor()
						}
						<span>{repo.fork === true ? (forkedRepo && forkedRepo.parent.language) : repo.language}</span>
					</Language>
					{
						repo.stargazers_count > 0 && (
							<Star>
								<FooterIcon src="/assets/star.svg" alt=""/>
								<span>{repo.stargazers_count}</span>
							</Star>
						)
					}
					<>
						{
							repo.fork === true && forkedRepo !== null && (
								<ForkInfo>
									<FooterIcon src="/assets/git-fork.svg" />
									<span>{forkedRepo.parent.forks_count}</span>
								</ForkInfo>
							)
						}
					</>
					<>{renderLicense()}</>
					<Update>{date}</Update>
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

export default Repo;