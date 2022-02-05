import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { PostForm } from "../../Formik/PostForm";

// Retorna o número do ID da Task
function _returnNewPostNumber(number) {
  if (number) return parseInt(number) + 1;
  return 1;
};

// Verifica se já existe uma key no Local Storage
const _existsLS = (key) => localStorage.getItem(key);

// Verifica se já existe determinado número de jogo no Local Storage
const _existsLSGame = (localPosts, gameid) => {
  let localStorage = JSON.parse(localPosts);
  return localStorage[gameid]
};

// Seta um item em Local Storage
function _setItemLS(key, item) {
  localStorage.setItem(key, item);
};

const PostButton = ({ LSKey, elp, gameid, reload, setReload }) => {
  const handleAddPost = ({ username, text }, { resetForm }) => {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Add Post Button Click');
    console.log('Qual o Game ID? ', gameid);
    console.log('Existe o Local Storage Posts? ', elp);
    console.log('username', username)
    console.log('text', text)
    if (elp) {
      if (_existsLSGame(elp, gameid)) {
        console.log(`O GameID ${gameid} existe, adicionando um novo Comentário`);
        let newLocalPost = JSON.parse(elp);
        let newPostID = _returnNewPostNumber(Object.keys(newLocalPost[gameid]).length);
        console.log('newPostID', newPostID);
        newLocalPost[gameid] = { ...newLocalPost[gameid], [`post-${newPostID}`]: { username: username, text: text, likes: 0 } };
        console.log('Novo post adicionado no game', elp);
        _setItemLS(LSKey, JSON.stringify(newLocalPost));
      } else {
        console.log(`O GameID ${gameid} NÃO existe, criando o GameID no LocalStorage e adicionando o novo Comentário`);
        let newGameLocalPost = JSON.parse(elp);
        const newPostID = 'post-1';
        newGameLocalPost = { ...newGameLocalPost, [`${gameid}`]: { [`${newPostID}`]: { username: username, text: text, likes: 0 } } };
        _setItemLS(LSKey, JSON.stringify(newGameLocalPost));
      }
    } else {
      console.log('Criando o Local Storage Posts e Adicionando o Comentário');
      const newPostID = 'post-1';
      let objectTask = { [`${gameid}`]: { [`${newPostID}`]: { username: username, text: text, likes: 0 } } };
      _setItemLS(LSKey, JSON.stringify(objectTask));
    };
    resetForm();
    setReload(!reload);
  };
  return (
    // <button type='submit' onClick={handleAddPost}>
    //   Add Post
    // </button>
    <Formik initialValues={{username: '', text: ''}} onSubmit={handleAddPost}>
      {({ isSubmitting, isValid }) => (
        <Form>
          <Field name="username" placeholder="Nome" />
          <ErrorMessage name="username" style={{ color: 'red' }} component="span" />
          <Field name="text" placeholder="Texto" />
          <ErrorMessage name="text" style={{ color: 'red' }} component="span" />
          <button type='submit' disabled={isSubmitting || !isValid}> Add Post</button>
        </Form>
      )}
    </Formik>
  );
};

const LikesButtons = ({ type, LSKey, reload, setReload, elp, post, item, gameid }) => {
  const handleLikePost = () => {
    let newLikeGamePost = JSON.parse(elp);
    const newSum = parseInt(post.likes) + (type === 'Like' ? 1 : -1)
    newLikeGamePost[gameid] = { ...newLikeGamePost[gameid], [`${item}`]: { username: post.username, text: post.text, likes: newSum } };
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
      <p>Nome: {post.username}</p>
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
  // useEffect(() => {
  //   console.log();
  // }, [reload]);
  return (
    <p>
      {/* <PostForm /> */}
      <p />
      <PostButton elp={existsLocalPosts} LSKey={LSKey} gameid={gameid} reload={reload} setReload={setReload} />
      <section>
        <h1>Comentários:</h1>
        {existsLocalGamePosts ? Object.keys(existsLocalGamePosts).map((item, index) => <CreatePosts LSKey={LSKey} reload={reload} setReload={setReload} key={index} elp={existsLocalPosts} post={existsLocalGamePosts[item]} item={item} gameid={gameid} />) : <h3>'Não Existe Posts'</h3>}
      </section>
    </p>
  );
};