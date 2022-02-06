import styled from 'styled-components';

export const ChangeThemeIco = styled.img`
  position: absolute;
  top: 0;
  margin-top: 1%;
  left: 91%;
  &:hover {
    box-shadow: 1px 1px 6px 6px ${({ theme }) => theme.colors.card.hover};
    cursor: pointer;
    border-radius:25px;
  }
`