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