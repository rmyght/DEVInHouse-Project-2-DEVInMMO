import { useGames } from "../../contexts/games";

const NewsMount = ({ item }) => {
  return (
    <li>
      <h1>{item.title}</h1>
      <img src={item.main_image} alt="Imagem" />
      <h3>{item.short_description}</h3>
      <h3><a href={item.article_url}> Link Jogo </a></h3>
    </li>
  )
}

export const CardNews = () => {
  const { gamesList } = useGames();
  console.log('Toda listagem:', gamesList);
  // console.log('Tipo da listagem:', typeof (gamesList));
  return (
    <>
      <ul>{gamesList.lenght === 0 ? 'Nenhuma notícia encontrada' : gamesList.map((item) => <NewsMount key={item.id} item={item} />)}</ul>
    </>
  );
};