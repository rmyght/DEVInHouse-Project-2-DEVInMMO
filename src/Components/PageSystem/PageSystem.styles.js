import styled from "styled-components";

// Styled Component do Pagesystem

export const DivPageSystem = styled.div`
  position: absolute;
  top: 0;
  margin-top: 4%;
  left: 88%;
`

export const HeaderPageSystem = styled.h4`
  color: ${({ theme }) => theme.colors.main};
`

export const ButtonPageSystem = styled.button`
  padding: 3px;
  width: 45px;
  height: 30px;
`