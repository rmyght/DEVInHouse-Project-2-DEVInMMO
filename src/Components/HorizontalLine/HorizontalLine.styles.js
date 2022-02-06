import styled from "styled-components";

export const Line = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.text};;
  border-radius: 15px;
`