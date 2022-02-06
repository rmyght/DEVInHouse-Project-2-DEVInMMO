import styled from 'styled-components';

export const UnListMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  overflow: hidden;
  top: 0;
  width: 100%;
  text-align: center;
  font-size: 2em;
`

export const ListItemMenu = styled.li`
  display: inline;
`
export const LinkMenu = styled.a`
  color: ${({ theme }) => theme.colors.main};
  text-decoration: none;
  padding: 0px 25px;
  background-color: ${({ theme }) => theme.colors.bgcolor.light};
  &:hover {
    background-color: ${({ theme }) => theme.colors.shadow.main};
  }
`;