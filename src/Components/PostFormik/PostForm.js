import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { existsLSGame, returnNewPostNumber, setItemLS } from "../helper/utilLocalStorage";
import { FormDiv, FormDivField } from "./PostForm.styled";

// Componente que faz a lógica de salvar os novos Posts no LocalStorage
// Este comentente também utilize o Formik para enviar o formulário e o Yup para validar as informações preenchidas

export const PostFormik = ({ LSKey, elp, gameid, reload, setReload }) => {
  const handleAddPost = ({ username, text, email }, { resetForm }) => {
    if (elp) {
      if (existsLSGame(elp, gameid)) {
        let newLocalPost = JSON.parse(elp);
        let newPostID = returnNewPostNumber(Object.keys(newLocalPost[gameid]).length);
        newLocalPost[gameid] = { ...newLocalPost[gameid], [`post-${newPostID}`]: { username: username, text: text, email: email, likes: 0 } };
        setItemLS(LSKey, JSON.stringify(newLocalPost));
      } else {
        let newGameLocalPost = JSON.parse(elp);
        const newPostID = 'post-1';
        newGameLocalPost = { ...newGameLocalPost, [`${gameid}`]: { [`${newPostID}`]: { username: username, text: text, email: email, likes: 0 } } };
        setItemLS(LSKey, JSON.stringify(newGameLocalPost));
      };
    } else {
      const newPostID = 'post-1';
      let objectTask = { [`${gameid}`]: { [`${newPostID}`]: { username: username, text: text, email: email, likes: 0 } } };
      setItemLS(LSKey, JSON.stringify(objectTask));
    };
    resetForm();
    setReload(!reload);
  };
  const schema = Yup.object().shape({
    username: Yup.string().required('Required Field'),
    email: Yup.string().required('Required Field').email('Invalid E-Mail Format'),
    text: Yup.string().required('Required Field').max(80, 'Max 80 characteres'),
  });
  return (
    <Formik initialValues={{ username: '', email: '', text: '' }} onSubmit={handleAddPost} validationSchema={schema} validateOnMount>
      {({ isSubmitting, isValid }) => (
        <Form style={{ display: 'block' }}>
          <FormDiv>
            <FormDivField>
              <Field name="username" placeholder="Name" />
              <ErrorMessage name="username" style={{ color: 'red' }} component="span" />
            </FormDivField>
            <FormDivField>
              <Field name="email" placeholder="E-Mail" />
              <ErrorMessage name="email" style={{ color: 'red' }} component="span" />
            </FormDivField>
            <FormDivField>
            <Field name="text" placeholder="Comment" component="textarea" rows="3" cols="80" />
              <ErrorMessage name="text" style={{ color: 'red' }} component="span" />
            </FormDivField>
            <div><button type='submit' disabled={isSubmitting || !isValid}> Add Post</button></div>
          </FormDiv>
        </Form>
      )}
    </Formik>
  );
};