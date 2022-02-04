import { useParams } from "react-router-dom"
import { GamesProvider, useGames } from "../../../contexts/games"
import { LoadingScreen } from "../../helper"
import { DetailsPosts } from "./DetailsPosts";

const DetailsTable = ({ requirement }) => {
  console.log(requirement);
  return (
    <tbody>
      <tr>
        <th colSpan={2}>Minimum System Requirements</th>
      </tr>
      <tr>
        <th>Operating System</th>
        <td>{requirement.os}</td>
      </tr>
      <tr>
        <th>Processor</th>
        <td>{requirement.processor}</td>
      </tr>
      <tr>
        <th>Memory</th>
        <td>{requirement.memory}</td>
      </tr>
      <tr>
        <th>Graphics</th>
        <td>{requirement.graphics}</td>
      </tr>
      <tr>
        <th>Storage</th>
        <td>{requirement.storage}</td>
      </tr>
    </tbody>
  );
};

const DetailsConstruct = ({ game }) => {
  return (
    <>
      <img src={game.thumbnail} alt={`${game.title}`} />
      <p>{`Title: ${game.title}`}</p>
      <p>{`Publisher: ${game.publisher}`}</p>
      <p>{`Plataform: ${game.platform}`}</p>
      <p>{`Status: ${game.status}`}</p>
      <p>{`Description: ${game.short_description}`}</p>
      <table style={{ border: "1px solid black" }}>
        {<DetailsTable requirement={game.minimum_system_requirements} />}
      </table>
      <DetailsPosts LSKey="game-posts" gameid={game.id} />
    </>
  );
};

const DetailsLoad = () => {
  const { gamesList, loaded } = useGames();
  console.log('Jogo: ', gamesList);
  console.log(typeof (gamesList));
  console.log(typeof (gamesList.minimum_system_requirements));
  return (
    <>
      {loaded ? <DetailsConstruct game={gamesList} /> : <LoadingScreen />}
    </>
  );
};

export const GameDetails = () => {
  const { id } = useParams();
  console.log("Click OK");
  console.log('itemid', id);
  // game?id=452
  return (
    <>
      <GamesProvider type={`game?id=${id}`}>
        <h1>Game Details</h1>
        <DetailsLoad />
      </GamesProvider>
    </>
  );
};