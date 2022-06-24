import styled from '@emotion/styled';

export const MaindContainer = styled.div`
	display: flex;
	flex-direction: row;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const MainContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	padding: 5px;
`;

export const InfoPath = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color:#9FBB7D;
	color: #000;
	border-radius: 5px;
	padding:10px 40px
`;

export const AboutRest = styled.div`
	color: '#000';
	font-size: '18px';
	display: flex;
`;

export const InfoTitle = styled.h5`
	color: green;
	flex: 1;
	margin: 2px 5px;
`;

export const InfoHref = styled.a`
	display: flex;
	align-items: center;
	color:#000;
	text-decoration:none
`;

export const InfoPath2 = styled.div`
	
	font-size: 14px;
	display: flex;
	flex-wrap: wrap;
	justify-content: left;
`;
