import styled from '@emotion/styled';

export const NavbarPhoto = styled.div`
	// background-image: url(https://img.freepik.com/free-photo/empty-glasses-set-restaurant_113873-38.jpg?size=626&ext=jpg&ga=GA1.2.1565768587.1655567324);
	width: 100%;
	height: 68px;
	background-position: center;
	background-repeat: no-repeat;
	padding-bottom: 10px;
	text-decoration: u;
`;
export const SearchSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-end;
	height: 100%;
`;
export const SearchFilterArea = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: auto;
	justify-content: left;
	margin-left: 10px;
`;

export const FilterPart = styled.div`
	padding-right: 20px;
`;

export const FilterAreaBtn = styled.button`
	display: flex;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.616);
	color: #fff;
	border-color: #fff;
`;

export const FilterTitle = styled.div`
	font-size: 25px;
	
`;

export const InputPart = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	
`;

export const SearchInput = styled.input`
	font-size: 25px;
	background-color: rgba(0, 0, 0, 0.616);
	color: ##C078FF;
	outline: none;
	border: none;
	border: 1px solid #fff;
	width: 60%;
	height:40px;
	
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-right: none;
	

	&::placeholder {
		color: #fff;
		font-size: 24px;
	}
`;
export const IconButton = styled.button`
	background-color: rgba(0, 0, 0, 0.616);
	border-color: #fff;
	outline: none;
	border: none;
	border: 1px solid #fff;
	border-left: none;
	font-size: 20px;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	height:44px;
`;

export const HomeContents = styled.div`
	margin: 5px 10%;
	display: flex;
	justify-content: center;

	@media screen and (max-width: 568px) {
		justify-content: left;
	}
`;

export const RestDiv = styled.div`
	padding: 0 15px;
	width: 62%;
	min-width: 450px;

	@media screen and (max-width: 568px) {
		min-width: 380px;
		margin: 0;
	}
`;

export const OwnRest = styled.div`
	display: flex;
	border: 1px solid;
	margin-bottom: 5px;
	border-radius: 10px;
	height: 180px;
	overflow: hidden;
	cursor: pointer;
`;

export const OwnRestImg = styled.img`
	display: block;
	height: 180px;
	width: 200px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	border-radius: 10px 0px 0px 10px;
`;

export const OwnRestContent = styled.div`
	/* margin-left: 20px; */
	padding-left: 20px;
	background-color:#DCCBF9;
	padding:30px;
	flex: 4;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
	
`;

export const RestContTitle = styled.h3`
	margin: 0;
	font-family: 'roboto';
	font-size: 22px;
`;

export const MainPage = styled.div`
background-image: url('https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7f391a119093911.6096565c3d024.jpg');
background-repeat: no-repeat;
background-size: cover;
background-position: center;

`;



// https://img.freepik.com/free-vector/seamless-pizza-ingredients_1176-269.jpg?t=st=1655990380~exp=1655990980~hmac=cc16c8dea1ddcd539b2f062452c589a77f2fef00fc12c7fa65d4a43523ae8253&w=740
// https://img.freepik.com/free-vector/restaurant-symbols-seamless-pattern-doodle-sketch_1284-12804.jpg?t=st=1655965571~exp=1655966171~hmac=e5f17db2bab9905d17caba861f194b96a88367092b9f55f0714b6192efedccc1&w=740


// https://img.freepik.com/free-vector/people-meeting-restaurant-bar-dinner-isolated-flat-vector-illustration-cartoon-men-women-drinking-wine-beer-pub_74855-8505.jpg?t=st=1656005339~exp=1656005939~hmac=8f76b15874cd032db6ee095e8743752ca25d37fe91303bd44ab7c5b4951590e2&w=1060