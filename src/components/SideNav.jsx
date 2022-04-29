import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Container = styled.div`

`;
const Avatar = styled.div``;
const Img = styled.img``;
const Action = styled.div``;
const Name = styled.div``;
const UsrName = styled.div``;
const Button = styled.button``;
const Status = styled.p``;
const Follow = styled.div``;
const Followers = styled.div``;
const Following = styled.div``;
const Icon = styled.img``;
const Text = styled.p``;
const Params = styled.div``;


const SideNav = () => {
	const user = useSelector(state => state.profile.user);
	const { } = user;
	console.log(user);
	return (
		<Container>
			<Avatar>
				<Img src="" alt=""/>
				<Action></Action>
			</Avatar>
			<Name>My name</Name>
			<UsrName>GitUsername</UsrName>
			<Button>Follow</Button>
			<Status>This is the status</Status>
			<Follow>
				<Followers>
					<Icon src="" alt=""/>
					<span>followers</span>
				</Followers>
				<Following>
					<span>389</span>
					<Icon src="" alt=""/>
				</Following>
			</Follow>
			<Params>
				<Icon src="" alt=""/>
				<span>Lagos</span>
			</Params>
			<Params>
				<Icon src="" alt=""/>
				<span>mail@domain.com</span>
			</Params>
			<Params>
				<Icon src="" alt=""/>
				<span>@twitter</span>
			</Params>
			<hr />
			<Text>Achivements</Text>
			
		</Container>
	)
}

export default SideNav;