import { useContext } from 'react';
import { GamesContext } from './GamesContext';



export const useGames = () => useContext(GamesContext);