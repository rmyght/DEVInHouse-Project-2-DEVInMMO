import styled from "styled-components";

export const LikeButton = styled.img`
  background-color: ${({ theme }) => theme.colors.alt};
  border-radius:20px;
  padding: 2px;
  display: inline-block;
  &:hover {
    box-shadow: 1px 1px 6px 6px ${({ theme }) => theme.colors.card.hover};
    cursor: pointer;
    border-radius:20px;
  }
`