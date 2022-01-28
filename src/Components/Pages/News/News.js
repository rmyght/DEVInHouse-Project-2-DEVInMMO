import React from 'react';
import { GamesProvider } from '../../../contexts/games';
import { CardNews } from '../../Card/CardNews';

export const News = () => {
  return (
    <>
      <GamesProvider type='latestnews'>
        <h1>News</h1>
        <CardNews />
      </GamesProvider>
    </>
  );
};