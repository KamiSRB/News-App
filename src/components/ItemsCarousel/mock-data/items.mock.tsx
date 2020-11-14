import styled from '@emotion/styled';
import React from 'react';

const StyledNodeDiv = styled.div`
  height: 200px;
  width: 500px;
  background-color: gray;
`;

const items = [
  { id: '1', node: <StyledNodeDiv>1</StyledNodeDiv> },
  { id: '2', node: <StyledNodeDiv>2</StyledNodeDiv> },
  { id: '3', node: <StyledNodeDiv>3</StyledNodeDiv> },
  { id: '4', node: <StyledNodeDiv>4</StyledNodeDiv> },
  { id: '5', node: <StyledNodeDiv>5</StyledNodeDiv> },
  { id: '6', node: <StyledNodeDiv>6</StyledNodeDiv> },
  { id: '7', node: <StyledNodeDiv>7</StyledNodeDiv> },
];

export default items;
