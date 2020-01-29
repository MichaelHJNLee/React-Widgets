import React from 'react';
import styled from 'styled-components';

const StyledView = styled.div`
  height: 100px;
  width: 400px;
  border: 1px solid black;
  text-align: right;
  font-size: 98px;
`;

const View = (props) => {
  return(
    <StyledView>{props.current}</StyledView>
  )
};

export default View;