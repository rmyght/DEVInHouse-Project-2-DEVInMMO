import styled from 'styled-components';

export const Header = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.header.main};
`

export const Table = styled.table`
  color: ${({ theme }) => theme.colors.main};
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
`
export const TableTitle = styled.th`
  border: 1px solid ${({ theme }) => theme.colors.main};
  font-size: 1.5em;
`

export const ReqTitle = styled.th`
  border: 1px solid ${({ theme }) => theme.colors.main};
  text-align: right;
  padding: 5px;
`

export const ReqInfo = styled.td`
  border: 1px solid ${({ theme }) => theme.colors.main};
  padding: 3px;
`