import styled from 'styled-components';


export const InfoDiv = styled.div`
  color: ${({ theme }) => theme.colors.main};
  margin-right: 20%;
  margin-left: 20%;
`

export const Header = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.header.main};
`

export const ImgDiv = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
`

export const HeaderFour = styled.h4`
  margin: 5px;
  display: inline;
`

export const DivContent = styled.div`
  display: inline-block;
  margin-left: 1%;
`

export const HeaderThree = styled.h3`
  margin: 5px;
`

export const DivDesc = styled.div`
  margin-right: 2%;
  margin-left: 2%;
`

export const Table = styled.table`
  color: ${({ theme }) => theme.colors.main};
  border-collapse: collapse;
  margin-top: 1%;
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