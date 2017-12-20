import styled from 'styled-components';

const Button = styled.button`
  flex: 1;
  padding: 10px;
  font-size: inherit;
  font-weight: 700;
  background: lightgreen;
  color: #fff;
  border-radius: 4px;
  border: 2px solid lightgreen;
  text-transform: uppercase;

  &:hover {
    color: lightgreen;
    background: #fff;
  }
`;

export default Button;
