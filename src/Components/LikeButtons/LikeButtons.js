import { setItemLS } from "../helper/utilLocalStorage";
import dark_like from "./icons/thumb_up_black.svg";
import dark_dislike from "./icons/thumb_down_black.svg";
import { LikeButton } from "./LikeButtons.styles";

// Componente dos Botões de Like na Sessão de Comentários

export const LikeButtons = ({ type, LSKey, reload, setReload, elp, post, item, gameid }) => {
  const handleLikePost = () => {
    let newLikeGamePost = JSON.parse(elp);
    const newSum = parseInt(post.likes) + (type === 'Like' ? 1 : -1);
    newLikeGamePost[gameid] = { ...newLikeGamePost[gameid], [`${item}`]: { username: post.username, text: post.text, email: post.email, likes: newSum } };
    setItemLS(LSKey, JSON.stringify(newLikeGamePost));
    setReload(!reload);
  };
  const ico = type === 'Like' ? dark_like : dark_dislike;
  return (
    <>
      <LikeButton type="image" onClick={handleLikePost} src={ico} alt="Like Icons" />
    </>
  );
};