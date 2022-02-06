import { useNavigate } from "react-router-dom";
import { useGames } from "../../contexts/games";
import { LoadingScreen } from "../pages/LoadingScreen";
import CardLoader from "../pages/Loader/Loader";
import styles from './Card.module.css';

const GamesMount = ({ item }) => {
  const navigate = useNavigate();
  return (
    <li className={styles.li}>
      <div className={styles.a} onClick={() => { navigate(`/games/gamedetails/${item.id}`) }} target="_blank" rel="noopener noreferrer">
        <article className={styles.content}>
          <img src={item.thumbnail} alt="Imagem" className={styles.img} />
          <div className={styles.title}>{item.title}</div>
          <div className={styles.sdesciption}>{item.short_description}</div>
          {/* <div><a href={item.article_url} target="_blank" rel="noopener noreferrer"> Mais detalhes </a></div> */}
        </article>
      </div>
    </li>
  )
}

export const CardGames = () => {
  const { filteredGamesList, loaded } = useGames();
  console.log('loaded', loaded);
  console.log('Toda listagem:', filteredGamesList);
  console.log('Tipo da Listagem:', typeof(filteredGamesList));
  return (
    <section>
      {loaded ? <ul className={styles.ul}>{Object.keys(filteredGamesList).length === 0 ? 'Nenhum Jogo Encontrado' : filteredGamesList.map((item) => <GamesMount key={item.id} item={item} />)}</ul> : <LoadingScreen />}
      {/* <ul className={styles.ul}>{Object.keys(filteredGamesList).length === 0 ? 'Nenhum Jogo Encontrado' : filteredGamesList.map((item) => <GamesMount key={item.id} item={item} />)}</ul> */}
    </section>
  );
};