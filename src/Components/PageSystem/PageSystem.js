import { useGames } from "../../contexts/games";
import { ButtonPageSystem, DivPageSystem, HeaderPageSystem } from "./PageSystem.styles";

export const PageSystem = () => {
  const { games, page, setPage } = useGames();
  const maxPage = Math.ceil(Object.keys(games.current).length / 12);
  let disabledPrevPage;
  let disabledNextPage;
  page <= 1 ? disabledPrevPage = true : disabledPrevPage = false;
  page >= maxPage ? disabledNextPage = true : disabledNextPage = false;
  return (
    <DivPageSystem>
      <HeaderPageSystem>{`Page ${page} / ${maxPage}`}</HeaderPageSystem>
      <ButtonPageSystem disabled={disabledPrevPage} onClick={() => setPage(page - 1)}>Prev</ButtonPageSystem>
      <ButtonPageSystem disabled={disabledNextPage} onClick={() => setPage(page + 1)}>Next</ButtonPageSystem>
    </DivPageSystem>
  );
};