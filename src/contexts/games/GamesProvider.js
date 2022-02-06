import { useEffect, useState, useRef } from "react";
import { GamesContext } from ".";
import { filterListByPage } from "../../Components/helper/utilGames";
import { fetchGames } from "../../services/games-service";


export const GamesProvider = ({ children, type }) => {
  const [filteredGamesList, setFilteredGamesList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const games = useRef([]);

  useEffect(() => {
    // IIFE Imediately Invoked Function Expression
    (async () => {
      const list = await fetchGames(type);
      games.current = list;
      setFilteredGamesList(filterListByPage(games.current, page));
      setLoaded(true);
    })();
    //eslint-disable-next-line
  }, [type]);

  useEffect(() => {
    setFilteredGamesList(filterListByPage(games.current, page));
    console.log("Gerando nova LISTA")
  }, [page]);

  return (
    <GamesContext.Provider value={{ filteredGamesList, games, loaded, page, setPage}}>
      {children}
    </GamesContext.Provider>
  );
};