// Retorna o número do ID da Task
export const returnNewPostNumber = (number) => {
  if (number) return parseInt(number) + 1;
  return 1;
};

// Verifica se já existe uma key no Local Storage
export const existsLS = (key) => localStorage.getItem(key);

// Verifica se já existe determinado número de jogo no Local Storage
export const existsLSGame = (localPosts, gameid) => {
  let localStorage = JSON.parse(localPosts);
  return localStorage[gameid];
};

// Seta um item em Local Storage
export const setItemLS = (key, item) => {
  localStorage.setItem(key, item);
};