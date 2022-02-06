import styled from "styled-components";

export const GameCommentsSection = styled.section`
  color: ${({ theme }) => theme.colors.main};
  margin-right: 20%;
  margin-left: 20%;
`

export const GameCommentsDiv = styled.div`
  display: inline-block;
`

export const GameCommentsHeader = styled.h1`
  font-size: 1.5em;
`

export const GameCommentLine = styled.hr`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.main};
`