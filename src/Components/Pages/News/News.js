import React from 'react';
import { GamesProvider } from '../../../contexts/games';
import { CardNews } from '../../Cards/CardNews';
import { PageSystem } from '../../PageSystem/PageSystem';
import { SearchSystem } from '../../SearchSystem/SearchSystem';
import { Header } from "./News.styles";

// Componente que monta a estrutura da página de News

export const News = () => {
  return (
    <GamesProvider type='latestnews'>
      <Header>News</Header>
      <SearchSystem />
      <PageSystem />
      <CardNews />
    </GamesProvider>
  );
};