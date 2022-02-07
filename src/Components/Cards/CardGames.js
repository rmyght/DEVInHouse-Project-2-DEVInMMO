import { useNavigate } from "react-router-dom";
import { useGames } from "../../contexts/games";
import { LoadingScreen } from "../pages/LoadingScreen";
import { CardImg, CardLi, CardLink, CardSDescription, CardTitle, CardUl } from "./Card.styles";

// Monta o Card de Jogos
const GamesMount = ({ item }) => {
  const navigate = useNavigate();
  return (
    <CardLi>
      <CardLink onClick={() => { navigate(`/games/gamedetails/${item.id}`) }} target="_blank" rel="noopener noreferrer">
        <article>
          <CardImg src={item.thumbnail} alt="Imagem" />
          <CardTitle>{item.title}</CardTitle>
          <CardSDescription>{item.short_description}</CardSDescription>
        </article>
      </CardLink>
    </CardLi>
  );
};

// Sessão do Card de Jogos que possuí um Loading caso o acesso a consulta da API ainda não tenha sido feita.
export const CardGames = () => {
  const { filteredGamesList, loaded } = useGames();
  console.log('loaded', loaded);
  console.log('Toda listagem:', filteredGamesList);
  console.log('Tipo da Listagem:', typeof (filteredGamesList));
  return (
    <section>
      {loaded ? <CardUl>{Object.keys(filteredGamesList).length === 0 ? 'Nenhum Jogo Encontrado' : filteredGamesList.map((item) => <GamesMount key={item.id} item={item} />)}</CardUl> : <LoadingScreen />}
    </section>
  );
};