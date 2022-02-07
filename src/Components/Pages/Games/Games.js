import React from 'react';
import { GamesProvider } from '../../../contexts/games';
import { CardGames } from '../../Cards/CardGames';
import { PageSystem } from '../../PageSystem/PageSystem';
import { SearchSystem } from '../../SearchSystem/SearchSystem';
import { Header } from './Games.styles';

// Componente que monta a estrutura da página de games

export const Games = () => {
  return (
    <GamesProvider type='games'>
      <Header>Games</Header>
      <SearchSystem />
      <PageSystem />
      <CardGames />
    </GamesProvider>
  );
};