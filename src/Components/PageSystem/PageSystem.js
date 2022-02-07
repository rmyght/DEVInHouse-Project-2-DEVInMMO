import { useGames } from "../../contexts/games";
import { ButtonPageSystem, DivPageSystem, HeaderPageSystem } from "./PageSystem.styles";

// Componente que fornece o sistema de páginas

export const PageSystem = () => {
  const { games, page, setPage, loaded } = useGames();
  const maxPage = Math.ceil(Object.keys(games.current).length / 12);
  let disabledPrevPage;
  let disabledNextPage;
  page <= 1 ? disabledPrevPage = true : disabledPrevPage = false;
  page >= maxPage ? disabledNextPage = true : disabledNextPage = false;
  return (
    <DivPageSystem>
      <HeaderPageSystem>{loaded ? `Page ${page} / ${maxPage}` : `` }</HeaderPageSystem>
      {loaded ? <ButtonPageSystem disabled={disabledPrevPage} onClick={() => setPage(page - 1)}>{`<`}</ButtonPageSystem> : ``}
      {loaded ? <ButtonPageSystem disabled={disabledNextPage} onClick={() => setPage(page + 1)}>{`>`}</ButtonPageSystem> : ``}
    </DivPageSystem>
  );
};