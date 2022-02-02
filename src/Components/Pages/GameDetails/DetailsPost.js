import { useCallback } from "react";

// Retorna o número do ID da Task
function _returnTaskNumber(number) {
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

const object = {
  1: {
    'post-1': {
      user: 'Ramon',
      text: 'Comentário aqui',
      likes: 0
    }
  }
}

function _addLS(localPosts, gameid, newPostID, newPost) {
  if (localPosts) {
    console.log("Local Posts Existe e vai ser adicionado um novo valor");
    let newLocalPost = JSON.parse(localPosts);
    newLocalPost[gameid] = { text: `${newPost}` };
    _setItemLS("posts", JSON.stringify(newLocalPost));
  } else {
    console.log("Local Posts NÃO Existe e vai ser CRIADO com o novo valor");
    let objectTask = { [`${gameid}`]: { [`${newPostID}`]: { user: 'Ramon', text: `${newPost}`, likes: 0 } } };
    _setItemLS("posts", JSON.stringify(objectTask));
  };
};

// Criar validação de local post existe
// criar validação se existe o jogo e depois o comentário, fazer por partes

const handleAddPost = (props) => {
  console.log('Add Post Button Click');
  const elp = props.currentTarget.getAttribute("elp");
  const gameid = props.currentTarget.getAttribute("gameid");
  console.log('Qual o Game ID? ', gameid);
  console.log('Existe o Local Storage Posts? ', elp);
  if (elp) {
    if (_existsLSGame(elp, gameid)) {
      console.log(`O GameID ${gameid} existe, adicionando um novo Comentário`);
      let newPostID = 'post-2';
      let user = 'Ramon';
      let newPost = 'Comentário 2';
      elp[gameid] = { [`${newPostID}`]: { user: user, text: newPost, likes: 0 } }
      _setItemLS("posts", JSON.stringify(elp));
    } else {
      console.log(`O GameID ${gameid} NÃO existe, criando o GameID no LocalStorage e adicionando o novo Comentário`);
      // let newPostID = _returnTaskNumber(Object.keys(objectLocalPosts)[Object.keys(objectLocalPosts).length - 1]);
      console.log('GameID: ', gameid);
      // console.log('Lenght', Object.keys(objectLocalPosts[gameid]).length);
      // _addLS(_existsLS("posts"), newPostID, "Novo Comentário");
      // let newPostID = _returnTaskNumber(Object.keys(elp[gameid]).length - 1);
      // console.log('newPostID: ', newPostID);
      // _addLS(elp, gameid, `post-${+newPostID}`, "Novo Comentário")
    }
  } else {
    console.log('Criando o Local Storage Posts e Adicionando o Comentário');
    let newPostID = 'post-1';
    let user = 'Ramon';
    let newPost = 'Comentário';
    let objectTask = { [`${gameid}`]: { [`${newPostID}`]: { user: user, text: newPost, likes: 0 } } };
    _setItemLS("posts", JSON.stringify(objectTask));
  };
}

export const DetailsPosts = ({ gameid }) => {
  console.log("Criando Posts");
  const existsLocalPosts = _existsLS("posts");
  return (
    <>
      <p>Posts</p>
      <p>Aqui vai comentários do Post</p>
      <p>{existsLocalPosts ? 'Existe Posts' : 'Não Existe Posts'}</p>
      <button onClick={handleAddPost} elp={existsLocalPosts} gameid={gameid}> Add New Post </button>
    </>
  );
};