import styled from "@emotion/styled";


export const NavbarPhoto = styled.div`
  background-image: url(http://www.loyolamedicine.org/assets/images/blog-thumbnails/blog-lowercholesterolfoods.jpg);
  width: 100%;
  height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  padding-bottom: 10px;
`
export const SearchSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
`
export const SearchFilterArea = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  justify-content: left;
  margin-left: 10px; 
`

export const FilterPart = styled.div`
  padding-right: 20px;
`

export const FilterAreaBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.616);
  color: #fff;
  border-color: #fff;
`

export const FilterTitle = styled.div`
font-size: 25px;
`

export const InputPart = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const SearchInput = styled.input`
  font-size: 25px;
  background-color: rgba(0, 0, 0, 0.616);
  color: #fff;
  outline: none;
  border: none;
  border: 1px solid #fff;

  &::placeholder{
    color: #fff
  }
`
export const IconButton = styled.button`
  background-color: rgba(0, 0, 0, 0.616);
  border-color: #fff;
`