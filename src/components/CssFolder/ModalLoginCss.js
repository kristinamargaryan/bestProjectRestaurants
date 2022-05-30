import styled from "@emotion/styled";

export const BigDiv = styled.div`
padding: 10px;
width: 450px;
background-color: rgba(0, 0, 0, 0.8);

@media screen and (max-width: 768px) {
  width: calc(100% - 20px);
  height: auto;
  
}
`;

export const MyInput = styled.input`
width: 80%;
font-size: 20px;
background-color: rgba(0, 0, 0, 0);
color: #fff;
border: none;
outline: 1px solid gray;
font-family: Verdana, Geneva, Tahoma, sans-serif;

&::placeholder {
  color: #fff;
}

&:focus {
  outline: 1px solid #fff;
}
`;

export const TitleDiv = styled.div`
display: flex;
justify-content: center;
color: #fff;
font-size: 18px;
padding-bottom: 10px;
`;

export const GoHomeBtn = styled.button`
cursor: pointer;
color: #fff;
text-decoration: underline;
background-color: rgba(0, 0, 0, 0);
border: none;
font-size: 20px;
`;

export const LogTitle = styled.div`
padding: 0;
margin: 0;
color: #fff;
font-size: 30px;
text-align: center;
`;

export const InputArea = styled.div`
display: flex;
flex-direction: column;
height: 100px;
align-items: center;
justify-content: space-evenly;
margin: 0;
padding: 0;
`;

export const ButtonPart = styled.div`
display: flex;
justify-content: space-between;
`;

export const PartBtn = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`;

export const LogBtn = styled.div`
display: flex;
align-self: flex-end;
`;