import { Routes, Route } from 'react-router-dom';
import { About } from '../Components/Pages/About/About';

export const Router = () => (
  <Routes>
    <Route path="/" element={<h1>Home</h1>} />
    <Route path="/news" element={<h1>News</h1>} />
    <Route path="/games" element={<h1>Games</h1>} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<p>Qualquer outra coisa</p>} />
  </Routes>
);