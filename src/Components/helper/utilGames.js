export const filterListByPage = (list, page, maxItemPage) => {
  const NUM_ITENS = 12;
  console.log(NUM_ITENS)
  return list.slice(page * NUM_ITENS - NUM_ITENS, page * NUM_ITENS)
};

export const filterListByTerm = (list, term) => {
  return list.filter((game) => {
    return new RegExp(term, 'ig').test(game.title);
  });
};