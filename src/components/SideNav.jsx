import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Container = styled.div`
	width: 25%;
	padding: 0 2rem;
	* {
		color: rgba(0, 0, 0, 0.8);
	}
`;
const Avatar = styled.div`
	position: relative;
	width: 100%;
	aspect-ratio: 1;
`;
const Img = styled.img`
	background: gray;
	width: 100%;
	height: 100%;
	border-radius: 50%;
`;
const Action = styled.img`
	position: absolute;
	width: 2.5rem;
	aspect-ratio: 1;
	padding: 0.5rem;
	border-radius: 50%;
	right: 2%;
	bottom: 8%;
	border: 1px solid #57606a;
	background: rgb(249 250 251);
	cursor: pointer;
`;
const Name = styled.h2`
	font-size: 1.5rem;
	font-weight: 700;
`;
const UsrName = styled.p`
	font-size: 1.25rem;
	margin-top: -7px;
`;
const Button = styled.button`
	background: #f5f5f5;
	margin: 1rem 0;
	display: block;
	width: 100%;
	padding: 0.5rem 0;
	border-radius: 0.25rem;
	border: 1px solid rgba(0, 0, 0, 0.25);
	font-weight: 500;
	font-size: 1rem;
`;
const Status = styled.p`
	font-weight: 500;
	font-size: 1rem;
`;
const Follow = styled.div`
	display: flex;
	align-items: center;
	margin: 1rem 0;
`;
const Followers = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	.num {
		font-weight: 600;
		margin-right: 0.25rem;
	}
`;
const Circle = styled.div`
	width: 3px;
	height: 3px;
	border-radius: 50%;
	background: darkgray;
	margin: 0 0.5rem;
`;
const Icon = styled.img`
	width: 1.125rem;
	height: 1.125em;
	margin-right: 0.5rem;
`;
const Text = styled.p``;
const Params = styled.div`
	display: flex;
	align-items: center;
	margin: 0.25rem 0;
	cursor: pointer;
	span {
		font-weight: 500;
	}
`;
const Line = styled.div`
	height: 1px;
	background: #57606a;
	margin: 1rem 0;
`;

const SideNav = () => {
	const user = useSelector(state => state.profile.user);
	const { } = user;
	console.log(user);
	return (
		<Container>
			<Avatar>
				<Img src="" alt="smile"/>
				<Action src="/assets/smile.svg" alt="" />
					{/* <Icon src="/assets/smile.svg" alt="" /> */}
			</Avatar>
			<Name>My name</Name>
			<UsrName>GitUsername</UsrName>
			<Button>Follow</Button>
			<Status>This is the status</Status>
			<Follow>
				<Followers>
					<Icon src="/assets/users.svg" alt=""/>
					<span className="num">105</span>
					<span>followers</span>
				</Followers>
				<Circle />
				<Followers>
					<span className="num">254</span>
					<span>following</span>
				</Followers>
			</Follow>
			<Params>
				<Icon src="/assets/map.svg" alt=""/>
				<span>Lagos</span>
			</Params>
			<Params>
				<Icon src="/assets/mail.svg" alt=""/>
				<span>mail@domain.com</span>
			</Params>
			<Params>
				<Icon src="/assets/twitter.svg" alt=""/>
				<span>@twitter</span>
			</Params>
			<Line />
			<Text>Achivements</Text>
		</Container>
	)
}

export default SideNav;