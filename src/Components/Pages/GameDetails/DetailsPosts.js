import { useEffect, useState } from "react";

// Retorna o número do ID da Task
function _returnNewPostNumber(number) {
  if (number) return parseInt(number) + 1;
  return 1;
};

// Verifica se já existe uma key no Local Storage
const _existsLS = (key) => localStorage.getItem(key);

const _existsLSGame = (localPosts, gameid) => {
  let localStorage = JSON.parse(localPosts);
  return localStorage[gameid]
};

// Seta um item em Local Storage
function _setItemLS(key, item) {
  localStorage.setItem(key, item);
};

// function _addLS(localPosts, gameid, newPostID, newPost) {
//   if (localPosts) {
//     console.log("Local Posts Existe e vai ser adicionado um novo valor");
//     let newLocalPost = JSON.parse(localPosts);
//     newLocalPost[gameid] = { text: `${newPost}` };
//     _setItemLS("posts", JSON.stringify(newLocalPost));
//   } else {
//     console.log("Local Posts NÃO Existe e vai ser CRIADO com o novo valor");
//     let objectTask = { [`${gameid}`]: { [`${newPostID}`]: { user: 'Ramon', text: `${newPost}`, likes: 0 } } };
//     _setItemLS("posts", JSON.stringify(objectTask));
//   };
// };

// Criar validação de local post existe
// criar validação se existe o jogo e depois o comentário, fazer por partes

// const handleAddPost = (props) => {
//   console.log('Add Post Button Click');
//   const elp = props.currentTarget.getAttribute("elp");
//   const gameid = parseInt(props.currentTarget.getAttribute("gameid"));
//   console.log('Qual o Game ID? ', gameid);
//   console.log('Existe o Local Storage Posts? ', elp);
//   if (elp) {
//     if (_existsLSGame(elp, gameid)) {
//       console.log(`O GameID ${gameid} existe, adicionando um novo Comentário`);
//       let newLocalPost = JSON.parse(elp);
//       let newPostID = _returnNewPostNumber(Object.keys(newLocalPost[gameid]).length);
//       console.log('newPostID', newPostID);
//       console.log('post anterior: ', `post-${newPostID - 1}`);
//       console.log(newLocalPost[gameid][`post-${newPostID - 1}`]);
//       let user = 'Ramon';
//       let newPost = 'Comentário 2';
//       newLocalPost[gameid] = { ...newLocalPost[gameid], [`post-${newPostID}`]: { user: user, text: newPost, likes: 0 } };
//       console.log('Novo post adicionado no game', elp);
//       _setItemLS("posts", JSON.stringify(newLocalPost));
//     } else {
//       console.log(`O GameID ${gameid} NÃO existe, criando o GameID no LocalStorage e adicionando o novo Comentário`);
//       // let newPostID = _returnTaskNumber(Object.keys(objectLocalPosts)[Object.keys(objectLocalPosts).length - 1]);
//       console.log('GameID: ', gameid);
//       // console.log('Lenght', Object.keys(objectLocalPosts[gameid]).length);
//       // _addLS(_existsLS("posts"), newPostID, "Novo Comentário");
//       // let newPostID = _returnTaskNumber(Object.keys(elp[gameid]).length - 1);
//       // console.log('newPostID: ', newPostID);
//       // _addLS(elp, gameid, `post-${+newPostID}`, "Novo Comentário")
//     }
//   } else {
//     console.log('Criando o Local Storage Posts e Adicionando o Comentário');
//     let newPostID = 'post-1';
//     let user = 'Ramon';
//     let newPost = 'Comentário';
//     let objectTask = { [`${gameid}`]: { [`${newPostID}`]: { user: user, text: newPost, likes: 0 } } };
//     _setItemLS("posts", JSON.stringify(objectTask));
//   };
// };

