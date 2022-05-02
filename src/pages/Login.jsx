import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;	;
`;
const LoginWrapper = styled.div`
	h2 {
		text-align: center;
		font-size: 30px;
		font-weight: 600;
		color: rgba(0,0,0,0.7);
	}
	button {
		display: flex;
		align-items: center;
		border: 1px solid rgba(0,0,0,0.8);
		color: rgba(0,0,0,0.8);
		padding: 0.375rem 1rem;
		margin: 1rem 0;
		font-weight: 500;
		transition: ease-in-out 0.2s;
		&:hover {
			transform: scale(1.05);
			border: 1px solid rgba(0,0,0,0.5);
		}
		img {
			width: 1.75rem;
			height: 1.75rem;
			margin-right: 0.5rem;
		}
	}
`;

const Login = ({ login }) => {
	return (
		<Container>
			<LoginWrapper>
				<h2 className='headerText'>To continue</h2>
				<button onClick={login}>
					<img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt="" />
					<span>Login to Github</span>
				</button>
			</LoginWrapper>
		</Container>
	)
}

export default Login;