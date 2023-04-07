import styled from 'styled-components';

export const ContainerButtons = styled.div`
  margin: 20px auto;
  max-width: 800px;
  display: flex;
  gap: 20px;
  flex-direction: row;
  justify-content: left;
  /* background-color: #d9caca;
  box-shadow: rgb(0 0 0 / 20%) 0px 9px 9px -6px,
    rgb(0 0 0 / 14%) 0px 9px 12px 0px, rgb(0 0 0 / 12%) 0px 3px 24px 0px;
  border-radius: 20px; */
`;

export const Button = styled.button`
  cursor: pointer;
  :hover {
    background-color: blue;
    color: white;
  }
`;
