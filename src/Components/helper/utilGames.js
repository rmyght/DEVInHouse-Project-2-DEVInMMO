export const filterListByPage = (list, page) => {
  const NUM_ITENS = 20;
  return list.slice(page * NUM_ITENS - NUM_ITENS, page * NUM_ITENS)
};

export const filterListByTerm = (list, term) => {
  return list.filter((game) => {
    return new RegExp(term, 'ig').test(game.name);
  });
};