import styled from 'styled-components';

export const CardUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`

export const CardLink = styled.a`
  &:link {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.link.main};
  }

  &:visited {
    color: ${({ theme }) => theme.colors.link.visited};
  }
`

export const CardLi = styled.li`
  background-color: ${({ theme }) => theme.colors.link.light};
  border-radius: 6px;
  box-shadow: 1px 1px 6px 6px ${({ theme }) => theme.colors.shadow.main};
  padding: 15px;
  margin: 20px;
  width: 20%;
  transition: all 0.1s ease-out;
  display: flex;
  justify-content: space-between;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 1px 1px 6px 6px ${({ theme }) => theme.colors.card.hover};
    cursor: pointer;
  }
`

export const CardImg = styled.img`
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 0px;
  width: 100%;
`
export const CardTitle = styled.div`
  color: ${({ theme }) => theme.colors.text};
  text-align: justify;
  font-size: 18px;
  font-weight: bold;
`

export const CardSDescription = styled.div`
  color: ${({ theme }) => theme.colors.text};
  max-width: 35ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 10px;
  text-align: justify;
  font-size: 14px;
`