import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  height: 98px;
  width: 98px;
  font-size: 20px;
  text-align: center;
  vertical-align: middle;
  line-height: 100px;
  border: 1px solid black;

  ${(props) => (props.children === 'clear') && `
    width: 298px;
  `}

  ${(props) => (props.children === 0) && `
    width: 198px;
  `}
`;

const Button = (props) => {
  return (
    <StyledButton onClick={(e) => props.click(e.target.innerHTML)}>{props.num}</StyledButton>
  )
}

export default Button;