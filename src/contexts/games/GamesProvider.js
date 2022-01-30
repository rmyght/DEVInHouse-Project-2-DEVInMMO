import { useEffect, useState } from "react";
import { GamesContext } from ".";
import { fetchGames } from "../../services/games-service";


export const GamesProvider = ({ children, type }) => {
  const [gamesList, setGamesList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      const lista = await fetchGames(type);
      setGamesList(lista);
      setLoaded(true);
    })();
  }, [type]);

  return (
    <GamesContext.Provider value={{ gamesList, loaded }}>
      {children}
    </GamesContext.Provider>
  );
};