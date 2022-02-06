import { useState } from "react";
import { PostFormik } from "../../PostFormik/PostForm";
import { existsLS, existsLSGame, setItemLS } from "../../helper/utilLocalStorage";
import { useLocalStorage } from "../../../contexts/localStorage";
import { LikeButtons } from "../../LikeButtons/LikeButtons";

const GameComments = ({ LSKey, reload, setReload, elp, post, item, gameid }) => {
  console.log('item: ', item)
  console.log('POST:', post);
  return (
    <div>
      <p>Nome: {post.username}</p>
      <p>Comentário:: {post.text}</p>
      <p>{post.likes}</p>
      <LikeButtons type='Like' LSKey={LSKey} reload={reload} setReload={setReload} elp={elp} post={post} item={item} gameid={gameid} />
      <LikeButtons type='Dislike' LSKey={LSKey} reload={reload} setReload={setReload} elp={elp} post={post} item={item} gameid={gameid} />
    </div>
  )
}

export const DetailsPosts = ({ gameid }) => {
  console.log("Criando Posts");
  const { LSKey } = useLocalStorage();
  const existsLocalPosts = existsLS(LSKey);
  let existsLocalGamePosts = false;
  if (existsLocalPosts) {
    existsLocalGamePosts = existsLSGame(existsLocalPosts, gameid);
    console.log(existsLocalGamePosts)
  };
  console.log('existsLocalGamePosts: ', existsLocalGamePosts)
  const [reload, setReload] = useState(false);
  // useEffect(() => {
  //   console.log();
  // }, [reload]);
  return (
    <>
      {/* <PostForm /> */}
      <p />
      <PostFormik elp={existsLocalPosts} LSKey={LSKey} gameid={gameid} reload={reload} setReload={setReload} />
      <section>
        <h1>Comments:</h1>
        {existsLocalGamePosts ? Object.keys(existsLocalGamePosts).map((item, index) => <GameComments LSKey={LSKey} reload={reload} setReload={setReload} key={index} elp={existsLocalPosts} post={existsLocalGamePosts[item]} item={item} gameid={gameid} />) : <h3>'Não Existe Posts'</h3>}
      </section>
    </>
  );
};