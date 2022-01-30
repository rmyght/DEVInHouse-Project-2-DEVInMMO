import { Routes, Route } from 'react-router-dom';
import { About } from '../Components/pages/About/About';
import { GameDetails } from '../Components/pages/GameDetails';
import { Games } from '../Components/pages/Games';
import { News } from '../Components/pages/News/News';

export const Router = () => (
  <Routes>
    <Route path="/" element={<h1>Home</h1>} />
    <Route path="/news" element={<News />} />
    <Route path="/games" element={<Games />} />
    <Route path="/games/gamedetails/:id" element={<GameDetails />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<p>Qualquer outra coisa</p>} />
  </Routes>
);