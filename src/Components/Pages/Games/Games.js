import React from 'react';
import { GamesProvider, useGames } from '../../../contexts/games';
import { CardGames } from '../../Cards/CardGames';
import { PageSystem } from '../../PageSystem/PageSystem';
import { SearchSystem } from '../../SearchSystem/SearchSystem';

export const Games = () => {
  return (
    <>
      <GamesProvider type='games'>
        <h1>Games</h1>
        <SearchSystem />
        <PageSystem />
        <CardGames />
      </GamesProvider>
    </>
  );
};