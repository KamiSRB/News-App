import styled from '@emotion/styled';

export const StyledCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 300px;
  height: 300px;
  border: solid 1px rgba(0, 0, 0, 0.4);
  border-radius: 5%;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  overflow: hidden;

  :hover {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledTitleDiv = styled.div`
  flex-basis: 10%;
  flex-grow: 1;
  flex-shrink: 0;
  font-weight: bold;

  :hover {
    color: #0000e6;
  }
`;

export const StyledDescriptionDiv = styled.div`
  flex-basis: 20%;
  flex-grow: 1;
  flex-shrink: 1;
  position: relative;
  overflow: hidden;
  text-align: justify;

  :after {
    content: '';
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70%;
    height: 1.2em;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 80%);
  }
`;

export const StyledPreviewImg = styled.img`
  flex-basis: 60%;
  flex-shrink: 2;
  flex-grow: 0;
  width: 100%;
  min-height: 0px;
  object-fit: cover;
  padding: 5px 0px;
`;

export const StyledMoreLinkDiv = styled.div`
  text-align: right;
  flex-basis: 10%;
  flex-shrink: 0%;
  padding-top: 10px;

  :hover {
    color: #0000e6;
  }
`;

export default {
  StyledCardDiv,
  StyledTitleDiv,
  StyledDescriptionDiv,
  StyledPreviewImg,
  StyledMoreLinkDiv,
};
