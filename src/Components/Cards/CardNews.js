import { useGames } from "../../contexts/games";
import { LoadingScreen } from "../pages/LoadingScreen";
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
  const { filteredGamesList, loaded } = useGames();
  console.log('Toda listagem:', filteredGamesList);
  // console.log('Tipo da listagem:', typeof (filteredGamesList));
  return (
    <section>
      {loaded ? <ul className={styles.ul}>{Object.keys(filteredGamesList).length === 0 ? 'Nenhuma Notícia Encontrada' : filteredGamesList.map((item) => <NewsMount key={item.id} item={item} />)}</ul> : <LoadingScreen /> }
      {/* {loaded ? <ul className={styles.ul}>{Object.keys(filteredGamesList).length === 0 ? 'Nenhuma Notícia Encontrada' : filteredGamesList.map((item) => <NewsMount key={item.id} item={item} />)}</ul> : <CardLoader /> } */}
    </section>
  );
};