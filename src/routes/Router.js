import { Routes, Route } from 'react-router-dom';
import { AnotherWorld } from '../Components/pages/AnotherWorld/AnotherWorld';
import { GameDetails } from '../Components/pages/GameDetails';
import { Games } from '../Components/pages/Games';
import { News } from '../Components/pages/News/News';

// Local das Rotas, onde cada path define para qual componente (página) ele precisa ir

export const Router = () => (
  <Routes>
    <Route path="/" element={<News />} />
    <Route path="/games" element={<Games />} />
    <Route path="/games/gamedetails/:id" element={<GameDetails />} />
    <Route path="*" element={<AnotherWorld />} />
  </Routes>
);