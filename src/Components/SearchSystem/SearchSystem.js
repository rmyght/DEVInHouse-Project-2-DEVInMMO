import { useGames } from "../../contexts/games";

export const SearchSystem = () => {
  const { setSearch } = useGames();
  return (
    <>
      <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)}></input>
    </>
  );
};