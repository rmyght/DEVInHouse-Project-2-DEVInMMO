import { useState } from "react";
import { useParams } from "react-router-dom"
import { GamesProvider, useGames } from "../../../contexts/games"
import { LocalStorageProvider } from "../../../contexts/localStorage";
import { LoadingScreen } from "../LoadingScreen"
import { DetailsPosts } from "./DetailsPosts";
import { DivContent, DivDesc, Header, HeaderFour, HeaderThree, ImgDiv, InfoDiv, ReqInfo, ReqTitle, Table, TableTitle } from "./GameDetails.styles";

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
      <InfoDiv>
        <Header>{`${game.title} (${game.release_date.substring(0, 4).trim()})`}</Header>
        <ImgDiv>
          <img src={actualimg} alt={game.title} width="450px" height="100%" />
          <div>{game.screenshots.map((ss) => <SlideShow key={ss.id} ss={ss} tnail={game.thumbnail} actualimg={actualimg} setActualimg={setActualimg} />)}</div>
        </ImgDiv>
        <div>
          <HeaderFour>Release Date:</HeaderFour>
          <DivContent>{game.release_date}</DivContent>
        </div>
        <div>
          <HeaderFour>Publisher:</HeaderFour>
          <DivContent>{game.publisher}</DivContent>
        </div>
        <div>
          <HeaderFour>Plataform:</HeaderFour>
          <DivContent>{game.platform}</DivContent>
        </div>
        <div>
          <HeaderFour>Status:</HeaderFour>
          <DivContent>{game.status}</DivContent>
        </div>
        <HeaderThree>Description:</HeaderThree>
        <DivDesc>{game.short_description}</DivDesc>
      </InfoDiv>
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
          <ShowDetails />
        </LocalStorageProvider>
      </GamesProvider>
    </>
  );
};