import { useGames } from "../../contexts/games";
import styles from './Card.module.css';

const NewsMount = ({ item }) => {
  return (
    <li className={styles.li}>
      <div className={styles.title}>{item.title}</div>
      <img src={item.main_image} alt="Imagem" className={styles.img} />
      <div className={styles.sdesciption}>{item.short_description}</div>
      <div><a href={item.article_url} target="_blank" rel="noopener noreferrer"> Mais detalhes </a></div>
    </li>
  )
}

export const CardNews = () => {
  const { gamesList } = useGames();
  console.log('Toda listagem:', gamesList);
  // console.log('Tipo da listagem:', typeof (gamesList));
  return (
    <>
      <ul className={styles.ul}>{gamesList.lenght === 0 ? 'Nenhuma notícia encontrada' : gamesList.map((item) => <NewsMount key={item.id} item={item} />)}</ul>
    </>
  );
};