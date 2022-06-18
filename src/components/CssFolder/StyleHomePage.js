import styled from '@emotion/styled';

export const NavbarPhoto = styled.div`
	background-image: url(http://www.loyolamedicine.org/assets/images/blog-thumbnails/blog-lowercholesterolfoods.jpg);
	width: 100%;
	height: 200px;
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
	color: #fff;
	outline: none;
	border: none;
	border: 1px solid #fff;
	width: 40vh;
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
`;

export const HomeContents = styled.div`
	margin: 5px 10%;
	display: flex;
`;

export const RestDiv = styled.div`
	padding: 0 15px;
	flex: 3;
`;

export const OwnRest = styled.div`
	display: flex;
	border: 1px solid;
	margin-bottom: 5px;
	border-radius: 10px;
	height: 150px;
`;

export const OwnRestImg = styled.img`
	display: block;
	height: 150px;
	width: 200px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	border-radius: 10px 0px 0px 10px;
`;

export const OwnRestContent = styled.div`
	margin-left: 10px;
	flex: 4;
`;

export const RestContTitle = styled.h3`
	margin-top: 1px;
`;
