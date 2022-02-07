import styled from 'styled-components';

// Styled Component do News

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.main};
  text-align: center;
  font-size: ${({ theme }) => theme.header.main};
`;