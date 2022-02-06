import React from 'react';
import { GamesProvider } from '../../../contexts/games';
import { CardNews } from '../../Cards/CardNews';
import { PageSystem } from '../../PageSystem/PageSystem';

export const News = () => {
  return (
    <>
      <GamesProvider type='latestnews'>
        <h1>News</h1>
        <PageSystem />
        <CardNews />
      </GamesProvider>
    </>
  );
};