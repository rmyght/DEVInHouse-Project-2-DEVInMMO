import styled from "styled-components";

// Styled Components do DetailsPosts

export const GameCommentsSection = styled.section`
  color: ${({ theme }) => theme.colors.main};
  margin-right: 20%;
  margin-left: 20%;
`;

export const GameCommentsHeader = styled.h1`
  font-size: 1.5em;
  text-decoration: underline;
`;

export const GameCommentsNameTitle = styled.div`
  display: inline-block;
  padding: 5px;
  text-decoration: underline;
`;

export const GameCommentsName = styled.div`
  display: inline-block;
  padding: 5px;
`;

export const GameCommentsTextTitle = styled.div`
  padding: 5px;
  text-decoration: underline;
`;

export const GameCommentsText = styled.div`
  padding: 5px;
`;

export const GameCommentsLike = styled.div`
  font-size: 1.25em;
  display: inline-block;
  padding: 5px;
  margin-left: 0.5%;
  margin-right: 0.5%;
  margin-bottom: 1%;
  margin-top: 1%;
`;

export const GameCommentLine = styled.hr`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.main};
`;