const PostButton = ({ LSKey, elp, gameid, reload, setReload }) => {
  const handleAddPost = () => {
    console.log('Add Post Button Click');
    console.log('Qual o Game ID? ', gameid);
    console.log('Existe o Local Storage Posts? ', elp);
    if (elp) {
      if (_existsLSGame(elp, gameid)) {
        console.log(`O GameID ${gameid} existe, adicionando um novo Comentário`);
        let newLocalPost = JSON.parse(elp);
        let newPostID = _returnNewPostNumber(Object.keys(newLocalPost[gameid]).length);
        console.log('newPostID', newPostID);
        let user = 'Ramon';
        let newPost = 'Comentário em um jogo que já existe';
        newLocalPost[gameid] = { ...newLocalPost[gameid], [`post-${newPostID}`]: { user: user, text: newPost, likes: 0 } };
        console.log('Novo post adicionado no game', elp);
        _setItemLS(LSKey, JSON.stringify(newLocalPost));
      } else {
        console.log(`O GameID ${gameid} NÃO existe, criando o GameID no LocalStorage e adicionando o novo Comentário`);
        let newGameLocalPost = JSON.parse(elp);
        let newPostID = 'post-1';
        let user = 'Ramon';
        let newPost = 'Comentário Novo jogo';
        newGameLocalPost = { ...newGameLocalPost, [`${gameid}`]: { [`${newPostID}`]: { user: user, text: newPost, likes: 0 } } };
        _setItemLS(LSKey, JSON.stringify(newGameLocalPost));
      }
    } else {
      console.log('Criando o Local Storage Posts e Adicionando o Comentário');
      let newPostID = 'post-1';
      let user = 'Ramon';
      let newPost = 'Comentário';
      let objectTask = { [`${gameid}`]: { [`${newPostID}`]: { user: user, text: newPost, likes: 0 } } };
      _setItemLS(LSKey, JSON.stringify(objectTask));
    };
    setReload(!reload);
  };
  return (
    <button onClick={handleAddPost}>
      Add Post
    </button>
  );
};

const LikesButtons = ({ type, LSKey, reload, setReload, elp, post, item, gameid }) => {
  const handleLikePost = () => {
    let newLikeGamePost = JSON.parse(elp);
    const newSum = parseInt(post.likes) + (type === 'Like' ? 1 : -1)
    newLikeGamePost[gameid] = { ...newLikeGamePost[gameid], [`${item}`]: { user: post.user, text: post.text, likes: newSum } };
    _setItemLS(LSKey, JSON.stringify(newLikeGamePost));
    setReload(!reload);
  }
  return (
    <>
      <button onClick={handleLikePost}>{type}</button>
    </>
  );
};

const CreatePosts = ({ LSKey, reload, setReload, elp, post, item, gameid }) => {
  // const lsGame = _existsLSGame(elp, gameid)
  console.log('item: ', item)
  console.log('POST:', post);
  return (
    <div>
      <p>Usuário: {post.user}</p>
      <p>Comentário:: {post.text}</p>
      <p>{post.likes}</p>
      <LikesButtons type='Like' LSKey={LSKey} reload={reload} setReload={setReload} elp={elp} post={post} item={item} gameid={gameid} />
      <LikesButtons type='Dislike' LSKey={LSKey} reload={reload} setReload={setReload} elp={elp} post={post} item={item} gameid={gameid} />
    </div>
  )
}

export const DetailsPosts = ({ LSKey, gameid }) => {
  console.log("Criando Posts");
  const existsLocalPosts = _existsLS(LSKey);
  let existsLocalGamePosts = false;
  if (existsLocalPosts) {
    existsLocalGamePosts = _existsLSGame(existsLocalPosts, gameid);
    console.log(existsLocalGamePosts)
  };
  console.log('existsLocalGamePosts: ', existsLocalGamePosts)
  const [reload, setReload] = useState(false);
  useEffect(() => {
    console.log();
  }, [reload]);
  // gamesList.map((item) => <GamesMount key={item.id} item={item} />)
  // Object.keys(existsLocalGamePosts).map((item) => console.log('Mapping: ',existsLocalGamePosts[item]))
  // Object.keys(existsLocalGamePosts).map((item) => <CreatePosts post={existsLocalGamePosts[item]} />)
  return (
    <>
      <section>
        <h1>Comentários:</h1>
        {existsLocalGamePosts ? Object.keys(existsLocalGamePosts).map((item, index) => <CreatePosts LSKey={LSKey} reload={reload} setReload={setReload} key={index} elp={existsLocalPosts} post={existsLocalGamePosts[item]} item={item} gameid={gameid} />) : 'Não Existe Posts'}
      </section>
      <PostButton elp={existsLocalPosts} LSKey={LSKey} gameid={gameid} reload={reload} setReload={setReload} />
    </>
  );
};