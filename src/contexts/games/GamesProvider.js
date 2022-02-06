import { useEffect, useState, useRef } from "react";
import { GamesContext } from ".";
import { filterListByPage, filterListByTerm } from "../../Components/helper/utilGames";
import { fetchGames } from "../../services/games-service";


export const GamesProvider = ({ children, type }) => {
  const [filteredGamesList, setFilteredGamesList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
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
  }, [page]);

  useEffect(() => {
    setFilteredGamesList(filterListByTerm(games.current, search));
  }, [search]);

  return (
    <GamesContext.Provider value={{ filteredGamesList, games, loaded, page, setPage, setSearch}}>
      {children}
    </GamesContext.Provider>
  );
};