import { useState } from "react";
import { PostFormik } from "../../PostFormik/PostForm";
import { existsLS, existsLSGame } from "../../helper/utilLocalStorage";
import { useLocalStorage } from "../../../contexts/localStorage";
import { LikeButtons } from "../../LikeButtons/LikeButtons";
import { GameCommentLine, GameCommentsName, GameCommentsHeader, GameCommentsSection, GameCommentsText, GameCommentsNameTitle, GameCommentsTextTitle, GameCommentsLike } from "./DetailsPosts.styles";

const GameComments = ({ LSKey, reload, setReload, elp, post, item, gameid }) => {
  console.log('item: ', item)
  console.log('POST:', post);
  return (
    <div>
      <GameCommentsNameTitle>Name:</GameCommentsNameTitle>
      <GameCommentsName>{post.username}</GameCommentsName>
      <GameCommentsTextTitle>Comment:</GameCommentsTextTitle>
      <GameCommentsText>{post.text}</GameCommentsText>
      <LikeButtons type='Like' LSKey={LSKey} reload={reload} setReload={setReload} elp={elp} post={post} item={item} gameid={gameid} />
      <GameCommentsLike>{post.likes}</GameCommentsLike>
      <LikeButtons type='Dislike' LSKey={LSKey} reload={reload} setReload={setReload} elp={elp} post={post} item={item} gameid={gameid} />
      <GameCommentLine />
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
      <p />
      <PostFormik elp={existsLocalPosts} LSKey={LSKey} gameid={gameid} reload={reload} setReload={setReload} />
      <GameCommentsSection>
        <GameCommentsHeader>Comments:</GameCommentsHeader>
        <GameCommentLine />
        {existsLocalGamePosts ? Object.keys(existsLocalGamePosts).map((item, index) => <GameComments LSKey={LSKey} reload={reload} setReload={setReload} key={index} elp={existsLocalPosts} post={existsLocalGamePosts[item]} item={item} gameid={gameid} />) : <h3>Nobody make a Comment... :(</h3>}
      </GameCommentsSection>
    </>
  );
};