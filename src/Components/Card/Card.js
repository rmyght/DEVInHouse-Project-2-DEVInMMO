import { useGames } from "../../contexts/games";

export const Card = () => {
  const { gamesList } = useGames();
  console.log(gamesList);
  return (
    <>
      <h1>Games</h1>
      <h3>Lista</h3>
    </>
  );
};