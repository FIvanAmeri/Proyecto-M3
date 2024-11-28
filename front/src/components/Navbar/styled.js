import styled from "styled-components";

const Container = styled.div`
display:flex;
padding: 20px;
width: 97%;
background: linear-gradient(blue, pink);
height: 80;

h2{
  font-size: 35px;
  margin-left: 20px;
  justify-content: center;
}

`;
const ButtonContainer = styled.div`
 display: flex;
width: 80%;
justify-content: flex-end;
align-items: center;
gap: 20px;

  button {
    background-color: #444;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 15px; 
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s ease;

    &:hover {
      background-color: #888;
    }
  }
`;

export { Container, ButtonContainer };
