import { useGames } from "../../contexts/games";

export const CardGames = () => {
  const { gamesList } = useGames();
  console.log(gamesList);
  return (
    <>
      <h1>Games</h1>
      <h3>Lista</h3>
    </>
  );
};