import { CircularProgress } from "@mui/material";
import styled from 'styled-components';

const Container = styled.section`
	width: 100%;
	height: 100vh;
	position: fixed;
	background: rgba(0, 0, 0, 0.1);
	z-index: 10;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h2`
	font-size: 2rem;
	font-weight: 700;
	margin: 2rem;
	color: #24292f;
`;

const Loading = () => {
	return (
		<Container>
			<Title>Please wait, signin you in...</Title>
			<CircularProgress size="6rem" sx={{ color: '#0969da' }} />
		</Container>
	)
}

export default Loading