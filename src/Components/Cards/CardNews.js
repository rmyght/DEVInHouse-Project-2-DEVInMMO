import { useGames } from "../../contexts/games";
import { LoadingScreen } from "../pages/LoadingScreen";
import { CardImg, CardLi, CardLink, CardSDescription, CardTitle, CardUl } from "./Card.styles";

// Monta o Card de News
const NewsMount = ({ item }) => {
  return (
    <CardLi>
      <CardLink href={item.article_url} target="_blank" rel="noopener noreferrer">
        <article>
          <CardImg src={item.main_image} alt="Imagem" />
          <CardTitle>{item.title}</CardTitle>
          <CardSDescription>{item.short_description}</CardSDescription>
        </article>
      </CardLink>
    </CardLi>
  );
};

// Sessão do Card de News que possuí um Loading caso o acesso a consulta da API ainda não tenha sido feita.
export const CardNews = () => {
  const { filteredGamesList, loaded } = useGames();
  console.log('Toda listagem:', filteredGamesList);
  return (
    <section>
      {loaded ? <CardUl>{Object.keys(filteredGamesList).length === 0 ? 'Nenhuma Notícia Encontrada' : filteredGamesList.map((item) => <NewsMount key={item.id} item={item} />)}</CardUl> : <LoadingScreen />}
    </section>
  );
};