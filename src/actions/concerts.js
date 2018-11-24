export const fetchConcerts = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_CONCERTS' });
    return fetch('http://localhost:3000/concerts')
      .then(response => response.json())
      .then(concerts => dispatch({ type: 'ADD_CONCERTS', payload: concerts }));
  };
};
