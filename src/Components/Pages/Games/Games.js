import React from 'react';
import { GamesProvider } from '../../../contexts/games';
import { Card } from '../../Card/Card';

export const Games = () => {
  return (
    <>
      {/* test='id=452' */}
      <GamesProvider type='games'>
        <Card />
      </GamesProvider>
    </>
  );
};