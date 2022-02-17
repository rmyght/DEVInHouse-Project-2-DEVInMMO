// Filtra os jogos por página conforme a quantidade de itens e o número escolhido no NUM_ITENS
export const filterListByPage = (list, page) => {
  const NUM_ITENS = 12;
  return list.slice(page * NUM_ITENS - NUM_ITENS, page * NUM_ITENS);
};

// Filtra os jogos por termo (o que foi digitado) com base no Título do jogo
export const filterListByTerm = (list, term) => {
  return list.filter((game) => {
    return new RegExp(term, 'ig').test(game.title);
  });
};