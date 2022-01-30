import { useGames } from "../../contexts/games";
import { LoadingScreen } from "../helper";
import CardLoader from "../pages/Loader/Loader";
import styles from './Card.module.css';

const NewsMount = ({ item }) => {
  return (
    <li className={styles.li}>
      <a className={styles.a} href={item.article_url} target="_blank" rel="noopener noreferrer">
        <article className={styles.content}>
          <img src={item.main_image} alt="Imagem" className={styles.img} />
          <div className={styles.title}>{item.title}</div>
          <div className={styles.sdesciption}>{item.short_description}</div>
          {/* <div><a href={item.article_url} target="_blank" rel="noopener noreferrer"> Mais detalhes </a></div> */}
        </article>
      </a>
    </li>
  )
}

export const CardNews = () => {
  const { gamesList, loaded } = useGames();
  console.log('Toda listagem:', gamesList);
  // console.log('Tipo da listagem:', typeof (gamesList));
  return (
    <section>
      {loaded ? <ul className={styles.ul}>{Object.keys(gamesList).length === 0 ? 'Nenhuma Notícia Encontrada' : gamesList.map((item) => <NewsMount key={item.id} item={item} />)}</ul> : <LoadingScreen /> }
      {/* {loaded ? <ul className={styles.ul}>{Object.keys(gamesList).length === 0 ? 'Nenhuma Notícia Encontrada' : gamesList.map((item) => <NewsMount key={item.id} item={item} />)}</ul> : <CardLoader /> } */}
    </section>
  );
};