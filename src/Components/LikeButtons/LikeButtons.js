import { setItemLS } from "../helper/utilLocalStorage";

export const LikeButtons = ({ type, LSKey, reload, setReload, elp, post, item, gameid }) => {
  const handleLikePost = () => {
    let newLikeGamePost = JSON.parse(elp);
    const newSum = parseInt(post.likes) + (type === 'Like' ? 1 : -1)
    newLikeGamePost[gameid] = { ...newLikeGamePost[gameid], [`${item}`]: { username: post.username, text: post.text, email: post.email, likes: newSum } };
    setItemLS(LSKey, JSON.stringify(newLikeGamePost));
    setReload(!reload);
  }
  return (
    <>
      <button onClick={handleLikePost}>{type}</button>
    </>
  );
};