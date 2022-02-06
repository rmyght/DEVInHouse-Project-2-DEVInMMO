import styled from "styled-components";

export const Line = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.main};
  border-radius: 15px;
`