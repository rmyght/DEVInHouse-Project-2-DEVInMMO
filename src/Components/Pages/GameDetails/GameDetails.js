import { useState } from "react";
import { useParams } from "react-router-dom"
import { GamesProvider, useGames } from "../../../contexts/games"
import { LoadingScreen } from "../LoadingScreen"
import { DetailsPosts } from "./DetailsPosts";
import { Header } from "./GameDetails.styles";

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

const SlideShow = ({ ss, tnail, actualimg, setActualimg }) => {
  return (
    <img onClick={() => setActualimg(actualimg === ss.image ? tnail : ss.image)} src={actualimg === ss.image ? tnail : ss.image} alt={ss.image} width="10%" height="10%" />
  );
};

const DetailsConstruct = ({ game }) => {
  const [actualimg, setActualimg] = useState(game.thumbnail);
  return (
    <>
      <img src={actualimg} alt={game.title} width="350px" height="100%" />
      {/* <SlideShow ss={game.screenshots} /> */}
      {game.screenshots.map((ss) => <SlideShow key={ss.id} ss={ss} tnail={game.thumbnail} actualimg={actualimg} setActualimg={setActualimg} />)}
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
  const { filteredGamesList, loaded } = useGames();
  console.log('Jogo: ', filteredGamesList);
  console.log(typeof (filteredGamesList));
  console.log(typeof (filteredGamesList.minimum_system_requirements));
  return (
    <>
      {loaded ? <DetailsConstruct game={filteredGamesList} /> : <LoadingScreen />}
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
        <Header>Game Details</Header>
        <DetailsLoad />
      </GamesProvider>
    </>
  );
};