import React from 'react';
import { GamesProvider } from '../../../contexts/games';
import { CardGames } from '../../Cards/CardGames';

export const Games = () => {
  return (
    <>
      {/* test='id=452' */}
      <GamesProvider type='games'>
        <CardGames />
      </GamesProvider>
    </>
  );
};