// Onde a mágica da consulta da API acontece.
// A partir desse local é onde se faz a consulta da API com base no Type enviado pelos componentes (News, Games e GameDetails)

export const fetchGames = async (type) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_URL}/${type}`, {
      method: 'GET',
      // params: {id: `'${test}'`},
      headers: {
        'x-rapidapi-host': process.env.REACT_APP_HOST,
        'x-rapidapi-key': process.env.REACT_APP_KEY,
      },
    });
    console.log(`${process.env.REACT_APP_URL}/${type}`);
    const gamesList = await response.json();
    return gamesList;
  } catch (error) {
    console.error(error.message);
  }
};