import React from 'react';
import { GamesProvider } from '../../../contexts/games';
import { CardNews } from '../../Cards/CardNews';

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