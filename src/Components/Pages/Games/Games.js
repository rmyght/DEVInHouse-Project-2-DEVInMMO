import React from 'react';
import { GamesProvider, useGames } from '../../../contexts/games';
import { CardGames } from '../../Cards/CardGames';
import { PageSystem } from '../../PageSystem/PageSystem';

export const Games = () => {
  return (
    <>
      <GamesProvider type='games'>
        <h1>Games</h1>
        <PageSystem />
        <CardGames />
      </GamesProvider>
    </>
  );
};