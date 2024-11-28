import styled from "styled-components";

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;

  .active {
    width: 50px;
   
    background-color: #34eb4c;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    
    :hover{
      opacity: 0.5;

    }
  }

  .canceled {
    background-color: red; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   
    }


  button {
    background-color: #f44336; 
    color: white; 
    border: none; 
    padding: 10px 20px; 
    text-align: center; 
    text-decoration: none; 
    display: inline-block; 
    font-size: 16px; 
    margin: 4px 2px; 
    cursor: pointer; 
    border-radius: 4px; 
    transition: background-color 0.3s; 

    &:hover {
      background-color: #d32f2f; 
    }

    &:active {
      background-color: #b71c1c; 
    
    }
  }
`;

export { Container };
