import { useState } from "react";
import { useParams } from "react-router-dom"
import { GamesProvider, useGames } from "../../../contexts/games"
import { LocalStorageProvider } from "../../../contexts/localStorage";
import { LoadingScreen } from "../LoadingScreen"
import { DetailsPosts } from "./DetailsPosts";
import { Header, ReqInfo, ReqTitle, Table, TableTitle } from "./GameDetails.styles";

const DetailsTable = ({ requirement }) => {
  console.log(requirement);
  return (
    <tbody>
      <tr>
        <TableTitle colSpan={2}>Minimum System Requirements</TableTitle>
      </tr>
      <tr>
        <ReqTitle>Operating System:</ReqTitle>
        <ReqInfo>{requirement.os}</ReqInfo>
      </tr>
      <tr>
        <ReqTitle>Processor:</ReqTitle>
        <ReqInfo>{requirement.processor}</ReqInfo>
      </tr>
      <tr>
        <ReqTitle>Memory:</ReqTitle>
        <ReqInfo>{requirement.memory}</ReqInfo>
      </tr>
      <tr>
        <ReqTitle>Graphics:</ReqTitle>
        <ReqInfo>{requirement.graphics}</ReqInfo>
      </tr>
      <tr>
        <ReqTitle>Storage:</ReqTitle>
        <ReqInfo>{requirement.storage}</ReqInfo>
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
      <p>{`Release Date: ${game.release_date}`}</p>
      <p>{`Publisher: ${game.publisher}`}</p>
      <p>{`Plataform: ${game.platform}`}</p>
      <p>{`Status: ${game.status}`}</p>
      <p>{`Description: ${game.short_description}`}</p>
      <Table>
        <DetailsTable requirement={game.minimum_system_requirements} />
      </Table>
      <DetailsPosts gameid={game.id} />
    </>
  );
};

const ShowDetails = () => {
  const { filteredGamesList, loaded } = useGames();
  // console.log('Jogo: ', filteredGamesList);
  // console.log(typeof (filteredGamesList));
  // console.log(typeof (filteredGamesList.minimum_system_requirements));
  return (
    <>
      {loaded ? <DetailsConstruct game={filteredGamesList} /> : <LoadingScreen />}
    </>
  );
};

export const GameDetails = () => {
  const { id } = useParams();
  // console.log("Click OK");
  // console.log('itemid', id);
  return (
    <>
      <GamesProvider type={`game?id=${id}`}>
        <LocalStorageProvider>
          <Header>Game Details</Header>
          <ShowDetails />
        </LocalStorageProvider>
      </GamesProvider>
    </>
  );
};