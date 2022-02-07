import { useGames } from "../../contexts/games";
import { InputSearch } from "./SearchSystem.styles";

// Componente de Busca da página, onde faz busca com base no título do jogo

export const SearchSystem = () => {
  const { setSearch } = useGames();
  return (
    <InputSearch type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)}></InputSearch>
  );
};