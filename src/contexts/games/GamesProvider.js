import { useEffect, useRef, useState } from "react";
import { GamesContext } from ".";
import { fetchGames } from "../../services/games-service";


export const GamesProvider = ({ children, type }) => {
  const [gamesList, setGamesList] = useState([]);
  useEffect(() => {
    (async () => {
      const lista = await fetchGames(type);
      setGamesList(lista);
    })();
  }, []);

  return (
    <GamesContext.Provider value={{ gamesList }}>
      {children}
    </GamesContext.Provider>
  );
};