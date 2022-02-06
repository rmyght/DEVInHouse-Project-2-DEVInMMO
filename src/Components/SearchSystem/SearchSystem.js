import { useGames } from "../../contexts/games";
import { InputSearch } from "./SearchSystem.styles";

export const SearchSystem = () => {
  const { setSearch } = useGames();
  return (
    <InputSearch type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)}></InputSearch>
  );
};