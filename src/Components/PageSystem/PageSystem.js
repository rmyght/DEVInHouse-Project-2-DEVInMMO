import { useGames } from "../../contexts/games";

export const PageSystem = () => {
  const { games, page, setPage } = useGames();
  const maxPage = Math.ceil(Object.keys(games.current).length / 20);
  let disabledPrevPage;
  let disabledNextPage;
  page <= 1 ? disabledPrevPage = true : disabledPrevPage = false;
  page >= maxPage ? disabledNextPage = true : disabledNextPage = false;
  return (
    <>
      <h4>{`A Página Atual é ${page} de ${maxPage}`}</h4>
      <button disabled={disabledPrevPage} onClick={() => setPage(page - 1)}>PrevPage</button>
      <button disabled={disabledNextPage} onClick={() => setPage(page + 1)}>NextPage</button>
    </>
  )
}