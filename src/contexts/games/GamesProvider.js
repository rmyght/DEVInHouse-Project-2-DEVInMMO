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
  const needFilters = ['games', 'latestnews'].indexOf(type) >= 0 ? true : false;

  useEffect(() => {
    // IIFE Imediately Invoked Function Expression
    (async () => {
      const list = await fetchGames(type);
      games.current = list;
      setFilteredGamesList(needFilters ? filterListByPage(games.current, page) : games.current);
      setLoaded(true);
    })();
    //eslint-disable-next-line
  }, [type]);

  useEffect(() => {
    setFilteredGamesList(needFilters ? filterListByPage(games.current, page) : games.current);
    //eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    setFilteredGamesList(needFilters ? filterListByTerm(games.current, search) : games.current);
    //eslint-disable-next-line
  }, [search]);

  return (
    <GamesContext.Provider value={{ filteredGamesList, games, loaded, page, setPage, setSearch}}>
      {children}
    </GamesContext.Provider>
  );
};