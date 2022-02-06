import { useGames } from "../../contexts/games";
import { LoadingScreen } from "../pages/LoadingScreen";
import CardLoader from "../pages/Loader/Loader";
import styles from './Card.module.css';
import { CardImg, CardLi, CardLink, CardSDescription, CardTitle, CardUl } from "./Card.styles";

const NewsMount = ({ item }) => {
  return (
    <CardLi>
      <CardLink href={item.article_url} target="_blank" rel="noopener noreferrer">
        <article>
          <CardImg src={item.main_image} alt="Imagem" className={styles.img} />
          <CardTitle className={styles.title}>{item.title}</CardTitle>
          <CardSDescription className={styles.sdesciption}>{item.short_description}</CardSDescription>
          {/* <div><a href={item.article_url} target="_blank" rel="noopener noreferrer"> Mais detalhes </a></div> */}
        </article>
      </CardLink>
    </CardLi>
  )
}

export const CardNews = () => {
  const { filteredGamesList, loaded } = useGames();
  console.log('Toda listagem:', filteredGamesList);
  // console.log('Tipo da listagem:', typeof (filteredGamesList));
  return (
    <section>
      {loaded ? <CardUl>{Object.keys(filteredGamesList).length === 0 ? 'Nenhuma Notícia Encontrada' : filteredGamesList.map((item) => <NewsMount key={item.id} item={item} />)}</CardUl> : <LoadingScreen /> }
      {/* {loaded ? <ul className={styles.ul}>{Object.keys(filteredGamesList).length === 0 ? 'Nenhuma Notícia Encontrada' : filteredGamesList.map((item) => <NewsMount key={item.id} item={item} />)}</ul> : <CardLoader /> } */}
    </section>
  );
};